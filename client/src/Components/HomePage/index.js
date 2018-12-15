import React, { Component } from "react";
import Navbar from "./Navbar";
import ImageSlider from "../imagesSlider";
import Tabs from "./Tab";
import PersonPage from "./PersonPage/PersonPage";
import Search from "./Search/Search";
import Footer from "../Footer/Footer";
import { Button, Card, Grid, CardContent } from "@material-ui/core";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid xs={9}>
            {" "}
            <ImageSlider slides={slides} />
          </Grid>
          <Grid xs={3}>
            <Card style={{ margin: "5px 10px 0px 10px", height: "290px", textAlign: 'center', paddingTop: "50px"}}>
              <CardContent>Report a Missed Person</CardContent>
              <Button
                style={{
                  borderRadius: "42px",
                  height: "40px",
                  margin: "12px",
                  color: "white",
                  backgroundColor: "#06cf1e"
                }}
              >
                {" "}
                Post a Request
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Search />
        <Tabs />
       
        <Footer />
      </div>
    );
  }
}

// class Persons extends Component{
//   render(){
//     return(
//       <div>
//         <div>
//           <h3>Found Persons</h3>
//           <div style={{border:'1px solid lightgrey',borderRadius:'4px',boxShadow:'0px 0px 9px -3px',background:'white', margin:'20px', padding:'30px',width:'20%'}}><strong>City:</strong> : Paris <br/> <strong>Cell Number:</strong> France  </div>

//         </div>

//         <div>
//           <h3>Mission Persons</h3>
//           <div style={{border:'1px solid lightgrey',borderRadius:'4px',boxShadow:'0px 0px 9px -3px' ,background:'white', margin:'20px',padding:'30px',width:'20%'}}><strong>City:</strong> : Paris <br/> <strong>Cell Number:</strong> France  </div>
//         </div>

//       </div>
//     )
//   }
// }

const slides = [
  {
    city: "Paris",
    country: "France",
    img: "http://i.dawn.com/primary/2016/08/57acbf671d860.jpg"
  },
  {
    city: "Singapore",
    img:
      "https://kbr.id/media/?size=730x406&filename=Pakistan+Kidnappings+2_web_Naeem+Sahoutara+ed.jpg"
  },
  {
    city: "Prague",
    country: "Czech Republic",
    img:
      "https://i0.wp.com/www.newsbox.pk/wp-content/uploads/2016/08/web-Site.jpg?w=637"
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    img:
      "https://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/05/30/Pictures/_d1b2689c-2613-11e6-a44e-cf92da887fb1.jpg"
  },
  {
    city: "Moscow",
    country: "Russia",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
  }
];
