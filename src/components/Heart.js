import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import heart from '../assets/heartcover.jpg';
import heart2 from '../assets/purplecover.jpg';
import heart3 from '../assets/bluecover.jpg';
import heart4 from '../assets/greencover.jpg';
import heart5 from '../assets/yellowcover.jpg';
import heart6 from '../assets/redheart.jpg';



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



class Heart extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>HEART SCULPTURES</Title>  
     <Sub>AT ART LOS ANGELES CONTEMPORARY 2016</Sub>
   <Para>  We are happy to present six animistic heart emoji sculptures. Inspired by the current progression into the abbreviated symbolic language of our digital times, this new series of works highlights the vast emotional spectrum and will be shown against the Photoshop backdrop of The Hole’s booth at Art Los Angeles Contemporary 2016. As a general theme in our work, we implore animism to give life, figuratively, to sculptural objects. Each heart has a color and related idea referenced in their titles; "Love Yourself" (red), "Good For You" (gold), "Same Old Love" (green), "Sorry" (blue), "The Heart Wants What it Wants" (purple), "What Do You Mean" (pink). The titles are from current songs released by the pop stars Justin Bieber and Selena Gomez. These songs link the object to the popular idealized perception of “love” and the loss of it, further empowering the objects with a vast range of what love is and then portraying it in all its strange cuteness as a living objects with a soul and so much more.

<br></br>

        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={heart} rounded fluid /></Pic> 
  <Pic> <Image src={heart2} rounded fluid /></Pic> 
  <Pic> <Image src={heart3} rounded fluid /></Pic> 
  <Pic> <Image src={heart4} rounded fluid /></Pic> 
  <Pic> <Image src={heart5} rounded fluid /></Pic> 
  <Pic> <Image src={heart6} rounded fluid /></Pic> 

    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Heart;