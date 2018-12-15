import React from 'react';
import Card from '../Person/Card';
import { Grid } from '@material-ui/core';

const PersonList = () => (
    <div>
        <h1>Person List</h1>
        <Grid container spacing={24} >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Grid>

    </div>
);

export default PersonList;