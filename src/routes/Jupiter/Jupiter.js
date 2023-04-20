import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-jupiter.svg';
import imgPlanetnternal from '../../assets/planet-jupiter-internal.svg';
import imgPlanetSurface from '../../assets/geology-jupiter.png';

function Jupiter()
{
    let planetName = "Jupiter";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetnternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";
    let planetDescriptionInternal = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
    let planetDescriptionSurface = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Jupiter";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Jupiter#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices";
    let rotationTime = "9.93";
    let revolutionTime = "11.86";
    let radius = "69,911";
    let temperature = "-108";

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

export default Jupiter;