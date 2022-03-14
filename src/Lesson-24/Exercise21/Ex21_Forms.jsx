import React, { Component } from 'react'

import nextId from "react-id-generator";

export class Exercise21 extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Justin',
      movies: [
        {name: 'shawshank', rank: 5, year: 1990},
        {name: 'batman', rank: 4.1, year: 2000}
      ],
      movie: '',
      rank: '',
      year:''
    }
    
    this.updateName = this.updateName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateform = this.updateform.bind(this)
  }

  updateName() {
    this.setState((n) => {
      return { name: n.name + ' Heath' };
    });
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  updateform(e) {
    e.preventDefault()
    this.setState( (m) => (
      {movies: [...m.movies, {name: this.state.movie, rank: this.state.rank, year: this.state.year}]}
    ))
    this.setState({movie: ''})
    this.setState({rank: ''})
    this.setState({year: ''})
  }


  render() {
    return (
      <div>
        <h1>Task 1</h1>
        <p>Your first name is: {this.state.name}</p>
        
        <button onClick={this.updateName}>Add Your Last Name</button>

        <h1>Task 2</h1>

        <ul>
        {this.state.movies.map((m)=>(
          <li key={nextId()}>Movie: <span style={{ color: 'red'}}>{m.name}</span> Which I ranked <span style={{ color: 'red'}}>{m.rank}</span> and I watched in <span style={{ color: 'red'}}>{m.year}</span></li>
        ))}        
        </ul>

        <form onSubmit={this.updateform}>
          <label htmlFor="movie">Movie</label><br />
          <input type="text" name="movie" id="movie" value={this.state.movie} onChange={this.handleChange}/><br /><br />
          <label htmlFor="rank">Rank</label><br />
          <input type="number" name="rank" id="rank" value={this.state.rank} onChange={this.handleChange}/><br /><br />
          <label htmlFor="year">Year</label><br />
          <input type="number" name="year" id="year" value={this.state.year} onChange={this.handleChange}/><br /><br />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default Exercise21
