import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-earth.svg';
import imgPlanetInternal from '../../assets/planet-earth-internal.svg';
import imgPlanetSurface from '../../assets/geology-earth.png';

function Earth()
{
    let planetName = "Earth";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetInternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Earth Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
    let planetDescriptionInternal = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
    let planetDescriptionSurface = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Earth";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Earth#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Earth#Surface";
    let rotationTime = "0.99";
    let revolutionTime = "365,26";
    let radius = "6,371";
    let temperature = "16";

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

export default Earth;