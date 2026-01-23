import React from 'react';
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
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm border-none mt-[30px] transition-shadow hover:shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] font-bold text-[#202224]">Revenue</h3>
                <button className="flex items-center gap-2 px-4 py-1.5 border border-[#D5D5D5] rounded-[10px] text-[#202224] text-xs font-semibold hover:bg-gray-50 bg-[#FCFDFD]">
                    <span>October</span>
                    <ChevronDown size={14} />
                </button>
            </div>

            {/* Chart */}
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
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
                            domain={[0, 100]}
                            ticks={[20, 40, 60, 80, 100]}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        {/* Sales Area (Orange/Red) */}
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="none"
                            fill="#F35454" // More reddish orange like screenshot
                            fillOpacity={0.6}
                        />
                        {/* Profit Area (Purple) */}
                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="none"
                            fill="#884DFF" // More vibrant purple
                            fillOpacity={0.4}
                        />
                        {/* Re-doing overlapping areas requires removing stackId */}
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center items-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F35454]"></div>
                    <span className="text-sm font-medium text-gray-600">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#884DFF]"></div>
                    <span className="text-sm font-medium text-gray-600">Profit</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;
