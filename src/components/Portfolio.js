import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import pink from '../assets/baloon_background.png';

const Portheader = styled.h1 `
font-family: HiraginoSansGB-W6;
font-size: 59.35px;
letter-spacing: 1.82px;
text-align: left;
color: #E84DCF;
padding-top: 300px;
`

const PortBox = styled.div `
background: rgba(205,214,225,0.20);
height: 1000px;
`

const List = styled.div `
font-family: HiraginoSansGB-W3;
font-size: 14px;
color: #000000;
letter-spacing: 0.96px;
line-height: 50px;
padding-top: 50px;
`

const ListUnderline = styled.span `
:hover{
    /* text-decoration: underline;
    text-decoration-color: #E84DCF; */
    border-bottom: 2px solid #E84DCF;
}

`



class Portfolio extends Component {
    state = {  }
    
    
    
    render() { 
        return ( 
<div>
    <Row>
        <Col xl={6}>
            <PortBox>

        <Row>
        <Col xl={{ offset: 6}} >
<Portheader>
PORTFOLIO
</Portheader>
</Col>
</Row>
<Row>   
    <Col xl={{offset:9}}>
        <List>
          
        <ListUnderline>Exhibitions<br></br></ListUnderline>
        <ListUnderline>Installations<br></br></ListUnderline>
        <ListUnderline>Print<br></br></ListUnderline>
        <ListUnderline>Sculpture<br></br></ListUnderline>
</List>
</Col>
</Row>
        </PortBox>

        </Col>
    </Row>
</div>

         );
    }
}
 
export default Portfolio;