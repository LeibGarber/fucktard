import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
<<<<<<< HEAD
import Header from './header';
=======
import {
Route,
NavLink,
BrowserRouter as Router,
Switch,
} from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';


>>>>>>> 2e8be929c7527f20cac2dc1c1daefe80e36dbb0c

class App extends Component {
  render() {
    return (
 <Router>
      <div className="App">
<<<<<<< HEAD
        <Carousel />
        <Header/>
=======
        <nav>
          <NavLink to = "/home"><div className="logo">CapsLok</div></NavLink>
          <NavLink to ="/work"><div>work</div></NavLink>
          <NavLink to="/about"><div>about</div></NavLink>
          <NavLink to ="contact"><div>contact</div></NavLink>
        </nav>
        <Carousel className='home-carousel'/>
        <h1>CapsLok</h1>

      <Switch>
          <Route exact path="/home" component= {Home}/>
          <Route exact path="/work" component= {Work}/>
          <Route exact path="/about" component= {About}/>
          <Route exact path="contact" component= {Contact}/>
          <Route path="noMatch" component= {NoMatch}/>

        </Switch>
>>>>>>> 2e8be929c7527f20cac2dc1c1daefe80e36dbb0c
      </div>
    </Router>
    );
  }
}

export default App;
