import React, { Component } from 'react';

export class StateChild extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.updateHeading}>click me!! click me!</button>
			</div>
		);
	}
}

export default StateChild;
