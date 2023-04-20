import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-mars.svg';
import imgPlanetnternal from '../../assets/planet-mars-internal.svg';
import imgPlanetSurface from '../../assets/geology-mars.png';

function Mars()
{
    let planetName = "Mars";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetnternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".";
    let planetDescriptionInternal = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
    let planetDescriptionSurface = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Mars";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Mars#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Mars#Surface_geology";
    let rotationTime = "1.03";
    let revolutionTime = "1.88";
    let radius = "3,389.5";
    let temperature = "-28";

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


export default Mars;