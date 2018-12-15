import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../HomePage'
export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
