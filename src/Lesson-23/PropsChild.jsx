import React, { Component } from 'react';

export class PropsChild extends Component {
	listOfColours = '';
	static defaultProps = {
		name: 'Susan',
	};

	render() {
		// console.log(this.props);

		// Example that you cannot change props
		// this.props.name = 'John';

		// **** This is the wrong approach - do the map inside jsx****
		this.props.arr.map((v) => {
			this.listOfColours += `<p>${v}</p>`;
		});

		return (
			<div>
				<p>
					{this.props.name} favour colour is <span style={{ color: this.props.colour }}>{this.props.colour}!!</span>
				</p>
				<p>My favour number is: {this.props.calc}</p>
				<h2>List of colours from the array</h2>
				{this.listOfColours}

				{this.props.arr.map((v) => (
					<p key={v}>{v}</p>
				))}

				<p>
					My name is <span style={{ fontWeight: 'bold' }}>{this.props.obj.name}</span> I am <span style={{ fontWeight: 'bold' }}>{this.props.obj.age}</span> and I work as a <span style={{ fontWeight: 'bold' }}>{this.props.obj.job}</span>
				</p>

				<p>
					Number created from the function <span style={{ fontWeight: 'bold' }}>{this.props.func(4)}</span>
				</p>
			</div>
		);
	}
}

export default PropsChild;
