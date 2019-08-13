import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import bean from '../assets/rainbowbean2.jpg';
import bean2 from '../assets/rainbowbean.jpg';
import bean3 from '../assets/ezbeanblue.jpg';
import bean4 from '../assets/ezbeanred.jpg';
import bean5 from '../assets/ezbeancollage.jpg';
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



class Bean extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>EZ BEAN x FRIENDSWITHYOU</Title>  
     <Sub>THE GLASS HOUSE SUMMER PARTY</Sub>
   <Para>  On the occasion of The Glass House Summer Party’s 10th Anniversary, we partnered with Design Within Reach to produce a set of limited-edition Outdoor Eazy Bean Everest Chairs.<br></br>
   The Outdoor Eazy Bean Everest Chair by designer Françoise Séjourné is a luxurious twist on traditional beanbags – it’s really more like a chair, allowing you to sit in an upright or reclining position.<br></br>
   The Summer Party is on Saturday, June 10th from 12-4 pm, celebrating The Glass House’s 10th Anniversary of opening as a site of the National Trust for Historic Preservation. Start bidding on the benefit auction on Friday, May 26th, which includes works by Frank Stella, Carrie Mae Weems, Alex Katz, James Nares, Zaha Hadid, us, and many more. Proceeds from the Summer Party will go towards essential preservation work at the Glass House. 
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={bean} rounded fluid /></Pic> 
  <Pic> <Image src={bean2} rounded fluid /></Pic> 
  <Pic> <Image src={bean3} rounded fluid /></Pic> 
  <Pic> <Image src={bean4} rounded fluid /></Pic> 
  <Pic> <Image src={bean5} rounded fluid /></Pic> 

    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Bean;