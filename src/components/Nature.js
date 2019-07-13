import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import nature1 from '../assets/naturesgiftexhibit.jpg';
import nature2 from '../assets/naturesgift2.jpg';



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


class Nature extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>NATURE'S GIFT: HUMANS, FRIENDS & THE UNKNOWN</Title>  
     <Sub>OPENS OCT. 7TH AT THE OAKLAND MUSEUM OF CALIFORNIA</Sub>
   <Para>  We’re so excited to announce our museum exhibition, Nature’s Gift: Humans, Friends & The Unknown, an immersive experience featuring a large-scale commissioned work at the Oakland Museum of California. It will open to the public on October 7th (with a museum members opening on Friday October 6th) and remain on view in OCMA’s Great Hall through January 21, 2018.<br></br>
   “Nature’s Gift” mixes organic forms and metaphysical ideas. It is a temple created to induce a meditative journey into our psyche. This 55-foot sculpture is a living, breathing work, illuminated from within and filled with air, highlighting its animistic qualities. Visitors are invited to explore and enjoy the work in a field-like environment, as a communal experience. Nature’s Gift is a celebration of our shared time and space... a time to enjoy yourself where the space between you, the work, and the separation from each other, disappears and all becomes one.<br></br>

        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={nature1} rounded fluid /></Pic> 
  <Pic> <Image src={nature2} rounded fluid /></Pic> 
 
    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Nature;