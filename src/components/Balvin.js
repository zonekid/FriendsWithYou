import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import balvin from '../assets/j_balvin_delgrande.jpg';
import balvin2 from '../assets/jbalvin_playtime.jpg';
import balvin3 from '../assets/jbalvin_psychadel.jpg';
import balvin4 from '../assets/balvinrainbow_stage.jpg';
import './font.css';

const Title = styled.p`
font-family: Hiragino Sans GB3;
font-size: 48px;
color: #000000;
letter-spacing: 0.01px;
text-align: center;
padding-top:50px;
`

const Sub = styled.p`
font-family: Hiragino Sans GB3;
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
padding-top:0px;
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
padding-top:100px;
`


class Balvin extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>J BALVIN X FRIENDSWITHYOU AT COACHELLA 2019</Title>  
   
   <Para> The love movement has begun. Thank u so much J Balvin for believing in our vision and allowing us to spread this love message to the world. J is one of the most humble, kind, and visionary artists we ever met. Thank u for changing the world with us! We come from Miami where we were raised on Reggaeton and to make it to the main stage Coachella with this message was a dream come true. <br></br>
   Thank u The Squared Division the best partner ever on making this real Blink Inc. for taking years of our animation and adapting it so well. We couldn’t be more honored by all u out there and all the love u shared w us. So much more coming soon. Love u!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={balvin} rounded fluid /></Pic> 
  <Pic> <Image src={balvin2} rounded fluid /></Pic> 
  <Pic> <Image src={balvin3} rounded fluid /></Pic> 
  <Pic> <Image src={balvin4} rounded fluid /></Pic> 

 
    </Col>  
    
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Balvin;