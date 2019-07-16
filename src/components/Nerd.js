import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import con from '../assets/nerd_painting.jpg';
import con2 from '../assets/nerd_girl_box.jpg';
import con3 from '../assets/nerd_tsage_2.jpg';
import con4 from '../assets/nerd_car.jpg';
import con5 from '../assets/nerd_perform.jpg';
import con6 from '../assets/nerd_perform2.jpg';
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
        <Title>MAGICAL EXPLOSIONS</Title>  
     <Sub>FWY X N*E*R*D CONCEPT, 2010</Sub>
   <Para>  FriendsWithYou's provides Pharrell, Shae, and Chad with a magical masterpiece entitled "Magical Explosion" to be the center piece artwork to their new album, video, website, and more. First, the artwork was wrapped around a Rolls Royce car for their video "Hot & Fun". When FWY was asked to create a piece in the vein of the Yellow Submarine, John Lennon’s classic 1960 Rolls, things got exciting for the art collective. Soon after, "Magical Explosions"  a psychedelic take-over of FriendsWithYou cosmic forces, was born. The video was shot Mad Max style in the desert of California in 2010, and the car fit the part perfectly!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={con} rounded fluid /></Pic> 
  <Pic> <Image src={con2} rounded fluid /></Pic> 
  <Pic> <Image src={con3} rounded fluid /></Pic> 
  <Pic> <Image src={con4} rounded fluid /></Pic> 
  <Pic> <Image src={con5} rounded fluid /></Pic> 
  <Pic> <Image src={con6} rounded fluid /></Pic> 


    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Rainfriends;