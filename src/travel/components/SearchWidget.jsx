import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const SearchWidget = ({ onSearch, loading }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState('1 Guest');

    const handleSearchClick = () => {
        onSearch({ from, to, date, travelers });
    };

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto -mt-24 relative z-30"
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                {/* From */}
                <div className="flex flex-col space-y-2 p-2 group cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-rose-500 transition-colors">From</label>
                    <div className="flex items-center space-x-2">
                        <MapPin className="text-rose-500 w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Origin"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full bg-transparent outline-none font-semibold text-gray-800 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* To */}
                <div className="flex flex-col space-y-2 p-2 group cursor-pointer hover:bg-gray-50 rounded-lg transition-colors md:pl-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-rose-500 transition-colors">To</label>
                    <div className="flex items-center space-x-2">
                        <MapPin className="text-rose-500 w-5 h-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Destination"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full bg-transparent outline-none font-semibold text-gray-800 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Date */}
                <div className="flex flex-col space-y-2 p-2 group cursor-pointer hover:bg-gray-50 rounded-lg transition-colors md:pl-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-rose-500 transition-colors">Date</label>
                    <div className="flex items-center space-x-2">
                        <Calendar className="text-rose-500 w-5 h-5 flex-shrink-0" />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-transparent outline-none font-semibold text-gray-800"
                        />
                    </div>
                </div>

                {/* Travelers */}
                <div className="flex flex-col space-y-2 p-2 group cursor-pointer hover:bg-gray-50 rounded-lg transition-colors md:pl-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-rose-500 transition-colors">Travelers</label>
                    <div className="flex items-center space-x-2">
                        <Users className="text-rose-500 w-5 h-5 flex-shrink-0" />
                        <select
                            value={travelers}
                            onChange={(e) => setTravelers(e.target.value)}
                            className="w-full bg-transparent outline-none font-semibold text-gray-800 cursor-pointer"
                        >
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4+ Guests</option>
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="flex items-center justify-center md:pl-4 pt-4 md:pt-0">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSearchClick}
                        className={`w-full h-14 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-rose-500/30 flex items-center justify-center space-x-2 transition-all overflow-hidden relative ${loading ? 'cursor-wait' : ''}`}
                    >
                        {loading ? (
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 200, opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane rotate-45 mr-2"><path d="M2 12h20" /><path d="M13 2l9 10-9 10" /><path d="m13 2-3 10-3-10" /></svg>
                                <span className="text-sm">Searching...</span>
                            </motion.div>
                        ) : (
                            <>
                                <Search className="w-5 h-5" />
                                <span>Search</span>
                            </>
                        )}
                    </motion.button>
                </div>

            </div>
        </motion.div>
    );
};

export default SearchWidget;
