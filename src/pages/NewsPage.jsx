import React from 'react';
import NewsBanner from '../components/NewsBanner';
import NewsGrid from '../components/NewsGrid';
import SubscribeSection from '../components/SubscribeSection';

const NewsPage = () => {
    return (
        <>
            <NewsBanner />
            <NewsGrid />
            <SubscribeSection />
        </>
    );
};

export default NewsPage;
