import React from 'react';

const NewsBanner = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2074&auto=format&fit=crop"
                    alt="Green leaves"
                    className="w-full h-full object-cover object-center animate-fade-in-scale"
                />
                {/* Overlay - subtle to make text pop if needed, but screenshot looks clean-ish white fade */}
                <div className="absolute inset-0 bg-white/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 animate-slide-up">
                <h1 className="text-[#2A4B56] text-5xl md:text-6xl font-bold tracking-tight">News</h1>
            </div>
        </section>
    );
};

export default NewsBanner;
