import React, { useState } from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

const DealsTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Mock data based on the screenshot + extra rows
    const initialDeals = [
        {
            product: 'Apple Watch',
            image: 'https://i.pinimg.com/1200x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg',
            location: '6096 Marjolaine Landing',
            date: '12.09.2019 - 12.53 PM',
            piece: 423,
            amount: 34295,
            status: 'Delivered'
        },
        {
            product: 'Samsung Galaxy Watch',
            image: 'https://i.pinimg.com/1200x/f4/cf/82/f4cf828aa7defd90e55df12c51eff6ef.jpg',
            location: '563 The Heights, London',
            date: '12.09.2019 - 12.53 PM',
            piece: 213,
            amount: 12022,
            status: 'Pending'
        },
        {
            product: 'iPhone 13 Pro',
            image: 'https://i.pinimg.com/1200x/05/8b/32/058b329b141fa4abddc974f01eb691a2.jpg',
            location: '4223 West Road, NY',
            date: '12.09.2019 - 12.53 PM',
            piece: 120,
            amount: 91900,
            status: 'Rejected'
        }
    ];

    const sortedDeals = [...initialDeals].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered':
                return 'bg-green-100 text-green-600 rounded-full px-4 py-1.5 font-bold text-xs';
            case 'Pending':
                return 'bg-amber-100 text-amber-600 rounded-full px-4 py-1.5 font-bold text-xs';
            case 'Rejected':
                return 'bg-red-100 text-red-600 rounded-full px-4 py-1.5 font-bold text-xs';
            default:
                return 'bg-gray-100 text-gray-600 rounded-full px-4 py-1.5 font-bold text-xs';
        }
    };

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="bg-white p-6 rounded-[24px] shadow-sm border-none mt-[30px] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] font-bold text-[#202224]">Deals Details</h3>
                <button className="flex items-center gap-2 px-4 py-1.5 border border-[#D5D5D5] rounded-[10px] text-[#202224] text-xs font-semibold hover:bg-gray-50 bg-[#FCFDFD]">
                    <span>October</span>
                    <ChevronDown size={14} />
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead className="bg-[#F1F4F9]">
                        <tr>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224] rounded-l-[12px] cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => requestSort('product')}>
                                <div className="flex items-center gap-2">
                                    Product Name <ArrowUpDown size={14} className="text-gray-400" />
                                </div>
                            </th>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224]">Location</th>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224]">Date - Time</th>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224]">Piece</th>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224] cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => requestSort('amount')}>
                                <div className="flex items-center gap-2">
                                    Amount <ArrowUpDown size={14} className="text-gray-400" />
                                </div>
                            </th>
                            <th className="text-left py-4 px-6 text-sm font-bold text-[#202224] rounded-r-[12px]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50/50">
                        {sortedDeals.map((deal, index) => (
                            <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-6 text-sm">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={deal.image}
                                            alt={deal.product}
                                            className="w-[36px] h-[36px] rounded-[10px] object-cover"
                                        />
                                        <span className="font-bold text-[#202224]">{deal.product}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm text-[#202224] font-medium">{deal.location}</td>
                                <td className="py-4 px-6 text-sm text-[#202224] font-medium">{deal.date}</td>
                                <td className="py-4 px-6 text-sm text-[#202224] font-bold text-left">{deal.piece}</td>
                                <td className="py-4 px-6 text-sm font-bold text-[#202224]">{formatCurrency(deal.amount)}</td>
                                <td className="py-4 px-6 text-sm">
                                    <span className={getStatusColor(deal.status)}>
                                        {deal.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealsTable;
