import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutGrid,
    BarChart2,
    Grid,
    FileText,
    Calendar,
    LineChart,
    Bell,
    Settings,
    LogOut,
    Gamepad2
} from 'lucide-react';

export default function DashboardLayout() {
    const [activePath, setActivePath] = useState('/dashboard');
    const location = useLocation();

    const navItems = [
        { icon: LayoutGrid, path: '/dashboard', label: 'Dashboard' },
        { icon: BarChart2, path: '/dashboard/analytics', label: 'Analytics' },
        { icon: Grid, path: '/dashboard/apps', label: 'Apps' },
        { icon: FileText, path: '/dashboard/reports', label: 'Reports' },
        { icon: Calendar, path: '/dashboard/calendar', label: 'Calendar' },
        { icon: LineChart, path: '/dashboard/charts', label: 'Charts' },
        { icon: Bell, path: '/dashboard/notifications', label: 'Notifications' },
        { icon: Gamepad2, path: '/tictactoe', label: 'XO Game' },
        { icon: Settings, path: '/dashboard/settings', label: 'Settings' },
    ];

    return (
        <div className="flex h-screen bg-[#F4F5F9] font-sans">
            {/* Sidebar */}
            <aside className="w-24 bg-white flex flex-col items-center py-6 shadow-sm z-20">
                {/* Logo */}
                <div className="mb-10 flex flex-col items-center">
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mb-1 shadow-lg shadow-blue-500/30">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <span className="font-bold text-gray-800 text-sm">Base</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 w-full space-y-6 flex flex-col items-center">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/dashboard/');
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`p-3 rounded-xl transition-all duration-200 group relative ${isActive
                                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                                    : 'text-gray-400 hover:text-blue-500 hover:bg-gray-50'
                                    }`}
                            >
                                <item.icon size={22} className={isActive ? 'text-blue-600' : 'currentColor'} />

                                {/* Tooltip */}
                                <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity top-1/2 transform -translate-y-1/2">
                                    {item.label}
                                    {/* Triangle arrow */}
                                    <div className="absolute top-1/2 right-full -mt-1 border-4 border-transparent border-r-gray-800"></div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* User Profile */}
                <div className="mt-auto flex flex-col items-center gap-4">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                    <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img src="https://i.pravatar.cc/150?img=12" alt="User" className="h-full w-full object-cover" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
