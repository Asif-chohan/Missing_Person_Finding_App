import React from 'react';
import { Grid, Card } from '@material-ui/core';
import slide1 from '../../asserts/logo.png';
import Footer from '../Footer/Footer';
import PersonDumyData from '../HomePage/FoundPerson/personDummydata'
import a from '../../asserts/a.jpg'


const PersonDetail = () => (
    <div>
        <h1 style={{ padding:'50px'}}>Person Detail</h1>
        <Grid container style={{ padding:'50px'}} >
        
            <Grid item xs={8}>
                <Card style={{ margin: '0px 10px 0px 10px', height: '290px' }}>
                   <div style={{padding:"80px"}}>
                    <p><strong>Name:</strong> Hamza</p> <br />
                    <p><strong>Age:</strong>5 years</p> <br />
                    <p><strong>Phone Number:</strong> +923001234567</p> <br />
                    <p><strong>Address:</strong>Islamabad</p> 
                    </div>
                </Card>
            </Grid>
            <Grid item xs={4} >


                <Card style={{ margin: '0px 10px 0px 10px', height: '290px' }}>
                    <img src={a} style={{ borderRadius: "50px", height: '400px', width: '100%', padding: '10px' }} alt="Image" />
                </Card>

            </Grid>
        </Grid>
        <Footer/>
    </div>
    
);

export default PersonDetail;