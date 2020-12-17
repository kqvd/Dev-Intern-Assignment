import React, { Component } from 'react';

import './button.css';

import red from '../PNG/Rectangle 207.png';
import blue from '../PNG/Rectangle 135.png';
import orange from '../PNG/Rectangle 137.png';
import green from '../PNG/Rectangle 136.png';

import fire from '../PNG/Icon awesome-fire.png';
import bike from '../PNG/Icon metro-directions-bike.png';
import thermometer from '../PNG/Icon ionic-ios-thermometer.png';
import mountain from '../PNG/Icon awesome-mountain.png';

class Button extends Component {

    state = { 
        count: 0
    };

    handleIncrement = () => {
        console.log(this.state.count);
        if (this.state.count > 2) {
            this.setState({ count: 0 });
        } else {
            this.setState({ count: this.state.count + 1 });
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement} className="button">
                    <img src={this.changeBackgroundColour()} className="button" alt="logo"/>
                    <img src={this.changeLogo()} className="button" alt="logo"/>
                </button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
        );
    }

    changeBackgroundColour() {
        switch(this.state.count) {
            case 0:
                return red;
            case 1:
                return blue;
            case 2:
                return orange;
            default:
                return green;
        }
    }

    changeLogo() {
        switch(this.state.count) {
            case 0:
                return fire;
            case 1:
                return bike;
            case 2:
                return thermometer;
            default:
                return mountain;
        }
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 3 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Button;