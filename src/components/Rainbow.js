import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import roll1 from '../assets/Rainbow_rink_2.jpg';
import roll2 from '../assets/Rainbow_Roller_Rink.jpg';
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


const Pic = styled.div`
padding-top:60px;
`
const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
padding-top:100px;
`


class Rainbow extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>RAINBOW CITY ROLLER RINK</Title>  
     <Sub>W/ LIBRARY STREET COLLECTIVE IN DETROIT
       </Sub>
   <Para>  Rainbow City Roller Rink presents a vibrant collection of weightless sculptures suspended from the ceiling as skaters roll through the rink’s striped floor. The largest figure in the group features a rotating head and stands at over 30’ tall. The installation creates a surreal landscape intended to provoke an iconic and childlike awareness, and offers an opportunity to connect physically and psychologically with an energetic, ephemeral setting. Based on the Hindu ritual Holi, the colors are meant to transcend visitors to a colorful happy place as they play.<br></br>
   Rainbow City Roller Rink will be open to the public Wednesdays through Sundays, 2pm to 9pm. Entrance to the rink is free, and skates and lockers are available to visitors. Admittance will be permitted on a first-come-first-served basis.<br></br>
   This will be the 5th installment of Rainbow City following its initial exhibit in Toronto in 2010, Miami in 2010, New York in 2011, Thailand in 2015, and now Detroit in 2018! Come skate with us!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={roll1} rounded fluid /></Pic> 
  <Pic> <Image src={roll2} rounded fluid /></Pic> 
 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Rainbow;