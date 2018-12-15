import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

const Search = () => (
  <div>
    <Grid container style={{ marginTop: "30px" }}>
      <Grid item xs={12} sm={12} md={3} />
      <Grid item xs={12} sm={12} md={3}>
        <TextField
          style={{ minWidth: "100%" }}
          id="search"
          label="Search Missing Person"
          type="search"
          className="{classes.textField}"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Button
          style={{
            width: "100px",
            height: "40px",
            margin: "12px",
            color: "white",
            backgroundColor: "#06cf1e"
          }}
        >
          {" "}
          Search
        </Button>
        <label htmlFor="flat-button-file">
          <Button
            component="span"
            style={{
              height: "40px",
              margin: "12px",
              color: "white",
              backgroundColor: "#06cf1e"
            }}
          >
            {" "}
            Search By Image
          </Button>
        </label>
      </Grid>
      <Grid item xs={12} sm={12} md={3} />
    </Grid>
  </div>
);

export default Search;
