import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div >
 <React.Fragment>
   <Container fluid>
<Router>
<Navigation/>
  <Switch>
   <Route exact path="/" component={Main}/>
   <Route path="/portfolio" component={Portfolio}/>
  {/* <Route path="/about" component={About}/>
    <Route path="/info" component={Press}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
    <Route component={NoMatch}/>   */}
  </Switch>
</Router>
   </Container>
 </React.Fragment>
    </div>
  );
}

export default App;
