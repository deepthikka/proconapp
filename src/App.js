import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Auth } from 'aws-amplify';
import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createCategory } from "./graphql/mutations";
import { listCategories } from "./graphql/queries";

function App() {

  async function checkUser() {
    const user =  await Auth.currentAuthenticatedUser();
    console.log('user : ' + user)
  }

  async function createNewCategory() {
    const todo = {
      name: "Entertainment",
      description: "Events related to Entertainment",
    };
    return await API.graphql(graphqlOperation(createCategory, { input: todo }));
  }

  async function listCategory() {
    API.graphql(graphqlOperation(listCategories)).then((evt) => {
          evt.data.listCategories.items.map((cat, i) => {
            console.log(cat.name + " " +  cat.description);
          });
        });
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width='200' height='200' />
        <button onClick={() => Auth.federatedSignIn()}> Sign In</button>
        <button onClick={createNewCategory}> Create Category</button>
        <button onClick={listCategory}> List Category</button>
        <button onClick={() => Auth.signOut()}> Sign Out</button>
      </header>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
   </Switch>
    </div>
    </Router>
  );
}

export default App;
