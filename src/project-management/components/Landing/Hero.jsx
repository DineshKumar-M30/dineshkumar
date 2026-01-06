import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-full px-4 py-1.5 mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">New: AI Assistant v2.0 is live</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
                    >
                        Manage projects with <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                            Superhuman Speed
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Experience the future of project management. Built for high-performance teams who demand excellence, automation, and AI-driven insights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Link
                            to="/project-dashboard/signup"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <span>Start for free</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center space-x-2">
                            <Play className="w-5 h-5 fill-current" />
                            <span>Watch Demo</span>
                        </button>
                    </motion.div>

                    {/* Feature List */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 dark:text-slate-400"
                    >
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Cancel anytime</span>
                        </div>
                    </motion.div>
                </div>

                {/* Dashboard Preview Image */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 relative perspective-1000"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-200 dark:border-slate-800 bg-slate-900/5 dark:bg-slate-100/5 backdrop-blur-sm p-2">
                        <img
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                            alt="Dashboard Interface"
                            className="rounded-xl w-full h-auto object-cover"
                        />

                        {/* Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold dark:text-white">Task Completed</p>
                                    <p className="text-xs text-slate-500">Just now</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -left-8 bottom-40 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200">
                                            <img src={`https://ui-avatars.com/api/?name=U+${i}&background=random`} alt="User" className="rounded-full" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                                    +5 New Members
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
