import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import instagram from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const NavStyles = styled.div `

.navbar {
  background-image: linear-gradient(180deg, rgba(255,255,255,0.88) 65%, rgba(255,255,255,0.00) 100%);
border-radius: 8px;
height: 140px;

}



.navbar .cool {
  font-family: HiraginoSansGB-W6;
font-size: 16px;
color:#000000;
letter-spacing: 0;
padding-left:20px;
padding-right:20px;
text-transform: uppercase;

&:hover {
    color: #AC25F0;
  };
};

.navbar .cool1 {
  font-family: HiraginoSansGB-W6;
font-size: 16px;
color:#000000;
letter-spacing: 0;
padding-left:20px;
padding-right:20px;
text-transform: uppercase;
&:hover {
    color: #E84DCF;
  };
};

.navbar .cool2 {
  font-family: HiraginoSansGB-W6;
font-size: 16px;
color:#000000;
letter-spacing: 0;
padding-left:20px;
padding-right:20px;
text-transform: uppercase;
&:hover {
    color: #EA0723;
  };
};

.navbar .cool3 {
  font-family: HiraginoSansGB-W6;
font-size: 16px;
color:#000000;
letter-spacing: 0;
padding-left:20px;
padding-right:20px;
text-transform: uppercase;
&:hover {
    color: #FFEE12;
  };
};

.navbar .cool4 {
  font-family: HiraginoSansGB-W6;
font-size: 16px;
color:#000000;
letter-spacing: 0;
padding-left:20px;
padding-right:20px;
text-transform: uppercase;
&:hover {
    color: #30A8FF;
  };
};

.navbar-brand {
  font-family: DefinatelyMaybe;
font-size: 30px;
color: #000000;
letter-spacing: 0;
}
`




const Navigation = () => {
    return ( 
      <NavStyles>
        <Navbar expand="lg" >
  <Navbar.Brand href="#home">FriendsWithYou</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-1" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between align-items-center w-100">
    <Nav className="mx-auto text-center">
      <NavLink className="cool"   to="/">Home</NavLink>
      <NavLink className="cool1" to="/portfolio">About</NavLink>
      <NavLink className="cool2"  to="/portfolio">Portfolio</NavLink>
      <NavLink className="cool3" to="/portfolio">Info</NavLink>
      <NavLink className="cool4" to="/portfolio">Blog</NavLink>
    </Nav>
    
    <Nav className="flex-row justify-content-center flex-now">
    <Nav.Link href="https://www.instagram.com/friendswithyou/?hl=en" className="mr-1"><img
        src={instagram}
        width="25"
        height="25"
        // className="d-inline-block align-top"
        alt="linkedin"
      /></Nav.Link>
        <Nav.Link href="https://www.facebook.com/friendswithyou/" className="mr-1"><img
        src={facebook}
        width="25"
        height="25"
        // className="d-inline-block align-top"
        alt="linkedin"
      /></Nav.Link>
        <Nav.Link href="https://twitter.com/friendswithyou?lang=en" className="mr-1"><img
        src={twitter}
        width="25"
        height="25"
        // className="d-inline-block align-top"
        alt="linkedin"
      /></Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
</NavStyles>

     );
}
 
export default Navigation;