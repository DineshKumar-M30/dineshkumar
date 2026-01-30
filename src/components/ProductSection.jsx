import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import oil from "../assets/oil Bottle.png"
import bag from "../assets/bag.png"
const products = [
    {
        id: 1,
        tag: 'Oil',
        title: 'Pumpkin seed oil, 250ml',
        image: oil,
        type: 'bottle'
    },
    {
        id: 2,
        tag: 'Flour',
        title: 'Sesame oil, 250ml',
        image: oil,
        type: 'bottle'
    },
    {
        id: 3,
        tag: 'Porridge',
        title: 'Walnut oil, 250ml',
        image: oil,
        type: 'bottle'
    },
    {
        id: 4,
        tag: 'Oil',
        title: 'Hemp oil, 250ml',
        image: oil,
        type: 'bottle'
    },
    {
        id: 5,
        tag: 'Oil',
        title: 'Pumpkin flour',
        image: bag,
        type: 'bag'
    },
    {
        id: 6,
        tag: 'Flour',
        title: 'Sesame flour',
        image: bag,
        type: 'bag'
    },
    {
        id: 7,
        tag: 'Porridge',
        title: 'Walnut flour',
        image: bag,
        type: 'bag'
    },
    {
        id: 8,
        tag: 'Oil',
        title: 'Hemp flour',
        image: bag,
        type: 'bag'
    }
];

const ProductSection = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 block italic">
                        Categories
                    </span>
                    <h2 className="text-[#2A4B56] text-4xl font-bold">
                        Our Products
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {products.map((product, index) => (
                        <Link
                            to="/product"
                            key={product.id}
                            className="group animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="bg-[#F9F9F9] rounded-3xl p-6 relative h-[320px] mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 shadow-sm group-hover:shadow-lg">

                                {/* Tag */}
                                <div className="absolute top-4 left-4 bg-[#2A4B56] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm">
                                    {product.tag}
                                </div>

                                {/* Product Image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    {/* Using object-contain to make sure the bottle/bag fits nicely */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={`max-h-[220px] w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 ${product.type === 'bottle' ? 'scale-110' : 'scale-90'}`}
                                    />
                                </div>
                            </div>

                            {/* Product Title */}
                            <h3 className="text-[#2A4B56] font-medium text-center text-sm md:text-base group-hover:text-[#7DAF56] transition-colors">
                                {product.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                        opacity: 0;
                    }
                `}</style>

                {/* View All Button */}
                <div className="flex justify-center">
                    <Link to="/catalog" className="bg-[#2A4B56] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#1e363e] transition-colors text-sm shadow-lg shadow-[#2A4B56]/20">
                        View All
                        <ArrowRight className="w-4 h-4 text-[#7DAF56]" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ProductSection;
