import React from 'react';
import Card from '../FoundPerson/Card';
import { Grid } from '@material-ui/core';

const PersonList = () => (
    <div style={{padding: "70px"}}>
    <div style={{paddingLeft: "200px", marginTop:"40px", marginBottom: "50px"}}>
        <h1>Found Persons</h1>
        </div>
        <Grid container spacing={24} >
            <Card />
           
        </Grid>

    </div>
);

export default PersonList;