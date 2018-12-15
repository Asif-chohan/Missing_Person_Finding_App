import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MissingPersonList from "../PersonList/PersonList";
import FoundPersonList from "../FoundPersonsList";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
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
      <div className={classes.root} style={{ backgroundColor: "#f8f8f8" }}>
        <AppBar
          position="static"
          style={{ background: "#06cf1e", marginTop: "60px" }}
        >
          <Grid container spacing={24}>
            <Grid item xs={2} />
            <Grid item xs={10}>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Found Persons" />
                <Tab label="Missing Persons" />
              </Tabs>
            </Grid>
          </Grid>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <FoundPersonList />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <MissingPersonList />
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
