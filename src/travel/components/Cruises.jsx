import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Map } from 'lucide-react';
import { cruises } from '../data/mockData';

const Cruises = () => {
    return (
        <section id="cruises" className="py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Luxury Cruises</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sail toward the horizon in style with our premium ocean liners.
                    </p>
                </div>

                <div className="space-y-8">
                    {cruises.map((cruise, index) => (
                        <motion.div
                            key={cruise.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row group"
                        >
                            <div className="md:w-2/5 relative overflow-hidden">
                                <img
                                    src={cruise.image}
                                    alt={cruise.name}
                                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold text-blue-600">
                                    {cruise.line}
                                </div>
                            </div>

                            <div className="p-8 md:w-3/5 flex flex-col justify-center">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{cruise.name}</h3>
                                    <div className="flex items-center space-x-2 text-gray-500">
                                        <Anchor className="w-4 h-4 text-blue-500" />
                                        <span>{cruise.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 mb-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <Map className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Route</span>
                                        <p className="text-gray-700 font-medium">{cruise.route}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <p className="text-sm text-gray-400">per person</p>
                                        <p className="text-3xl font-bold text-gray-900">${cruise.price}</p>
                                    </div>
                                    <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                                        View Itinerary
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

export default Cruises;
