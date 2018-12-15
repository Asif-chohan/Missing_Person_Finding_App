import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import React from "react";

import profileImage from './profile.jpg';

// Google Map
import googleData from './googleMap.js';
import GoogleMapLoader from "react-google-maps-loader";

// import MapDialog from './MapDialog';
import './style.css';
import { styles } from "./style.js";



class AddPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            name: '',
            age: '',
            description: '',
            gender: '',
            area: '',
            city: '',
            province: '',
            country: '',
            value: 0,
            file: profileImage,
            activeClass: "imgPreview",
            selectedValue: '',
        }
        this.handleImageChange = this.handleImageChange.bind(this)
    }
    handleChangeRadio = event => {
        this.setState({ selectedValue: event.target.value });
    };



    handleImageChange(event) {

        if (event.target.files[0]) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0]),
                activeClass: "imgPreview"
            })

        } else {
            this.setState({
                file: profileImage
            })

        }

    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleInputData = (evt) => {

        this.setState({
            [evt.target.name]: evt.target.value

        })
    }
    handleReportData = () => {

        console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root} style={{paddingTop: '20px'}}>
                <h1><center>Missing & Found Form</center></h1>
                <Grid container style={{ paddingBottom: '100px', paddingTop: '20px' }}>
                    <Grid md={3} > </Grid>
                    <Grid md={6}>
                        <Paper className={classes.paper}>
                            <Grid container style={{ paddingRight: '30px', paddingLeft: '30px', paddingBottom: '50px' }}>

                                

                                <Grid md={12}>
                                <Grid container >
                                <Grid md={6}>
                                <Grid md={12}>
                                    <TextField
                                        id="standard-name-input"
                                        label="Name"
                                        name='name'
                                        onChange={this.handleInputData}
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-name"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid md={12}>
                                    <TextField
                                        id="standard-age-input"
                                        label="Age"
                                        name="age"
                                        onChange={this.handleInputData}
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-age"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                </Grid>
                                <Grid md={6}>
                                <label htmlFor="userProfile">
                                <input type="file"  name="userProfile" id="userProfile" onChange={this.handleImageChange} className="profileImage" />
                                <img src={this.state.file} alt="Profile" className={this.state.activeClass} />
                                </label>
                                {/* <img src={this.state.file} className={this.state.activeClass} /> */}

                                </Grid>

                                </Grid>
                                </Grid>


                                
                                <Grid md={12}>
                                    <Radio
                                        checked={this.state.selectedValue === 'Missing'}
                                        onChange={this.handleChangeRadio}
                                        value="Missing"

                                        label="Male"
                                        name="radio-button-demo"
                                        aria-label="A"
                                    />
                                    <span>Missing</span>
                                    <Radio
                                        checked={this.state.selectedValue === 'Found'}
                                        onChange={this.handleChangeRadio}
                                        value="Found"
                                        label="Found"
                                        name="radio-button-demo"
                                        aria-label="B"
                                    />

                                    <span>Found</span>
                                </Grid>
                                {/* <Grid md={6}>
                                    <br />
                                    <input type="file" onChange={this.handleImageChange} className="submitButton" />
                                </Grid>

                                <Grid md={6}>
                                    <br />
                                    <img src={this.state.file} className={this.state.activeClass} />
                                </Grid> */}
                                <Grid md={12}>
                                    <TextField
                                        onChange={this.handleInputData}
                                        name="description"
                                        id="standard-description-input"
                                        label="Description"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-description"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid md={12}>
                                    <br />

                                    <p className='genderstyle'>Gender</p>
                                    <Radio
                                        checked={this.state.selectedValue === 'Male'}
                                        onChange={this.handleChangeRadio}
                                        value="Male"

                                        label="Male"
                                        name="radio-button-demo"
                                        aria-label="A"
                                    />
                                    <span>Male</span>
                                    <Radio
                                        checked={this.state.selectedValue === 'Female'}
                                        onChange={this.handleChangeRadio}
                                        value="Female"
                                        label="Female"
                                        name="radio-button-demo"
                                        aria-label="B"
                                    />

                                    <span>Female</span>



                                </Grid>
                                {/* <Grid md={12}>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Location"
                                        placeholder="Lakker mandi, Jhand Road, Faisalabad, Pakistan"
                                        className={classes.textField}
                                        margin="normal"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        onClick={this.handleClickOpen}
                                    />
                                </Grid> */}

                                {/* location session */}

                                <Grid><h2><br />Location</h2></Grid>

                                <Grid md={12}>
                                <Grid container>
                                    <Grid md={5}>
                                        <TextField
                                            id="standard-area-input"
                                            onChange={this.handleInputData}
                                            label="Area"
                                            name="area"
                                            className={classes.textField}
                                            type="text"
                                            autoComplete="current-area"
                                            margin="normal"
                                            fullWidth
                                            id="searchTextField1"
                                            name="area"
                                        />
                                    </Grid>
                                    <Grid md={2}></Grid>
                                    <Grid md={5}>
                                        <TextField
                                            name="city"
                                            id="standard-city-input"
                                            // placeholder="City"
                                            label="City"
                                            onChange={this.handleInputData}
                                            className={classes.textField}
                                            type="text"
                                            autoComplete="current-city"
                                            margin="normal"
                                            fullWidth
                                            id="city"
                                            name="city"
                                        />
                                    </Grid>
                                {/* </Grid> */}

                                <Grid md={5}>
                                    <TextField
                                        name="province"
                                        id="standard-province-input"
                                        placeholder="Province"
                                        className={classes.textField}
                                        type="text"
                                        onChange={this.handleInputData}
                                        autoComplete="current-province"
                                        margin="normal"
                                        fullWidth
                                        id="province"
                                        name="province"
                                    />
                                </Grid>
                                <Grid md={2}></Grid>
                                <Grid md={5}>
                                    <TextField
                                        id="standard-country-input"
                                        placeholder="Country"
                                        className={classes.textField}
                                        type="text"
                                        onChange={this.handleInputData}
                                        name="country"
                                        autoComplete="current-country"
                                        margin="normal"
                                        fullWidth
                                        id="country"
                                        name="country"
                                    />
                                </Grid>

                                </Grid>
                                </Grid>

                                {/* location session end */}

                                <Grid md={12} >
                                    <input type="hidden" id="longi1" name="longi" />
                                    <input type="hidden" id="lati1" name="lati" />
                                </Grid>

                                <Grid md={12}>
                                    <div id="map_canvas" className="googleMap" style={{ height: 500 }} >

                                        <GoogleMapLoader params={googleData.credentials} render={(googleMaps) => {
                                            return googleData.renderMap(googleMaps)
                                        }} />
                                    </div>
                                    <Button
                                        style={{ marginLeft: '38vw', marginTop: '15px', backgroundColor: '#06cf1e' }}
                                        color="primary"
                                        variant="raised"
                                        onClick={this.handleReportData}
                                    >Submit</Button>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid md={3}>

                    </Grid>
                </Grid>

            </div >
        );
    }
}

AddPerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPerson);
