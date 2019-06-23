import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Portfoliobox extends Component {
    state = {  }
    render() { 
        return ( 
<div>
<div class="card bg-dark text-white">
  <img class="card-img" src="..." alt="Card image"></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</div>

         );
    }
}
 
export default Portfoliobox;