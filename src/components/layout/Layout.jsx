import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import DashboardPage from '../../pages/dashboard/DashboardPage';
import AnalyticsPage from '../../pages/analytics/AnalyticsPage';
import CustomersPage from '../../pages/customers/CustomersPage';
import TransactionsPage from '../../pages/transactions/TransactionsPage';
import ReportsPage from '../../pages/reports/ReportsPage';
import SettingsPage from '../../pages/settings/SettingsPage';

const Layout = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const { theme } = useTheme();

    const renderPage = () => {
        switch (activeTab) {
            case 'dashboard': return <DashboardPage />;
            case 'analytics': return <AnalyticsPage />;
            case 'customers': return <CustomersPage />;
            case 'transactions': return <TransactionsPage />;
            case 'reports': return <ReportsPage />;
            case 'settings': return <SettingsPage />;
            default: return <DashboardPage />;
        }
    };

    return (
        <div className={cn(
            "flex min-h-screen transition-colors duration-300",
            theme === 'dark' ? "bg-slate-950" : "bg-slate-50"
        )}>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col min-w-0">
                <Navbar />
                <main className="flex-1 p-8 overflow-y-auto">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default Layout;
