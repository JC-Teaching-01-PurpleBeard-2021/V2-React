import React, { Component } from 'react';
import StateChild from './StateChild';

export class StateParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      heading: 'Nothing to see here!',
    };
    // Cannot setState in the constructor
    this.funcTimer();
    // because this sets state on a event we have to bind 'this'
    this.funcAlert = this.funcAlert.bind(this);
  }

  funcTimer() {
    let setSeconds = 0;
    const interval = setInterval(() => {
      setSeconds += 1;
      this.setState({ seconds: setSeconds });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }

  funcAlert(e) {
    // funcAlert = (e) => {
    // console.log(e);
    this.setState({ heading: 'New Message' });
  }

  render() {
    return (
      <div>
        <p>Seconds Elapsed: {this.state.seconds}</p>
        <p style={{ fontSize: '2rem', color: 'red' }}>{this.state.heading}</p>
        <StateChild updateHeading={this.funcAlert} />
      </div>
    );
  }

  // What would be state and what would be props
  // {
  // 	name: justin
  // 	placeOfBirth: earth
  // 	favouriteColour: blue
  // 	bestFriend: toby
  // }
}

export default StateParent;
