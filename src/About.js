import React, {Component} from 'react';
import typewriter from './typewriterFix.jpg';
import './About.css';
import ferkin from './ferkin.jpeg';
import moran from './download.jpeg';
import jacob from './jacob.jpg';

class About extends Component {
  render() {
    return(
      <div className='about-tiles'>

        <div className='about-jacob about-tile'>
          <div className='about-img-div'>
            <img src={jacob} alt='temporary img'/>
          </div>
          <ul>
            <li><h2>Jacob Mirrage</h2></li>
            <li><h3>Senior Head of Accounts</h3></li>
            <li>After I saw the excellent service in the American tech scene I decided to bring this new look to Israel</li>
          </ul>
        </div>

        <div className='about-page-border-1' />
        
        <div className='about-moran about-tile'>
          <ul>
            <li><h2>Moran Forial</h2></li>
            <li><h3>VP Head of Human Resources</h3></li>
            <li>I've been working in the tech industry in Israel for 8+ years after being asked to work at CapsLok seeing the experience they already had on board I was very excited to help them build their team</li>
          </ul>
          <div className='about-img-div'>
            <img src={moran} alt='Ms Moran Forial'/>
          </div>
        </div>

        <div className='about-page-border-2'/>
        
        <div className='about-ferkin about-tile'>
          <div className='about-img-div'>
            <img src={ferkin} alt='Mr Ferkin Yermim'/>
          </div>
          <ul>
            <li><h2>Ferkin Yermim</h2></li>
            <li><h3>Lead Developer</h3></li>
            <li>I've been lead developer for many Startups around Israel and now I thought it would be a great opportunity to revolutionize the freelance market here</li>
          </ul>
        </div>
        
      </div>

    );
  }
}

export default About;
