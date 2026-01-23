import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { name: '5k', value: 20 },
    { name: '10k', value: 30 },
    { name: '15k', value: 45 },
    { name: '20k', value: 35 },
    { name: '25k', value: 55 },
    { name: '30k', value: 40 },
    { name: '35k', value: 70 }, 
    { name: '40k', value: 30 },
    { name: '45k', value: 45 },
    { name: '50k', value: 35 },
    { name: '55k', value: 60 },
    { name: '60k', value: 50 },
    { name: '65k', value: 65 },
];

const SalesChart = () => {
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm border-none transition-shadow hover:shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] font-bold text-[#202224]">Sales Details</h3>
                <button className="flex items-center gap-2 px-4 py-1.5 border border-[#D5D5D5] rounded-[10px] text-[#202224] text-xs font-semibold hover:bg-gray-50 bg-[#FCFDFD]">
                    <span>October</span>
                    <ChevronDown size={14} />
                </button>
            </div>

            {/* Chart */}
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4379EE" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#4379EE" stopOpacity={0} />
                            </linearGradient>
                        </defs>
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
                            tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#4379EE"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            activeDot={{ r: 6, fill: "#4379EE", stroke: "white", strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;
