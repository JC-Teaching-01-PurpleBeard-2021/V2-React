import React, { Component } from 'react'

export class Exercise20 extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [
        {id: 1, type: 'dog', name: 'Newton', bread: 'spaniel', age: 2},
        {id: 2, type: 'dog', name: 'Isaac', bread: 'lab', age: 4}
      ]
    }
    this.updateAge = this.updateAge.bind(this)
  }

  updateAge(id) {
    // console.log(id);
    const newPets = this.state.pets.map((i) => {
      if (i.id === id) {
        let updateAge = i.age += 1 
        return {...i, age: updateAge}
      }
      return i
    })  
      this.setState({ pets: newPets})
  }
  
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Exercise 20</h1>
        <h2>My pets:</h2>
        <ul>
          {
            this.state.pets.map((p) => (
              <>
              <li style={{ fontWeight: 'bold' }}>pet No. {p.id}</li>  
              <li>Name: {p.name}</li>
              <li>Age: {p.age}</li>
              <br />
              </>
            ))
          }
        </ul>
        <br />
        <button onClick={() => this.updateAge(1)}>1 Year older</button>
      </div>
    )
  }
}

export default Exercise20
