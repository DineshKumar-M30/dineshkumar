import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FEATURES } from '../data';
import * as Icons from 'lucide-react';

const FeatureCard = ({ feature, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for rotation
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const Icon = Icons[feature.icon] || Icons.Zap;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="group relative h-full"
        >
            {/* Glow Effect */}
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm pointer-events-none"
            />

            <div className="relative h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-start gap-6 hover:bg-slate-900/80 transition-all duration-300">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white`}>
                    <Icon size={32} className="group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        {feature.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 overflow-hidden w-full">
                    <div className="h-px bg-gradient-to-r from-indigo-500/50 to-transparent w-0 group-hover:w-full transition-all duration-700" />
                </div>
            </div>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Core Capabilities
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        Engineered for <span className="text-indigo-500">Excellence.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400"
                    >
                        Our platform is built on a foundation of performance, security, and scalability. Explore the technologies that power the future.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
