import React, { Component } from 'react';

export class Ex18_Child extends Component {
  render() {
    // console.log(this.props);
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'red' }}>{this.props.someText}</h2>
        <br />
        <label htmlFor="colourList">List of colours: </label>
        <select name="colourList" id="colourList">
          {this.props.arr.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Ex18_Child;
