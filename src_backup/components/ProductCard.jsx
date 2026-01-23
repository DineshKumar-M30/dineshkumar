import React from 'react';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';

const ProductCard = ({ product, onToggleFavorite }) => {
    return (
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            {/* Product Image Carousel */}
            <div className="relative h-48 bg-[#F5F5F5] rounded-2xl mb-4 flex items-center justify-center group">
                <button className="absolute left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft size={16} className="text-gray-500" />
                </button>
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 object-contain mix-blend-multiply"
                />
                <button className="absolute right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={16} className="text-gray-500" />
                </button>
            </div>

            {/* Details */}
            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                    <button onClick={() => onToggleFavorite && onToggleFavorite(product.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart size={20} className={product.isFavorite ? "fill-red-500 text-red-500" : ""} />
                    </button>
                </div>

                <p className="text-blue-500 font-bold mb-2">${product.price}</p>

                <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                        <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                    ))}
                    <Star size={14} className="fill-gray-200 text-gray-200" />
                    <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                </div>

                <button className="w-full py-2.5 bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
                    Edit Product
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
