import React from 'react';
import ProductCard from '../components/ProductCard';

const Favorites = ({ products, toggleFavorite }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Favorites</h2>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
