import React, { Component } from 'react';
import Navbar from './Navbar';
import ImageSlider from '../imagesSlider';
import Tabs from './Tab';
import PersonPage from './PersonPage/PersonPage';
import Search from './Search/Search';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ImageSlider slides={slides} />
                <Tabs />
                <Search/>
                <PersonPage/>
                <Footer/>
                
                
                
               
                
            </div>
        )
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
      city: 'Paris',
      country: 'France',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapore',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Prague',
      country: 'Czech Republic',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Moscow',
      country: 'Russia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];
