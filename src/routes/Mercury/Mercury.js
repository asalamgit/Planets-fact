import React from 'react';
import Planet from '../../components/Planet/Planet'

import imgPlanetOverview from '../../assets/planet-mercury.svg';
import imgPlanetnternal from '../../assets/planet-mercury-internal.svg';
import imgPlanetSurface from '../../assets/geology-mercury.png';

function Mercury()
{
    let planetName = "Mercury";
    let planetImageOverview = imgPlanetOverview;
    let planetImageInternal = imgPlanetnternal;
    let planetImageSurface = imgPlanetSurface;
    let planetDescriptionOverview = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    let planetDescriptionInternal = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
    let planetDescriptionSurface = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    let planetWikipediaOverview = "https://en.wikipedia.org/wiki/Mercury_(planet)";
    let planetWikipediaInternal = "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure";
    let planetWikipediaSurface = "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology";
    let rotationTime = "58.6";
    let revolutionTime = "87.97";
    let radius = "2,439.7";
    let temperature = "430";

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
export default Mercury;