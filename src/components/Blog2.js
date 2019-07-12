import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pop1 from '../assets/popworld.jpg';
import snoopbrd from '../assets/FriendsWithYou_Peanuts.jpg';
import Trublog from '../assets/True_Blog.png';
import Balv from '../assets/J.BALVIN_DelGrande.jpg';
import Nav from 'react-bootstrap/Nav';

const Postimg = styled.div `
background-image: none;
transition: 1.50s;

&:hover {

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${pop1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}
.nav-item .nav-link {
  color:#000000;
  &:hover {
color: #FFFFFF;
}
}
`
const Postimg2 = styled.div `
background-image: none;
transition: 1.50s;
color: #000000;
&:hover {

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${snoopbrd});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #FFFFFF;
}
.nav-item .nav-link {
  color:#000000;
  &:hover {
color: #FFFFFF;
}
}
`

const Postimg3 = styled.div `
background-image: none;
transition: 1.50s;
color: #000000;
&:hover {

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Trublog});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #FFFFFF;
}
.nav-item .nav-link {
  color:#000000;
  &:hover {
color: #FFFFFF;
}
}
`

const Postimg4 = styled.div `
background-image: none;
transition: 1.50s;
color: #000000;
&:hover {

  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Balv});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #FFFFFF;
}
.nav-item .nav-link {
  color:#000000;
  &:hover {
color: #FFFFFF;
}
}

`

const Five = styled.div `
padding-top:120px;
padding-bottom: 120px;
@media (max-width: 575px) {
  padding-top:70px;
}
`

class Blog2 extends Component {
    state = {  }
    render() { 
        return ( 
        <Five>
                    <Row>
                <Col xl={{span: 8, offset: 1}}>
<Postimg4>

<Nav.Item>
    <Nav.Link href='/balvin'>
<p style={{paddingLeft:20, paddingTop:20}}>23 April 2019</p>
<h2 style={{paddingLeft:20}}>J BALVIN X FRIENDSWITHYOU AT COACHELLA 2019</h2>
<p style={{textAlign:'right', paddingRight:20, paddingBottom:20}}>Learn More <span style={{color:'#E84DCF'}}>>></span> </p>
    </Nav.Link>
    </Nav.Item>

</Postimg4>
                </Col>
            </Row>

            <Row>
                <Col xl={{span: 8, offset: 1}}>
<Postimg2>
<Nav.Item>
    <Nav.Link href='/peanuts'>
<p style={{paddingLeft:20, paddingTop:20}}>7 October 2018</p>
<h2 style={{paddingLeft:20}}>“HOW ORIGINAL” AT STORY – PEANUTS GLOBAL ARTIST COLLECTIVE</h2>
<p style={{textAlign:'right', paddingRight:20, paddingBottom:20}}>Learn More <span style={{color:'#E84DCF'}}>>></span> </p>
    </Nav.Link>
    </Nav.Item>

</Postimg2>
                </Col>
            </Row>

            <Row>
                <Col xl={{span: 8, offset: 1}}>
<Postimg3>

<Nav.Item>
    <Nav.Link href='/true'>
<p style={{paddingLeft:20, paddingTop:20}}>15 June 2018</p>
<h2 style={{paddingLeft:20}}>SEASON 2 OF TRUE AND THE RAINBOW KINGDOM ON NETFLIX</h2>
<p style={{textAlign:'right', paddingRight:20, paddingBottom:20}}>Learn More <span style={{color:'#E84DCF'}}>>></span> </p>
    </Nav.Link>
    </Nav.Item>

</Postimg3>
                </Col>
            </Row>
            <Row>
                <Col xl={{span: 8, offset: 1}}>
<Postimg>
<Nav.Item>
    <Nav.Link href='/pop'>
<p style={{paddingLeft:20, paddingTop:20}}>5 November 2018</p>
<h2 style={{paddingLeft:20}}>POPWORLD AT COMPLEXCON NOV. 3RD & 4TH IN LONG BEACH, CA</h2>
<p style={{textAlign:'right', paddingRight:20, paddingBottom:20}}>Learn More <span style={{color:'#E84DCF'}}>>></span> </p>
    </Nav.Link>
    </Nav.Item>
</Postimg>
                </Col>
            </Row>

          

            {/* <Row>
                <Col xl={{span: 8, offset: 1}}>
<Postimg4>

<p style={{paddingLeft:20, paddingTop:20}}>23 May 2019</p>
<h2 style={{paddingLeft:20}}>The way to get started is to quit talking and begin doing.</h2>
<p style={{textAlign:'right', paddingRight:20, paddingBottom:20}}>Learn More <span style={{color:'#E84DCF'}}>>></span> </p>

</Postimg4>
                </Col>
            </Row> */}



            </Five> );
    }
}
 
export default Blog2;