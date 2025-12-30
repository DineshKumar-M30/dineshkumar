import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Check } from 'lucide-react';
import { packages } from '../data/mockData';

const Packages = () => {
    return (
        <section id="packages" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Packages</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Curated holiday bundles designed for hassle-free travel and unforgettable experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-rose-500 shadow-sm">
                                    {pkg.duration}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-500 transition-colors">{pkg.title}</h3>
                                    <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-lg">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="text-sm font-bold text-gray-700">{pkg.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-gray-600 text-sm">
                                            <div className="bg-rose-100 p-1 rounded-full">
                                                <Check className="w-3 h-3 text-rose-500" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting from</span>
                                        <span className="text-2xl font-bold text-gray-900">${pkg.price}</span>
                                    </div>
                                    <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-rose-500 transition-colors shadow-lg hover:shadow-rose-500/25">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
