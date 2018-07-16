import React from 'react';
import './rightSectionBlogs.css';

const TrendingBlogs = (props) =>  {

	return(
			<div className = 'trending-blogs-section'>
				{props.content}
			</div>
			)
}

export default TrendingBlogs;