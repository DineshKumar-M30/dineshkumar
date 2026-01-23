import React, { useState } from 'react';
import { Package, Search, ChevronDown, Trash2 } from 'lucide-react';

const ProductStock = () => {
    const [stockItems, setStockItems] = useState([
        { id: 1, name: "Apple Watch Series 4", category: "Electronics", quantity: 85, price: "$120.00", status: "In Stock", image: "https://i.pinimg.com/736x/c7/2a/28/c72a287af1752c8073a4d084c9dd31f4.jpg" },
        { id: 2, name: "Air-Max-270", category: "Footwear", quantity: 12, price: "$60.00", status: "Low Stock", image: "https://i.pinimg.com/1200x/79/64/06/7964062fa42154d7d2e5ff20739f96ac.jpg" },
        { id: 3, name: "Minimalist Chair", category: "Furniture", quantity: 0, price: "$85.00", status: "Out of Stock", image: "https://i.pinimg.com/1200x/d5/e5/aa/d5e5aacf58d69b6efb5b64f96d3ae314.jpg" },
        { id: 4, name: "Amazfit Vip", category: "Electronics", quantity: 43, price: "$70.25", status: "In Stock", image: "https://i.pinimg.com/736x/bf/e4/f6/bfe4f6efda6d48e5cab4619e8a58512b.jpg" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'In Stock': return 'text-green-600 bg-green-50';
            case 'Low Stock': return 'text-amber-600 bg-amber-50';
            case 'Out of Stock': return 'text-red-600 bg-red-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    const deleteStock = (id) => {
        setStockItems(stockItems.filter(item => item.id !== id));
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Stock</h2>

            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="relative w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search stock..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl text-sm focus:bg-white focus:border-blue-200 transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Image</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Product Name</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Category</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Quantity</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Price</th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-500">Status</th>
                                <th className="text-right py-4 px-6 text-sm font-bold text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {stockItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-4 px-6">
                                        <img src={item.image} alt="" className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
                                    </td>
                                    <td className="py-4 px-6 text-sm font-bold text-gray-900">{item.name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-600">{item.category}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{item.quantity}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-blue-600">{item.price}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button
                                            onClick={() => deleteStock(item.id)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                        >
                                            <Trash2 size={18} />
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

export default ProductStock;
