import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import AboutIntro from '../components/AboutIntro';
import OurApproach from '../components/OurApproach';
import OurHistory from '../components/OurHistory';
import WhatWeDo from '../components/WhatWeDo';
import KeyFeatures from '../components/KeyFeatures';
import OurProcess from '../components/OurProcess';
import OurTeam from '../components/OurTeam';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <AboutHero />
            <AboutIntro />
            <OurApproach />
            <OurHistory />
            <WhatWeDo />
            <KeyFeatures />
            <OurProcess />
            <OurTeam />
            <Testimonial />
            <FAQ />
        </>
    );
};

export default About;
