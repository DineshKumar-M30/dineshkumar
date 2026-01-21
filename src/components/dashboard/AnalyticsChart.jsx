import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { ChartData } from '../../utils/mockData';

const AnalyticsChart = ({ title }) => {
    const { theme } = useTheme();
    const [chartType, setChartType] = useState('area'); // This state is no longer used for chart type selection, but kept as it was not explicitly removed in the instruction.
    const isDark = theme === 'dark';

    return (
        <div className={cn(
            "p-6 rounded-2xl border transition-all duration-300 shadow-sm h-[450px] flex flex-col",
            isDark ? "bg-[#1f2937] border-slate-800" : "bg-white border-slate-200"
        )}>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className={cn("font-bold text-lg", isDark ? "text-white" : "text-slate-900")}>
                        Revenue Analytics
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-emerald-500 text-xs font-bold leading-none">↑ 14.2%</span>
                        <span className="text-slate-500 text-xs font-semibold">vs previous period</span>
                    </div>
                </div>

                <div className={cn(
                    "flex p-1 rounded-xl",
                    isDark ? "bg-[#111827]" : "bg-slate-100"
                )}>
                    {['Day', 'Week', 'Month'].map((type) => (
                        <button
                            key={type}
                            onClick={() => { }}
                            className={cn(
                                "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                                type === 'Month'
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ChartData}>
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#374151" : "#f1f5f9"} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 600 }}
                            dy={15}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 11, fontWeight: 600 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: isDark ? '#111827' : '#fff',
                                borderRadius: '12px',
                                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                padding: '12px'
                            }}
                            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            labelStyle={{ color: '#6b7280', fontSize: '11px', marginBottom: '8px' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="users"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorUsers)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;
