import React from 'react';
import ProductDetailBanner from '../components/ProductDetailBanner';
import ProductInfo from '../components/ProductInfo';
import CatalogGrid from '../components/CatalogGrid'; // Reusing grid for "Similar Products"
import SubscribeSection from '../components/SubscribeSection';

const ProductDetails = () => {
    return (
        <>
            <ProductDetailBanner />
            <ProductInfo />

            {/* Similar Products Header + Grid (Reusing CatalogGrid for simplicity, or creating a filtered version) */}
            <div className="bg-white pb-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-[#2A4B56] text-3xl md:text-4xl font-bold text-center mb-10">
                        Similar products
                    </h2>
                </div>
                {/* We can limit this grid or pass props later, for now showing the catalog grid as placeholder for 'similar' */}
                <CatalogGrid />
            </div>

            <SubscribeSection />
        </>
    );
};

export default ProductDetails;
