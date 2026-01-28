import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import OurStory from '../components/OurStory';
import WhatWeDo from '../components/WhatWeDo';
import Projects from '../components/Projects';
import OurProcess from '../components/OurProcess';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <OurStory />
            <WhatWeDo />
            <Projects />
            <OurProcess />
            <Pricing />
            <Testimonial />
            <Blog />
        </>
    );
};

export default Home;
