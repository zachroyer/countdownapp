import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';

export default class App extends Component {
  render() {
    return (
      <div className='grid'>
        <h1 className='grid__title'>Birthday Countdown</h1>
        <p className = 'grid__subtitle'>You can also countdown from whatever you please</p>
      
        <Picker/>
        { Button('Start Countdown') }
        <Clock/>
      </div>
    );
  }
}
