import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_DATA } from '../data';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-8"
                    >
                        Revolutionizing the web
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        {HERO_DATA.title.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-4 last:mr-0">
                                {word === 'Future' ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                        {word}
                                    </span>
                                ) : word}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {HERO_DATA.subtitle}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-indigo-500 text-white font-bold text-lg w-full sm:w-auto transition-all shadow-xl shadow-indigo-500/20"
                        >
                            {HERO_DATA.ctaPrimary}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.05)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-slate-700 text-white font-bold text-lg w-full sm:w-auto transition-all"
                        >
                            {HERO_DATA.ctaSecondary}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Hero Interactive Mouse Element (Abstract) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2"
                >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                </motion.div>
                <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Scroll to Explore</span>
            </div>
        </section>
    );
};

export default Hero;
