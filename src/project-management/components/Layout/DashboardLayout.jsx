import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AIAssistant from '../Smart/AIAssistant';
import VoiceCommand from '../Smart/VoiceCommand';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                    <Outlet />
                    <AIAssistant />
                    <VoiceCommand />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
