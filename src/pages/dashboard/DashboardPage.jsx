import React from 'react';
import { motion } from 'framer-motion';
import KPICard from '../../components/dashboard/KPICard';
import AnalyticsChart from '../../components/dashboard/AnalyticsChart';
import DataTable from '../../components/dashboard/DataTable';
import { KpiData } from '../../utils/mockData';
import { Users, DollarSign, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

import UserDistribution from '../../components/dashboard/UserDistribution';

const DashboardPage = () => {
    const { theme } = useTheme();
    // The iconMap is no longer used as per the update, so it can be removed.
    // const iconMap = [DollarSign, Users, ShoppingBag, ArrowUpRight];

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
                    // icon={iconMap[index]} // This prop is removed as per the update
                    />
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <AnalyticsChart title="Revenue Analytics" />
                </div>
                <div>
                    <UserDistribution />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 gap-6">
                <DataTable title="Recent Transactions" />
            </div>
        </div>
    );
};

export default DashboardPage;
