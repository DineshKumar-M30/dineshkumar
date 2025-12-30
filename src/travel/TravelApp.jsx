import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass } from 'lucide-react';

import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import Flights from './components/Flights';
import AvailableTrips, { AvailableTripsSkeleton } from './components/AvailableTrips';
import BookingModal from './components/BookingModal';
import Packages from './components/Packages';
import Cruises from './components/Cruises';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import SignIn from './components/SignIn';
import { trips } from './data/mockData';

const TravelApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searching, setSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [filteredTrips, setFilteredTrips] = useState(null);

    if (!isLoggedIn) {
        return <SignIn onLogin={() => setIsLoggedIn(true)} />;
    }

    const handleSearch = (searchData) => {
        setSearching(true);
        setShowResults(false);

        // Simulate network request with filtering
        setTimeout(() => {
            const results = trips.filter(trip => {
                const searchFrom = searchData.from?.toLowerCase() || '';
                const searchTo = searchData.to?.toLowerCase() || '';

                // Match Origin (strictly for items with 'from' property, e.g. flights)
                // If user specifies 'from', items without 'from' (hotels) are excluded unless we want mixed results.
                // Assuming 'from' implies looking for transport.
                const matchFrom = !searchFrom || (trip.from && trip.from.toLowerCase().includes(searchFrom));

                // Match Destination
                // Check 'to' (flights), 'name' (hotels/places), or 'location' (hotels)
                const matchTo = !searchTo ||
                    (trip.to && trip.to.toLowerCase().includes(searchTo)) ||
                    (trip.name && trip.name.toLowerCase().includes(searchTo)) ||
                    (trip.location && trip.location.toLowerCase().includes(searchTo));

                return matchFrom && matchTo;
            });

            setFilteredTrips(results);
            setSearching(false);
            setShowResults(true);

            // Scroll to results
            setTimeout(() => {
                const resultsSection = document.getElementById('results-section');
                if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 1500);
    };

    const handleBook = (trip) => {
        setSelectedTrip(trip);
        setIsModalOpen(true);
    };

    return (
        <div className="font-sans antialiased bg-gray-50 min-h-screen text-gray-900 selection:bg-rose-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 cursor-pointer flex items-center space-x-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="bg-gradient-to-tr from-rose-500 to-purple-600 p-2 rounded-lg text-white">
                                <Compass size={24} className="animate-spin-slow" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
                                Wanderlust
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Home</button>
                            <a href="#flights" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Flights</a>
                            <a href="#destinations" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Destinations</a>
                            <a href="#packages" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Packages</a>
                            <a href="#cruises" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Cruises</a>
                            <button className="px-5 py-2.5 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transform hover:-translate-y-0.5 cursor-pointer">
                                Sign In
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md">Home</a>
                                <a href="#flights" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md">Flights</a>
                                <a href="#destinations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md">Destinations</a>
                                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50 rounded-md">Packages</a>
                                <button className="w-full mt-4 bg-rose-500 text-white px-5 py-3 rounded-lg font-medium shadow-md">
                                    Sign In
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main>
                {/* Pass handleSearch to Hero -> SearchWidget */}
                <Hero onSearch={handleSearch} isSearching={searching} />

                {/* Results Section */}
                <div id="results-section">
                    {searching && <AvailableTripsSkeleton />}
                    {showResults && !searching && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AvailableTrips onBook={handleBook} trips={filteredTrips} />
                        </motion.div>
                    )}
                </div>

                <div id="destinations">
                    <PopularDestinations />
                </div>

                <Flights />

                <Packages />
                <Cruises />

                {/* Why Choose Us */}
                <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travel With Us?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">We don't just book trips; we create memories that last a lifetime.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {[
                                { title: "Best Price Guarantee", desc: "We ensure you get the most value for your money with competitive pricing.", icon: "💰" },
                                { title: "24/7 Support", desc: "Our team is always available to assist you, no matter where you are.", icon: "🎧" },
                                { title: "Handpicked Hotels", desc: "We strictly select only the best accommodations for your comfort.", icon: "🏨" }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-rose-500 transition-colors">
                                    <div className="text-4xl mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonials />
                <Newsletter />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="bg-gray-800 p-2 rounded-lg text-white border border-gray-700">
                            <Compass size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Wanderlust</h2>
                    </div>
                    <p className="text-gray-400 mb-8">Travel the world with the ones you love.</p>
                    <div className="text-sm text-gray-500">
                        © 2025 Wanderlust Travel. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                trip={selectedTrip}
            />

        </div>
    );
};

export default TravelApp;
