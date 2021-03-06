import React, { Component } from 'react';
import '../styles/LoginUI.css';
import lib from '../lib';

const { Input, Button } = lib;

class LoginUI extends Component {

	render() {
		return (
			<div className='fnt-login-ui-body'>
				<div className='fnt-login-ui-form'>
					<div className='fnt-login-ui-form-img-content'>
						<img
							width='120px'
							alt=''
							src='http://fintecimal-test.herokuapp.com/admin/images/fintecimal-logo.png'
						></img>
					</div>
					<div className='fnt-login-ui-form-input-content'>
						<Input
						  label="Correo"
							type={'email'}
							onKeyUp={ (e) => this.props.onKeyPressEmail(e)}
						></Input>
						<Input
						  label="Contraseña"
							type={'password'}
							onKeyUp={ (e) => this.props.onKeyPressPassword(e)}
						></Input>
					</div>
					<div className='fnt-login-ui-btn-container'>
						<Button
							textBtn='Entrar'
							style={{ width: '100%' }}
							onClick={(e) => this.props.onClickBtnSend(e)}
						></Button>
					</div>
				</div>
				<div className='fnt-login-ui-background-top'></div>
				<div className='fnt-login-ui-background-bottom'></div>
			</div>
		)
	}
}

export default LoginUI;