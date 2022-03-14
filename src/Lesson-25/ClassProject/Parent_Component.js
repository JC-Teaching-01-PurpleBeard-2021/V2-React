import { Component } from 'react';
import './styling.css';
import ChildComponentList from './Child_ColourList';
import ChildComponentSelect from './Child_ColourSelect';

class ParentComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedColour: 'blue',
			colourList: '',
		};
	}

	randomColourID = 1;
	randomColour = 'blue';
	arrColours = [];

	handleColour = (e) => {
		// console.log(e.target.value);
		this.setState({ selectedColour: e.target.value });
		this.randColour();
	};

	randColour = () => {
		this.randomColourID = Math.floor(Math.random() * 10);

		// console.log(randomColourID);

		if (this.randomColourID === 0 || this.randomColourID === 1) {
			return (this.randomColour = 'tomato');
		} else if (this.randomColourID === 2 || this.randomColourID === 4) {
			return (this.randomColour = 'orange');
		} else if (this.randomColourID === 5 || this.randomColourID === 6) {
			return (this.randomColour = 'yellow');
		} else if (this.randomColourID === 7) {
			return (this.randomColour = 'green');
		} else if (this.randomColourID === 8) {
			return (this.randomColour = 'red');
		} else {
			return (this.randomColour = 'blue');
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let tempNewColour = { _id: this.arrColours.length, rand: this.randomColour, col: this.state.selectedColour };
		// console.log(tempNewColour);
		this.arrColours.unshift(tempNewColour);
		// console.log(arrColours);

		this.setState({
			colourList: (
				<div className="ChildList">
					<ul>
						{this.arrColours.map((colourItem) => (
							<li style={{ backgroundColor: colourItem.rand }}>{colourItem.col}</li>
						))}
					</ul>
				</div>
			),
		});
	};

	render() {
		return (
			<div className="Parent">
				<h1>
					<a href="https://youtu.be/KnBi-LNM0Og" target="_blank">
						Twisting My Melon Man
					</a>
				</h1>
				<ChildComponentSelect selectedColour={this.state.selectedColour} handleColour={this.handleColour} handleSubmit={this.handleSubmit} />
				<ChildComponentList colourList={this.state.colourList} />
			</div>
		);
	}
}

export default ParentComponent;
