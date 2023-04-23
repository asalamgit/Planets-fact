import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SolarSystem.module.scss';
import sun from '../../assets/sun2.png';
import planetMercury from '../../assets/planet-mercury.svg';
import planetVenus from '../../assets/planet-venus.svg';
import planetEarth from '../../assets/planet-earth.svg';
import planetMars from '../../assets/planet-mars.svg';
import planetJupiter from '../../assets/planet-jupiter.svg';
import planetSaturn from '../../assets/planet-saturn.svg';
import planetUranus from '../../assets/planet-uranus.svg';
import planetNeptune from '../../assets/planet-neptune.svg';
import clsx from 'clsx';

const SolarSystem = () => {
	return (
		<div className={classes.solarSystem}>
			<img src={sun} className={classes.sun} alt="sun" />
			<Link to="/mercury">
				<div className={clsx(classes.planetOrbit, classes.mercuryOrbit)}>
					<img src={planetMercury} className={clsx(classes.planet, classes.mercury)} alt="mercury" />
				</div>
			</Link>
			{/* <Link to="/venus">
				<div className={clsx(classes.planetOrbit, classes.venusOrbit)}>
					<img src={planetVenus} className={clsx(classes.planet,classes.venus)} alt="venus" />
				</div>
			</Link>
			 <Link to="/earth">
				<div className={clsx(classes.planetOrbit, classes.earthOrbit)}>
          <img src={planetEarth} className={clsx(classes.planet,classes.earth)} alt="earth" />
				</div>
			</Link>
			<Link to="/mars">
				<div className={clsx(classes.planetOrbit,classes.marsOrbit)}>
          <img src={planetMars} className={clsx(classes.planet,classes.mars)} alt="mars" />
				</div>
			</Link>
      <Link to="/jupiter">
				<div className={clsx(classes.planetOrbit,classes.jupiterOrbit)}>
          <img src={planetJupiter} className={clsx(classes.planet,classes.jupiter)} alt="jupiter" />
				</div>
			</Link>
      <Link to="/saturn">
				<div className={clsx(classes.planetOrbit,classes.saturnOrbit)}>
          <img src={planetSaturn} className={clsx(classes.planet,classes.saturn)} alt="saturn" />
				</div>
			</Link> */}
      <Link to="/uranus">
				<div className={clsx(classes.planetOrbit,classes.uranusOrbit)}>
          <img src={planetUranus} className={clsx(classes.planet,classes.uranus)} alt="uranus" />
				</div>
			</Link>
		</div>
	);
};

export default SolarSystem;
