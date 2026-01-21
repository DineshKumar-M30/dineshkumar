import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

const KPICard = ({ title, value, trend, percentage, icon: Icon, color, progressColor }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-6 rounded-2xl border transition-all duration-300 shadow-sm",
                theme === 'dark'
                    ? "bg-[#1f2937] border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:shadow-md"
            )}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className={cn(
                    "text-sm font-semibold",
                    theme === 'dark' ? "text-slate-400" : "text-slate-500"
                )}>
                    {title}
                </h3>
                <div className={cn(
                    "flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded",
                    trend === 'up'
                        ? "text-emerald-500 bg-emerald-500/10"
                        : "text-rose-500 bg-rose-500/10"
                )}>
                    {trend === 'up' ? "+" : "-"}{percentage}% vs last month
                </div>
            </div>

            <div className="mb-4">
                <h2 className={cn(
                    "text-3xl font-bold tracking-tight",
                    theme === 'dark' ? "text-white" : "text-slate-900"
                )}>
                    {value}
                </h2>
            </div>

            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${60 + Math.random() * 30}%` }}
                    className={cn("h-full", progressColor)}
                />
            </div>
        </motion.div>
    );
};

export default KPICard;
