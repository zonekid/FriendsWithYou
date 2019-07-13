import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Press2 from '../components/Press2';
import bgprs from '../assets/bg-prs2.jpg';


const Background = styled.div `
background-image: url(${bgprs});
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 100px;
padding-top: 100px;
`

const Pheader = styled.h1 `
font-family: HiraginoSansGB-W6;
font-size: 59.35px;
color: #ffffff;
letter-spacing: 1.82px;
text-align: left;


@media (max-width: 575px) {
    padding-top:150px;
text-align:center;
}

@media (min-width: 576px) {
    padding-top:100px;
text-align:center;
}

@media (min-width: 768px) {
    padding-top:100px;
text-align:center;
}
@media (min-width: 991px) {
    text-align: center;
padding-top:100px;
}


@media (min-width: 1367px) {
    text-align: left;
padding-top:220px;

 }

 @media (min-width: 1800px) {
    text-align: left;
padding-top:300px;

 }
`

const Exp = styled.div `
font-family: HiraginoSansGB-W6;
color: #ffffff;

@media (max-width: 575px) {
    padding-top:50px;
text-align:center;
}

@media (min-width: 576px) {
    padding-top:50px;
text-align:center;
}

@media (min-width: 768px) {
    padding-top:0px;
text-align:center;
}

@media (min-width: 991px) {
    text-align: center;
padding-top:0px;
}

@media (min-width: 1367px) {
    text-align: left;
padding-top:40px;

 }
`

const Line = styled.div `
height:1px;
 font-size:0; 
 width:40%; 
 border-bottom:1px solid #E84DCF;
 @media (max-width: 575px) {

    width:100%; 
}

@media (min-width: 576px) {
    width:100%; 
}

@media (min-width: 768px) {
    width:100%; 
}

@media (min-width: 991px) {
    width:100%; 
}

@media (min-width: 1400px) {
   width: 40%;

 }

`

class Press extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Background>
            <Row><Col xl={{offset:1, span:3}}>
            
          
            <Pheader>Press</Pheader><br></br>
          <Exp><p>As passionate as we are about our craft, nothing compares to the feeling of when others feel the same way!</p></Exp>
           <Line></Line>
            </Col>
            <Col xl={8}>
            <Press2/>
            </Col>
            </Row>
            </Background>
        </div> );
    }
}
 
export default Press;