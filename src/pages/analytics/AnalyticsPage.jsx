import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell
} from 'recharts';
import { ChartData } from '../../utils/mockData';
import { Globe, Zap, Target, ArrowUpRight } from 'lucide-react';

const AnalyticsPage = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const performanceMetrics = [
        { label: 'Page Load', value: '0.8s', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Conversion', value: '3.2%', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { label: 'Bounce Rate', value: '42%', color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { label: 'Server Uptime', value: '99.9%', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>
                        Analytics Insights
                    </h1>
                    <p className="text-slate-400">Deep dive into your platform's performance metrics.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform">
                        Real-time Feed
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {performanceMetrics.map((metric) => (
                    <div key={metric.label} className={cn(
                        "p-6 rounded-2xl border transition-all duration-300",
                        isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                    )}>
                        <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">{metric.label}</p>
                        <h2 className={cn("text-2xl font-black", metric.color)}>{metric.value}</h2>
                        <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-500">
                            <ArrowUpRight size={10} /> +12% from yesterday
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={cn(
                    "lg:col-span-2 p-6 rounded-3xl border h-[400px] flex flex-col",
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                )}>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className={cn("font-bold", isDark ? "text-white" : "text-slate-900")}>Traffic Sources</h3>
                        <select className="bg-transparent text-xs font-bold text-slate-500 border-none outline-none cursor-pointer">
                            <input type="checkbox" className="hidden" />
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                            { name: 'Organic', value: 450, color: '#3b82f6' },
                            { name: 'Social', value: 320, color: '#10b981' },
                            { name: 'Direct', value: 210, color: '#f59e0b' },
                            { name: 'Referral', value: 150, color: '#ef4444' },
                            { name: 'Email', value: 120, color: '#8b5cf6' },
                        ]}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: isDark ? '#1e293b' : '#f8fafc' }}
                                contentStyle={{ backgroundColor: isDark ? '#111827' : '#fff', border: 'none', borderRadius: '12px' }}
                            />
                            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                                {[450, 320, 210, 150, 120].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][index]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className={cn(
                    "p-6 rounded-3xl border flex flex-col",
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                )}>
                    <h3 className={cn("font-bold mb-6", isDark ? "text-white" : "text-slate-900")}>Live Events</h3>
                    <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                        {[
                            { time: 'Just now', event: 'New user joined from UK', icon: 'UserPlus', color: 'text-blue-500' },
                            { time: '2 mins ago', event: 'Server spike detected', icon: 'Activity', color: 'text-rose-500' },
                            { time: '15 mins ago', event: 'Report generated: Q4', icon: 'FileText', color: 'text-emerald-500' },
                            { time: '40 mins ago', event: 'Backup completed', icon: 'Database', color: 'text-amber-500' },
                            { time: '1 hr ago', event: 'API key rotated', icon: 'Key', color: 'text-indigo-500' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-slate-800/10 transition-colors group">
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 group-hover:bg-white/10 transition-colors", item.color)}>
                                    <Zap size={18} />
                                </div>
                                <div>
                                    <p className={cn("text-xs font-bold leading-tight", isDark ? "text-slate-200" : "text-slate-800")}>{item.event}</p>
                                    <p className="text-[10px] font-medium text-slate-500 mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 rounded-xl bg-slate-800/50 text-slate-400 text-xs font-bold hover:text-white hover:bg-slate-800 transition-all border border-slate-800/50">
                        Clear History
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={cn(
                    "p-6 rounded-3xl border h-[400px] flex flex-col",
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                )}>
                    <h3 className={cn("font-bold mb-6", isDark ? "text-white" : "text-slate-900")}>Traffic Density</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ChartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#1e293b" : "#f1f5f9"} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: isDark ? '#111827' : '#fff', border: 'none', borderRadius: '12px' }}
                            />
                            <Area type="step" dataKey="revenue" stroke="#3b82f6" fill="#3b82f633" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className={cn(
                    "p-6 rounded-3xl border h-[400px] flex flex-col",
                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                )}>
                    <h3 className={cn("font-bold mb-6", isDark ? "text-white" : "text-slate-900")}>Regional Performance</h3>
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-blue-500/5 rounded-2xl animate-pulse" />
                        <Globe className="text-blue-500/20" size={200} />
                        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-amber-500 rounded-full animate-ping" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center">
                            <p className="text-xs text-slate-500 font-bold mb-1">North America</p>
                            <p className={cn("font-black", isDark ? "text-white" : "text-slate-900")}>42%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-slate-500 font-bold mb-1">Europe</p>
                            <p className={cn("font-black", isDark ? "text-white" : "text-slate-900")}>28%</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-slate-500 font-bold mb-1">Asia Pacific</p>
                            <p className={cn("font-black", isDark ? "text-white" : "text-slate-900")}>18%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
