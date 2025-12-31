import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LOGOS } from '../data';

const LogosMarquee = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-20 bg-slate-950/50 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-500 uppercase tracking-widest text-xs font-bold"
                >
                    Trusted by Industry Leaders
                </motion.p>
            </div>

            <div
                className="flex overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* We double the logos to create the infinite loop effect */}
                <motion.div
                    animate={{ x: isPaused ? undefined : [0, -1920] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap gap-20 py-4 items-center"
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-3 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <img src={logo.url} alt={logo.name} className="h-8 md:h-12 object-contain" />
                            <span className="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-tighter">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side gradients to fade logos in/out */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default LogosMarquee;
