import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackgroundSlider from 'react-background-slider';
import macysParade from '../assets/macys_parade.png';
import yard from '../assets/LittleCloudSculpture_Home.png';
import pink from '../assets/baloon_background.png';

class Background extends Component {
    state = {  }
    render() { 
        return ( 
<div>
 <BackgroundSlider
  images={[macysParade, yard, pink]}
 duration={6} transition={2} 
/> 



</div>

         );
    }
}
 
export default Background;