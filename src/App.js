import React, { useEffect, useState } from 'react';
import { Hub } from "aws-amplify";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { Auth } from 'aws-amplify';
import logo from './logo.png';
import './css/App.css';
import Home from './components/Home';
import Profile from './components/Profile';

//import { createCategory } from "./graphql/mutations";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      console.log(event)
      switch (event) {
        case 'signIn':
        // case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'oAuthSignOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          //console.log('Unknown event : ', event);
          break;

      }
    });
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  // async function createNewCategory() {
  //   const todo = {
  //     name: "Entertainment",
  //     description: "Events related to Entertainment",
  //   };
  //   return await API.graphql(graphqlOperation(createCategory, { input: todo }));
  // }

  return (
    <Router>
    <div className="App">
      <header className="App-header col-md-12">
        <div className="px-2 pt-2 pb-2">
          <img src={logo} className="App-logo" alt="logo" width='200' height='50' />
          <div className="px-2 pt-2 pb-2">
          {/* <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p> */}
            {user ? (
            
            <button className="rounded-btn px-2 pt-2 pb-2" onClick={() => Auth.signOut()}>Sign Out</button>
            ) : (
            <button className="rounded-btn" onClick={() => Auth.federatedSignIn()}>Sign In</button>
            )}
            </div>
        </div>        

      </header>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/profile" component={Profile} />
   </Switch>
    </div>
    </Router>
  );
}

export default App;
