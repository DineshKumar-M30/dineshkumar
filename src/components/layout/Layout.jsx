import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const Layout = ({ children }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const { theme } = useTheme();

    return (
        <div className={cn(
            "flex min-h-screen transition-colors duration-300",
            theme === 'dark' ? "bg-slate-950" : "bg-slate-50"
        )}>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col min-w-0">
                <Navbar />
                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
