import React, { useState } from 'react';
import classes from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import { Link, Outlet } from 'react-router-dom';

function Header() {
	const [refresh, setRefresh] = useState(0);

	return (
		<>
			<div className={classes.Header}>
				<h1>
					<Link
						className={classes.link}
						to="/"
						onClick={() => {
							setRefresh(refresh + 1);
						}}
					>
						THE PLANETS
					</Link>
				</h1>
				<Navigation />
			</div>
			<Outlet />
		</>
	);
}

export default Header;
