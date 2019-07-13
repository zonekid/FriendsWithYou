import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import something from '../assets/sitw_flyer.jpg';
import something2 from '../assets/sitw_purp_green_float.jpg';
import something3 from '../assets/sitw_two_in_a_pod.jpg';
import something4 from '../assets/sitw_people.jpg';
import something5 from '../assets/sitw_hov_p.jpg';
import something6 from '../assets/sitw_rainy_day.jpg';
import something7 from '../assets/sitw_multiple.jpg';

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


class Water extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>FRIENDSWITHYOU INFLATABLES AT SOMETHING IN THE WATER IN VIRGINIA BEACH</Title>  
 
   <Para> We are so honored and happy to announce we are doing a giant inflatable installation for Pharrell and his new festival Something in the Water!<br></br>

        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={something} rounded fluid /></Pic> 
  <Pic> <Image src={something2} rounded fluid /></Pic> 
  <Pic> <Image src={something3} rounded fluid /></Pic> 
  <Pic> <Image src={something6} rounded fluid /></Pic> 
  <Pic> <Image src={something7} rounded fluid /></Pic> 
  <Pic> <Image src={something4} rounded fluid /></Pic> 
  <Pic> <Image src={something5} rounded fluid /></Pic> 

 
    </Col>  
    
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Water;