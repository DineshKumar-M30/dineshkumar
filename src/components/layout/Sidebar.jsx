import React, { useState } from 'react';
import {
    LayoutDashboard,
    BarChart3,
    Users,
    FileText,
    Settings,
    ChevronLeft,
    Menu,
    Search,
    Bell,
    Sun,
    Moon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: Users, label: 'Customers', id: 'customers' },
    { icon: FileText, label: 'Reports', id: 'reports' },
    { icon: Settings, label: 'Settings', id: 'settings' },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 260 }}
            className={cn(
                "h-screen sticky top-0 border-r transition-colors duration-300 flex flex-col z-50",
                theme === 'dark'
                    ? "bg-slate-900 border-slate-800 text-slate-400"
                    : "bg-white border-slate-200 text-slate-600"
            )}
        >
            {/* Header */}
            <div className="p-6 flex items-center justify-between">
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 font-bold text-xl text-blue-500"
                    >
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                            <BarChart3 size={20} />
                        </div>
                        <span>Smartly</span>
                    </motion.div>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                        "p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                        isCollapsed && "mx-auto"
                    )}
                >
                    {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all relative group",
                            activeTab === item.id
                                ? "text-blue-500 bg-blue-50/50 dark:bg-blue-500/10"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/50",
                            isCollapsed && "justify-center"
                        )}
                    >
                        <item.icon size={22} className={cn(
                            "transition-colors",
                            activeTab === item.id ? "text-blue-500" : "text-slate-400"
                        )} />
                        {!isCollapsed && <span className="font-medium">{item.label}</span>}

                        {/* Active Indicator */}
                        {activeTab === item.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full"
                            />
                        )}

                        {/* Tooltip for collapsed state */}
                        {isCollapsed && (
                            <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                {item.label}
                            </div>
                        )}
                    </button>
                ))}
            </nav>

            {/* Footer / Theme Toggle */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all",
                        isCollapsed && "justify-center"
                    )}
                >
                    {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    {!isCollapsed && <span className="font-medium">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
