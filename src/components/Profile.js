import React from 'react';
import { Auth } from 'aws-amplify';
import {
  Redirect
} from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false}
  }

  // componentDidMount() {

  //   Auth.currentAuthenticatedUser()
  //   .then(() => this.setState({loggedIn: true}))
  //   .catch(() => this.setState({loggedIn: false}));
  // }

  render(){

    // if (!this.state.loggedIn)
    //         return <Redirect to='/'/>;

    return (
      <div className='page-body'>
       <h1 className="text-white">Profile page</h1>
       </div>
    );
  }
}