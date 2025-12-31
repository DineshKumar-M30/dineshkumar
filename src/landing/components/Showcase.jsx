import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SHOWCASE_ITEMS } from '../data';
import { X } from 'lucide-react';

const Showcase = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedItem = SHOWCASE_ITEMS.find(item => item.id === selectedId);

    return (
        <section id="showcase" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h4 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm">Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Showcase.</span></h2>
                        <p className="text-slate-400">Explore our latest projects where technology meets creativity.</p>
                    </div>

                    <div className="flex items-center gap-4 border border-white/10 rounded-full px-6 py-2 bg-slate-900/40 backdrop-blur">
                        <span className="text-xs font-bold text-white">All Projects</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOWCASE_ITEMS.map((item) => (
                        <motion.div
                            layoutId={`card-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-slate-800 border border-white/5"
                        >
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-[60]"
                            />
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-slate-900 rounded-[2.5rem] overflow-hidden z-[70] border border-white/10 shadow-2xl"
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-1/2 h-[300px] md:h-auto">
                                        <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
                                        >
                                            <X size={20} />
                                        </button>

                                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">{selectedItem.category}</span>
                                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic">{selectedItem.title}</h2>
                                        <p className="text-slate-400 leading-relaxed text-lg mb-8 italic">"{selectedItem.description}"</p>

                                        <button className="px-8 py-3 rounded-full bg-indigo-500 text-white font-bold text-sm w-fit transition-all hover:bg-indigo-600 shadow-xl shadow-indigo-500/20">
                                            View Live Project
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Showcase;
