import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SolarSystem.module.scss';
import sun from '../../assets/sun2.png';
import planetEarth from '../../assets/planet-earth.svg';
import planetMars from '../../assets/planet-mars.svg';

const SolarSystem = () => {
	return (
		<div className={classes.solarSystem}>
			<img src={sun} className={classes.sun} alt="sun" />
			<Link to="/earth">
				<div className={classes.earthOrbit}>
          <img src={planetEarth} className={classes.earth} alt="earth" />
				</div>
			</Link>
			<Link to="/mars">
				<div className={classes.marsOrbit}>
          <img src={planetMars} className={classes.mars} alt="earth" />
				</div>
			</Link>
		</div>
	);
};

export default SolarSystem;
