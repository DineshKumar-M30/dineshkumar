import React from 'react';
import CatalogBanner from '../components/CatalogBanner';
import CatalogGrid from '../components/CatalogGrid';
import SubscribeSection from '../components/SubscribeSection';

const Catalog = () => {
    return (
        <>
            <CatalogBanner />
            <CatalogGrid />
            <SubscribeSection />
        </>
    );
};

export default Catalog;
