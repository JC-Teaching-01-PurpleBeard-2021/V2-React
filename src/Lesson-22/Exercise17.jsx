import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';

import './Exercise17Styles.css'

export class Exercise17 extends Component {

  constructor(props) {
    super(props);

    this.state = {
        city: null,
    };
}

  render() {
    return (
      <div className='bodyE17'>
				<form action="#" className='formMain'>
					<div className='inputE17'>
          <label htmlFor="firstName" className='test1234'>FirstName: </label>
					<InputText required id="firstName" />
          </div>
					<br />
          <div className='inputE17'>
					<label htmlFor="lastName">LastName: </label>
					<InputText required id="lastName" />
          </div>
					<br />
          <div className='inputE17'>
          <label htmlFor="age">Age</label>
          <InputNumber inputId="age" />
          </div>
          <br />
          <div className='inputE17'>
          <label htmlFor="sex">Male</label>
          <RadioButton inputId="sex1" name="sex" value="m" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'm'} />
          <label htmlFor="sex">Female</label>
          <RadioButton inputId="sex2" name="sex" value="f" onChange={(e) => this.setState({city: e.value})} checked={this.state.city === 'f'}/>
          </div>
          <br />
					<button type="submit">Hello Click Me Now</button>
				</form>
			</div>
    )
  }
}

export default Exercise17
