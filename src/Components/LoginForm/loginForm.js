import React, { Component } from 'react';
import { UserService } from './../../Services/UserService.js';
import './loginForm.css';

class LoginForm extends Component{
	
	constructor(props){
		super(props);

		this.userService = new UserService();
		this.username = '';
		this.password = '';
		this.loginErrorString = '';
		this.loginSuccessString = '';

		this.state = {
			username : this.username,
			password : this.password
		};

		this.updateCredentials = this.updateCredentials.bind(this);
		this.authenticateUserCredentials = this.authenticateUserCredentials.bind(this);
	}

	updateCredentials(e){
		e.target.name === 'username' ? this.username = e.target.value : this.password= e.target.value;
	}

	authenticateUserCredentials(){

		this.isAuthenticationSuccessful = this.userService.checkUserCredentials(this.username, this.password);

		if(this.isAuthenticationSuccessful){
			this.setState((prevState) => ({
							loginErrorString : prevState.loginErrorString && '',
							loginSuccessString : 'Login Successful'
						})); 
		}
		else{
			this.setState((prevState) => ({
							loginSuccessString : prevState.loginSuccessString && '',
							loginErrorString : 'Please check Credentials. Either Username or Password is incorrect'
						})); 
		}
	};
	


render(){
	
	return (
		<div className="login-form-container">
			{
				this.state.loginErrorString ? (<div className = "alert alert-danger">{this.state.loginErrorString}</div>) : ('')
			}
			{
				this.state.loginSuccessString ? (<div className = "text text-center alert alert-success">{this.state.loginSuccessString}</div>) : ('')
			}
			<table>
			<tbody>
				<tr>
					<td><label>Username : </label></td>
					<td><input type="text" placeholder="Username" name = "username" onChange={this.updateCredentials}/></td>
				</tr>
				<tr>
					<td><label>Password : </label></td>
					<td><input type="password" placeholder="Password" name = "password" onChange={this.updateCredentials}/></td>
				</tr>
			</tbody>
			</table>
			<button className="btn btn-primary" onClick = {this.authenticateUserCredentials}>Login</button>
			<button className="btn btn-primary">Reset</button>
		</div>
		)
	}
}

export default LoginForm