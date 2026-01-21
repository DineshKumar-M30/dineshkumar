import React from 'react';
import { motion } from 'framer-motion';
import KPICard from '../../components/dashboard/KPICard';
import AnalyticsChart from '../../components/dashboard/AnalyticsChart';
import DataTable from '../../components/dashboard/DataTable';
import { KpiData } from '../../utils/mockData';
import { Users, DollarSign, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const DashboardPage = () => {
    const { theme } = useTheme();
    const iconMap = [DollarSign, Users, ShoppingBag, ArrowUpRight];

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className={cn(
                        "text-3xl font-bold tracking-tight mb-1",
                        theme === 'dark' ? "text-slate-100" : "text-slate-900"
                    )}>
                        Dashboard Overview
                    </h1>
                    <p className="text-slate-400 font-medium">
                        Welcome back, Dinesh! Here's what's happening with your projects.
                    </p>
                </div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm">
                    Download Report
                </button>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {KpiData.map((kpi, index) => (
                    <KPICard
                        key={kpi.title}
                        {...kpi}
                        icon={iconMap[index]}
                    />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AnalyticsChart title="Revenue Growth" />
                </div>
                <div className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col items-center justify-center text-center",
                    theme === 'dark' ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                )}>
                    <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                        <ArrowUpRight size={32} />
                    </div>
                    <h4 className={cn(
                        "font-bold text-lg mb-2",
                        theme === 'dark' ? "text-slate-100" : "text-slate-900"
                    )}>Upgrade to Pro</h4>
                    <p className="text-sm text-slate-400 mb-6 px-4">
                        Get advanced analytics and unlimited project tracking by upgrading your plan.
                    </p>
                    <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">
                        Unlock All Features
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 gap-6">
                <DataTable title="Recent Projects" />
            </div>
        </div>
    );
};

export default DashboardPage;
