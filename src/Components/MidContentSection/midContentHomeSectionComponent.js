import React, { Component } from 'react';
import './midContentHomeSection.css';

class MidContentHomeSection extends Component{


	render(){
		return(
			<div className = 'mid-content-section mid-content-home-section'>
				<button id = "createPost" className="btn btn-primary btn-block">Create Post</button>
			</div>
			)	
	}
	
}

export default MidContentHomeSection;