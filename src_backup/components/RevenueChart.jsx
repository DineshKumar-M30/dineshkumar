import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { name: '5k', sales: 20, profit: 20 },
    { name: '10k', sales: 30, profit: 60 },
    { name: '15k', sales: 28, profit: 45 },
    { name: '20k', sales: 28, profit: 32 },
    { name: '25k', sales: 38, profit: 35 },
    { name: '30k', sales: 30, profit: 50 },
    { name: '35k', sales: 55, profit: 35 },
    { name: '40k', sales: 85, profit: 55 },
    { name: '45k', sales: 55, profit: 40 },
    { name: '50k', sales: 65, profit: 60 },
    { name: '55k', sales: 35, profit: 35 },
    { name: '60k', sales: 55, profit: 85 },
    { name: '65k', sales: 20, profit: 20 },
];

const RevenueChart = () => {
    const [activeRange, setActiveRange] = useState('Month');

    const ranges = ['Day', 'Week', 'Month'];

    return (
        <div className="bg-white p-6 rounded-[24px] shadow-sm border-none mt-[30px] transition-shadow hover:shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-[20px] font-bold text-[#202224]">Revenue</h3>
                </div>
                <div className="flex items-center bg-gray-50 p-1 rounded-xl">
                    {ranges.map((range) => (
                        <button
                            key={range}
                            onClick={() => setActiveRange(range)}
                            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeRange === range
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600 font-semibold'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F35454" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#F35454" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#884DFF" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#884DFF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke="#F3F4F6" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }}
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                            itemStyle={{ fontWeight: 600 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#F35454"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                        />
                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="#884DFF"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorProfit)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center items-center gap-8 mt-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F35454]"></div>
                    <span className="text-sm font-bold text-gray-700">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#884DFF]"></div>
                    <span className="text-sm font-bold text-gray-700">Profit</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;
