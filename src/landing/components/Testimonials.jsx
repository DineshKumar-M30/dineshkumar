import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate testimonials
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section
            id="testimonials"
            className="py-24 md:py-32 relative overflow-hidden bg-slate-950/20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Social Proof
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        Loved by <span className="text-indigo-500">Innovators.</span>
                    </motion.h2>
                </div>

                {/* Main Testimonial Slider */}
                <div className="max-w-5xl mx-auto relative">
                    <div className="relative min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="bg-slate-900 shadow-2xl rounded-[2rem] p-8 md:p-16 border border-white/10 group transition-all hover:bg-slate-900/80"
                            >
                                <div className="space-y-8">
                                    <Quote size={56} className="text-indigo-500/40 group-hover:text-indigo-500 transition-colors" />
                                    <p className="text-2xl md:text-3xl font-medium text-white italic leading-snug">
                                        "{TESTIMONIALS[currentIndex].content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/5">
                                    <img
                                        src={TESTIMONIALS[currentIndex].avatar}
                                        alt={TESTIMONIALS[currentIndex].name}
                                        className="w-16 h-16 rounded-full border-2 border-indigo-500"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold text-xl">{TESTIMONIALS[currentIndex].name}</h4>
                                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                                            {TESTIMONIALS[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={goToPrev}
                            className="p-3 rounded-full bg-slate-800 border border-white/10 text-white hover:bg-indigo-500 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-indigo-500'
                                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={goToNext}
                            className="p-3 rounded-full bg-slate-800 border border-white/10 text-white hover:bg-indigo-500 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    {/* Metric Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 mx-auto max-w-xs bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center text-white"
                    >
                        <span className="text-5xl font-black mb-2 tabular-nums">150+</span>
                        <span className="text-sm font-bold uppercase tracking-widest opacity-80">Global Launches</span>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
            </div>
        </section>
    );
};

export default Testimonials;
