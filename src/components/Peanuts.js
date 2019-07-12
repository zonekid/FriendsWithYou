import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import peanuts from '../assets/FriendsWithYou_Peanuts.jpg';
import peanuts2 from '../assets/Peanuts_hoodie.jpg';
import peanuts3 from '../assets/Peanuts_yellowhoodie.jpg';
import peanuts4 from '../assets/Champion_Peanuts.jpg';
import peanuts5 from '../assets/Bamford_Peanuts.jpg';



const Title = styled.p`
font-family: HiraginoSansGB-W3;
font-size: 48px;
color: #000000;
letter-spacing: 0.01px;
text-align: center;
padding-top:50px;
`

const Sub = styled.p`
font-family: HiraginoSansGB-W3;
font-size: 20px;
color: #000000;
text-align: center;

`

const Para = styled.p`
font-family: AvenirNext-Regular;
font-size: 18px;
color: #000000;
text-align: center;
width:70%;
margin:0 auto;
padding-top:50px;
@media (max-width: 575px) {
  width:100%;
}
`

const Pic2 = styled.div`
text-align:center;
padding-top:60px;
`

const Pic = styled.div`
padding-top:60px;
`
const Back = styled.div`
background: rgba(80,235,254,0.20);
padding-bottom:50px;
`


class Peanuts extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>“HOW ORIGINAL” AT STORY</Title>  
     <Sub>PEANUTS GLOBAL ARTIST COLLECTIVE
       </Sub>
   <Para>  Take a peek at our Peanuts Global Artist Collective collaborations with STORY. These items were featured at their “How Original” store in NYC through Oct. 7th. “The store experience featured new editions of original works from the Peanuts Global Artist Collective, an unprecedented, worldwide arts initiative that engaged seven contemporary artists to blend Schulz’s signature hand-drawn vision with their own individual styles and mediums. The initiative launched with larger-than-life murals created by artists FriendsWithYou, Andre Saraiva x Mr. A,  AVAF , ,  Nina Chanel Abney, Tomokazu Matsuyama, Rob Pruitt, and Kenny Scharf and displayed in unexpected street locations in New York, San Francisco, Paris, Berlin, Mexico City, Tokyo, and Seoul.”<br></br>
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={peanuts} rounded fluid /></Pic> 
  <Pic> <Image src={peanuts2} rounded fluid /></Pic> 
  <Pic> <Image src={peanuts3} rounded fluid /></Pic> 
  <Pic> <Image src={peanuts4} rounded fluid /></Pic> 
  <Pic> <Image src={peanuts5} rounded fluid /></Pic> 
 
    </Col>  
    
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Peanuts;