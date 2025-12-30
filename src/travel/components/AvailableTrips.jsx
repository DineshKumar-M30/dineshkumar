import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Clock, CheckCircle2 } from 'lucide-react';
import { trips as allTrips } from '../data/mockData';

const AvailableTrips = ({ onBook, trips = allTrips }) => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recommended');

    const filteredTrips = (filter === 'all'
        ? trips
        : trips.filter(trip => trip.type.toLowerCase() === filter)).sort((a, b) => {
            if (sortBy === 'price_low') return a.price - b.price;
            if (sortBy === 'price_high') return b.price - a.price;
            return 0; // recommended/default order
        });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <section id="available-trips" className="py-24 bg-gray-50 min-h-[500px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Available Trips</h2>

                    <div className="flex items-center space-x-4">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block p-2.5 outline-none"
                        >
                            <option value="recommended">Recommended</option>
                            <option value="price_low">Price: Low to High</option>
                            <option value="price_high">Price: High to Low</option>
                        </select>

                        {/* Filter Pills */}
                        <div className="flex space-x-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                            {['all', 'flight', 'hotel'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f
                                        ? 'bg-rose-500 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {f.charAt(0).toUpperCase() + f.slice(1) + (f === 'all' ? '' : 's')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-4"
                >
                    {filteredTrips.length > 0 ? (
                        filteredTrips.map((trip) => (
                            <motion.div
                                key={trip.id}
                                variants={item}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between group"
                            >
                                {/* Left Info */}
                                <div className="flex items-center space-x-6 w-full md:w-auto">
                                    <div className={`p-4 rounded-full ${trip.type === 'Flight' ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'}`}>
                                        {trip.type === 'Flight' ? <Plane size={24} /> : <Hotel size={24} />}
                                    </div>

                                    <div>
                                        <div className="flex items-center space-x-2 mb-1">
                                            <span className="text-xs font-bold uppercase text-gray-400 tracking-wider text-xs">{trip.type}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="text-xs font-semibold text-gray-500">{trip.airline || trip.location}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {trip.type === 'Flight' ? `${trip.from} to ${trip.to}` : trip.name}
                                        </h3>
                                        {trip.type === 'Flight' && (
                                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                                <span>{trip.departure}</span>
                                                <div className="h-[1px] w-8 bg-gray-300 relative"></div>
                                                <span>{trip.arrival}</span>
                                            </div>
                                        )}
                                        {trip.type === 'Hotel' && (
                                            <div className="flex items-center space-x-1 mt-1 text-yellow-500 text-sm font-bold">
                                                <span>★</span><span>{trip.rating}</span>
                                                <span className="text-gray-400 font-normal ml-1">Excellent</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Middle Info (Duration/Features) */}
                                <div className="hidden md:flex flex-col items-center justify-center px-8 border-l border-r border-gray-100 h-16 w-48">
                                    {trip.duration && (
                                        <div className="flex items-center space-x-1 text-gray-500">
                                            <Clock size={16} />
                                            <span>{trip.duration}</span>
                                        </div>
                                    )}
                                    {trip.type === 'Hotel' && (
                                        <div className="flex items-center space-x-1 text-emerald-500 text-sm">
                                            <CheckCircle2 size={16} />
                                            <span>Free Breakfast</span>
                                        </div>
                                    )}
                                </div>

                                {/* Right Action */}
                                <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 md:pl-6 space-x-6">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Price per person</p>
                                        <p className="text-2xl font-bold text-gray-900">${trip.price}</p>
                                    </div>
                                    <button
                                        onClick={() => onBook(trip)}
                                        className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-rose-500 transition-colors shadow-lg hover:shadow-rose-500/25 transform hover:-translate-y-0.5"
                                    >
                                        Select
                                    </button>
                                </div>

                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-medium text-gray-600">No trips found</h3>
                            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
                        </div>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export const AvailableTripsSkeleton = () => (
    <section id="available-trips" className="py-24 bg-gray-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-48 bg-gray-200 rounded-lg mb-10 animate-pulse"></div>
            <div className="space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-32 bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div className="flex-1 space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="w-32 h-12 bg-gray-200 rounded-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AvailableTrips;
