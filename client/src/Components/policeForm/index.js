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

// Google Map
import googleData from '../AddPerson/googleMap.js';
import GoogleMapLoader from "react-google-maps-loader";

// import MapDialog from './MapDialog';
// import './style.css';
import { styles } from "./style.js";



class PoliceForm extends React.Component {
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
            activeClass: "imgPreview",
            selectedValue: '',
        }
    }
    handleChangeRadio = event => {
        this.setState({ selectedValue: event.target.value });
    };


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
                <h1><center>Incpector Form</center></h1>
                <Grid container style={{ paddingBottom: '100px', paddingTop: '20px' }}>
                    <Grid md={3} > </Grid>
                    <Grid md={6}>
                        <Paper className={classes.paper}>
                            <Grid container style={{ paddingRight: '30px', paddingLeft: '30px', paddingBottom: '50px' }}>

                                <Grid md={12}>
                                    <TextField
                                        onChange={this.handleInputData}
                                        name="Incpector_name"
                                        id="standard-Incpector_name-input"
                                        label="Name"
                                        className={classes.textField}
                                        type="text"
                                        autoComplete="current-Incpector_name"
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                         

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
                                            placeholder="City"
                                            // label="City"
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

PoliceForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PoliceForm);