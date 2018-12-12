import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { styles } from "./style";
import contact from './contact.png'
import {contactus} from '../Redux/actions/index';





class ContactUs extends Component {
    state = {
        username: '',
        email: "",
        blogTitle: '',
        fileUpload: ''

    };

    handleInputChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    handleSubmitForm = event => {
         
        event.preventDefault();
        let { username, email, blogTitle, fileUpload } = this.state;
        if ( !username.trim().length == 0  && !email.trim().length == 0 && !blogTitle.trim().length==0 ) {
            const record = {
                username,
                email,
                blogTitle,
                fileUpload
            };

            this.props.contactus(record);

            // redirect the path
            // this.props.history.push("/");
        } else {
            alert("fill the form correctly");
        }
    };
    render() {
        const { classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid xs={6} >
                    <div className={classes.contact}>
                        <div style={{ backgroundColor: '#1e1eaf', height: '40vh', width: '40vw', position: 'absolute', top: '20vh', left: '8vw' }}>


                            <h1><span style={{ color: 'green', marginLeft:'8px'}}>Contact</span> Us</h1>
                            <p style={{ color: 'white' , marginLeft:'8px' }}>WE're Here to Help</p>

                            <Grid xs={6} style={{ position: 'relative', left: '15vw' }}>
                                <p style={{ color: 'white', }}> Have question about our internet marketing servics? Let's talk about how we can help you achieve your goals and take your business to help top!</p>
                            </Grid>
                            <div style={{width:'100%',height:'9vh',backgroundColor:'#15158c', position:'relative',top:'8vh'}}>
                            <p style={{ color: 'white', lineHeight:'9vh', marginLeft:'8px' }}>Complete  the form or give us a call on 0300-2345789 </p>

                            </div>


                        </div>
                    </div>
                </Grid>
                <Grid xs={6} >
                    <main className={classes.main}>
                        <CssBaseline />
                        <Paper className={classes.paper}>
                            <Avatar >
                                <img src={contact} alt="contact" />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                <span style={{ color: 'green' }}>Contact</span> Us
                            </Typography>
                            <form className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="username">User Name</InputLabel>
                                    <Input
                                        onChange={this.handleInputChange}
                                        name="username"
                                        type="text"
                                        id="usrname"
                                        autoComplete="off"
                                    />
                                </FormControl>
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
                                    <InputLabel htmlFor="blogTitle">Blog Title</InputLabel>
                                    <Input
                                        onChange={this.handleInputChange}
                                        id="blogTitle"
                                        name="blogTitle"
                                        type="text"
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </FormControl>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="fileUpload">Upload File</InputLabel>
                                    <Input
                                        onChange={this.handleInputChange}
                                        id="fileUpload"
                                        name="fileUpload"
                                        type="file"
                                        value={this.state.fileUpload}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </FormControl>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.handleSubmitForm}
                                >
                                    submit
                        </Button>
                            </form>

                        </Paper>
                    </main></Grid>
            </Grid>
        );
    }
}

ContactUs.propTypes = {
    classes: PropTypes.object.isRequired
};
export default connect(null,{contactus})(withStyles(styles)(ContactUs));


