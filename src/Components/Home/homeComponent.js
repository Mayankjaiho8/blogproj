import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js'
import LeftSection from './../LeftSection/leftSectionComponent.js';
import MidContentHomeSection from './../MidContentSection/midContentHomeSectionComponent.js';
import RightSection from './../RightSection/rightSectionComponent.js';
import PrivateBlog from './../PrivateBlog/privateBlogComponent.js';

import { loggedInHeaderNavListItemArr } from './../../static/mockHeaderNavListItems';
import { dropDownListItems } from './../../static/mockLeftSectionDropDownListItems';
import './home.css';

class Home extends Component{
	constructor(props){
		super(props)
		this.HeaderNavArr = loggedInHeaderNavListItemArr;
		this.dropDownListItems = dropDownListItems;
	}

	render(){
		return(
			<div className = 'main-container'>
				<div className = 'home-grid-container'>
					<Header navArr = {this.HeaderNavArr}/>
					
					<Router>

						<React.Fragment>
							<LeftSection dropDownListItems = {dropDownListItems}/>
							<Route path = '/home' component = { MidContentHomeSection } />	
							<Route path = '/privateblogs' component = { PrivateBlog } />
						</React.Fragment>
					</Router>	
					
					<RightSection />
					<Footer />
				</div>
			</div>
			)
	}
}

export default Home;