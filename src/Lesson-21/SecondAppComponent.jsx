import React, { Component } from 'react';

export class ReusableBTN extends Component {
	constructor(props) {
		super(props);
		this.funcOne = this.funcOne.bind(this);
	}
	funcOne() {
		alert('Hello Again');
	}

	render() {
		return (
			<div>
				<button onClick={this.funcOne}>New click me</button>
			</div>
		);
	}
}

export default ReusableBTN;
