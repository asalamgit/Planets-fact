import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-neptune.svg';
import imgPlanetnternal from '../../assets/planet-neptune-internal.svg';
import imgPlanetSurface from '../../assets/geology-neptune.png';

function Neptune()
{
    let planetName = "Neptune";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetnternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
    let planetDescriptionInternal = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
    let planetDescriptionSurface = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Neptune";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Neptune#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Neptune#Atmosphere";
    let rotationTime = "16.08";
    let revolutionTime = "164.79";
    let radius = "24,622";
    let temperature = "-201";

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

export default Neptune;