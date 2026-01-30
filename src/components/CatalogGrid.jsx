import React from 'react';
import { Link } from 'react-router-dom';
import oil from "../assets/oil Bottle.png"
import bag from "../assets/bag.png"

const products = [
    { id: 1, tag: 'Oil', title: 'Pumpkin seed oil, 250ml', image: oil, type: 'bottle' },
    { id: 2, tag: 'Oil', title: 'Sesame oil, 250ml', image: oil, type: 'bottle' },
    { id: 3, tag: 'Oil', title: 'Walnut oil, 250ml', image: oil, type: 'bottle' },
    { id: 4, tag: 'Oil', title: 'Hemp oil, 250ml', image: oil, type: 'bottle' },
    { id: 5, tag: 'Flour', title: 'Rice Flour', image: bag, type: 'bag' },
    { id: 6, tag: 'Flour', title: 'Rice Flour', image: bag, type: 'bag' },
    { id: 7, tag: 'Flour', title: 'Rice Flour', image: bag, type: 'bag' },
    { id: 8, tag: 'Flour', title: 'Rice Flour', image: bag, type: 'bag' },
    { id: 9, tag: 'Oil', title: 'Pumpkin seed oil, 250ml', image: oil, type: 'bottle' },
    { id: 10, tag: 'Oil', title: 'Sesame oil, 250ml', image: oil, type: 'bottle' },
    { id: 11, tag: 'Oil', title: 'Walnut oil, 250ml', image: oil, type: 'bottle' },
    { id: 12, tag: 'Oil', title: 'Hemp oil, 250ml', image: oil, type: 'bottle' },
];

const CatalogGrid = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Link
                            to="/product"
                            key={product.id}
                            className="group animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="bg-[#F9F9F9] rounded-3xl p-6 relative h-[320px] mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 shadow-sm hover:shadow-lg">

                                {/* Tag */}
                                <div className="absolute top-4 left-4 bg-[#2A4B56] text-white text-xs font-bold px-3 py-1 rounded w-fit uppercase tracking-wider z-10 shadow-sm">
                                    {product.tag}
                                </div>

                                {/* Product Image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={`max-h-[220px] w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 ${product.type === 'bottle' ? 'scale-110' : 'scale-90'}`}
                                    />
                                </div>
                            </div>

                            {/* Product Title */}
                            <h3 className="text-[#2A4B56] font-bold text-center text-sm md:text-base px-2 group-hover:text-[#7DAF56] transition-colors">
                                {product.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogGrid;
