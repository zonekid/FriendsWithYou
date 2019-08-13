import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import magic from '../assets/magicseeddigital.jpg';
import Nav from 'react-bootstrap/Nav';
import './font.css';


const Title = styled.p`
font-family: Lato-Regular;
font-size: 48px;
color: #000000;
letter-spacing: 0.01px;
text-align: center;
padding-top:50px;
`

const Sub = styled.p`
font-family: Lato-Regular;
font-size: 20px;
color: #000000;
text-align: center;

`

const Para = styled.p`
font-family: Avenir;
font-size: 18px;
color: #000000;
text-align: center;
width:70%;
margin:0 auto;
padding-top:40px;
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
background: rgba(205,214,225,0.20);
padding-bottom:50px;
padding-top:100px;
`


class Magic extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>MAGIC SEED</Title>  
     <Sub>LIMITED EDITION LENTICULAR PRINT
       </Sub>
   <Para>  Inspired by "Nature’s Gift”, our installation at the Oakland Museum of California, we have created this special limited-edition lenticular print. It's in an edition of 100 and measures 27.5 x 15.5 inches. “Magic Seed” is endowed with gifts of all physical and metaphysical states. The powers encapsulated in this totem will bring much needed brightness, color, and peace to all. 
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={magic} rounded fluid /></Pic> 

 
    </Col>  
    
    </Row>
  <Pic2> <iframe title="vimeo-player" src="https://player.vimeo.com/video/236799886" width="640" height="360" frameborder="0" allowfullscreen></iframe></Pic2> 
        </div> 
        </Back>
        );
    }
}
 
export default Magic;