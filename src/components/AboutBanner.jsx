import React from 'react';
import Fruits from "../assets/Fruits and Vegetables.png"

const AboutBanner = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://i.pinimg.com/1200x/48/dd/ba/48ddba04a6c87cf4be50c86942f3eb9a.jpg"
                    alt="Fruits and Vegetables"
                    className="w-full h-full object-cover object-center animate-fade-in-scale"
                />
                {/* Overlay */}


            </div>

            {/* Content */}
            <div className="relative z-10 animate-slide-up">
                <h1 className="text-[#2A4B56] text-5xl md:text-6xl font-bold">About Us</h1>
            </div>
        </section>
    );
};

export default AboutBanner;
