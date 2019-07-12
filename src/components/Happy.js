import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import bubbly from '../assets/Bubbly_fiberglass2.jpg';
import kong from '../assets/happy_rainbow_sign.jpg';
import kong2 from '../assets/Happy_rainbow__hongkong.jpg';
import kong3 from '../assets/hong_kong_inflate1.jpg';
import kong4 from '../assets/hong_kong_inflate4.jpg';
import kong5 from '../assets/color_of_purple.jpg';
import kong6 from '../assets/furry_rainbow.jpg';
import Image from 'react-bootstrap/Image';

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



class Happy extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>HAPPY RAINBOW</Title>  
     <Sub>TMTPLAZA, HONG KONG 2012
        </Sub>
   <Para>  FriendsWithYou's first solo exhibition in Hong Kong, entitled "Happy Rainbow", is an interactive rainbow shrine, created for people of all ages and built to connect them to a joyful emotion as they play with each other. This 16 piece exhibit varies from a forty-foot interactive bounce house, to fiberglass, to oversized plush sculpture, to see-through resin sculptures, all unified to make an exhibit that is multi sensory and powerful in its complexity. Designed to envelope the visitors and transcend them into a higher state of self awareness, “Happy Rainbow,” is a journey into yourself. FWY offers a kaleidoscopic look into a rainbow colored world, its purpose is to provide each person with an impactful and bright experience. Simply through the act of play, FWY hopes to evoke a spiritual connectivity that will enlighten all visitors. Each piece in the exhibition is charged with so much color and power that it brings great harmony to all who look upon it. This exhibition is created as a modern day shrine that doubles as a playful adventure into the soul. "Happy Rainbow" is a place where all the colors of the rainbow come together to give you super magical play powers. Simply by playing in at Happy Rainbow you will be transported to a world filled with happy characters, color, magic, and new friends. Explore all the hidden gems of Happy Rainbow and you will find happiness.<br></br>
   The exhibition was open to the public from July 22nd to September 2nd, 2012,  at the Main Atrium Exhibition Area, Tuen Mun Town Plaza Phase 1, Hong Kong
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={bubbly} rounded fluid /></Pic> 
  <Pic> <Image src={kong} rounded fluid /></Pic> 
  <Pic> <Image src={kong2} rounded fluid /></Pic> 
  <Pic> <Image src={kong3} rounded fluid /></Pic> 
  <Pic> <Image src={kong4} rounded fluid /></Pic> 
  <Pic> <Image src={kong5} rounded fluid /></Pic> 
  <Pic> <Image src={kong6} rounded fluid /></Pic> 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Happy;