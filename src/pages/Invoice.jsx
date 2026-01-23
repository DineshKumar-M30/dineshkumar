import React from 'react';
import { Printer, Send } from 'lucide-react';

const Invoice = () => {
    const tableData = [
        { id: 1, description: "Children Toy", quantity: 2, baseCost: 20, totalCost: 80 },
        { id: 2, description: "Makeup", quantity: 2, baseCost: 50, totalCost: 100 },
        { id: 3, description: "Asus Laptop", quantity: 5, baseCost: 100, totalCost: 500 },
        { id: 4, description: "Iphone X", quantity: 4, baseCost: 1000, totalCost: 4000 },
    ];

    const totalAmount = tableData.reduce((acc, item) => acc + item.totalCost, 0);

    return (
        <div className="p-6 md:p-8 bg-[#f8f9fa] min-h-full font-outfit">
            <h2 className="text-3xl font-extrabold text-[#202224] mb-8">Invoice</h2>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12 max-w-6xl mx-auto overflow-hidden">
                {/* Invoice Header Details */}
                <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
                    <div className="space-y-2">
                        <p className="text-gray-500 font-bold text-sm">Invoice From :</p>
                        <h4 className="text-xl font-bold text-[#202224]">Virginia Walker</h4>
                        <p className="text-gray-400 text-sm font-medium w-48">9694 Krajcik Locks Suite 635</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-500 font-bold text-sm">Invoice To :</p>
                        <h4 className="text-xl font-bold text-[#202224]">Austin Miller</h4>
                        <p className="text-gray-400 text-sm font-medium">Brookview</p>
                    </div>

                    <div className="space-y-3 text-right">
                        <div className="flex justify-end gap-2 text-sm">
                            <span className="text-gray-500 font-bold">Invoice Date :</span>
                            <span className="text-gray-400 font-medium">12 Nov 2019</span>
                        </div>
                        <div className="flex justify-end gap-2 text-sm">
                            <span className="text-gray-500 font-bold">Due Date :</span>
                            <span className="text-gray-400 font-medium">25 Dec 2019</span>
                        </div>
                    </div>
                </div>

                {/* Invoice Table */}
                <div className="overflow-x-auto mb-10">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#F1F4F9] rounded-xl">
                                <th className="text-center py-4 px-6 text-sm font-bold text-[#202224] first:rounded-l-xl last:rounded-r-xl">Serial No.</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-[#202224] first:rounded-l-xl last:rounded-r-xl">Description</th>
                                <th className="text-center py-4 px-6 text-sm font-bold text-[#202224] first:rounded-l-xl last:rounded-r-xl">Quantity</th>
                                <th className="text-center py-4 px-6 text-sm font-bold text-[#202224] first:rounded-l-xl last:rounded-r-xl">Base Cost</th>
                                <th className="text-center py-4 px-6 text-sm font-bold text-[#202224] first:rounded-l-xl last:rounded-r-xl">Total Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {tableData.map((item) => (
                                <tr key={item.id} className="text-[#202224]">
                                    <td className="py-6 px-6 text-sm font-medium text-center">{item.id}</td>
                                    <td className="py-6 px-6 text-sm font-medium">{item.description}</td>
                                    <td className="py-6 px-6 text-sm font-medium text-center">{item.quantity}</td>
                                    <td className="py-6 px-6 text-sm font-medium text-center">${item.baseCost}</td>
                                    <td className="py-6 px-6 text-sm font-medium text-center">${item.totalCost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Total Section */}
                <div className="flex justify-end mb-16">
                    <div className="flex items-center gap-4 text-xl">
                        <span className="font-bold text-[#202224]">Total</span>
                        <span className="font-bold text-[#202224]">=</span>
                        <span className="font-extrabold text-[#202224] tracking-tight">${totalAmount}</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4">
                    <button className="p-3 border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-[#4880FF] transition-all shadow-sm">
                        <Printer size={20} />
                    </button>
                    <button className="bg-[#4880FF] hover:bg-blue-600 text-white font-bold h-[48px] px-8 rounded-xl flex items-center justify-center gap-6 group relative overflow-hidden transition-all shadow-xl shadow-blue-500/20">
                        <span className="text-sm font-extrabold tracking-wide">Send</span>
                        <div className="bg-blue-400 p-2 rounded-lg flex items-center justify-center translate-x-2 group-hover:translate-x-3 transition-transform">
                            <Send size={16} fill="white" className="text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
