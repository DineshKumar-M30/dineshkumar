import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { destinations } from '../data/mockData';

const PopularDestinations = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
                        <p className="text-gray-500 text-lg">Most visited places recommended for you</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors group">
                        View all
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="h-72 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm z-20">
                                    <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                                    <span className="text-sm font-bold text-gray-900">{dest.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{dest.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{dest.description}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium">Starting from</span>
                                        <span className="text-rose-500 text-lg font-bold">${dest.price}</span>
                                    </div>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-rose-500 hover:text-white transition-colors font-medium text-sm">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <button className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                        View All Destinations
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PopularDestinations;
