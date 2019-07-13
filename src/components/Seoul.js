import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import korea from '../assets/korean_blue.jpg';
import korea2 from '../assets/korea_night_rainbow.jpg';
import korea3 from '../assets/korea_photoshoot.jpg';
import korea4 from '../assets/korea_inmall.jpg';
import korea5 from '../assets/korea_kids_playing.jpg';
import korea6 from '../assets/korea_photoshoot2.jpg';
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


const Pic = styled.div`
padding-top:60px;
`

const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
padding-top:100px;
`



class Seoul extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>SUPER MOON</Title>  
     <Sub>MONUMENTAL PUBLIC ARTWORK IN SEOUL, KOREA<br></br> 
        SEPTEMBER 1–OCTOBER 3, 2016</Sub>
   <Para>  Super Moon is our latest public art installation, on view at Seokchon Lake in Seoul, Korea, from September 1–October 3, 2016. The centerpiece of the work is a 60-foot opalescent moon sculpture installed in the eastern portion of Seokchon Lake. Eight symbolic planetary elements surround the moon, together creating a vivid celestial space across the water. The inflatable sculptures enliven at night with internally programmed LED’s. The moon’s gradient colors shift and move serenely around its spherical surface, while the surrounding figures glow brightly in their individual hues, inviting visitors into a unifying cosmic experience.<br></br>
        Daytime activations of Super Moon include a cloud bounce house in the surrounding park area and cosmic character mascots interacting with visitors around the lake. An accompanying indoor exhibit located in AVENUEL Art Hall features an animated film, history of FriendWithYou’s previous installations, interactive experiences with Super Moon, and limited edition collectibles. Super Moon coincides with the major Korean holiday Chuseok (September 15), celebrating the autumn harvest when the full moon appears during the fall equinox.<br></br>
        Super Moon is a symbolic manifestation of the immense power and serenity of our cosmos, connecting each one of us to our very cells. When we gather around the moon as a community, we all orbit together in its gravitational nature that transcends ages and cultures. With Super Moon, we hope viewers can experience this sense of unity and peace.
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={korea} rounded fluid /></Pic> 
  <Pic> <Image src={korea2} rounded fluid /></Pic> 
  <Pic> <Image src={korea3} rounded fluid /></Pic> 
  <Pic> <Image src={korea4} rounded fluid /></Pic> 
  <Pic> <Image src={korea5} rounded fluid /></Pic> 
  <Pic> <Image src={korea6} rounded fluid /></Pic> 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Seoul;