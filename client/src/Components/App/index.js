import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Login from './login';
import Signup from './singup';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
            <Signup />
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};






export default withStyles(styles)(App);
