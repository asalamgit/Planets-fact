import React, { useState } from 'react';
import classes from './Header.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { Link, Outlet } from 'react-router-dom';

function Header() {
	const [refresh, setRefresh] = useState(0);
	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		showLinks && setShowLinks(!showLinks);
	};

	return (
		<>
			<div className={classes.Header}>
				<h1>
					<Link
						className={classes.link}
						to="/"
						onClick={() => {
							setRefresh(refresh + 1);
							handleShowLinks();
						}}
					>
						THE PLANETS
					</Link>
				</h1>
				<Navigation showLinks={showLinks} setShowLinks={setShowLinks} />
			</div>
			<Outlet />
		</>
	);
}

export default Header;
