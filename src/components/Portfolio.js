import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import koreanblue from '../assets/korean_blue.jpg';
import rainbowrink from '../assets/Rainbow_rink_2.jpg';
import santa from '../assets/Santa_People_Gathering.jpg';
import sanFran from '../assets/IntoTheClouds.jpg';
import pinkmoon from '../assets/korea_night_rainbow.jpg';
import kermit from '../assets/Kermit2.jpg';
import cloud from '../assets/LittleCloudSculpture_Home2.jpg';
import bubbly from '../assets/Bubbly_fiberglass2.jpg';
import natureg from '../assets/NaturesGiftExhibit2.jpg';
import magicseed from '../assets/MagicSeedDigital.png';
import nerd from '../assets/Nerd_painting.jpg';
import boom from '../assets/Rainbow_boom.jpg';
import virus from '../assets/happy_virus_digital.jpg';
import ezbean from '../assets/RainbowBean2.jpg';
import inflate from '../assets/Inflate_cover.jpg';
import moncler from '../assets/Moncler_popup.jpg';
import heart from '../assets/heartcover.jpg';
import Nav from 'react-bootstrap/Nav';


const Ovltext = styled.div `
text-transform:uppercase;
text-align: center;
font-size: 12px;
color:#ffffff;
@media (max-width: 575px) {
  padding-top:80px;
padding-bottom: 80px;
}

@media (min-width: 576px) {
  padding-top:150px;
padding-bottom: 150px;
}

@media (min-width: 768px) {
  padding-top:70px;
padding-bottom: 70px;
}

@media (min-width: 991px) {
  padding-top:30px;
padding-bottom:30px;
}


@media (min-width: 1367px) {
  padding-top:110px;
padding-bottom: 100px;

 }

 @media (min-width: 1800px) {
  padding-top:150px;
padding-bottom: 150px;

 }
`

const Ovl1 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(80, 235, 254, 0.75);
}
`

const Ovl2 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(255, 12, 12, 0.75);
}
`

const Ovl3 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(206, 80, 254, 0.75);
}
`

const Ovl4 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(255, 5, 170, 0.75);
}
`
const Four = styled.div `
@media (min-width: 991px) {
  
    padding-top: 40px;
    padding-bottom: 100px;
}
@media (min-width: 1367px) {
  padding-top:160px;


 }

@media (min-width: 1680px) {
padding-top: 140px;
padding-bottom: 200px;
 }

`


const Portheader = styled.h1 `
font-family: HiraginoSansGB-W6;
font-size: 59.35px;
letter-spacing: 1.82px;
text-align: left;
color: #E84DCF;

@media (max-width: 575px) {
    font-size: 29.35px;
    text-align:center;
    padding-top: 30px;
}
@media (min-width: 768px) {
    text-align:center;
    padding-top: 30px;
}

@media (min-width: 991px) {
    text-align:center;
    padding-top: 140px;
}


@media (min-width: 1367px) {
  padding-top:290px;


 }

 @media (min-width: 1800px) {
  padding-top:310px;


 }

 @media only screen 
and (min-device-width : 375px) 
and (max-device-width : 667px) 
and (orientation : landscape) { 
    padding-top:20px;
    text-align:center;
}
@media only screen 
and (min-device-width : 414px) 
and (max-device-width : 736px) 
and (orientation : landscape) { 
    padding-top:20px;
    text-align:center;
}
`

const PortBox = styled.div `
 @media (min-width: 1367px) {
  padding-bottom:200px;

 }
`

const List = styled.div `
font-family: HiraginoSansGB-W3;
font-size: 14px;
color: #000000;
letter-spacing: 0.96px;
line-height: 50px;
padding-top: 50px;
cursor:pointer;
@media (max-width: 575px) {
    text-align:center;
    padding-bottom: 50px;
}

@media (min-width: 576px) {
    text-align:center;
    padding-bottom: 50px;
}
@media (min-width: 768px) and (max-width: 991px) {
    text-align:center;
    padding-bottom: 50px;
}

@media (min-width: 991px) and (max-width:1680px) {
    padding-bottom: 120px;
}
@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 667px) 
and (orientation : landscape) { 

    text-align:center;
}
@media only screen 
and (min-device-width : 414px) 
and (max-device-width : 736px) 
and (orientation : landscape) { 

    text-align:center;
}
`

const ListUnderline = styled.span `
:hover{
    /* text-decoration: underline;
    text-decoration-color: #E84DCF; */
    border-bottom: 2px solid #E84DCF;
}

`

const Cheight = styled.div `
.card-img-top {

@media (max-width: 575px) {
  height:250px;
}
@media (min-width: 576px) {
  height:250px;
}

@media (min-width: 768px) {
  height:280px;
}
@media (min-width: 991px) {
  height:280px;
}
@media (min-width: 1367px) {
height:320px;

 }
 @media (min-width: 1800px) {
  height:400px;

 }

}

`


class Portfolio extends Component {
    state = {  
      image:[pinkmoon, rainbowrink, santa, sanFran],
      title: ['Super Moon', 'Rainbow City Roller Rink', 'Light Wave', 'Into the Clouds'],
      text: ['Seoul Korea', 'Detroit', 'Santa Monica', 'San Francisco'],
      link:['#/seoul', '/#rainbow', '/light', '/intoclouds']
    }
    
exhibitionChange = () => {
this.setState({image:[natureg, cloud, bubbly, kermit],
  title: [`Nature's Gift`, `Flashpoint`, `Happy Rainbow`, `Playworks`],
  text: ['Oakland', 'New York City', 'Hong Kong', 'Los Angeles'],
  link:['/nature', '/flashpoint', '/happy', '/play']
})
}

installationChange = () => {
  this.setState({image:[pinkmoon, rainbowrink, santa, sanFran],
    title: ['Super Moon', 'Rainbow City Roller Rink', 'Light Wave', 'Into the Clouds'],
    text: ['Seoul Korea', 'Detroit', 'Santa Monica', 'San Francisco'],
    link:['/seoul', '/rainbow', '/light', '/intoclouds']
  })

}

printChange = () => {
  this.setState({image:[magicseed, nerd, boom, virus],
    title: ['Magic Seed', 'Magical Explosions', 'Rainbow Friends', 'Happy Virus'],
    text: ['Oakland', 'California', 'Sao Paulo', 'New York City'],
    link:['/magic', '/nerd', '/rain', '/virus']
  })

}
    

sculptureChange = () => {
  this.setState({image:[ezbean, inflate, moncler, heart],
    title: ['EZ Bean Everest', 'Rainbowl', 'Moncler Collection', 'Heart Sculptures'],
    text: ['New Canaan', 'Austin', 'Tokyo', 'Los Angeles'],
    link:['/bean', '/rainbowl', '/moncler', '/heart']
  })

}
    
    render() { 
        return ( 
<div style={{background:'#F5F7F9'}}>
    <Row>
        <Col lg={5} xl={5}>
            <PortBox>

        <Row>
        <Col  lg={{ offset: 1}} xl={{ offset: 5}} >
<Portheader>
PORTFOLIO
</Portheader>
</Col>
</Row>
<Row>   
    <Col lg={{offset:8}} xl={{offset:9}}>
        <List>
          
        <ListUnderline onClick={this.exhibitionChange}>Exhibitions<br></br></ListUnderline>
        <ListUnderline onClick={this.installationChange}>Installations<br></br></ListUnderline>
        <ListUnderline onClick={this.printChange}>Print<br></br></ListUnderline>
        <ListUnderline onClick={this.sculptureChange}>Sculpture<br></br></ListUnderline>
</List>
</Col>
</Row>
        </PortBox>
        </Col>   
       <Col lg={7} xl={7} > 
       <Four>
       <CardDeck className="pb-4">
  <Card className="text-white">
 <Cheight> <Card.Img variant="top" src={this.state.image[0]} /></Cheight> 
    <Card.ImgOverlay>
      <Nav.Item>
    <Nav.Link href={this.state.link[0]}>
      <Ovl1>
        <Ovltext>
      <Card.Title style={{fontSize: 24}}>{this.state.title[0]}</Card.Title>
      <Card.Text>
      {this.state.text[0]}
      </Card.Text>
      </Ovltext>
      </Ovl1>
      </Nav.Link>
  </Nav.Item>
      </Card.ImgOverlay>

  </Card>
  <Card className="text-white">
 <Cheight> <Card.Img variant="top" src={this.state.image[1]} /></Cheight>
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link href={this.state.link[1]}>
      <Ovl2>
        <Ovltext>
      <Card.Title style={{fontSize: 24}}>{this.state.title[1]}</Card.Title>
      <Card.Text>
      {this.state.text[1]}
</Card.Text>
</Ovltext>
</Ovl2>
</Nav.Link>
  </Nav.Item>
</Card.ImgOverlay>
  </Card>

</CardDeck>

<CardDeck className="pb-4">
  <Card className="text-white">
  <Cheight>    <Card.Img  variant="top" src={this.state.image[2]} /></Cheight> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link href={this.state.link[2]}>
      <Ovl3>
        <Ovltext>
      <Card.Title style={{fontSize: 24}}>{this.state.title[2]}</Card.Title>
      <Card.Text>
      {this.state.text[2]}
      </Card.Text>
      </Ovltext>
      </Ovl3>
      </Nav.Link>
  </Nav.Item>
      </Card.ImgOverlay>

  </Card>
  <Card className="text-white">
  <Cheight>   <Card.Img  variant="top" src={this.state.image[3]} /></Cheight> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link href={this.state.link[3]}>
      <Ovl4>
        <Ovltext>
      <Card.Title style={{fontSize: 24}}>{this.state.title[3]}</Card.Title>
      <Card.Text>
      {this.state.text[3]}
      </Card.Text>
      </Ovltext>
      </Ovl4>
      </Nav.Link>
  </Nav.Item>
      </Card.ImgOverlay>
  </Card>

</CardDeck>
</Four>


       </Col>  
    </Row>

</div>

         );
    }
}
 
export default Portfolio;