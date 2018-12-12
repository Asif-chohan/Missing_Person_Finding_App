import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../HomePage';
import Login from '../login';
import Signup from '../signup'

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} /> 
          <Route exact path="/signup" component={Signup} /> 


        </div>
      </Router>
    );
  }
}
