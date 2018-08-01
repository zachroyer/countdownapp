import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      startDate: moment()
    }
  }

  handleChange = function(date) {
    console.log('trying to change date for', date._d);
    this.setState({
        startDate: date
    });
  }.bind(this)

  renderItems = function() {
    if(this.state.active) {
      return [
        LargeText("04/03"),
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        <label className="grid__remaining">Remaining until your 16th birthday</label>
        
      ]
    } else {
      return [
        <Picker callback={(date) => this.handleChange(date_)}/>,
        Button('Start Countdown', () => this.setState({ active: true }))
      ]
  }
  }.bind(this)


  render() {
    return (
      <div className='grid'>
        <h1 className='grid__title'>Birthday Countdown</h1>
        <p className = 'grid__subtitle'>You can also countdown from whatever you please</p>
      
        
        {this.renderItems() }
      </div>
    );
  }
}
