import React from 'react';
import { motion } from 'framer-motion';
import SearchWidget from './SearchWidget';

const Hero = ({ onSearch, isSearching }) => {
    return (
        <div className="relative">
            {/* Background Section */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                {/* You can allow user to replace this with a real video or high-res image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000")' }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
                    >
                        Explore the <span className="text-rose-400">Unseen</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-2xl font-light max-w-2xl text-gray-100 mb-10 drop-shadow-md"
                    >
                        Discover breathtaking destinations and create memories that last vivid forever.
                    </motion.p>
                </div>
            </div>

            {/* Search Widget Container - Overlapping the hero image */}
            <div className="container mx-auto px-4 relative z-10">
                <SearchWidget onSearch={onSearch} loading={isSearching} />
            </div>
        </div>
    );
};

export default Hero;
