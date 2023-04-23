import React from 'react';
import classes from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function Header() {
	return (
		<>
			<div className={classes.Header}>
				<h1>THE PLANETS</h1>
				<Navigation />
			</div>
			<Outlet />
		</>
	);
}

export default Header;
