import React, { Component } from 'react';
import StatePatternChild from './StatePatternChild';

export class StatePatternParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newNumber: 0,
      arrOfObjs: [
        { id: 1, name: 'Justin', happy: true, age: 21 },
        { id: 2, name: 'Julie', happy: false, age: 25 },
      ],
    };

    this.updateByOne = this.updateByOne.bind(this);
    this.updateByThree = this.updateByThree.bind(this);
    this.updateByOne = this.updateByOne.bind(this);
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Update exisiting State
  // Bad
  // updateByOne() {
  //   this.setState({ newNumber: this.state.newNumber + 1 });
  // }

  // updateByThree() {
  //   this.setState({ newNumber: this.state.newNumber + 1 });
  //   this.setState({ newNumber: this.state.newNumber + 1 });
  //   this.setState({ newNumber: this.state.newNumber + 1 });
  // }

  // Good
  updateByOne() {
    this.setState((s) => {
      return { newNumber: s.newNumber + 1 };
    });
  }

  updateByThree() {
    this.setState((s) => {
      return { newNumber: s.newNumber + 1 };
    });
    this.setState((s) => {
      return { newNumber: s.newNumber + 1 };
    });
    this.setState((s) => {
      return { newNumber: s.newNumber + 1 };
    });
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Updating Objects
  // bad
  // updateObj(id) {
  //   // console.log(id);
  //   let updatedObj = this.state.arrOfObjs.find((i) => {
  //     return i.id === id
  //   })
    
  //   updatedObj.happy = false
  //     this.setState({ arrOfObjs: this.state.arrOfObjs})  
  // }

  // Good
  updateObj(id) {
    // console.log(id);
    const newObj = this.state.arrOfObjs.map((i) => {
      if (i.id === id) {
        let updateHappy = i.happy === true ? false : true
        return {...i, happy: updateHappy}
      }
      return i
    })  
      this.setState({ arrOfObjs: newObj})
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* Passing State down as a prop */}
        <StatePatternChild newNumber={this.state.newNumber} />
        {this.state.arrOfObjs.map((p) => (
          <h3>
            {' '}
            Name: {p.name} happy: {p.happy.toString()}
          </h3>
        ))}
        <button onClick={this.updateByOne}>Update By 1</button>
        <button onClick={this.updateByThree}>Update By 3</button>
        <button onClick={() => this.updateObj(1)}>Change the sex</button>
      </div>
    );
  }
}

export default StatePatternParent;
