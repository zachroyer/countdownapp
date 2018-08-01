import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false }))
        
      ]
    } else {
      return Button('Start Countdown', () => this.setState({ active: true }))
    }
  }.bind(this)


  render() {
    return (
      <div className='grid'>
        <h1 className='grid__title'>Birthday Countdown</h1>
        <p className = 'grid__subtitle'>You can also countdown from whatever you please</p>
      
        <Picker/>
        {this.renderItems() }
      </div>
    );
  }
}
