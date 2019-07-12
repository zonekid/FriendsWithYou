import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import amex from '../assets/AMEZ_Welcome_wide2.jpeg';
import play from '../assets/jbalvin_playtime.jpg';
import mace from '../assets/MACYs_Cloud_Rainbow.jpeg';
import cave from '../assets/Light_Cave_Night2.jpg';
import chill from '../assets/Korea_Chillin.jpg';
import moncler from '../assets/Moncler_line.jpg';
import Nav from 'react-bootstrap/Nav';

const Blgspce = styled.div `
@media (max-width: 575px) {
  padding-top:100px;
padding-bottom: 100px;
}

@media (min-width: 576px) {
    padding-top:100px;
padding-bottom: 100px;
}

@media (min-width: 768px) {
  padding-top:100px;
padding-bottom: 100px;
}

@media (min-width: 991px) {
  padding-top:100px;
padding-bottom:100px;
}


@media (min-width: 1367px) {
  padding-top:100px;
padding-bottom: 250px;

 }
`

const Ovltext = styled.div `
text-transform:uppercase;
color:#ffffff;
text-align: center;
font-size: 12px;
@media (max-width: 575px) {
  padding-top:80px;
padding-bottom: 50px;
}

@media (min-width: 576px) {
  padding-top:30px;
padding-bottom: 10px;
}

@media (min-width: 768px) {
  padding-top:30px;
padding-bottom: 20px;
}

@media (min-width: 991px) {
  padding-top:50px;
padding-bottom:50px;
}


@media (min-width: 1367px) {
  padding-top:60px;
padding-bottom: 60px;

 }
@media (min-width: 1800px) {
  padding-top:100px;
padding-bottom: 100px;

 }
`

const Gray = styled.div `
filter: grayscale(100%);

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

const Ovl5 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(130, 255, 18, 0.75);
}
`

const Ovl6 = styled.div `
opacity:0;
transition:0.75s;
&:hover {
  opacity: 1;
  background: rgb(18, 142, 255, 0.75);
}
`



class Press2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Blgspce>
                <Row className="pb-4">
                <Col>
                    <CardDeck>
                 
  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100"  src={amex} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='http://www.papermag.com/friends-with-you-coachella-2635459635.html?rebelltitem=3#rebelltitem3'>
  <Ovl1>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>Paper Magazine</Card.Title>
    <Card.Text>
    American Express
    </Card.Text>
    </Ovltext>
    </Ovl1>
   </Nav.Link></Nav.Item>
      </Card.ImgOverlay>
</Card>

  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100"   src={play} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='https://variety.com/2019/music/news/j-balvin-coachella-latin-music-astonishing-surreal-set-1203189255/'>
    <Ovl2>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>VARIETY MAGAZINE</Card.Title>
    <Card.Text>
    Coachella
    </Card.Text>
    </Ovltext>
    </Ovl2>
    </Nav.Link></Nav.Item>
      </Card.ImgOverlay>

  </Card>

  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100"   src={mace} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='https://www.wmagazine.com/story/macys-thanksgiving-day-parade-2018-little-cloud-balloon-friendswithyou'>
    <Ovl3>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>Highsnobiety</Card.Title>
    <Card.Text>
    Macy's Parade
    </Card.Text>
    </Ovltext>
    </Ovl3>
    </Nav.Link></Nav.Item>
      </Card.ImgOverlay>

  </Card>
                    </CardDeck>
                    </Col>
                </Row>

                <Row>
                <Col>
                    <CardDeck>
                 
  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100" src={cave} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='https://www.complex.com/style/2014/09/friendswithyou-light-cave-installation-opens-at-the-standard-high-line-plaza'>
  <Ovl4>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>Complex</Card.Title>
    <Card.Text>
    Light Cave
    </Card.Text>
    </Ovltext>
    </Ovl4>
    </Nav.Link></Nav.Item>
      </Card.ImgOverlay>
</Card>

  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100"  src={chill} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='http://www.koreatimes.co.kr/www/news/nation/2016/08/116_212932.html'>
    <Ovl5>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>Korea Times</Card.Title>
    <Card.Text>
    Super Moon
    </Card.Text>
    </Ovltext>
    </Ovl5>
    </Nav.Link></Nav.Item>
      </Card.ImgOverlay>

  </Card>

  <Card className="text-white h-100">
  <Gray> <Card.Img className="h-100"   src={moncler} /></Gray> 
    <Card.ImgOverlay>
    <Nav.Item>
    <Nav.Link target="none" href='https://www.gqitalia.it/moda/trend/new/2015/10/21/moncler-apre-a-tokyo-e-disegna-una-collezione-con-i-friendswithyou'>
    <Ovl6>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>GQ Italia</Card.Title>
    <Card.Text>
    Moncler
    </Card.Text>
    </Ovltext>
    </Ovl6>
    </Nav.Link></Nav.Item>
      </Card.ImgOverlay>

  </Card>
                    </CardDeck>
                    </Col>
                </Row>
                </Blgspce>
            </div>
         );
    }
}
 
export default Press2;