import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import boom from '../assets/rainbow_boom.jpg';
import boom1 from '../assets/rainbow_blue_white.jpg';
import boom2 from '../assets/rainbow_green.jpg';
import boom3 from '../assets/rainbow_bowtie.jpg';
import boom4 from '../assets/rainbow_yellow.jpg';
import boom5 from '../assets/rainbowfriends1.jpg';
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


const Pic = styled.div`
padding-top:60px;
`

const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
padding-top:100px;
`



class Rainfriends extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>RAINBOW FRIENDS PRINT SERIES</Title>  
     <Sub>SAO PAULO, BRAZIL 2011</Sub>
   <Para>  In 2011, FriendsWithYou presented a print exhibition at Coletivo Amor de Madre, Sao Paulo, Brazil. FWY released 8 limited edition prints, which were available exclusively at Coletivo Amor de Madre, an art store specialized in development, production and marketing of utilitarian design and art objects. The prints are now sold out and were in a limited edition series of 50 each.<br></br>
   In connection with the print series release, FriendsWithYou also participated in an artist talk with BOOMPSDESIGN - an art, design and architectural conference that takes place yearly in Sao Paulo, Brazil. This art event has quickly established itself as a catalyst for connecting the Brazilian design moment to a global level, bringing together designers and artists from all over the world to showcase and discuss their work and passion. FWY is honored to have participated in the fourth forum of BOOMPSDESIGN, 2011. The event is organized by curator and cultural promoter Roberto Cocenza, who hosts international design artists and studios such as, Studio Dror, Matali Crasset, Paul Clemence, Cat, Harry, Chad Oppenheim, Mount Fuji, Jade Dressler, and Green Provocateur.<br></br>
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={boom} rounded fluid /></Pic> 
  <Pic> <Image src={boom1} rounded fluid /></Pic> 
  <Pic> <Image src={boom2} rounded fluid /></Pic> 
  <Pic> <Image src={boom3} rounded fluid /></Pic> 
  <Pic> <Image src={boom4} rounded fluid /></Pic> 
  <Pic> <Image src={boom5} rounded fluid /></Pic> 


    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Rainfriends;