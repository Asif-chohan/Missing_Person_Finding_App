import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { styles } from "./style";
import { signin } from "../Redux/actions";
import { connect } from "react-redux";
import NavBar from "../HomePage/Navbar";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    let { email, password } = this.state;
    if (!email.trim().length == 0 && !password.trim().length == 0) {
      const record = {
        email: this.state.email,
        password: this.state.password
      };

      this.props.signin(record);

      // redirect the path
      // this.props.history.push("/");
    } else {
      alert("fill the form correctly");
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar />
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#06cf1e", color: "white" }}
                // color="primary"
                className={classes.submit}
                onClick={this.handleSubmitForm.bind(this)}
              >
                Sign in
              </Button>
            </form>
            <p className={classes.notMember}>Not a member?</p>
            <Link className={classes.signup} to="/signup" style={{textDecoration: "none"}}>
              Sign Up
            </Link>
          </Paper>
        </main>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  null,
  { signin }
)(withStyles(styles)(SignIn));
