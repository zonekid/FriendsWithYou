import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import santa from '../assets/Santa_Blue.jpg';
import santa2 from '../assets/Santa_night.jpg';
import santa3 from '../assets/Santa_night4_rainbow.jpg';
import santa4 from '../assets/Santa_Nightlife.jpg';
import santa5 from '../assets/Santa_People_Gathering.jpg';
import santa6 from '../assets/Santa_worlds_famous.jpg';


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


const Pic = styled.p`
padding-top:60px;
`

const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
`



class Light extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>Light Wave</Title>  
     <Sub>JULY 7TH - SEPTEMBER 8TH, 2016 AT THE SANTA MONICA PIER<br></br> 
        </Sub>
   <Para>  We have launched our biggest installation to date, Light Wave, in partnership with the Santa Monica Pier’s Twilight Concert Series and Snapchat. The opening night was Thursday, July 7th from 7 – 10pm, and runs every Thursday night throughout the summer until September 8th.<br></br>
   Light Wave pays homage to the Los Angeles coastline and the city’s cultural energy, and we're thrilled to continue creating experiences that touch and share light with so many in our new home. This larger-than-life public installation seeks to immerse concert-goers in a communal gathering, complimented by a glow of color, energy and sound, casting a powerful yet delicate ripple.<br></br>
   We hope to see you there sometime this summer!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={santa} rounded fluid /></Pic> 
  <Pic> <Image src={santa2} rounded fluid /></Pic> 
  <Pic> <Image src={santa3} rounded fluid /></Pic> 
  <Pic> <Image src={santa4} rounded fluid /></Pic> 
  <Pic> <Image src={santa5} rounded fluid /></Pic> 
  <Pic> <Image src={santa6} rounded fluid /></Pic> 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Light;