import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

const KPICard = ({ title, value, trend, percentage, icon: Icon, color }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-6 rounded-2xl border transition-all duration-300 shadow-sm",
                theme === 'dark'
                    ? "bg-slate-900 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:shadow-md"
            )}
        >
            <div className="flex justify-between items-start mb-4">
                <div className={cn(
                    "p-3 rounded-xl",
                    theme === 'dark' ? "bg-slate-800" : "bg-slate-50",
                    color
                )}>
                    <Icon size={24} />
                </div>
                <div className={cn(
                    "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                    trend === 'up'
                        ? "text-emerald-500 bg-emerald-500/10"
                        : "text-rose-500 bg-rose-500/10"
                )}>
                    {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {percentage}%
                </div>
            </div>

            <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
            <h3 className={cn(
                "text-2xl font-bold tracking-tight",
                theme === 'dark' ? "text-slate-100" : "text-slate-900"
            )}>
                {value}
            </h3>
        </motion.div>
    );
};

export default KPICard;
