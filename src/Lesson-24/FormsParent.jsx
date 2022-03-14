import React, { Component } from 'react'
import FormsChild from './FormsChild'

import nextId from "react-id-generator";

export class FormsParent extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email:'',
      btnState: true,
      listOfStudents: [
        { name: 'John Doe', attendance: 'Good' },
        { name: 'Foo Baa', attendance: 'Bad' }
      ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.createName = this.createName.bind(this)
    this.addStudent = this.addStudent.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
    this.setState({btnState: this.state.name != '' && this.state.email != '' ? false : true})
  }
  
  createName(e){
    e.preventDefault()
    // console.log(e);
    alert(`Hello ${this.state.name} & your email is: ${this.state.email}`)
    this.setState({name: ''})
    this.setState({email: ''})
  }

  addStudent(student){
    this.setState( (s) => (
      {listOfStudents: [...s.listOfStudents, student]}
    ))
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>
        
        <form onSubmit={this.createName}>
          <label htmlFor="name">Name</label> <br />
          <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/> <br /><br />
          <label htmlFor="email">email</label> <br />
          <input type="email" value={this.state.email} name="email" id="email" onChange={this.handleChange}/> <br /><br />
          <button type='submit' disabled={this.state.btnState}>Submit</button>
        </form>

        <h3>Your Name is: {this.state.name}</h3>
        <br /><br />
        <h2>Students</h2>
        <ul>
        {this.state.listOfStudents.map((s, i)=>(
          <li key={nextId()}>Student name: {s.name} with an attendance of {s.attendance}</li>
        ))}        
        </ul>
        <FormsChild addStudent={this.addStudent}/>
      </div>
    )
  }
}

export default FormsParent
