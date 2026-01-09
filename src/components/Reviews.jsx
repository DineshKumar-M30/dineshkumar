import React from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
    return (
        <section id="reviews" className="relative w-full pt-32 pb-24 bg-gradient-to-br from-[#2b6bff] to-[#4fa3ff] overflow-hidden mt-[-1px]">

            {/* Top Wave Shape */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg className="relative block w-full h-[180px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" preserveAspectRatio="none">
                    <path d="M0,0 L1440,0 L1440,0 C960,160 480,160 0,0 Z" fill="#ffffff"></path>
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider relative z-10">
                        WHAT THEY SAY ABOUT US
                    </h2>
                    {/* Orange accents title - Adjusted to be just the three slashes top-left of text */}
                    <div className="absolute -top-7 -left-10 flex gap-2">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: 32 }} /* 8 * 4 = 32px roughly height of h-8 */
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="w-1.5 h-8 bg-orange-400 rotate-[30deg]"
                        ></motion.div>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: 32 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="w-1.5 h-8 bg-orange-500 rotate-[30deg] -mt-2"
                        ></motion.div>
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: 32 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="w-1.5 h-8 bg-orange-600 rotate-[30deg] -mt-1"
                        ></motion.div>
                    </div>
                </motion.div>


                {/* Review Card & Navigation */}
                <div className="relative w-full max-w-4xl px-4 md:px-8">

                    {/* Desktop Navigation Buttons */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#67e8f9" }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden md:flex absolute top-1/2 -left-4 -translate-y-1/2 w-16 h-16 bg-cyan-400 rotate-45 items-center justify-center shadow-lg transition-colors z-30 group cursor-pointer border-4 border-[#3b8dff]"
                    >
                        <svg className="w-6 h-6 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7"></path></svg>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#67e8f9" }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 w-16 h-16 bg-cyan-400 rotate-45 items-center justify-center shadow-lg transition-colors z-30 group cursor-pointer border-4 border-[#3b8dff]"
                    >
                        <svg className="w-6 h-6 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7"></path></svg>
                    </motion.button>

                    {/* Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-sm p-10 md:p-14 relative shadow-2xl mx-auto w-full"
                    >
                        {/* Quote Marks */}
                        <div className="absolute top-6 left-8 text-cyan-400 text-7xl font-sans font-black opacity-40 leading-3 h-8">“</div>
                        <div className="absolute bottom-6 right-8 text-cyan-400 text-7xl font-sans font-black opacity-40 leading-3 h-8 transform rotate-180">“</div>

                        <div className="flex flex-col items-center text-center">
                            {/* Avatar */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                                className="rounded-full p-1 bg-gradient-to-tr from-orange-400 to-orange-500 mb-5 shadow-lg relative z-10"
                            >
                                <img
                                    src="/avatar_review.png"
                                    alt="User Avatar"
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white"
                                />
                            </motion.div>

                            {/* Name & Flag */}
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="text-xl font-extrabold text-gray-800 tracking-wide">Egor Chernyaev</h3>
                                <img src="https://flagcdn.com/w20/ru.png" alt="RU" className="w-5 h-auto shadow-sm" />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-500 font-medium text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
                                I recommend this software! I haven't found analogues anywhere, I decided not to bother and immediately bought the PRO version and now I play for my own pleasure.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Navigation Arrows - Below Card */}
                <div className="flex md:hidden items-center justify-center gap-12 mt-12 relative z-30">
                    <button className="w-14 h-14 bg-cyan-400/20 rounded-full flex items-center justify-center hover:bg-cyan-400/40 transition-colors border border-cyan-400/50 group">
                        <svg className="w-8 h-8 text-cyan-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>

                    {/* Visual Line between arrows */}
                    <div className="w-16 h-[2px] bg-cyan-400/20"></div>

                    <button className="w-14 h-14 bg-cyan-400/20 rounded-full flex items-center justify-center hover:bg-cyan-400/40 transition-colors border border-cyan-400/50 group">
                        <svg className="w-8 h-8 text-cyan-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

            </div>

            {/* Background Decoration Elements */}
            {/* Geometric Arc/Quarter Circle Left */}
            <div className="absolute top-[200px] left-0 pointer-events-none opacity-20">
                <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
                    <path d="M0 400C110.457 400 200 310.457 200 200C200 89.543 110.457 0 0 0V400Z" fill="white" />
                </svg>
            </div>

            {/* Geometric Arc/Quarter Circle Right */}
            <div className="absolute bottom-[50px] right-0 pointer-events-none opacity-20">
                <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                    <path d="M250 0C111.929 0 0 111.929 0 250H250V0Z" fill="white" />
                </svg>
            </div>

            {/* Dots Grid Left */}
            <div className="absolute bottom-1/3 left-[5%] opacity-15 pointer-events-none">
                <div className="grid grid-cols-6 gap-3">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                </div>
            </div>

            {/* Dots Grid Right */}
            <div className="absolute top-1/4 right-[5%] opacity-15 pointer-events-none">
                <div className="grid grid-cols-4 gap-3">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Reviews;
