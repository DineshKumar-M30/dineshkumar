import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const Table = () => {
    const table1Data = [
        { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
        { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
        { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
        { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
        { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
        { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
    ];

    const table2Data = [
        {
            image: "https://i.pinimg.com/1200x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg",
            name: "Apple Watch Series 4",
            category: "Digital Product",
            price: "$690.00",
            piece: "63",
            colors: ["#000000", "#A8A8A8", "#F1948A"]
        },
        {
            image: "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg",
            name: "Microsoft Headsquare",
            category: "Digital Product",
            price: "$190.00",
            piece: "13",
            colors: ["#000000", "#FF7B7B", "#4880FF", "#E7CD78"]
        },
        {
            image: "https://i.pinimg.com/736x/80/33/a4/8033a49a1af88a4e4b3e22abd2795173.jpg",
            name: "Nike Shoes",
            category: "Digital Product",
            price: "$125.00",
            piece: "42",
            colors: ["#D4E6F1", "#A93226", "#17202A"]
        }
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Completed': return 'bg-[#CCF0EB] text-[#00B69B]';
            case 'Processing': return 'bg-[#E5E5FF] text-[#6226EF]';
            case 'Rejected': return 'bg-[#FEE2E2] text-[#EF4444]';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="p-6 md:p-8 bg-[#f8f9fa] min-h-full font-outfit">
            <h2 className="text-3xl font-extrabold text-[#202224] mb-8">Table</h2>

            {/* Standard Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-transparent overflow-hidden mb-8">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">ID</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">NAME</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">ADDRESS</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">DATE</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">TYPE</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">STATUS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {table1Data.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="py-5 px-8 text-sm font-medium text-gray-600">{row.id}</td>
                                    <td className="py-5 px-8 text-sm font-bold text-[#202224]">{row.name}</td>
                                    <td className="py-5 px-8 text-sm font-medium text-gray-600 truncate max-w-[200px]">{row.address}</td>
                                    <td className="py-5 px-8 text-sm font-medium text-gray-600">{row.date}</td>
                                    <td className="py-5 px-8 text-sm font-medium text-gray-600">{row.type}</td>
                                    <td className="py-5 px-8">
                                        <span className={`px-4 py-1 rounded-lg text-xs font-bold ${getStatusStyles(row.status)}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Product Table Section */}
            <div className="bg-white rounded-[24px] shadow-sm border border-transparent overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Image</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Product Name</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Category</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Price</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Piece</th>
                                <th className="text-left py-6 px-8 text-sm font-extrabold text-[#202224]">Available Color</th>
                                <th className="text-center py-6 px-8 text-sm font-extrabold text-[#202224]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {table2Data.map((product, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="py-5 px-8">
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="py-5 px-8 text-sm font-bold text-[#202224]">{product.name}</td>
                                    <td className="py-5 px-8 text-sm font-medium text-gray-500">{product.category}</td>
                                    <td className="py-5 px-8 text-sm font-bold text-[#202224]">{product.price}</td>
                                    <td className="py-5 px-8 text-sm font-bold text-[#202224]">{product.piece}</td>
                                    <td className="py-5 px-8">
                                        <div className="flex gap-2">
                                            {product.colors.map((color, cIdx) => (
                                                <div key={cIdx} className="w-4 h-4 rounded-full border border-gray-100 shadow-sm" style={{ backgroundColor: color }}></div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-5 px-8">
                                        <div className="flex justify-center items-center gap-3">
                                            <button className="w-9 h-9 flex items-center justify-center border border-gray-100 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-all">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="w-9 h-9 flex items-center justify-center border border-gray-100 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all">
                                                <Trash2 size={16} />
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

export default Table;
