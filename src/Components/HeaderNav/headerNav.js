import React from 'react';
import './headerNav.css';

const HeaderNav = (props) => {
	const { navArr } = props;
	const navItemArr = navArr.map((navItem) => <a href="#" key = {navItem}>{ navItem }</a>);

	return (
			<div className="navbar">
				{ navItemArr }
			</div>
		)
}

export default HeaderNav;