import React from 'react';
import AboutBanner from '../components/AboutBanner';
import AboutHealthSection from '../components/AboutHealthSection';
import AboutWhyUsSection from '../components/AboutWhyUsSection';
import AboutServices from '../components/AboutServices';
import BestOffers from '../components/BestOffers';
import SubscribeSection from '../components/SubscribeSection';

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutHealthSection />
            <AboutWhyUsSection />
            <AboutServices />
            <BestOffers />
            {/* Spacer or section adjustment might be needed */}
            <div className="py-10"></div>
            <SubscribeSection />
        </>
    );
};

export default About;
