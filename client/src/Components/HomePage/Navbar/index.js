import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { styles } from "./style";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from '../../../asserts/logo.png';

class Navbar extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container spacing={24}>
            <Grid item xs={3} className={classes.headingCustom}>
                {/* <h2>Missing Person</h2> */}
                <img src={logo} style={{height:'100px',width:'200px',padding:'10px'}} />
              </Grid>
            <Grid item xs={3}>
              </Grid>
              
              <Grid item xs={6} style={{ marginTop: '20px'}}>
                <Tabs
                  value={value}
                  classes={{
                    indicator: classes.indicator
                  }}
                  onChange={this.handleChange}
                >
                  <Tab className={classes.tabCustom} label="Home" />
                  <Tab className={classes.tabCustom} label="Contact us" />
                  <Tab className={classes.tabCustom} label="Blogs" />
                  {/* <Tab className={classes.tabCustom} label="Signin" /> */}
                  <Button className={classes.signinButton} size="small" variant="contained" color="primary">SignIn</Button>
                  
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
       
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
