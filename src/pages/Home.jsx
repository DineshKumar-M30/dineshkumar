import React from 'react';
import Hero from '../components/Hero';
import PromoCards from '../components/PromoCards';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import ReviewSection from '../components/ReviewSection';
import BestOffers from '../components/BestOffers';
import EcoFriendlySection from '../components/EcoFriendlySection';
import CategoryCards from '../components/CategoryCards';
import NewsSection from '../components/NewsSection';
import SubscribeSection from '../components/SubscribeSection';

const Home = () => {
    return (
        <>
            <Hero />
            <PromoCards />
            <AboutSection />
            <ProductSection />
            <ReviewSection />
            <BestOffers />
            <EcoFriendlySection />
            <CategoryCards />
            <NewsSection />
            <SubscribeSection />
        </>
    );
};

export default Home;
