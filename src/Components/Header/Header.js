import React from 'react';
import HeaderNav from './../HeaderNav/headerNav.js';
import './header.css'

const Header = (props) => {

	const { navArr } = props;

	return (
		<div className = "header">
			<HeaderNav navArr = {navArr} />
		</div>
		)
}

export default Header;