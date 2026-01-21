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
    { icon: LayoutDashboard, label: 'Overview', id: 'dashboard' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: Users, label: 'Customers', id: 'customers' },
    { icon: FileText, label: 'Transactions', id: 'transactions' },
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
                    ? "bg-[#111827] border-slate-800 text-slate-400"
                    : "bg-white border-slate-200 text-slate-600"
            )}
        >
            {/* Header */}
            <div className="p-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <BarChart3 size={24} />
                    </div>
                    {!isCollapsed && (
                        <span className="font-bold text-xl text-slate-100 tracking-tight">SmartDash</span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all relative group",
                            activeTab === item.id
                                ? "text-white bg-blue-600 shadow-lg shadow-blue-600/20"
                                : "hover:bg-slate-800/50 text-slate-400 hover:text-slate-200",
                            isCollapsed && "justify-center"
                        )}
                    >
                        <item.icon size={22} />
                        {!isCollapsed && <span className="font-medium">{item.label}</span>}

                        {/* Active Indicator (Pill) */}
                        {activeTab === item.id && !isCollapsed && (
                            <div className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                    </button>
                ))}
            </nav>

            {/* Footer / Theme & Collapse */}
            <div className="p-4 space-y-2 border-t border-slate-800">
                <button
                    onClick={toggleTheme}
                    className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-slate-400 transition-all",
                        isCollapsed && "justify-center"
                    )}
                >
                    {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    {!isCollapsed && <span className="font-medium">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
                </button>

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                        "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-slate-400 transition-all",
                        isCollapsed && "justify-center"
                    )}
                >
                    <ChevronLeft className={cn("transition-transform", isCollapsed && "rotate-180")} size={22} />
                    {!isCollapsed && <span className="font-medium">Collapse</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
