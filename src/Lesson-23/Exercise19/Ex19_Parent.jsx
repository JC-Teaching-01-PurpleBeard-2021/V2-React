import React, { Component } from 'react';

export class Exercise19 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newColour: 'blue',
    };
    this.updateColour = this.updateColour.bind(this);
  }

  updateColour() {
    let updateColour = this.state.newColour == 'blue' ? 'red' : 'blue';
    this.setState({ newColour: updateColour });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: this.state.newColour }}>{this.state.newColour}</h1>
        <br />
        <button onClick={this.updateColour}>click me!! click me!</button>
      </div>
    );
  }
}

export default Exercise19;
