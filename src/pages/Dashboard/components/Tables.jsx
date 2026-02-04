import React from 'react';
import { Camera, ShoppingBag, Watch, Droplets, Star } from 'lucide-react';

const orders = [
    { id: '#876364', name: 'Camera Lens', price: '$178', orders: 325, amount: '$1,46,660', icon: Camera, color: 'text-pink-500 bg-pink-50' },
    { id: '#876368', name: 'Black Sleep Dress', price: '$14', orders: 53, amount: '$46,660', icon: ShoppingBag, color: 'text-gray-800 bg-gray-100' },
    { id: '#876412', name: 'Argan Oil', price: '$21', orders: 78, amount: '$3,46,676', icon: Droplets, color: 'text-amber-600 bg-amber-50' },
    { id: '#876621', name: 'EAU DE Parfum', price: '$32', orders: 98, amount: '$3,46,981', icon: Watch, color: 'text-yellow-600 bg-yellow-50' },
];

export const RecentOrders = () => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
            <button className="text-gray-400 hover:text-gray-600 pb-2">...</button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-xs text-gray-400 font-medium">
                        <th className="pb-4 pl-2">Tracking no</th>
                        <th className="pb-4">Product Name</th>
                        <th className="pb-4">Price</th>
                        <th className="pb-4 text-center">Total Order</th>
                        <th className="pb-4 text-right pr-2">Total Amount</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {orders.map((order) => (
                        <tr key={order.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 pl-2 text-gray-500 font-medium">{order.id}</td>
                            <td className="py-4">
                                <div className="flex items-center gap-3">
                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${order.color}`}>
                                        <order.icon size={18} />
                                    </div>
                                    <span className="font-medium text-gray-800">{order.name}</span>
                                </div>
                            </td>
                            <td className="py-4 text-gray-600 font-medium">{order.price}</td>
                            <td className="py-4 text-center">
                                <span className="bg-cyan-50 text-cyan-500 py-1 px-3 rounded-lg text-xs font-bold inline-block min-w-[40px]">
                                    {order.orders}
                                </span>
                            </td>
                            <td className="py-4 text-right pr-2 text-gray-800 font-medium">{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const products = [
    { name: 'NIKE Shoes Black Pattern', price: '$87', rating: 4, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
    { name: 'iPhone 12', price: '$987', rating: 5, img: 'https://images.unsplash.com/photo-1605236245388-941c95995fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
];

export const TopSellingProducts = () => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Top selling Products</h3>
            <button className="text-gray-400 hover:text-gray-600 pb-2">...</button>
        </div>
        <div className="space-y-6">
            {products.map((p, i) => (
                <div key={i} className="flex gap-4 items-center">
                    <div className="h-16 w-16 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={p.img} alt={p.name} className="h-full w-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{p.name}</h4>
                        <div className="flex text-yellow-400 mb-1">
                            {[...Array(5)].map((_, stars) => (
                                <Star key={stars} size={12} fill={stars < p.rating ? "currentColor" : "none"} className={stars < p.rating ? "" : "text-gray-300"} />
                            ))}
                        </div>
                        <p className="font-bold text-gray-900">{p.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
