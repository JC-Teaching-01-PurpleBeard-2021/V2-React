import React, { Component } from 'react';
import Ex18_Child from './Ex18_Child';

export class Exercise18 extends Component {
  render() {
    return (
      <div>
        <h1>Exercise 18</h1>
        <Ex18_Child someText="Justin's work for Exercise 18" arr={['blue', 'green', 'red']} />
      </div>
    );
  }
}

export default Exercise18;
