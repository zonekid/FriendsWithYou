import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import viral from '../assets/happy_virus_digital.jpg';
import viral2 from '../assets/happyvirus_print.jpg';
import Nav from 'react-bootstrap/Nav';
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

const Pic2 = styled.div`
text-align:center;
padding-top:60px;
`

const Pic = styled.div`
padding-top:60px;
`
const Back = styled.div`
background: rgba(205,214,225,0.20);
padding-bottom:50px;
padding-top:100px;
`


class Virus extends Component {
    state = {  }
    render() { 
        return ( <Back><div>
        <Title>HAPPY VIRUS PRINT</Title>  
     <Sub>LIMITED EDITION LENTICULAR PRINTS
       </Sub>
   <Para>  This imagery is based on our new animation by the same name, which is a visual spell. The Cloud has been a symbolic icon of our work since the beginning. To us, it represents a key illustration of our mission. It is a symbol with the power to transcend the viewer to a relaxed and joyous state, revealing that everything in our world has a soul and a purpose - a spiritual essence. This animist perspective reflects in our work as a sweet visual soundscape, casting a positive message of happiness and connectivity.<br></br>
   The Native Americans believed that the clouds were the Gods who watched over them and their livelihoods. Bringing this print to life invokes a continuation into the proliferation of healing art objects. Combining movement with the symbol of a cloud is our way of making everyone who encounters it instantly happy on a day-to-day basis.<br></br>
        </Para> 

          <Row>
    <Col xl={{offset:4, span:4}}>
  <Pic> <Image src={viral} rounded fluid /></Pic> 
  <Pic> <Image src={viral2} rounded fluid /></Pic> 
 
    </Col>  
    
    </Row>
  <Pic2> <iframe title="vimeo-player" src="https://player.vimeo.com/video/142326321" width="640" height="360" frameborder="0" allowfullscreen></iframe></Pic2> 
        </div> 
        </Back>
        );
    }
}
 
export default Virus;