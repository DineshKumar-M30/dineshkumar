import React from 'react';
import fruits from "../assets/Fruits background.png"

const ContactBanner = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center font-sans overflow-hidden bg-white">
            {/* Background Image - Citrus/Fruits flat lay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={fruits}
                    className="w-full h-full object-cover object-center animate-fade-in-scale"
                    alt="Fruits background"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 animate-slide-up">
                <h1 className="text-[#2A4B56] text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
            </div>
        </section>
    );
};

export default ContactBanner;
