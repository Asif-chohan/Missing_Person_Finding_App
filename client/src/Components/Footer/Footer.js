


import React from 'react';
import './style.css';
import { Grid } from '@material-ui/core';
import logo from '../../asserts/Footerlogo.png';


const Footer = () => (
    <div className='footer'>
        <Grid container style={{ paddingBottom: '30px' }}>
            <Grid item xs={12} sm={12} md={2}>

            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <img src={logo} style={{ height: '100px', width: '200px', padding: '10px' }} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <h3 style={{ color: 'white', padding: '40px' }}>Connect with us</h3>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>

            </Grid>
        </Grid>



        <Grid container style={{ paddingBottom: '30px' }}>
            <Grid item xs={12} sm={12} md={5}>
                
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ color: 'white' }} >
            © 2018 LETSFIND. All rights reserved.
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                
            </Grid>
            
        </Grid>
    </div>
);

export default Footer;