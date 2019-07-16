import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import world from '../assets/popworld.jpg';
import world2 from '../assets/popworld_promo.jpg';
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


class Pop extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>POPWORLD AT COMPLEXCON</Title>  
     <Sub>NOV. 3RD & 4TH IN LONG BEACH, CA
       </Sub>
   <Para>  Our newest installation, PopWorld, takes pop imagery, turning it in to an inflatable environment that becomes one giant huggy party - representing our diversity and oneness at the same time. This installation will be premiering Nov. 3rd & 4th at ComplexCon to benefit The Downtown Women’s Center, St. Johns Well Child and Family Center, and The JED Foundation. This installation was made possible through generous support by PopSockets. A donation of any amount grants access to our installation at ComplexCon, allowing us to raise awareness and engage our community in exchange for an interactive, communal experience. <br></br>
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={world} rounded fluid /></Pic> 
  <Pic> <Image src={world2} rounded fluid /></Pic> 
 
    </Col>  
    
    </Row>
  <Pic2> <iframe title="vimeo-player" src="https://player.vimeo.com/video/294289500" width="640" height="800" frameborder="0" allowfullscreen></iframe></Pic2> 
        </div> 
        </Back>
        );
    }
}
 
export default Pop;