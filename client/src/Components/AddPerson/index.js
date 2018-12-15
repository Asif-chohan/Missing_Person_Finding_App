import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import React from "react";

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
            value: 0,
            file: null,
            activeClass: "imgHide",
            selectedValue: 'a',
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
                file: null
            })

        }

    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <h1><center>Missing & Found Form</center></h1>
                <Grid container style={{ paddingBottom: '100px' }}>
                    <Grid md={3}></Grid>
                    <Grid md={6}>
                        <Paper className={classes.paper}>
                            <Grid container style={{ paddingRight: '30px', paddingLeft: '30px', paddingBottom: '50px' }}>
                                <Grid md={12}>
                                    <TextField
                                        id="standard-name-input"
                                        label="Name"
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
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-age"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid md={6}>
                                    <br />
                                    <input type="file" onChange={this.handleImageChange} className="submitButton" />
                                </Grid>

                                <Grid md={6}>
                                    <br />
                                    <img src={this.state.file} className={this.state.activeClass} />
                                </Grid>
                                <Grid md={12}>
                                    <TextField
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
                                    {/* <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Gender</FormLabel> */}

                                    {/* <RadioGroup
                                            aria-label="Gender"
                                            name="gender1"
                                            className={classes.group}
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        > */}
                                    {/* <Grid container> */}
                                    {/* <Grid xs="6"> */}
                                    {/* <div className="forRadioMaleCustom"> */}
                                    {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
                                    {/* </div> */}
                                    {/* </Grid> */}
                                    {/* <Grid xs="6"> */}
                                    {/* <div className="forRadioCustom"> */}
                                    {/* <FormControlLabel value="female" control={<Radio />} label="Female" /> */}
                                    {/* </div> */}
                                    {/* </Grid> */}

                                    {/* </Grid> */}

                                    {/* </RadioGroup>
                                    </FormControl> */}
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

                                <Grid><h2>Location</h2></Grid>

                                <Grid md={12}>
                                    <TextField
                                        id="standard-area-input"
                                        label="Area"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-area"
                                        margin="normal"
                                        fullWidth
                                        id="searchTextField1"
                                        name="area"
                                    />
                                </Grid>
                                <Grid md={12}>
                                    <TextField
                                        id="standard-city-input"
                                        placeholder="City"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-city"
                                        margin="normal"
                                        fullWidth
                                        id="city"
                                        name="city"
                                    />
                                </Grid>

                                <Grid md={12}>
                                    <TextField
                                        id="standard-province-input"
                                        placeholder="Province"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-province"
                                        margin="normal"
                                        fullWidth
                                        id="province"
                                        name="province"
                                    />
                                </Grid>
                                <Grid md={12}>
                                    <TextField
                                        id="standard-country-input"
                                        placeholder="Country"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-country"
                                        margin="normal"
                                        fullWidth
                                        id="country"
                                        name="country"
                                    />
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
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid md={3}></Grid>
                </Grid>

            </div >
        );
    }
}

AddPerson.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPerson);
