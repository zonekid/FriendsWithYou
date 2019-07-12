import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import flash from '../assets/LittleCloudSculpture_Home.jpg';
import flash2 from '../assets/Little-Cloud-in-Crystal.jpg';



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


class Flashpoint extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>LITTLE CLOUD IN "FLASHPOINT"</Title>  
     <Sub>CURATED BY JOYCE VARVATOS</Sub>
   <Para>  Little Cloud and other works will be part of a group show entitled “Flashpoint: An Intersection of History, Perseverance, and Joy.” Curated by Joyce Varvatos with Alexandra Hayden July 28th - September 2nd, 2018 112 Hampton St. Sag Harbor, New York.<br></br>
   Opening Sat. July 28th, 5:30pm - 8:30pm With artwork by Derrick Adams, Ouattara Watts, Do Ho Suh, Raul De Nieves, FriendsWithYou, Francesca Di Mattio, Kim Hyung-Dae, Daniel Jacob, Lucy Winton, Leo Villareal, Susan Tepper Zeus<br></br>

        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={flash} rounded fluid /></Pic> 
  <Pic> <Image src={flash2} rounded fluid /></Pic> 
 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Flashpoint;