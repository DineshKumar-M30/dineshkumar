import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import Avatar from '../Shared/Avatar';
import { motion } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
    const { user } = useAuth();
    const { theme, toggleTheme } = useApp();
    const [showNotifications, setShowNotifications] = React.useState(false);

    return (
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-2 md:hidden">
                    <div className="bg-blue-600 p-1 rounded-md">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div>
                    <span className="font-bold text-lg text-slate-900 dark:text-white">Nexus</span>
                </div>

                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative text-slate-600 dark:text-slate-300"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 py-2 z-50">
                            <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 font-bold text-sm text-slate-900 dark:text-white">Notifications</div>
                            <div className="max-h-64 overflow-y-auto">
                                <div className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 border-b border-slate-50 dark:border-slate-800 transition-colors">
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Welcome to Nexus!</p>
                                    <p className="text-xs text-slate-500 mt-1">Get started by creating your first project.</p>
                                </div>
                                <div className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">System Update</p>
                                    <p className="text-xs text-slate-500 mt-1">Dark mode is now available.</p>
                                </div>
                            </div>
                            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 text-center">
                                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Mark all as read</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{user?.name || 'Guest'}</p>
                        <p className="text-xs text-slate-500 mt-1">Free Plan</p>
                    </div>
                    <Avatar src={user?.avatar} alt={user?.name} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
