import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import kermit from '../assets/Kermit2.jpg';
import play from '../assets/Pinnochio.jpg';
import play2 from '../assets/Playworks_Snoopy.jpg';
import play3 from '../assets/Playworks_Hello_Kitty.jpg';
import play4 from '../assets/HappyCollage.jpg';
import play5 from '../assets/EvilCollage.jpg';
import play6 from '../assets/Playworks_GumbyHorse2.jpg';


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



class Play extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>"PLAYWORKS SERIES"</Title>  
     <Sub>SOLO BOOTH WITH THE PIT II @ ALAC 2018</Sub>
   <Para>  We’re excited to announce we are working with an incredible L.A. gallery, The Pit. Our first project together was a solo booth at Art Los Angeles Contemporary featuring a new series of works entitled Play Works, as well as an interactive sculpture kind of “trojan horse”. The fair opened January 25th and remained open through January 28th, 2018 at The Barker Hanger in Santa Monica, CA. <br></br>
   We have created a new series of works using clay in steel frames. This series of works play with the discovery and abstraction of the figure, using the texturally soft and informal medium of plastiline. We depict our cartoon heroes, pop culture icons, mass media, and memes that affect us daily. The purpose of this is to expand our emotional consciousness and return us to relational aesthetics, connecting us to ourselves and each other. We reach into our psyche and play with those memories that shape who we are.
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={kermit} rounded fluid /></Pic> 
  <Pic> <Image src={play} rounded fluid /></Pic> 
  <Pic> <Image src={play2} rounded fluid /></Pic> 
  <Pic> <Image src={play3} rounded fluid /></Pic> 
  <Pic> <Image src={play4} rounded fluid /></Pic> 
  <Pic> <Image src={play5} rounded fluid /></Pic> 
  <Pic> <Image src={play6} rounded fluid /></Pic> 

    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Play;