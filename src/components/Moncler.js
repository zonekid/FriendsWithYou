import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import moncler from '../assets/moncler_popup.jpg';
import moncler2 from '../assets/moncler_sweater.jpg';
import moncler3 from '../assets/moncler_t_shirt_overview.jpg';
import moncler4 from '../assets/moncler_model.jpg';
import moncler5 from '../assets/moncler_line.jpg';
import './font.css';



const Title = styled.p`
font-family: Lato-Regular;
font-size: 48px;
color: #000000;
letter-spacing: 0.01px;
text-align: center;
padding-top:50px;
`

const Sub = styled.p`
font-family: Lato-Regular;
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
padding-top:100px;
`



class Moncler extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>FRIENDSWITHYOU MONCLER COLLECTION</Title>  
     <Sub>MONCLER FLAGSHIP STORE IN TOKYO</Sub>
   <Para>  To inaugurate the opening of their new flagship store in the Ginza district in Tokyo, Moncler has created a collection in collaboration with the Los Angeles artist duo, FriendsWithYou, which debuted October 24 – 25, 2015. This collection features jackets, sweatshirts and sweaters in rich, joyful tones and the artists symbolic language of Magic, Luck and Friendship. Moncler, the Italian-French brand charts a rich heritage of collaboration with the languages, imaginations and sources of inspiration of the newest generations of creatives, carefully weaving their visions into the timeless Moncler styles. Speaking in a universal language of pure joy, and inviting new friendships through their talismanic art, FriendsWithYou’s artwork is set against a hyper-chromatic universe – with reoccurring symbols that unify people through visual language, while allowing each viewer to adapt these symbols in creating a bespoke meaning of their own.<br></br>
   The collection entitled, Happy Virus, derives its name from a related animated film and a lenticular limited edition print by the artists. Happy Virus harnesses its softly reoccurring symbols to create a mantra like visual spell. FriendsWithYou’s key characters are adapted to wearable art in the Moncler collection, including: Malfi, Happy Virus, Cloudy, Look Who, Snowy and the vibrant fluorescent rainbow of Mr. TTT. Each personality presents their own subversive ideas now reprised and stripped of their old meaning, making this collection a functional interactive vocabulary to be enjoyed by the modern collector. Each piece in the Moncler FriendsWithYou Collection is a work of art, overrun and made unique by the cosmos that represents FriendsWithYou. A semantic repertoire has been translated into graphic clouds bearing hallmark smiles or eyebrows, conveyed through eyes that are astonished or bulging with joy and surprise, including mouths and fun archetypical imagery of every kind. Each symbol tells a communal story, and invites collectors to enjoy new adventures with these reoccurring characters. The Moncler FriendsWithYou Collection was sold on a world exclusive preview basis only at the Tokyo Vernissage, on 24th and 25th October, and will thereafter be available in all Moncler single brand stores from the 2016-17 Fall/Winter season.<br></br>
 
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={moncler} rounded fluid /></Pic> 
  <Pic> <Image src={moncler2} rounded fluid /></Pic> 
  <Pic> <Image src={moncler3} rounded fluid /></Pic> 
  <Pic> <Image src={moncler4} rounded fluid /></Pic> 
  <Pic> <Image src={moncler5} rounded fluid /></Pic> 

    </Col>  
    </Row>
        </div> 
        </Back>
        );
    }
}
 
export default Moncler;