import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import snoopypt from '../assets/snoopypaint.jpg';
import Image from 'react-bootstrap/Image';
import './font.css';

const Friends = styled.h1 `
 font-family: DefinitelyMaybe;
font-size: 65px;
letter-spacing: 0;
@media (max-width: 575px) {
    padding-top:50px;
font-size: 42px;
text-align:center;
}

@media (min-width: 576px) {
padding-top:50px;
font-size: 42px;
text-align:center;
}

@media (min-width: 768px) {
    padding-top:65px;
font-size: 42px;
text-align:center;
}

@media (min-width: 991px) {
padding-top:75px;

    text-align:center;
}


@media (min-width: 1367px) {
    font-size: 65px;
text-align:left;
padding-top: 160px;
 }

 @media (min-width: 1800px) {
    font-size: 65px;
    text-align:left;
padding-top: 180px;

 }
`

const Bio = styled.p `
font-family: Avenir;
font-size: 16px;
color: #000000;
letter-spacing: 1px;
line-height: 21px;
@media (max-width: 575px) {
padding-top:20px;
text-align:center;
}

@media (min-width: 576px) {

text-align:center;
}

@media (min-width: 768px) {

text-align:center;
}

@media (min-width: 991px) {
    padding-bottom:20px;
    text-align:center;
}


@media (min-width: 1367px) {
text-align:left;

 }

 @media (min-width: 1800px) {
    text-align:left;


 }
`

const Snoo = styled.div `

@media (max-width: 575px) {
    padding-top:40px;
    padding-bottom:100px;
text-align:center;
}

@media (min-width: 576px) {
    padding-top:40px;
    padding-bottom:100px;
text-align:center;
}
@media (min-width: 768px) {
    padding-bottom:100px;
text-align:center;
}
@media (min-width: 991px) {
    padding-top:50px;
    padding-bottom:100px;
    text-align:center;
}
@media (min-width: 1367px) {
    padding-top:330px;

 }
 @media (min-width: 1800px) {
    padding-top:280px;
    padding-bottom:250px;
 

}

`
const Cool = styled.div `
 @media (min-width: 1800px) {
    padding-top:100px;

 

}
`


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{background:'#F5F7F9'}}>
                <Cool>
                <Row><Col xl={{offset:3, span:4}}>
                <Friends>
                <span style={{color:'#000000'}}>We Are </span> <br></br>
                <span style={{color:'#E84DCF'}}>F</span>
                <span style={{color:'#EA0723'}}>R</span>
                <span style={{color:'#FFEE12'}}>I</span>
                <span style={{color:'#6FD006'}}>E</span>
                <span style={{color:'#30A8FF'}}>N</span>
                <span style={{color:'#AC25F0'}}>D</span>
                <span style={{color:'#E84DCF'}}>S</span>
                <span style={{color:'#EA0723'}}>W</span>
                <span style={{color:'#FFEE12'}}>I</span>
                <span style={{color:'#6FD006'}}>T</span>
                <span style={{color:'#30A8FF'}}>H</span>
                <span style={{color:'#AC25F0'}}>Y</span>
                <span style={{color:'#E84DCF'}}>O</span>
                <span style={{color:'#EA0723'}}>U</span>
                </Friends>
                <Bio style={{background:'#F5F7F9'}}>
                FriendsWithYou is the fine art collaborative of Samuel Borkson and Arturo Sandoval III, working collectively since 2002 with the sole purpose of spreading the positive message of Magic, Luck, and Friendship™. Known for immersive installations and interactive artworks, FriendsWithYou invites viewers of their work to reconnect with and reinterpret their lives through communal experiences. The artists work in a variety of mediums including painting, sculpture, large-scale experiential installations, live performances, and more recently, virtual reality and animation. Incorporating the healing arts, modern rituals, animism, and unified symbols, their works are meant to prompt a wide spectrum of untapped emotions, from playfulness to self-reflection, enabling both personal and shared experiences. FriendsWithYou’s mission is to cultivate moments of spiritual awareness and powerful, joyous interactions.<br></br><br></br>

                FriendsWithYou actively works to spread the message of connectivity around the world, with a simple mission to become Friends-With-You.
                </Bio>
                </Col>
                <Col xl={3}>
       <Snoo>     <Image src={snoopypt} fluid /></Snoo>  
                </Col>
                </Row>
                </Cool>
            </div>
         );
    }
}
 
export default About;