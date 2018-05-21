import React, { Component } from 'react';
import headerImage from './header.jpg';
import './Header.scss';

class Header extends Component {

  render() {
    const image = {
      backgroundImage: 'url(' + headerImage + ')'
    }
    return (
      <div className="Header" style={image}>
        <div id="headerText">
          <h2>Real Life, Love and Money with</h2>
          <h1>America Most Trusted Guy</h1>
        </div>
      </div>
    );
  }
};

export default Header;
