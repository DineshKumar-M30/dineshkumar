import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, Calendar, ArrowRight } from 'lucide-react';
import { trips } from '../data/mockData';

const Flights = () => {
    // Filter only flights
    const flightTrips = trips.filter(trip => trip.type === 'Flight');

    return (
        <section id="flights" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Flight Deals</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our best fares to popular destinations around the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flightTrips.slice(0, 6).map((flight, index) => (
                        <motion.div
                            key={flight.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                    <Plane className="text-rose-500" size={24} />
                                </div>
                                <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {flight.airline}
                                </span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold">From</p>
                                        <h3 className="text-lg font-bold text-gray-900">{flight.from}</h3>
                                        <p className="text-sm text-gray-500">{flight.departure}</p>
                                    </div>
                                    <ArrowRight className="text-gray-300" />
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 uppercase font-bold">To</p>
                                        <h3 className="text-lg font-bold text-gray-900">{flight.to}</h3>
                                        <p className="text-sm text-gray-500">{flight.arrival}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-white py-2 rounded-lg border border-gray-100 border-dashed">
                                    <Clock size={14} />
                                    <span>{flight.duration}</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100 flex items-end justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">Economy from</p>
                                    <p className="text-2xl font-bold text-gray-900">${flight.price}</p>
                                </div>
                                <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm group-hover:bg-rose-500 transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors hover:border-gray-300">
                        View All Flights
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Flights;
