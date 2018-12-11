import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';

import {connect} from 'react-redux';
import {siginAction} from '../Redux/actions/index';


const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing.unit
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3
    },
    textField: {
        flexBasis: 200
    },
    container: {
        display: "flex",
        justifyContent: "center",
        maxWidth: "1080px",
        margin: "0 auto"
    },
    paper: {
        padding: "20px 30px 50px 15px",
        margin: "100px auto 30px"
    }
});

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        error: "",
        redirectToReferrer: false,
        showPassword: false
    };

    success = () => {
        toast.success("Login Successfully!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
    
    error = () => {
        toast.error("Invalid User Name and Password!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    _handleSubmit = e => {
        e.preventDefault();
        if (!this.state.username || !this.state.password ) {
            this.setState({
                error: "Please fill all the feilds correctly"
            });
        }  else {
            let data = {
                
                username: this.state.username,
                password: this.state.password

            };

           
           this.props.siginAction(data);
            
           
                
          
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid className={classes.container} container >
                    <Grid item  >
                        <Paper className={classes.paper}>
                            <Avatar >
                                <LockIcon />
                            </Avatar>
                            <Typography variant="headline">Sign in</Typography>

                            {/* <div className={classes.root}> */}
                            <h1>User Login</h1>
                            <form onSubmit={this._handleSubmit}>

                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                    <Input
                                        id="username"
                                        type="email"
                                        value={this.state.username}
                                        onChange={this.handleChange("username")}
                                    />
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className={classNames(classes.margin, classes.textField)}
                                >
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input
                                        id="password"
                                        type= "password"
                                        value={this.state.password}
                                        onChange={this.handleChange("password")}
                                    />
                                </FormControl>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >
                                    login
                                </Button>
                                {this.state.error && (
                                    <p style={{ color: "red" }}>{this.state.error}</p>
                                )}
                            </form>

                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(null,{siginAction})(LoginPage));