import React, { Component } from 'react'

export class EventsChild extends Component {
  constructor(props){
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(){
    this.props.remove(this.props.value)
  }

  render() {
    return (
      <li id={this.props.value}>
        {this.props.value}
        <button onClick={this.handleRemove}>Remove</button>
      </li>
    )
  }
}

export default EventsChild
