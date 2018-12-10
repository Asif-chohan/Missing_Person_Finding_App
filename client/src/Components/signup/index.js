import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from "./style";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import back_arrow from './icons/mobile/Back.png';
import SignupMobile from './icons/mobile/SignUpIcon.png';
import SignupDesktop from './icons/desktop/SignUpIcon.png';
import "./style.css";
import axios from 'axios';
const baseURL = window.location.hostname === "localhost" ?
"http://localhost:8080" : '';

// This component have a sign up form both for mobile and desktop view

class SigUp extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            email: "",
            password: "",
            comfirmPassword: ""
        }
        this.collectData = this.collectData.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    collectData=(e)=> {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    onSubmit(e){
        e.preventDefault()
        var data = {
            name : this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);
        if(this.state.password != this.state.comfirmPassword){
            alert("password doesnot match with confirm password")
        }else{
            axios.post(baseURL + "/user/signup")
        }
        
    }

    render() {

        const { classes } = this.props;

        return (

            <div className='main-container3'>
                <Grid container >

                    {/* Link to go to back (login) page */}
                    <Grid item xs={2} className={classes.back}>
                        <Link to="/login">
                            <img className={classes.backArrow} src={back_arrow} alt="Back Button" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.iconDiv}>
                        {/* Desktop Design Image */}
                        <Hidden only={['sm', 'xs']}>
                            <img src={SignupDesktop} alt="Signup Icon" />
                        </Hidden>
                        {/* Mobile & Tablet Image */}
                        <Hidden only={['md', 'lg', 'xl']}>
                            <img src={SignupMobile} alt="Sign Up Icon" className={classes.loinIcon} />
                        </Hidden>
                    </Grid>

                    <Grid item xs={12} className={classes.FormHeader}>
                        <h2 className="signuptext"> Sign Up </h2>
                    </Grid>
                    <form className={classes.container} onSubmit={this.onSubmit} autoComplete="off">
                        <Grid item xs={12} >
                        

                            {/* TextField for user name */}
                            <TextField
                                className={classes.margin}
                                label="User Name"
                                required={true}
                                id="input-with-icon-textfield search"
                                type="text"
                                name="username"
                                onChange={this.collectData}
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}

                            />
                        </Grid>
                        <Grid item xs={12} >

                            {/* TextField for Email */}
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield search"
                                label="Email"
                                required={true}
                                onChange={this.collectData}
                                name="email"
                                type="email"
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}

                            />
                        </Grid>

                        <Grid item xs={12} >

                            {/* TextField for Password */}
                            <TextField
                                id="adornment-password"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={this.collectData}
                                required={true}
                                className={classes.password}
                                // onChange={this.handleChange('password')}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} >

                            {/* TextField to re-enter password for comfirmation */}
                            <TextField
                                id="adornment-password"
                                label="Confirm Password"
                                type="password"
                                onChange={this.collectData}
                                name="comfirmPassword"
                                required={true}
                                className={classes.password}
                                // onChange={this.handleChange('password')}
                                InputProps={{
                                    classes: {
                                        input: classes.inputs,
                                    },
                                }}
                                InputLabelProps={{
                                    className: classes.floatingLabelFocusStyle,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} className={classes.btmGrid}>
                            <Button type="submit" variant="extendedFab" aria-label="SigIn" className={classes.button}>
                                Sign Up
                            </Button>
                        </Grid>

                    </form>
                </Grid>



            </div>
        );
    }
}
SigUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SigUp);
