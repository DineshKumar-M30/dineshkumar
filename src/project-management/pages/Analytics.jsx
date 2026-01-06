import React from 'react';
import { useApp } from '../context/AppContext';
import StatsCard from '../components/Dashboard/StatsCard';
import { TrendingUp, Users, CheckSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
    // Mock data based on context would be ideal, static for visuals now
    const weeklyData = [40, 70, 45, 90, 65, 85, 55];
    const maxVal = Math.max(...weeklyData);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics</h1>
                <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>This Year</option>
                </select>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard title="Productivity" value="87%" change="+12%" trend="up" icon={TrendingUp} color="bg-green-500" />
                <StatsCard title="Team Velocity" value="24" change="+4" trend="up" icon={Users} color="bg-blue-500" />
                <StatsCard title="Tasks Done" value="142" change="+28%" trend="up" icon={CheckSquare} color="bg-purple-500" />
                <StatsCard title="Avg Time" value="4.2h" change="-10%" trend="up" icon={Clock} color="bg-orange-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Custom Bar Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Task Completion Trend</h3>
                    <div className="h-64 flex items-end justify-between space-x-2">
                        {weeklyData.map((val, i) => (
                            <div key={i} className="flex flex-col items-center flex-1 group">
                                <div className="relative w-full flex justify-end flex-col items-center h-full">
                                    <div
                                        className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors relative overflow-hidden"
                                        style={{ height: `${(val / maxVal) * 100}%` }}
                                    >
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "100%" }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="w-full bg-blue-600 absolute bottom-0"
                                        />
                                    </div>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Progress Circles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Project Status</h3>
                    <div className="space-y-6">
                        {[
                            { label: 'Completed', val: 65, color: 'bg-green-500' },
                            { label: 'In Progress', val: 24, color: 'bg-blue-500' },
                            { label: 'On Hold', val: 11, color: 'bg-orange-500' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                                    <span>{stat.label}</span>
                                    <span>{stat.val}%</span>
                                </div>
                                <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.val}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className={`h-full ${stat.color} rounded-full`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Analytics;
