import React from 'react';
import { Search, Edit, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductStock = () => {
    // Mock Data based on the screenshot
    const products = [
        {
            id: 1,
            image: "https://i.pinimg.com/736x/c7/2a/28/c72a287af1752c8073a4d084c9dd31f4.jpg", // Apple Watch
            name: "Apple Watch Series 4",
            category: "Digital Product",
            price: "$690.00",
            piece: 63,
            colors: ["#000000", "#9CA3AF", "#F472B6"]
        },
        {
            id: 2,
            image: "https://i.pinimg.com/736x/87/7f/24/877f249c2c2df0c19dc018a0e74c50bd.jpg", // Headphone
            name: "Microsoft Headsquare",
            category: "Digital Product",
            price: "$190.00",
            piece: 13,
            colors: ["#000000", "#EF4444", "#3B82F6", "#FBBF24"]
        },
        {
            id: 3,
            image: "https://i.pinimg.com/1200x/d5/e5/aa/d5e5aacf58d69b6efb5b64f96d3ae314.jpg", // Dress (Placeholder)
            name: "Women's Dress",
            category: "Fashion",
            price: "$640.00",
            piece: 635,
            colors: ["#7C3AED", "#60A5FA", "#1E3A8A", "#4F46E5"]
        },
        {
            id: 4,
            image: "https://i.pinimg.com/1200x/05/8b/32/058b329b141fa4abddc974f01eb691a2.jpg", // Mobile
            name: "Samsung A50",
            category: "Mobile",
            price: "$400.00",
            piece: 67,
            colors: ["#1E3A8A", "#000000", "#DB2777"]
        },
        {
            id: 5,
            image: "https://i.pinimg.com/736x/20/67/f0/2067f08538378db275b704aaabeb7d5d.jpg", // Camera
            name: "Camera",
            category: "Electronic",
            price: "$420.00",
            piece: 52,
            colors: ["#1E3A8A", "#000000", "#BE185D"]
        },
        {
            id: 6,
            image: "https://i.pinimg.com/736x/87/7f/24/877f249c2c2df0c19dc018a0e74c50bd.jpg", // Headphone Repeat
            name: "Microsoft Headsquare",
            category: "Digital Product",
            price: "$190.00",
            piece: 13,
            colors: ["#000000", "#EF4444", "#3B82F6", "#FBBF24"]
        },
        {
            id: 7,
            image: "https://i.pinimg.com/1200x/d5/e5/aa/d5e5aacf58d69b6efb5b64f96d3ae314.jpg", // Dress Repeat
            name: "Women's Dress",
            category: "Fashion",
            price: "$640.00",
            piece: 635,
            colors: ["#9D174D", "#60A5FA", "#111827", "#4338CA"]
        }
    ];

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Product Stock</h2>
                <div className="relative w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search product name"
                        className="pl-10 pr-4 py-3 w-full md:w-[300px] bg-white border border-gray-100 rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-400 shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Image</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Product Name</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Category</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Price</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Piece</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Available Color</th>
                                <th className="py-5 px-8 text-left text-xs font-bold text-gray-800 uppercase tracking-wide">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-4 px-8">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="py-4 px-8">
                                        <span className="text-sm font-medium text-gray-900">{product.name}</span>
                                    </td>
                                    <td className="py-4 px-8">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                    </td>
                                    <td className="py-4 px-8">
                                        <span className="text-sm font-medium text-gray-900">{product.price}</span>
                                    </td>
                                    <td className="py-4 px-8">
                                        <span className="text-sm text-gray-900">{product.piece}</span>
                                    </td>
                                    <td className="py-4 px-8">
                                        <div className="flex -space-x-1">
                                            {product.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="w-4 h-4 rounded-full border border-white shadow-sm"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-4 px-8">
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all"
                                            >
                                                <Edit size={14} />
                                            </button>
                                            <button
                                                type="button"
                                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
                    <span className="text-sm text-gray-500">
                        Showing 1-09 of 78
                    </span>
                    <div className="flex gap-2">
                        <button type="button" className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                            <ChevronLeft size={16} />
                        </button>
                        <button type="button" className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStock;
