import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '2015', sales: 0, returns: 25 },
    { name: '2015.5', sales: 42, returns: 58 }, // Interpolated points for curve
    { name: '2016', sales: 56, returns: 68 },
    { name: '2016.5', sales: 40, returns: 55 },
    { name: '2017', sales: 25, returns: 45 },
    { name: '2018', sales: 35, returns: 60 },
    { name: '2019', sales: 65, returns: 100 },
];

// Simplify to match visual key points
const simpleData = [
    { name: '2015', series1: 25, series2: 0 },
    { name: '2016', series1: 70, series2: 58 },
    { name: '2017', series1: 45, series2: 25 },
    { name: '2018', series1: 60, series2: 35 },
    { name: '2019', series1: 100, series2: 95 },
]

const SalesAnalyticsWidget = () => {
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm border-none transition-shadow hover:shadow-md h-full">
            <h3 className="text-[20px] font-bold text-[#202224] mb-6">Sales Analytics</h3>

            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={simpleData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            ticks={[0, 25, 50, 75, 100]}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="series1"
                            stroke="#5185F4"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#5185F4", strokeWidth: 0 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="series2"
                            stroke="#00B69B"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#00B69B", strokeWidth: 0 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesAnalyticsWidget;
