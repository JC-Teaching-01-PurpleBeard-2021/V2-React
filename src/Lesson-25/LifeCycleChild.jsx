import React, { Component } from 'react';

export class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.value);
  }

  componentWillUnmount() {
    // Destroy an element that may still exist after the component is closed, but cannot update state
    console.log('Hello from componentWillUnmount!!');
  }

  render() {
    return (
      <li id={this.props.value}>
        {this.props.value}
        <button onClick={this.handleRemove}>Remove</button>
      </li>
    );
  }
}

export default LifeCycleChild;
