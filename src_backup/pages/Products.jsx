import React from 'react';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

import ProductCard from '../components/ProductCard';

const Products = ({ products, toggleFavorite }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Products</h2>

            {/* Banner */}
            <div className="w-full bg-blue-500 rounded-[20px] p-12 mb-8 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                {/* Background Gradient/Pattern decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-100"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 max-w-xl">
                    <span className="text-blue-100 text-sm font-medium mb-2 block">September 12-22</span>
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                        Enjoy free home<br />delivery in this summer
                    </h1>
                    <p className="text-blue-100 mb-8 text-lg">Designer Dresses - Pick from trendy Designer Dress.</p>

                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                        Get Started
                    </button>
                </div>

                {/* Carousel Arrows */}
                <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onToggleFavorite={toggleFavorite} />
                ))}
            </div>
        </div>
    );
};

export default Products;
