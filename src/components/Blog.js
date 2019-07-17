import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import sitw from '../assets/sitw_flyer.jpg';
import Bgb from '../assets/blog_bg.jpg';
import Blog2 from '../components/Blog2';
import Nav from 'react-bootstrap/Nav';
import './font.css';

const BlogHeader = styled.h1 `
font-family: Hiragino Sans GB;
font-size: 59.35px;
letter-spacing: 1.82px;
text-align: left;
text-transform: uppercase;

@media (max-width: 575px) {
padding-top:120px;
text-align:center;
}

@media (min-width: 576px) {
padding-top:120px;
text-align:center;
}

@media (min-width: 768px) {
  padding-top:120px;
text-align:center;
}

@media (min-width: 991px) {
  padding-top:120px;
}


@media (min-width: 1367px) {
  padding-top:120px;


 }


`
const Background = styled.div `
background-image: url(${Bgb});
background-repeat: no-repeat;
background-size: cover;
padding-top:50px;
`


class Blog extends Component {
    state = {  }
    render() { 
        return (
            <div>
              <Background>
                <Row>
<Col xl={6}>
<div>
<Row>
<Col xl={{offset: 1}}>
<BlogHeader>
<span style={{color: '#000000'}}>Our</span><br></br><span style={{color: '#E84DCF'}}>Blog</span>
</BlogHeader>
</Col>
</Row>
<Row>
    <Col style={{paddingTop:30,}} lg={{span:6, offset: 3}} md={{span:6, offset: 3}} xl={{span:5, offset: 4}}>
    <Nav.Item>
    <Nav.Link href='#/water'>
    <Card border="light" className="h-100">
    <Card.Body>
      <Card.Title style={{color:'#000000', fontFamily: 'Hiragino Sans GB', textAlign:'center'}}>
      FRIENDSWITHYOU INFLATABLES AT SOMETHING IN THE WATER IN VIRGINIA BEACH
      </Card.Title>
    </Card.Body>
    <Card.Img className="h-100" variant="bottom" src={sitw} />
  </Card>
    </Nav.Link>
    </Nav.Item>
    </Col>
</Row>

</div>
</Col>
<Col xl={6}>
<Blog2/>
</Col>
                </Row>
                </Background>
        </div> );
    }
}
 
export default Blog;