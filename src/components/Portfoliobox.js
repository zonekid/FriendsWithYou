import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import koreanblue from '../assets/korean_blue.jpg';
import rainbowrink from '../assets/Rainbow_rink_2.jpg';
import santa from '../assets/Santa_People_Gathering.jpg';
import sanFran from '../assets/IntoTheClouds.jpg';
import pinkmoon from '../assets/korea_night_rainbow.jpg';

const Ovltext = styled.div `

text-align: center;
font-size: 16px;
@media (max-width: 575px) {
  padding-top:80px;
padding-bottom: 80px;
}

@media (min-width: 576px) {
  padding-top:80px;
padding-bottom: 80px;
}

@media (min-width: 768px) {
  padding-top:70px;
padding-bottom: 70px;
}

@media (min-width: 991px) {
  padding-top:30px;
padding-bottom:30px;
}


@media (min-width: 1400px) {
  padding-top:80px;
padding-bottom: 80px;

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
  
    padding-top: 80px;
}

@media (min-width: 1400px) {
padding-top: 0px;

 }

`



class Portfoliobox extends Component {
    state = { 

     }
    // padleft = {
    //   paddingLeft: 0
    // }

    // padright = {
    //   paddingRight: 0
    // }

    render() { 

        return ( 
<div>
<Four>
<Row className="pb-4"> 
<Col>
<CardGroup>

<Card className="text-white h-100">
<Card.Img className="h-100"  src={pinkmoon} alt="Card image" />
<Card.ImgOverlay>
  <Ovl1>
    <Ovltext>
  <Card.Title style={{fontSize: 24}}>Super Moon</Card.Title>
    <Card.Text>
    Seoul Korea
    </Card.Text>
    </Ovltext>
    </Ovl1>
  </Card.ImgOverlay>
</Card>



<Card className="text-white h-100">
<Card.Img className="h-100" src={rainbowrink} alt="Card image" />
  <Card.ImgOverlay>
  <Ovl2>
  <Ovltext>
    <Card.Title style={{fontSize: 24}}>Rainbow City Roller Rink</Card.Title>
    <Card.Text>
    Detroit
    </Card.Text>
    </Ovltext>
    </Ovl2>
  </Card.ImgOverlay>
</Card>

</CardGroup>



<CardGroup>

<Card className="text-white">
<Card.Img className="h-100"  src={santa} alt="Card image" />
  <Card.ImgOverlay>
    <Ovl3>
  <Ovltext>
    <Card.Title style={{fontSize: 24}}>Light Wave</Card.Title>
    <Card.Text>
    Santa Monica
    </Card.Text>
    </Ovltext>
    </Ovl3>
  </Card.ImgOverlay>
</Card>


<Card className="text-white">
<Card.Img className="h-100" src={sanFran} alt="Card image" />
  <Card.ImgOverlay>
    <Ovl4>
  <Ovltext>
    <Card.Title style={{fontSize: 24}}>Into The Clouds</Card.Title>
    <Card.Text>
    San Francisco
    </Card.Text>
    </Ovltext>
    </Ovl4>
  </Card.ImgOverlay>
</Card>

</CardGroup>
</Col>
</Row>
</Four>
</div>

         );
    }
}
 
export default Portfoliobox;