import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Press from './components/Press';
import Contact from './components/Contact';
import About from './components/About';
import Seoul from './components/Seoul';
import Rainbow from './components/Rainbow';
import Light from './components/Light';
import Clouds from './components/Intoclouds';
import Nature from './components/Nature';
import Flashpoint from './components/Flashpoint';
import Happy from './components/Happy';
import Play from './components/Play';
import Magic from './components/Magic';
import Nerd from './components/Nerd';
import Rainfriends from './components/Rainfriends';
import Virus from './components/Virus';
import Bean from './components/Bean';
import Rainbowl from './components/Rainbowl';
import Moncler from './components/Moncler';
import Heart from './components/Heart';
import Pop from './components/Pop';
import Peanuts from './components/Peanuts';
import True from './components/True';
import Balvin from './components/Balvin';
import Water from './components/Water';
import Macy from './components/Macy';
import {Nomatch} from './components/Nomatch';

function App() {
  return (
    <div >
 <React.Fragment>
   <Container fluid>
<Router basename={process.env.PUBLIC_URL}>
<Navigation/>
  <Switch>
   <Route exact path="/" component={Main}/>
   <Route path="/portfolio" component={Portfolio}/>
   <Route path="/about" component={About}/>
  <Route path="/press" component={Press}/>
   <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/seoul" component={Seoul}/>
    <Route path="/rainbow" component={Rainbow}/>
    <Route path="/light" component={Light}/>
    <Route path="/intoclouds" component={Clouds}/>
    <Route path="/nature" component={Nature}/>
    <Route path="/flashpoint" component={Flashpoint}/>
    <Route path="/happy" component={Happy}/>
    <Route path="/play" component={Play}/>
    <Route path="/magic" component={Magic}/>
    <Route path="/nerd" component={Nerd}/>
    <Route path="/rain" component={Rainfriends}/>
    <Route path="/virus" component={Virus}/>
    <Route path="/bean" component={Bean}/>
    <Route path="/rainbowl" component={Rainbowl}/>
    <Route path="/moncler" component={Moncler}/>
    <Route path="/heart" component={Heart}/>
    <Route path="/pop" component={Pop}/>
    <Route path="/peanuts" component={Peanuts}/>
    <Route path="/true" component={True}/>
    <Route path="/balvin" component={Balvin}/>
    <Route path="/water" component={Water}/>
    <Route path="/macy" component={Macy}/>
    <Route component={Nomatch}/>  
  </Switch>

</Router>
   </Container>
 </React.Fragment>
    </div>
  );
}

export default App;
