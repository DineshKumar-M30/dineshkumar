
import React from 'react';
import { ArrowUpRight, BadgeCheck, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Worker from "../assets/Industrial Worker.png";

const Hero = () => {
    return (
        <div className="relative w-full h-screen min-h-[700px] bg-black text-white overflow-hidden font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Worker}
                    alt="Industrial Worker"
                    className="w-full h-full object-cover object-center"
                />
                {/* Dark gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col pt-32 md:pt-0">

                {/* Main Text Section - Centered Vertically */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="max-w-3xl relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-[75px] font-medium leading-[1.1] mb-6 tracking-tight text-white"
                        >
                            Excellence innovating <br />
                            industry for <span className="relative inline-block z-10">
                                today
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-200 text-sm md:text-base lg:text-[15px] mb-10 max-w-[550px] leading-relaxed font-light opacity-90"
                        >
                            At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <button className="flex items-stetch shadow-lg group">
                                <span className="bg-white text-black px-6 py-3 font-bold text-[13px] tracking-wide rounded-l-md flex items-center h-12">
                                    Explore More
                                </span>
                                <span className="bg-orange-500 w-12 h-12 rounded-r-md flex items-center justify-center transition-colors group-hover:bg-orange-600">
                                    <ArrowUpRight className="text-white w-5 h-5" strokeWidth={2.5} />
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Features Strip - In Flow */}
                <div className="w-full pb-12 z-20 shrink-0">
                    <div className="border-t border-white/10 pt-6 flex flex-wrap gap-8 md:gap-16 items-center">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="p-1 border border-dashed border-orange-500 rounded-full flex items-center justify-center">
                                <Settings className="text-orange-500 w-4 h-4" />
                            </div>
                            <span className="text-[13px] text-gray-200 font-normal tracking-wide">Advanced Manufacturing Solutions</span>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="p-1 border border-dashed border-orange-500 rounded-full flex items-center justify-center">
                                <BadgeCheck className="text-orange-500 w-4 h-4" />
                            </div>
                            <span className="text-[13px] text-gray-200 font-normal tracking-wide">Quality Assurance Systems</span>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="p-1 border border-dashed border-orange-500 rounded-full flex items-center justify-center">
                                <Zap className="text-orange-500 w-4 h-4" />
                            </div>
                            <span className="text-[13px] text-gray-200 font-normal tracking-wide">State-of-the-Art Technology</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
