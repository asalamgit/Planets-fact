import React from 'react';
import classes from './SolarSystem.module.scss';

const SolarSystem = () => {
	return (
		// <div className={classes.solar-system}>
			<div className={classes.solarSystem}>
      <div className={classes.sun}></div>
      <div className={classes.earthOrbit}>
        <div className={classes.earth}></div>
      </div>
      <div className={classes.marsOrbit}>
        <div className={classes.mars}></div>
      </div>
    </div>
		// </div>
	);
};

export default SolarSystem;
