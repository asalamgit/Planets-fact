/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavigationItem.module.scss';
import clsx from 'clsx';

function NavigationItem(props) {
	const location = useLocation();

	function whichPlanet(planet) {
		if (planet === 'Mercury') return classes.Mercury;
		if (planet === 'Venus') return classes.Venus;
		if (planet === 'Earth') return classes.Earth;
		if (planet === 'Mars') return classes.Mars;
		if (planet === 'Jupiter') return classes.Jupiter;
		if (planet === 'Saturn') return classes.Saturn;
		if (planet === 'Uranus') return classes.Uranus;
		if (planet === 'Neptune') return classes.Neptune;
	}

	function ftIsActualPlanet(planet) {
		let link = window.location.href;
		let cutLink = link.split('/');
		let actualPlanet = cutLink[cutLink.length - 1].toLowerCase();
		planet = planet.toLowerCase();
		if (planet === 'mercury' && planet === actualPlanet) return classes.actualMercury;
		if (planet === 'venus' && planet === actualPlanet) return classes.actualVenus;
		if (planet === 'earth' && planet === actualPlanet) return classes.actualEarth;
		if (planet === 'mars' && planet === actualPlanet) return classes.actualMars;
		if (planet === 'jupiter' && planet === actualPlanet) return classes.actualJupiter;
		if (planet === 'saturn' && planet === actualPlanet) return classes.actualSaturn;
		if (planet === 'uranus' && planet === actualPlanet) return classes.actualUranus;
		if (planet === 'neptune' && planet === actualPlanet) return classes.actualNeptune;
		return classes.ko;
	}

	return (
		<li className={NavigationItem}>
			<Link className={clsx(classes.Link, whichPlanet(props.planet), ftIsActualPlanet(props.planet))} onClick={props.onSomeEvent} to={props.to}>
				{props.children}
			</Link>
		</li>
	);
}

export default NavigationItem;
