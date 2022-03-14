import React, { Component } from 'react';
import PropsChild from './PropsChild';

export class PropsParent extends Component {
	render() {
		return (
			// prettier-ignore
			<div>
				<h1>First Example of Props</h1>
				<PropsChild 
        name="Justin" 
        colour="blue" 
        calc={2 * 4}
        arr={['blue', 'green', 'red']}
        obj={{name: 'Justin', job: 'teacher', age: 21}}
        func={(a) => (a * 2)}
        />
			</div>
		);
	}
}

export default PropsParent;
