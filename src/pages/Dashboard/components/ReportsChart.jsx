import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { time: '10am', sales: 55 },
    { time: '11am', sales: 30 },
    { time: '12am', sales: 58 },
    { time: '01am', sales: 35 },
    { time: '02am', sales: 22 },
    { time: '03am', sales: 50 },
    { time: '04am', sales: 15 },
    { time: '05am', sales: 35 },
    { time: '06am', sales: 68 },
    { time: '07am', sales: 75 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl text-center">
                <p className="text-xs font-medium text-slate-400 mb-1">Sales</p>
                <p className="text-xl font-bold">{payload[0].value.toLocaleString()}</p>
                {/* Little triangle pointer (simulated) */}
            </div>
        );
    }
    return null;
};

export default function ReportsChart() {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Reports</h3>
                <button className="text-gray-400 hover:text-gray-600 pb-2">...</button>
            </div>

            <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#8B5CF6', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#C084FC"
                            strokeWidth={3}
                            fill="url(#colorSales)"
                            activeDot={{ r: 6, fill: "#fff", stroke: "#A855F7", strokeWidth: 3 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
