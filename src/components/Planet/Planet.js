import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

import classes from './Planet.module.scss';
import imgSource from '../../assets/icon-source.svg';

function Planet(props) {
	const [informationType, setinformationType] = useState('overview');

	const handleshowOverview = () => {
		setinformationType('overview');
	};

	const handleshowInternal = () => {
		setinformationType('internal');
	};

	const handleshowSurface = () => {
		setinformationType('surface');
	};

	function ftChooseImage(informationType) {
		if (informationType === 'overview') return props.planetImageOverview;
		else if (informationType === 'internal') return props.planetImageInternal;
		else return props.planetImageOverview;
	}

	function ftIfImageSurfaceVisible(informationType) {
		if (informationType === 'surface') return classes.showImageSurface;
		return classes.hideImageSurface;
	}

	function ftChooseDescription(informationType) {
		if (informationType === 'overview') return props.planetDescriptionOverview;
		else if (informationType === 'internal') return props.planetDescriptionInternal;
		else return props.planetDescriptionSurface;
	}

	function ftChooseWikipedia(informationType) {
		if (informationType === 'overview') return props.planetWikipediaOverview;
		else if (informationType === 'internal') return props.planetWikipediaInternal;
		else return props.planetWikipediaSurface;
	}

	function ftChooseButtonClassNAme(informationType, buttonName, planetName) {
		if (informationType === buttonName) {
			if (planetName === 'Mercury') return classes.activeButtonMercury;
			if (planetName === 'Venus') return classes.activeButtonVenus;
			if (planetName === 'Earth') return classes.activeButtonEarth;
			if (planetName === 'Mars') return classes.activeButtonMars;
			if (planetName === 'Jupiter') return classes.activeButtonJupiter;
			if (planetName === 'Saturn') return classes.activeButtonSaturn;
			if (planetName === 'Uranus') return classes.activeButtonUranus;
			if (planetName === 'Neptune') return classes.activeButtonNeptune;
		}
		return classes.inactiveButton;
	}

	return (
		<div className={classes.Planet}>
			<div className={classes.planetImageInformationView}>
				<div className={classes.planetMobileView}>
					<button className={clsx(classes.planetMobileViewButton, ftChooseButtonClassNAme(informationType, 'overview', props.planetName))} onClick={handleshowOverview}>
						<p>OVERVIEW</p>
					</button>
					<button className={clsx(classes.planetMobileViewButton, ftChooseButtonClassNAme(informationType, 'internal', props.planetName))} onClick={handleshowInternal}>
						<p>STRUCTURE</p>
					</button>
					<button className={clsx(classes.planetMobileViewButton, ftChooseButtonClassNAme(informationType, 'surface', props.planetName))} onClick={handleshowSurface}>
						<p>SURFACE</p>
					</button>
				</div>

				<div className={classes.images}>
					<img className={classes.imgMain} src={ftChooseImage(informationType)} />
					<img className={clsx(classes.imgSurface, ftIfImageSurfaceVisible(informationType))} src={props.planetImageSurface} />
				</div>

				<div className={classes.planetInformationView}>
					<div className={classes.planetInformation}>
						<h1>{props.planetName}</h1>
						<p className={classes.planetDescription}>{ftChooseDescription(informationType)}</p>
						<p className={classes.sources}>
							Source :{' '}
							<a className={classes.planetWikipedia} href={ftChooseWikipedia(informationType)}>
								Wikipedia
								<img src={imgSource} />
							</a>
						</p>
					</div>

					<div className={classes.planetView}>
						<button className={clsx(classes.planetViewButton, ftChooseButtonClassNAme(informationType, 'overview', props.planetName))} onClick={handleshowOverview}>
							<span>01</span>
							<p>OVERVIEW</p>
						</button>
						<button className={clsx(classes.planetViewButton, ftChooseButtonClassNAme(informationType, 'internal', props.planetName))} onClick={handleshowInternal}>
							<span>02</span>
							<p>INTERNAL STRUCTURE</p>
						</button>
						<button className={clsx(classes.planetViewButton, ftChooseButtonClassNAme(informationType, 'surface', props.planetName))} onClick={handleshowSurface}>
							<span>03</span>
							<p>SURFACE GEOLOGY</p>
						</button>
					</div>
				</div>
			</div>

			<div className={classes.planetStats}>
				<div className={classes.stat}>
					<div className={classes.statName}>ROTATION TIME</div>
					<div className={classes.statValue}>{props.rotationTime} DAYS</div>
				</div>
				<div className={classes.stat}>
					<div className={classes.statName}>REVOLUTION TIME</div>
					<div className={classes.statValue}>{props.revolutionTime} DAYS</div>
				</div>
				<div className={classes.stat}>
					<div className={classes.statName}>RADIUS</div>
					<div className={classes.statValue}>{props.radius} KM</div>
				</div>
				<div className={classes.stat}>
					<div className={classes.statName}>AVERAGE TEMP.</div>
					<div className={classes.statValue}>{props.temperature}°C</div>
				</div>
			</div>
		</div>
	);
}

export default Planet;
