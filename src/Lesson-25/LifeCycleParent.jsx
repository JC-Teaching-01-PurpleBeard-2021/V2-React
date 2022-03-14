import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';

import nextId from 'react-id-generator';

export class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backColour: 'biscuit',
      nums: [1, 2, 3, 4, 5],
    };

    this.updateColour = this.updateColour.bind(this);
    this.remove = this.remove.bind(this);
  }

  updateColour() {
    let updateColour = this.state.backColour == 'Aquamarine' ? 'DarkGoldenRod' : 'Aquamarine';
    this.setState({ backColour: updateColour });
    this.setState({ btnState: this.state.btnState == true ? false : true });
  }

  updateColour2(col) {
    this.setState({ backColour: col });
  }

  remove(num) {
    this.setState((v) => ({
      nums: v.nums.filter((n) => n !== num),
    }));
  }

  componentDidMount() {
    // Collect data from the backend
    console.log('Hello from componentDidMount!!');
  }

  componentDidUpdate() {
    // Update data on the backend
    console.log('Hello from componentDidUpdate!!');
  }

  render() {
    let numsList = this.state.nums.map((n) => <LifeCycleChild key={nextId()} value={n} remove={this.remove} />);
    return (
      <div style={{ height: '100vh', backgroundColor: 'AntiqueWhite' }}>
        <h1>React LifeCylce</h1>

        <ul>{numsList}</ul>
      </div>
    );
  }
}

export default LifeCycle;
