import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import sanFran from '../assets/IntoTheClouds.jpg';
import Nav from 'react-bootstrap/Nav';



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
padding-top:100px;
`


class Clouds extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>INTO THE CLOUDS</Title>  
     <Sub>AT WESTFIELD SAN FRANCISCO CENTRE</Sub>
   <Para>  Little Cloud and his friends float into San Francisco for “Into the Clouds” at Westfield
San Francisco Centre’s historic dome from May 14 th – Oct. 22 nd , 2018.<br></br>
Into the Clouds is a surreal and cheerful installation featuring four large-scale inflatable clouds suspended from the dome. The cloud has been a recurring image in our work throughout the years. We view the cloud emblem as an enduring symbol of love and light. It has the power to transcend the viewer to a relaxed and joyous state, revealing that everything in our world has a soul and a purpose - a spiritual essence. This animist perspective reflects in our work as a sweet visual soundscape, casting a positive message of happiness and connectivity.<br></br>
Thank you for this amazing commission, Westfield!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={sanFran} rounded fluid /></Pic> 

 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Clouds;