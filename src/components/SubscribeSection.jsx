import React from 'react';
import Pumpkins from "../assets/pumpkins.png"

const SubscribeSection = () => {
    return (
        <section className="py-16 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-[#FF8833] rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

                    {/* Background Image Overlay - Pumpkins */}
                    <div className="absolute inset-0 z-0 animate-fade-in-scale">
                        <img
                            src={Pumpkins}
                            alt="Pumpkins"
                            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                        />
                        {/* Gradient to ensure text readability if needed, though simpler flat orange might be desired. 
                 The screenshot has pumpkins visible on the right. Let's try to position the bg image nicely. */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8833] via-[#FF8833]/90 to-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 max-w-xl animate-slide-up">
                        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md text-center md:text-left">
                            Be the first to know about new promotions!
                        </h2>
                    </div>

                    {/* Form */}
                    <div className="relative z-10 w-full max-w-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white p-2 rounded-full flex flex-col sm:flex-row shadow-lg">
                            <input
                                type="email"
                                placeholder="Enter your e-mail address"
                                className="flex-1 px-6 py-3 rounded-full text-gray-700 focus:outline-none bg-transparent placeholder-gray-400 italic"
                            />
                            <button className="bg-[#84B97C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#72a36b] transition-all hover:scale-105 shadow-md mt-2 sm:mt-0 active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
