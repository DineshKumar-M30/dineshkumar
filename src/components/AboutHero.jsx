import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://i.pinimg.com/736x/c2/6f/68/c26f68ef324a7b99a552da4aeac745bc.jpg"
                    alt="About Us Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay with Gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full pt-20">
                <h1 className="text-5xl md:text-6xl lg:text-[70px] font-medium text-white mb-4 tracking-tight">
                    About <span className="font-bold">Us</span>
                </h1>
                <div className="flex items-center gap-2 text-[15px] font-medium">
                    <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Home</span>
                    <span className="text-orange-500 text-xs">•</span>
                    <span className="text-orange-500">About Us</span>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
