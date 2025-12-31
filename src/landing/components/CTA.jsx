import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FOOTER_LINKS } from '../data';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 2000);
            return;
        }

        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="relative overflow-hidden pt-24">
            {/* Liquid Gradient CTA */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-slate-900 rounded-[3rem] border border-white/10 p-12 md:p-24 relative overflow-hidden text-center">
                    {/* Morphing Background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            borderRadius: ["20% 80% 80% 20%", "50% 50% 20% 80%", "20% 80% 80% 20%"]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[100px] pointer-events-none -z-10"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
                    >
                        Ready to Build the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Future with Us?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 italic"
                    >
                        Join 5,000+ companies architecting high-performance digital products on our platform.
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
                        className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto p-2 rounded-2xl md:rounded-full bg-slate-950 border border-white/5 shadow-2xl transition-all duration-300 ${status === 'error' ? 'shake border-red-500/50' : ''
                            }`}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent px-6 py-3 text-white outline-none focus:ring-0 placeholder:text-slate-600"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                        >
                            {status === 'idle' && <><Send size={18} /> Subscribe</>}
                            {status === 'loading' && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                            {status === 'success' && <><CheckCircle size={18} /> Done!</>}
                            {status === 'error' && <><AlertCircle size={18} /> Invalid</>}
                        </button>
                    </motion.form>

                    <p className="mt-4 text-xs text-slate-600 font-medium uppercase tracking-[0.2em]">No spam, just pure technical updates.</p>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-24 pb-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-3xl"
            >
                <div className="container mx-auto px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
                    >
                        <div className="col-span-2 md:col-span-1 space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white text-xl">A</div>
                                <span className="text-xl font-bold text-white uppercase tracking-tighter">AETHER</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                A world-class digital production house building the next generation of web experiences.
                            </p>
                        </div>

                        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                            <div key={category} className="space-y-6">
                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">{category}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-medium">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                        <p className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">
                            © 2026 Aether Digital Architecture Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-slate-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Privacy Policy</a>
                            <a href="#" className="text-slate-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Terms of Service</a>
                        </div>
                    </motion.div>
                </div>
            </motion.footer>

            <style jsx>{`
        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
        </section >
    );
};

export default CTA;
