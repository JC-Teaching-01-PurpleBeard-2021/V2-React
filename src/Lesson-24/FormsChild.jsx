import React, { Component } from 'react'

export class FormsChild extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '', attendance: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addStudent(this.state)
    this.setState({name: '', attendance: ''})
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add Student</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/><br /><br />
          <label htmlFor="attendance">Attendance</label><br />
          <input type="text" name="attendance" id="attendance" value={this.state.attendance} onChange={this.handleChange}/><br /><br />
          <button type='submit'>Add Student</button>
        </form>
      </div>
    )
  }
}

export default FormsChild
