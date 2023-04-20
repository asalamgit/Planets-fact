import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-saturn.svg';
import imgPlanetnternal from '../../assets/planet-saturn-internal.svg';
import imgPlanetSurface from '../../assets/geology-saturn.png';

function Saturn()
{
    let planetName = "Saturn";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetnternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
    let planetDescriptionInternal = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
    let planetDescriptionSurface = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Saturn";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Saturn#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Saturn#Atmosphere";
    let rotationTime = "10.8";
    let revolutionTime = "29.46";
    let radius = "58,232";
    let temperature = "-138";

    return (
        <>
            <Planet planetName={planetName} planetImageOverview={planetImageOverview} 
            planetImageInternal={planetImageInternal} planetImageSurface={planetImageSurface}
            planetDescriptionOverview={planetDescriptionOverview} planetDescriptionInternal={planetDescriptionInternal}
            planetDescriptionSurface={planetDescriptionSurface} planetWikipediaOverview={planetWikipediaOverview} 
            planetWikipediaInternal={planetWikipediaInternal} planetWikipediaSurface={planetWikipediaSurface} 
            rotationTime={rotationTime} revolutionTime={revolutionTime} radius={radius} temperature={temperature}/>
        </>
    );
}

export default Saturn;