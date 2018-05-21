import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import BabyStep from './babyStep/BabyStep';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BabyStep />
      </div>
    )
  }
}

export default App;
