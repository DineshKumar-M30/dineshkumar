import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';

const UiElements = () => {
    // Data for Bar Charts
    const barData1 = [
        { value: 90 }, { value: 60 }, { value: 40 }, { value: 80 }, { value: 65 }, { value: 50 }, { value: 60 }
    ];

    const barData2 = [
        { v1: 30, v2: 60 }, { v1: 25, v2: 45 }, { v1: 20, v2: 55 }, { v1: 35, v2: 40 }, { v1: 30, v2: 50 }, { v1: 20, v2: 65 }, { v1: 25, v2: 60 }
    ];

    const barData3 = [
        { v1: 40, v2: 20 }, { v1: 50, v2: 25 }, { v1: 60, v2: 30 }, { v1: 45, v2: 22 }, { v1: 55, v2: 28 }, { v1: 65, v2: 35 }, { v1: 48, v2: 24 }
    ];

    const barData4 = [
        { v1: 20, v2: 30, v3: 40 },
        { v1: 25, v2: 35, v3: 45 },
        { v1: 20, v2: 30, v3: 50 },
        { v1: 30, v2: 40, v3: 60 },
        { v1: 25, v2: 35, v3: 55 },
        { v1: 20, v2: 30, v3: 50 },
        { v1: 28, v2: 38, v3: 48 }
    ];

    // Data for Pie Charts
    const pieData1 = [{ value: 75 }, { value: 25 }];
    const pieData2 = [{ value: 40 }, { value: 60 }];
    const pieData3 = [{ value: 60 }, { value: 40 }];
    const pieData4 = [{ value: 55 }, { value: 45 }];

    const COLORS = {
        blue: '#4880FF',
        purple: '#D64BC9',
        orange: '#FF8F6B',
        sky: '#279EFF',
        teal: '#00B69B',
        lightGray: '#F1F4F9'
    };

    const SectionCard = ({ title, children }) => (
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-[#202224] mb-8">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {children}
            </div>
        </div>
    );

    return (
        <div className="p-6 md:p-8 bg-[#f8f9fa] min-h-full font-outfit">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#202224]">UI Elements</h2>

                {/* Custom Filter Select */}
                <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-full md:w-auto">
                    <div className="p-3 border-r border-gray-100 text-gray-400">
                        <Filter size={18} />
                    </div>
                    <div className="px-3 md:px-4 py-3 bg-gray-50/50 border-r border-gray-100">
                        <span className="text-[10px] md:text-xs font-bold text-gray-500 whitespace-nowrap">Filter By</span>
                    </div>
                    <button className="flex-1 md:flex-none flex items-center justify-between md:justify-start gap-4 md:gap-8 px-4 md:px-5 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors group">
                        <span>Charts</span>
                        <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </button>
                </div>
            </div>

            {/* Bar Charts Section */}
            <SectionCard title="Bar Chart">
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData1}>
                            <Bar dataKey="value" fill={COLORS.blue} radius={[4, 4, 0, 0]} barSize={8} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData2}>
                            <Bar dataKey="v1" fill={COLORS.teal} radius={[0, 0, 0, 0]} barSize={8} stackId="a" />
                            <Bar dataKey="v2" fill={COLORS.teal} opacity={0.1} radius={[4, 4, 0, 0]} barSize={8} stackId="a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData3}>
                            <Bar dataKey="v1" fill={COLORS.orange} radius={[4, 4, 0, 0]} barSize={8} />
                            <Bar dataKey="v2" fill={COLORS.blue} radius={[4, 4, 0, 0]} barSize={8} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData4}>
                            <Bar dataKey="v1" fill="#FFB1C1" radius={[0, 0, 0, 0]} barSize={8} stackId="a" />
                            <Bar dataKey="v2" fill="#FFB1C1" opacity={0.5} radius={[0, 0, 0, 0]} barSize={8} stackId="a" />
                            <Bar dataKey="v3" fill="#FFB1C1" opacity={0.2} radius={[4, 4, 0, 0]} barSize={8} stackId="a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </SectionCard>

            {/* Pie Charts Section */}
            <SectionCard title="Pie Chart">
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData1} cx="50%" cy="50%" innerRadius={0} outerRadius={60} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                                <Cell fill={COLORS.blue} />
                                <Cell fill={COLORS.lightGray} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData2} cx="50%" cy="50%" innerRadius={0} outerRadius={60} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                                <Cell fill={COLORS.purple} />
                                <Cell fill={COLORS.lightGray} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData3} cx="50%" cy="50%" innerRadius={0} outerRadius={60} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                                <Cell fill={COLORS.orange} />
                                <Cell fill={COLORS.lightGray} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={pieData4} cx="50%" cy="50%" innerRadius={0} outerRadius={60} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                                <Cell fill={COLORS.sky} />
                                <Cell fill={COLORS.lightGray} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </SectionCard>

            {/* Donut Charts Section */}
            <SectionCard title="Donut Chart">
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[{ value: 25 }, { value: 75 }]}
                                cx="50%" cy="50%" innerRadius={45} outerRadius={65}
                                paddingAngle={0} dataKey="value" startAngle={90} endAngle={-270}
                            >
                                <Cell fill={COLORS.teal} />
                                <Cell fill="#E5EAEF" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[{ value: 20 }, { value: 65 }, { value: 15 }]}
                                cx="50%" cy="50%" innerRadius={45} outerRadius={65}
                                paddingAngle={0} dataKey="value" startAngle={90} endAngle={-270}
                            >
                                <Cell fill={COLORS.blue} />
                                <Cell fill="#E5EAEF" />
                                <Cell fill={COLORS.orange} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[{ value: 40 }, { value: 40 }, { value: 20 }]}
                                cx="50%" cy="50%" innerRadius={45} outerRadius={65}
                                paddingAngle={0} dataKey="value" startAngle={90} endAngle={-270}
                            >
                                <Cell fill={COLORS.teal} />
                                <Cell fill="#FFD66B" /> {/* Yellow */}
                                <Cell fill={COLORS.blue} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={[{ value: 25 }, { value: 25 }, { value: 25 }, { value: 25 }]}
                                cx="50%" cy="50%" innerRadius={45} outerRadius={65}
                                paddingAngle={0} dataKey="value" startAngle={90} endAngle={-270}
                            >
                                <Cell fill={COLORS.teal} />
                                <Cell fill="#FFD66B" /> {/* Yellow */}
                                <Cell fill={COLORS.orange} />
                                <Cell fill={COLORS.blue} />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </SectionCard>
        </div>
    );
};

export default UiElements;
