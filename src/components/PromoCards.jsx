
import React from 'react';

const PromoCards = () => {
    return (
        <div className="container mx-auto px-4 py-24 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">

                {/* Card 1: New Items (Pink) */}
                <div className="bg-[#FF8FAB] rounded-3xl overflow-hidden relative h-64 shadow-lg group cursor-pointer animate-fade-in-up">
                    <img
                        src="https://i.pinimg.com/1200x/ce/1d/34/ce1d344d2038664abd5e1e5897a3cfb6.jpg"
                        alt="Smoothie bowl"
                        className="absolute right-0 top-0 w-3/5 h-full object-cover rounded-l-full transform translate-x-10 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8FAB] via-[#FF8FAB]/90 to-transparent"></div>

                    <div className="relative z-10 p-10 h-full flex flex-col justify-center text-white group-hover:translate-x-2 transition-transform duration-300">
                        <span className="font-handwriting text-3xl mb-2 opacity-90 italic">New!</span>
                        <h3 className="text-3xl font-bold leading-tight max-w-[200px]">
                            Freshest Styrian Oil
                        </h3>
                    </div>
                </div>

                {/* Card 2: Discount (Light Blue) */}
                <div className="bg-[#E7F0F5] rounded-3xl overflow-hidden relative h-64 shadow-lg group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img
                        src="https://i.pinimg.com/1200x/34/5e/83/345e83e75401996f575d221dad61bb9e.jpg"
                        alt="Fresh apricots"
                        className="absolute right-0 top-0 w-3/5 h-full object-cover rounded-l-full transform translate-x-10 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E7F0F5] via-[#E7F0F5]/80 to-transparent"></div>

                    <div className="relative z-10 p-10 h-full flex flex-col justify-center text-[#2A4B56] group-hover:translate-x-2 transition-transform duration-300">
                        <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 italic">Discount!</span>
                        <h3 className="text-3xl font-bold leading-tight max-w-[200px]">
                            20% Discount for Subscription
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PromoCards;
