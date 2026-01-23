import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProductWidget = () => {
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm border-none transition-shadow hover:shadow-md h-full flex flex-col pt-6">
            <h3 className="text-[20px] font-bold text-[#202224] mb-6">Featured Product</h3>

            <div className="flex-1 flex flex-col items-center justify-center">
                {/* Carousel Container */}
                <div className="w-full flex items-center justify-between mb-6">
                    <button className="w-8 h-8 rounded-full bg-[#F1F4F9] flex items-center justify-center text-[#202224] hover:bg-[#E2E6EB] transition-colors">
                        <ChevronLeft size={16} />
                    </button>

                    <img
                        src="https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg"
                        alt="Beats Headphone"
                        className="w-48 h-48 object-contain mix-blend-multiply"
                    />

                    <button className="w-8 h-8 rounded-full bg-[#F1F4F9] flex items-center justify-center text-[#202224] hover:bg-[#E2E6EB] transition-colors">
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Product Details */}
                <div className="text-center">
                    <h4 className="text-[16px] font-bold text-[#202224] mb-1">Beats Headphone 2019</h4>
                    <span className="text-[#4379EE] font-bold text-[14px]">$89.00</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductWidget;
