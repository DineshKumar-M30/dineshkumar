import React from 'react';
import { Users, Box, BarChart, History } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import SalesChart from '../components/SalesChart';
import DealsTable from '../components/DealsTable';
import RevenueChart from '../components/RevenueChart';
import CustomersWidget from '../components/CustomersWidget';
import FeaturedProductWidget from '../components/FeaturedProductWidget';
import SalesAnalyticsWidget from '../components/SalesAnalyticsWidget';

const Dashboard = () => {
    const stats = [
        {
            title: 'Total User',
            value: '40,689',
            icon: Users,
            iconBgColor: 'bg-indigo-100',
            iconColor: 'text-indigo-600',
            trend: 'up',
            trendValue: '8.5%',
            trendLabel: 'Up from yesterday'
        },
        {
            title: 'Total Order',
            value: '10293',
            icon: Box,
            iconBgColor: 'bg-yellow-100', 
            iconColor: 'text-yellow-600',
            trend: 'up',
            trendValue: '1.3%',
            trendLabel: 'Up from past week'
        },
        {
            title: 'Total Sales',
            value: '$89,000',
            icon: BarChart, 
            iconBgColor: 'bg-green-100', 
            iconColor: 'text-green-600',
            trend: 'down',
            trendValue: '4.3%',
            trendLabel: 'Down from yesterday'
        },
        {
            title: 'Total Pending',
            value: '2040',
            icon: History, 
            iconBgColor: 'bg-orange-100', 
            iconColor: 'text-orange-600',
            trend: 'up',
            trendValue: '1.8%',
            trendLabel: 'Up from yesterday'
        }
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Chart Section */}
            <div className="mb-8">
                <SalesChart />
            </div>

            {/* Deals Table Section */}
            <div className="mb-8">
                <DealsTable />
            </div>

            {/* Revenue Chart Section */}
            <div className="mb-8">
                <RevenueChart />
            </div>

            {/* Bottom Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <CustomersWidget />
                <FeaturedProductWidget />
                <SalesAnalyticsWidget />
            </div>
        </div>
    );
};

export default Dashboard;
