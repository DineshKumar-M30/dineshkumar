import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const [activePlatform, setActivePlatform] = useState('ios');

    return (
        <section id="features" className="relative w-full bg-white py-20 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                {/* Left Column: Phone & Switcher */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center relative z-20"
                >
                    {/* Platform Switcher */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActivePlatform('windows')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 ${activePlatform === 'windows' ? 'bg-gray-100 text-gray-800 ring-2 ring-gray-200' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.724-1.604L24 0v11.417H10.724V1.845zM0 13.065h9.75v8.307L0 20.08v-7.015zm10.724 0H24v9.648l-13.276-1.841v-7.807z" /></svg>
                            <span>Windows</span>
                        </button>
                        <button
                            onClick={() => setActivePlatform('android')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 ${activePlatform === 'android' ? 'bg-gray-100 text-gray-800 ring-2 ring-gray-200' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.152-.5676.416.416 0 00-.5676.152l-2.0223 3.503C15.5902 8.4239 13.8533 8.0944 12 8.0944s-3.5902.3295-5.1367.8752L4.841 5.4666a.417.417 0 00-.5677-.152.416.416 0 00-.152.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" /></svg>
                            <span>Android</span>
                        </button>
                        <button
                            onClick={() => setActivePlatform('ios')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95 ${activePlatform === 'ios' ? 'bg-[#00ACFF] text-white shadow-blue-400/30' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.37 1.834c.834-.997 1.25-2.043.914-2.834-.667 0-1.417.083-2.083.583-.667.5-1.25 1.252-1.25 2.084 0 .917.5 1.834 1.334 1.834.416 0 1.083-.583 1.083-1.667zm-2.083 4.584c-1.334 0-2.334.75-2.917.75-.667 0-1.667-.75-2.75-.75-2.833 0-4.333 2.5-4.333 4.917 0 3.917 2.833 9.333 5.333 9.333 1.083 0 1.583-.75 2.917-.75 1.333 0 1.75.75 2.917.75 2.25 0 5.416-5.417 5.416-9.417 0-.083 0-.167-.083-.25-1.167-.5-1.834-1.5-1.834-2.583 0-1.75 1.25-2.584 1.25-2.584-.666-1.666-2.083-2.416-2.583-2.583-.667-.167-1.75-.334-3.333.916z" /></svg>
                            <span>iOS</span>
                        </button>
                    </div>

                    {/* Mockup Image */}
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
                        className="relative w-[500px] h-[500px] drop-shadow-2xl"
                    >
                        <img src="/mobile_mockup1.png" alt="PUBG Mobile Cheat Interface" className="w-full h-full object-contain" />
                        {/* Platform indicators below phone */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
                            <svg className="w-6 h-6 text-gray-400 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Functional Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <div className="relative inline-block">
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-wide">
                            FUNCTIONALITY
                        </h2>
                        {/* Orange accents title */}
                        <div className="absolute -top-3 -left-3 w-8 h-1 bg-orange-500 transform -rotate-45"></div>
                        <div className="absolute -bottom-2 -right-3 w-8 h-1 bg-orange-500 transform -rotate-45"></div>
                    </div>

                    <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
                        Unique cheat for iOS suitable for all devices starting from iPhone 4S+.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-6 w-full max-w-md lg:max-w-none">
                        {['WallHack', 'AntiRecoil', 'AimBot', 'Drop'].map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="flex items-start gap-4 text-left"
                            >
                                <div className="mt-1.5 w-2 h-2 rotate-45 bg-orange-500 shrink-0"></div>
                                <p className="text-gray-600 font-medium">
                                    <span className="font-bold text-gray-800">{item}</span> - {item === 'WallHack' ? 'detects enemies through walls.' : item === 'AntiRecoil' ? 'disables recoil on any weapon.' : item === 'AimBot' ? 'automatically aims at the enemy.' : 'shows top loot items through walls.'}
                                </p>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Warning Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex items-start gap-4 bg-gray-50 p-4 border border-gray-100 rounded-lg max-w-lg text-left"
                    >
                        <svg className="w-6 h-6 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <p className="text-gray-400 text-sm font-medium">
                            We recommend leaving standard parameters in the cheat
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-center lg:justify-start items-center gap-5 pt-4"
                    >
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative px-10 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-orange-500/60 transition-all text-sm uppercase tracking-wider flex items-center gap-2">
                            <span>Buy</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-8 py-3.5 bg-red-500 text-white font-bold rounded shadow-[0_10px_20px_-5px_rgba(239,68,68,0.4)] hover:shadow-red-500/60 transition-all text-sm uppercase tracking-wider">
                            <span>Watch Video</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
