import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { STEPS } from '../data';

const HowItWorks = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-24 md:py-32 relative bg-slate-950/30" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Process</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-white">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Deliver Value.</span></h2>
                </div>

                <div className="max-w-4xl mx-auto relative px-6">
                    {/* Central Line (The Thread of Life) */}
                    <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent md:-translate-x-1/2 origin-top"
                    />

                    {/* Steps */}
                    <div className="space-y-24">
                        {STEPS.map((step, index) => (
                            <div key={index} className={`relative flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Visual Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute left-[24px] md:left-1/2 w-[16px] h-[16px] bg-[#020617] border-4 border-indigo-500 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`w-full md:w-[45%] p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl group hover:border-indigo-500/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}
                                >
                                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-widest">{step.date}</span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase italic tracking-tight">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed italic">{step.description}</p>
                                </motion.div>

                                {/* Spacer piece for desktop layout */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
