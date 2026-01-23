import React from 'react';
import { Filter, Download, MoreVertical } from 'lucide-react';

const OrderLists = () => {
    const orders = [
        { id: "#1001", customer: "John Doe", product: "Apple Watch S4", date: "Jan 12, 2026", amount: "$120.00", status: "Completed" },
        { id: "#1002", customer: "Jane Smith", product: "Macbook Pro", date: "Jan 13, 2026", amount: "$999.00", status: "Processing" },
        { id: "#1003", customer: "Robert Brown", product: "iPhone 13 Pro", date: "Jan 13, 2026", amount: "$91,999.00", status: "Shipped" },
        { id: "#1004", customer: "Alice Johnson", product: "Gaming Controller", date: "Jan 14, 2026", amount: "$55.00", status: "Cancelled" },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-600 bg-green-50';
            case 'Processing': return 'text-blue-600 bg-blue-50';
            case 'Shipped': return 'text-indigo-600 bg-indigo-50';
            case 'Cancelled': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Order Lists</h2>

            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-all font-semibold text-sm">
                        <Filter size={18} />
                        <span>Filter By</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-all font-semibold text-sm">
                        <Download size={18} />
                        <span>Export CSV</span>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB]">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Order ID</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Customer</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Product</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Date</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Amount</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Status</th>
                                <th className="text-right py-4 px-6 text-sm font-bold text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-sm font-bold text-[#4880FF]">{order.id}</td>
                                    <td className="py-5 px-6 text-sm font-bold text-gray-900">{order.customer}</td>
                                    <td className="py-5 px-6 text-sm text-gray-600">{order.product}</td>
                                    <td className="py-5 px-6 text-sm text-gray-600">{order.date}</td>
                                    <td className="py-5 px-6 text-sm font-bold text-gray-900">{order.amount}</td>
                                    <td className="py-5 px-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-6 text-right">
                                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
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

export default OrderLists;
