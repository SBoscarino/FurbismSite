import React, { Component } from 'react';
import roundDoughnut from './images/roundDoughnut.png'
import '../styles/home.css';

class Home extends Component {
  render(){
    return(
      <div className="centering">
        <h1 className="title">Furbism</h1>
        <h2 className="secondaryTitle">Are you ready for the religion of the future?</h2>
        <img src={roundDoughnut} className="spin" />
      </div>
    )
  }
}

export default Home;