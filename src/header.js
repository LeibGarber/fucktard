import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {    
    return (
      <div className='header-container'>
        <button>WORK</button>
        <button>ABOUT</button>
        <button>CONTACT</button>
      </div>
    );
  }
}

export default Header;
