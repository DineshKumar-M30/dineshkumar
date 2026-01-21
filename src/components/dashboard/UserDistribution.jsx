import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const data = [
    { name: 'Desktop', value: 200, color: '#ef4444' },
    { name: 'E-commerce', value: 300, color: '#10b981' },
    { name: 'Mobile', value: 300, color: '#f59e0b' },
    { name: 'SaaS', value: 400, color: '#3b82f6' },
];

const UserDistribution = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={cn(
            "p-6 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col items-center",
            isDark ? "bg-[#1f2937] border-slate-800" : "bg-white border-slate-200"
        )}>
            <div className="w-full text-left mb-6">
                <h3 className={cn("font-bold text-lg", isDark ? "text-white" : "text-slate-900")}>
                    User Distribution
                </h3>
                <p className="text-xs text-slate-400">Breakdown by device category</p>
            </div>

            <div className="w-full h-[200px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: isDark ? '#111827' : '#fff',
                                borderRadius: '8px',
                                border: 'none',
                                color: isDark ? '#fff' : '#000'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="w-full space-y-3">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className={cn("text-xs font-bold", isDark ? "text-slate-400" : "text-slate-600")}>
                                {item.name}
                            </span>
                        </div>
                        <span className={cn("text-xs font-extrabold", isDark ? "text-slate-200" : "text-slate-800")}>
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDistribution;
