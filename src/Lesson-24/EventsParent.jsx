import React, { Component } from 'react'
import EventsChild from './EventsChild';

import nextId from "react-id-generator";

export class EventsParent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backColour: 'Aquamarine',
      btnState: true,
      nums: [1, 2, 3, 4, 5]
    }

    this.updateColour = this.updateColour.bind(this);
    this.remove = this.remove.bind(this)
  }
  
  updateColour() {
    let updateColour = this.state.backColour == 'Aquamarine' ? 'DarkGoldenRod' : 'Aquamarine';
    this.setState({ backColour: updateColour });
    this.setState({ btnState: this.state.btnState == true ? false : true });
  }

  updateColour2(col) {
    this.setState({ backColour: col });
  }

  remove(num){
    this.setState((v) => ({
      nums: v.nums.filter( n => n !== num)
    }))
  }

  render() {
    let numsList = this.state.nums.map((n)=>(
      <EventsChild key={nextId()} value={n} remove={this.remove}/>
    ))
    return (
      <div style={{ height: '100vh', backgroundColor: this.state.backColour }}>
        <h1>React Events</h1>
        <br />
        <a href="https://reactjs.org/docs/events.html">React events</a>
        <br />
        <br />
        <img src="https://images.pexels.com/photos/9818360/pexels-photo-9818360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="wall" width={'150px'} onMouseEnter={this.updateColour}/>
        <br />
        <br />
        <br />
        <button onClick={() => {this.updateColour2('blue')}}>change the colour to blue</button>
        <br />
        <br />
        <br />
        <button disabled={this.state.btnState}>{this.state.btnState == true ? 'I am not working...:-(' : 'I am all better now!!'}</button>
        <h2>Passing method to child</h2>
        <ul>
          {numsList}
        </ul>
      </div>
    )
  }
}

export default EventsParent
