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
    const [chartType, setChartType] = useState('area');

    const isDark = theme === 'dark';

    return (
        <div className={cn(
            "p-6 rounded-2xl border transition-all duration-300 shadow-sm h-[400px] flex flex-col",
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        )}>
            <div className="flex justify-between items-center mb-6">
                <h3 className={cn(
                    "font-bold text-lg",
                    isDark ? "text-slate-100" : "text-slate-900"
                )}>{title}</h3>

                <div className={cn(
                    "flex p-1 rounded-xl transition-colors",
                    isDark ? "bg-slate-800" : "bg-slate-100"
                )}>
                    <button
                        onClick={() => setChartType('area')}
                        className={cn(
                            "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                            chartType === 'area'
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-400 hover:text-slate-200"
                        )}
                    >
                        Line
                    </button>
                    <button
                        onClick={() => setChartType('bar')}
                        className={cn(
                            "px-3 py-1.5 text-xs font-bold rounded-lg transition-all",
                            chartType === 'bar'
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-400 hover:text-slate-200"
                        )}
                    >
                        Bar
                    </button>
                </div>
            </div>

            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'area' ? (
                        <AreaChart data={ChartData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDark ? '#0f172a' : '#fff',
                                    borderRadius: '12px',
                                    border: isDark ? '1px solid #1e293b' : '1px solid #e2e8f0',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    ) : (
                        <BarChart data={ChartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                                contentStyle={{
                                    backgroundColor: isDark ? '#0f172a' : '#fff',
                                    borderRadius: '12px',
                                    border: isDark ? '1px solid #1e293b' : '1px solid #e2e8f0'
                                }}
                            />
                            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;
