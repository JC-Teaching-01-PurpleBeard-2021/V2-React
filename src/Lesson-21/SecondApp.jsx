import React, { Component } from 'react';
import './SecondApp.css';
import ReusableBTN from './SecondAppComponent';

export class SecondApp extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	// this is a property
	firstVar2 = '123456';
	handleClick() {
		console.log('hello');
	}

	render() {
		// this is a varable
		let firstVar2 = 'some words';
		return (
			<div>
				<h1 style={{ color: 'red' }}>Hello One More Time!!</h1>
				<h2 id="testIDLocal">{this.firstVar}</h2>
				<h3 className="testClass">{firstVar2}</h3>
				<br />
				<button onClick={this.handleClick}>click me</button>
				<br />
				<ReusableBTN />
			</div>
		);
	}
}

export default SecondApp;
