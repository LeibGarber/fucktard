import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
        <Header/>
      </div>
    );
  }
}

export default App;
