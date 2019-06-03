import React, { Component } from 'react';
import '../styles/Input.css';
import '../styles/InputSearch.css';

class Input extends Component {

	constructor(props) {
		super(props);

		this.state = {
			inputWithContent: 0,
			value: ''
		}
	}

	hasContent(event) {
		const { value } = event.target;
		this.setState({
			inputWithContent: value.length
		}, this.props.onKeyUp({event, value}))
	}

	typeInput(aparience) {
		let className = 'fnt-input-';
		switch (aparience) {
			case 'search':
				return `${className}${aparience}`;
			default:
				return `${className}basic`;
		}
	}

	render() {

		const { 
			className, style, label,
			name, type, id, aparience
		} = this.props;

		const { inputWithContent } = this.state;

		return (
			<div style={{padding:`${aparience === 'basic' ? '30px' : '0'} 0`}}>
				<input
					id={id}
					className={`${this.typeInput(aparience)} ${className}`}
					style={style}
					name={name}
					onKeyUp={ (e) => this.hasContent(e)}
					onClick={this.props.onClick}
					type={type}
				></input>
				<label
					className={`${this.typeInput(aparience)}-label ${inputWithContent ? 'inputFill': ''}`}
					name={name}>
					{label}
				</label>
			</div>
		)
	}
}

Input.defaultProps = {
	id:'not-uid',
	className: '',
	style: {},
	label: 'Cualquier texto',
	placeholder: 'Introduce Texto',
	name: 'input',
	type: 'text',
	aparience: 'basic'
}

export default Input;