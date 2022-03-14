import React, { Component } from 'react';

export class ClassExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Original 'Class' based system</h1>
        <h3>The count is currently: {this.state.count}</h3>
        <button onClick={this.increment}>Add 1 to the count</button>
      </div>
    );
  }
}

export default ClassExample;
