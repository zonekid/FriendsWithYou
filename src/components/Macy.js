import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import parade from '../assets/macys_parade.jpg';
import parade2 from '../assets/macys_cloud_rainbow.jpg';
import parade3 from '../assets/macys_radio_city.jpg';
import parade4 from '../assets/cloud_cbs.jpg';
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


const Pic = styled.div`
padding-top:60px;
`

const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
`

const Pic2 = styled.div`
text-align:center;
padding-top:60px;
`




class Macy extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>LITTLE CLOUD IN MACY'S THANKSGIVING PARADE!</Title>  

   <Para>  It happened! Little Cloud made it all the way to New York for the Macy's Thanksgiving Day Parade!!! This is a dream come true. It is an honor for us to be able to share this symbol of light and love with the world. We are so grateful.‍<br></br>
   Please read more here: <a href="https://www.nytimes.com/2018/10/31/arts/design/macys-thanksgiving-day-parade.html" target="none">NYTimes </a>
We want to thank all the amazing ppl that are on this journey with us. We love u! Big thank you to Jori Finkel for the amazing article and to Macy's for welcoming us to their joyful celebration!
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={parade} rounded fluid /></Pic> 
  <Pic> <Image src={parade2} rounded fluid /></Pic> 
  <Pic> <Image src={parade3} rounded fluid /></Pic> 
  <Pic> <Image src={parade4} rounded fluid /></Pic> 


    </Col>  
    </Row>
    <Pic2> <iframe title="vimeo-player" src="https://player.vimeo.com/video/306304136" width="640" height="360" frameborder="0" allowfullscreen></iframe></Pic2> 
        </div> 
        </Back>
        );
    }
}
 
export default Macy;