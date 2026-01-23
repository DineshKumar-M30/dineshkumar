import React from 'react';
import { Download, Printer, Share2, MoreVertical, Plus } from 'lucide-react';

const Invoice = () => {
    const invoices = [
        { id: "#INV-001", customer: "Apple Inc.", date: "12 Jan 2026", amount: "$12,450.00", status: "Paid" },
        { id: "#INV-002", customer: "Google LLC", date: "13 Jan 2026", amount: "$8,900.00", status: "Unpaid" },
        { id: "#INV-003", customer: "Meta Platforms", date: "13 Jan 2026", amount: "$5,600.00", status: "Overdue" },
        { id: "#INV-004", customer: "Amazon.com", date: "14 Jan 2026", amount: "$15,200.00", status: "Paid" },
        { id: "#INV-005", customer: "Microsoft Corp.", date: "15 Jan 2026", amount: "$9,800.00", status: "Unpaid" },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Paid': return 'text-green-600 bg-green-50';
            case 'Unpaid': return 'text-amber-600 bg-amber-50';
            case 'Overdue': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Invoice</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-200">
                    <Plus size={20} />
                    <span>Create Invoice</span>
                </button>
            </div>

            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB]">
                            <tr>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-500">Invoice ID</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-500">Customer</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-500">Billing Date</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-500">Amount</th>
                                <th className="text-left py-5 px-6 text-sm font-bold text-gray-500">Status</th>
                                <th className="text-right py-5 px-6 text-sm font-bold text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-sm font-bold text-blue-600">{invoice.id}</td>
                                    <td className="py-5 px-6 text-sm font-bold text-gray-900">{invoice.customer}</td>
                                    <td className="py-5 px-6 text-sm text-gray-600">{invoice.date}</td>
                                    <td className="py-5 px-6 text-sm font-bold text-gray-900">{invoice.amount}</td>
                                    <td className="py-5 px-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${getStatusStyle(invoice.status)}`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Download">
                                                <Download size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                                                <Printer size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
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

export default Invoice;
