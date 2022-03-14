import React, { Component } from 'react';
import Exercise16Child from './Exercise16Child';

import './Exercise16Styles.css';

export class Exercise16 extends Component {
	render() {
		return (
			<div>
				<h1 style={{ color: 'red' }}>Hello Class</h1>
				<p className="testClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime, ea eum atque ex provident voluptas tempora dolor veritatis? Labore necessitatibus, minus et porro commodi harum architecto eveniet illo? Quisquam.</p>
				<Exercise16Child />
				<h2 style={{ color: 'green', fontSize: '5rem' }}>Hello Flav</h2>
			</div>
		);
	}
}

export default Exercise16;