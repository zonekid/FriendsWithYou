import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import contact3 from '../assets/santa_night.jpg';
import Contact2 from '../components/Contact2';
import './font.css';

const Titletact = styled.h1 `
font-family: Hiragino Sans GB;
font-size: 59.35px;
letter-spacing: 1.82px;
text-align: left;
text-transform: uppercase;
@media (max-width: 575px) {
    padding-top:50px;
    padding-bottom:30px;
text-align:center;
}

@media (min-width: 576px) {
    padding-top:50px;
    padding-bottom:30px;
text-align:center;
}

@media (min-width: 768px) {
    padding-top:50px;
    padding-bottom:50px;
text-align:center;
}
@media (min-width: 991px) {
    padding-top:150px;
    padding-bottom:50px;
    text-align:center;
}


@media (min-width: 1367px) {
text-align:left;
padding-top:200px;
 }

 @media (min-width: 1800px) {
    text-align:left;
    padding-top:200px;

 }
`


const Background3 = styled.div `
background-image: url(${contact3});
background-repeat: no-repeat;
background-size: 50%;
padding-bottom:600px;

@media (max-width: 575px) {
    background-size: 100%;
    padding-bottom:100px;
}

@media (min-width: 576px) {
    background-size: 100%;
    padding-bottom:100px;
}

@media (min-width: 768px) {
    background-size: 100%;
    padding-bottom:100px;
}

@media (min-width: 991px) {
    background-size: 100%;
    padding-bottom:100px;
}

@media (min-width: 1200px) {
    background-size: 50%;
    padding-bottom:300px;
}

@media (min-width: 1800px) {
    background-size: 50%;
    padding-bottom:600px;
}
`



class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
  <Background3>
   <Row>
      <Col xl={{offset:2, span:4}}>
            <Titletact>
                <span style={{color: '#ffffff'}}>Get In</span><br></br><span style={{color: '#E84DCF'}}>Touch</span>
                </Titletact>
            </Col>
            <Col xl={6}>
            <Contact2/>
            </Col>
            </Row>
            </Background3>

        </div> );
    }
}
 
export default Contact;