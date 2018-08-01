import React, { Component } from 'react';

import DatePicker from'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log('APP JS HANDLE CHANGE', date._d);
        this.setState({
            startDate: date
        });
        this.props.callback(date)
    }

    handleGenerate = function() {
        this.setState({ active: true });

        
        
        var countDowndate = this.state.startDate.toDate().getTime();
        
        
        var x = setInterval(() => {

            var now = new Date().getTime();
          //get toda
    
            var distance = countDowndate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        })
    }
    render() {
        return (
            <div className ='picker'>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                
                />
            </div>
        )
    }
}

export default Picker;