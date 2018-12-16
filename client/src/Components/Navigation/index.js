import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../HomePage';
import Login from '../login';
import Signup from '../signup';
import InspectorForm from '../policeForm'
import AddPerson from '../AddPerson'
import PersonDetail from '../PersonDetail/PersonDetail'
import FoundPersonDescription from '../FoundPersonDescription/PersonDetail';

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/PolicePortal" component={InspectorForm} />
          <Route exact path="/AddPerson" component={AddPerson} />
          <Route exact path="/description" component={PersonDetail} />
          <Route exact path="/Founddescription" component={FoundPersonDescription} />


     
        </div>
      </Router>
    );
  }
}
