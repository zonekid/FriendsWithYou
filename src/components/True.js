import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Tru from '../assets/true_blog.jpg';
import Tru2 from '../assets/true_rainbow_cover.jpg';




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


class True extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>SEASON 2 OF TRUE AND THE RAINBOW KINGDOM ON NETFLIX</Title>  
     <Sub>
       </Sub>
   <Para>  Season 2 of True and the Rainbow Kingdom launches Netflix worldwide June 15th! True: Magical Friends and True: Wonderful Wishes. Plus lots more in the works. This preschool show is about empathy, and compassion for our living world and everything in it! True is a strong lead showing girls and boys that we can be powerful with love on our side! Thanks to the amazing Guru Studio along with our partner Pharrell and Home Plate Entertainment.<br></br>
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={Tru} rounded fluid /></Pic> 
  <Pic> <Image src={Tru2} rounded fluid /></Pic> 
 
    </Col>  
    
    </Row>
  <Pic2> <iframe title="vimeo-player" src="https://player.vimeo.com/video/275187028" width="640" height="360" frameborder="0" allowfullscreen></iframe></Pic2> 
        </div> 
        </Back>
        );
    }
}
 
export default True;