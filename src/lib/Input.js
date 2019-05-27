import React, { Component } from 'react';
import '../styles/Input.css'

class Input extends Component {

	constructor(props) {
		super(props)

		this.state = {
			inputWithContent: 0
		}
	}

	hasContent(e) {
		this.setState({
			inputWithContent: e.target.value.length
		}, this.props.onChange(e))
	}

	render() {

		const { 
			className, style, label,
			name, type
		} = this.props;

		const { inputWithContent } = this.state;

		return (
			<div>
				<input
					className={`fnt-input-basic ${className}`}
					style={style}
					name={name}
					onChange={ (e) => this.hasContent(e)}
					onKeyUp={this.props.onKeyUp}
					onClick={this.props.onClick}
					type={type}
				></input>
				<label
					className={`fnt-input-label-basic ${inputWithContent ? 'inputFill': ''}`}
					name={name}>
					{label}
				</label>
			</div>
		)
	}
}

Input.defaultProps = {
	className: '',
	style: {},
	label: 'Cualquier texto',
	placeholder: 'Introduce Texto',
	name: 'input',
	type: 'text'
}

export default Input;