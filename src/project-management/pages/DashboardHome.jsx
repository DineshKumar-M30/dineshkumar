import React from 'react';
import { useApp } from '../context/AppContext';
import StatsCard from '../components/Dashboard/StatsCard';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import { LayoutDashboard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardHome = () => {
    const { projects, tasks } = useApp();

    // Calculate stats logic (mocked for now, but using context data length)
    const totalProjects = projects.length || 12; // Fallback for UI demo
    const completedTasks = tasks.filter(t => t.status === 'Completed').length || 45;
    const pendingTasks = tasks.filter(t => t.status !== 'Completed').length || 23;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                    + New Project
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Projects"
                    value={totalProjects}
                    change="+30%"
                    trend="up"
                    icon={LayoutDashboard}
                    color="bg-blue-500"
                />
                <StatsCard
                    title="Completed Tasks"
                    value={completedTasks}
                    change="+12%"
                    trend="up"
                    icon={CheckCircle}
                    color="bg-green-500"
                />
                <StatsCard
                    title="In Progress"
                    value={pendingTasks}
                    change="-5%"
                    trend="down"
                    icon={Clock}
                    color="bg-orange-500"
                />
                <StatsCard
                    title="Overdue"
                    value="3"
                    change="+2%"
                    trend="up"
                    icon={AlertCircle}
                    color="bg-red-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area (Projects/Charts) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Recent Projects Table Placeholder - will implement full component later */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Projects</h3>
                            <button className="text-sm text-blue-600 hover:underline">View All</button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-500 text-sm">
                                        <th className="pb-3 font-medium">Project Name</th>
                                        <th className="pb-3 font-medium">Status</th>
                                        <th className="pb-3 font-medium">Progress</th>
                                        <th className="pb-3 font-medium">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                                    {[1, 2, 3, 4].map((i) => (
                                        <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="py-4 font-medium text-slate-900 dark:text-white">Mobile App Redesign</td>
                                            <td className="py-4">
                                                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2.5 py-1 rounded-full text-xs font-bold">Active</span>
                                            </td>
                                            <td className="py-4 w-1/3">
                                                <div className="flex items-center">
                                                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mr-3">
                                                        <div className="bg-blue-600 h-full rounded-full" style={{ width: '75%' }}></div>
                                                    </div>
                                                    <span className="text-slate-500">75%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-slate-500">Oct 24, 2026</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

                {/* Activity Feed */}
                <div className="lg:col-span-1">
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
