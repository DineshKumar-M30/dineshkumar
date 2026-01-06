import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Navbar = () => {
    const { theme, toggleTheme } = useApp();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/project-dashboard" className="flex items-center space-x-2">
                        <LayoutDashboard className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Nexus
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
                        <a href="#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How it Works</a>
                        <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <Link to="/project-dashboard/login" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Login</Link>
                        <Link to="/project-dashboard/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
