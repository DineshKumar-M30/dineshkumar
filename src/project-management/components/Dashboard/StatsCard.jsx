import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, change, icon: Icon, color, trend }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-slate-500 text-sm font-medium">{title}</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20`}>
                    <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
                </div>
            </div>

            <div className="flex items-center">
                <span className={`text-sm font-bold ${trend === 'up' ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                    {change}
                </span>
                <span className="text-slate-400 text-sm ml-2">from last month</span>
            </div>
        </motion.div>
    );
};

export default StatsCard;
