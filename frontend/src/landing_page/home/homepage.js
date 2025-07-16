import React from 'react';
import Awards from './awards';
import Hero from './hero';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import OpenAccount from '../openaccount';
import NavBar from '../navbar';
import Footer from '../footer';
function HomePage() {
    return ( 
        <>
           <Hero/> 
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <OpenAccount/>
        </>
     );
}

export default HomePage;