import React, { Component } from 'react';

export class StatePatternChild extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>State Patterns</h1>
        <br />
        <h2>current Number is: {this.props.newNumber}</h2>
      </div>
    );
  }
}

export default StatePatternChild;
