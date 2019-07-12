import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import flate from '../assets/Inflate_cover.jpg';
import flate2 from '../assets/Inflate_1.jpeg';
import flate3 from '../assets/Inflate2.jpeg';





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


const Pic = styled.div`
padding-top:60px;
`

const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
`



class Rainbowl extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>RAINBOWL</Title>  
     <Sub>SXSW 2017</Sub>
   <Para> FriendsWithYou presents “Rainbowl", an interactive vinyl inflatable rainbow sculpture, which premiered at SXSW 2017.<br></br>

 
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={flate} rounded fluid /></Pic> 
  <Pic> <Image src={flate2} rounded fluid /></Pic> 
  <Pic> <Image src={flate3} rounded fluid /></Pic> 


    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Rainbowl;