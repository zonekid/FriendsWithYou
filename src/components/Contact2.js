import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import rainbow from '../assets/friendimg.jpg';
import Image from 'react-bootstrap/Image'



const FriendsTitle = styled.p `
font-family: DefinatelyMaybe;
font-size: 48px;
letter-spacing: 1.82px;
text-align: center;

`


const Info3 = styled.p `
font-family: HelveticaNeue-ThinItalic;
font-size: 30px;
color: #000000;
letter-spacing: 1.82px;
text-align: center;
`
const Six = styled.div `

@media (max-width: 575px) {
    padding-top:370px;
}

@media (min-width: 576px) {
    padding-top:770px;
}

@media (min-width: 768px) {
    padding-top:940px;

}

@media (min-width: 991px) {
    padding-top:1200px;
 
}

@media (min-width: 1367px) {

padding-top:200px;
 }

 @media (min-width: 1800px) {
    padding-top:200px;

 }
`


class Contact2 extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
   <Row>
          
            <Col   sm={{offset:2}} md={{offset:2}} lg={{offset:3}} xl={{offset:3}}>
 <Six><Image src={rainbow} fluid/></Six> 
          
</Col>
            </Row> 

        </div> );
    }
}
 
export default Contact2;