import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import bean from '../assets/RainbowBean2.jpg';
import bean2 from '../assets/RainbowBean.jpg';
import bean3 from '../assets/EZBeanBlue.jpg';
import bean4 from '../assets/EZBeanRed.jpg';
import bean5 from '../assets/EZBeanCollage.jpg';




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



class Bean extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>MAGICAL EXPLOSIONS</Title>  
     <Sub>FWY X N*E*R*D CONCEPT, 2010</Sub>
   <Para>  On the occasion of The Glass House Summer Party’s 10th Anniversary, we partnered with Design Within Reach to produce a set of limited-edition Outdoor Eazy Bean Everest Chairs.<br></br>
   The Outdoor Eazy Bean Everest Chair by designer Françoise Séjourné is a luxurious twist on traditional beanbags – it’s really more like a chair, allowing you to sit in an upright or reclining position.<br></br>
   The Summer Party is on Saturday, June 10th from 12-4 pm, celebrating The Glass House’s 10th Anniversary of opening as a site of the National Trust for Historic Preservation. Start bidding on the benefit auction on Friday, May 26th, which includes works by Frank Stella, Carrie Mae Weems, Alex Katz, James Nares, Zaha Hadid, us, and many more. Proceeds from the Summer Party will go towards essential preservation work at the Glass House. 
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={bean} rounded fluid /></Pic> 
  <Pic> <Image src={bean2} rounded fluid /></Pic> 
  <Pic> <Image src={bean3} rounded fluid /></Pic> 
  <Pic> <Image src={bean4} rounded fluid /></Pic> 
  <Pic> <Image src={bean5} rounded fluid /></Pic> 

    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Bean;