import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

export class FirstForm extends Component {
	render() {
		return (
			<div>
				<form action="#">
					<label htmlFor="firstName">FirstName: </label>
					<InputText required id="firstName" />
					{/* <input type="text" name="firstName" /> */}
					<br />
					<label htmlFor="firstName">LastName: </label>
					<input type="text" name="lastName" />
					<br />
					<button type="submit">Hello Click Me Now</button>
				</form>
			</div>
		);
	}
}

export default FirstForm;
