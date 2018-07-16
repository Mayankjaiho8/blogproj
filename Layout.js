import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App.js';
import Home from './Components/Home/homeComponent.js';

class Layout extends Component {

	render(){
		return(
			<Router>
				<div>
					<Route exact path ='/' component = { App } />
					<Route path = '/home' component = { Home } />
				</div>
			</Router>
			)
	}
}

export default Layout;