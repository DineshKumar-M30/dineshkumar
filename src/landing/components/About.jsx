import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1.1]);

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <h4 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm">Our Philosophy</h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                                Designed for the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Modern World.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            We believe that great design is invisible. It should feel intuitive, effortless, and empowering. Our approach combines rigorous engineering with artistic intuition.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "User Centric", desc: "Every pixel serves a purpose for the user." },
                                { title: "Performance First", desc: "Optimized for speed and efficiency." },
                                { title: "Future Proof", desc: "Built with scalable, modern architectures." },
                                { title: "Detail Oriented", desc: "Precision in every interaction." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-2 border-l-2 border-indigo-500/20 pl-6"
                                >
                                    <h5 className="text-white font-bold">{item.title}</h5>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <div className="flex-1 relative">
                        <motion.div
                            style={{ scale }}
                            className="relative aspect-square max-w-lg mx-auto"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 blur-[60px] rounded-full animate-pulse" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card h-full">
                                <motion.img
                                    style={{ y: yParallax }}
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern Technology"
                                    className="w-full h-[120%] object-cover"
                                />

                                {/* Floating UI Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 p-4 rounded-2xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">System Optimal</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-10 left-10 p-4 rounded-2xl bg-slate-900/90 backdrop-blur border border-white/10 shadow-xl"
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase">Latency</span>
                                        <span className="text-lg font-black text-white uppercase tabular-nums">1.2ms</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
