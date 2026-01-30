import React, { useEffect } from 'react';
import NewsDetailsBanner from '../components/NewsDetailsBanner';
import NewsDetailsContent from '../components/NewsDetailsContent';
import SubscribeSection from '../components/SubscribeSection';

const NewsDetails = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NewsDetailsBanner />
            <NewsDetailsContent />
            <SubscribeSection />
        </>
    );
};

export default NewsDetails;
