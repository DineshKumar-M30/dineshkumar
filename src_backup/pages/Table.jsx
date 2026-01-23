import React, { useState } from 'react';
import { Search, ChevronDown, Filter, MoreVertical, ArrowUpDown } from 'lucide-react';

const TablePage = () => {
    const [data, setData] = useState([
        { id: 1, name: "Apple Inc.", domain: "Technology", user: "Tim Cook", status: "Active", rev: "$383.29B" },
        { id: 2, name: "Microsoft", domain: "Software", user: "Satya Nadella", status: "Active", rev: "$211.92B" },
        { id: 3, name: "Amazon", domain: "E-Commerce", user: "Andy Jassy", status: "Inactive", rev: "$513.98B" },
        { id: 4, name: "Alphabet", domain: "Technology", user: "Sundar Pichai", status: "Active", rev: "$282.84B" },
        { id: 5, name: "Meta", domain: "Social Media", user: "Mark Zuckerberg", status: "Pending", rev: "$116.61B" },
        { id: 6, name: "Nvidia", domain: "Hardware", user: "Jensen Huang", status: "Active", rev: "$26.97B" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'text-green-600 bg-green-50';
            case 'Inactive': return 'text-gray-600 bg-gray-50';
            case 'Pending': return 'text-amber-600 bg-amber-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Tables</h2>

            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search records..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl text-sm focus:bg-white focus:border-blue-200 outline-none transition-all"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl transition-all font-bold text-sm">
                            <Filter size={18} />
                            <span>Filters</span>
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-black rounded-2xl transition-all font-bold text-sm">
                            <span>Add New</span>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB]">
                            <tr>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <button className="flex items-center gap-2 hover:text-gray-700">
                                        Company <ArrowUpDown size={14} />
                                    </button>
                                </th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Domain</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">CEO/Representative</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Revenue</th>
                                <th className="text-right py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-8">
                                        <span className="text-sm font-bold text-gray-900">{item.name}</span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className="text-sm text-gray-600">{item.domain}</span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className="text-sm font-medium text-gray-900">{item.user}</span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-8">
                                        <span className="text-sm font-bold text-gray-900">{item.rev}</span>
                                    </td>
                                    <td className="py-5 px-8 text-right">
                                        <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TablePage;
