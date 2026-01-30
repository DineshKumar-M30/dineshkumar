import React from 'react';
import { ArrowRight } from 'lucide-react';
import oilimg from "../assets/oil and seeds.png"

const Hero = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] bg-[#F9F9F9] overflow-hidden font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={oilimg}
                    alt="Sesame oil and seeds"
                    className="w-full h-full object-cover object-center md:object-[center_20%] opacity-100 animate-fade-in-scale"
                // Added custom animation class for scale effect
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <div className="max-w-xl animate-slide-up">
                    <p className="font-handwriting text-[#7DAF56] text-2xl md:text-3xl mb-4 italic">
                        100% Natural
                    </p>
                    <h1 className="text-[#2A4B56] text-4xl md:text-6xl font-bold leading-tight mb-8">
                        Oils and flour from farm raw materials
                    </h1>

                    <button className="bg-[#EBD96B] text-[#2A4B56] px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#e0cd5a] transition-all hover:scale-105 active:scale-95 uppercase tracking-wider text-sm shadow-md mx-auto md:mx-0">
                        To Catalog
                        <div className="bg-[#2A4B56] rounded-full p-1">
                            <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-scale {
                    animation: fadeInScale 1.5s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slideUp 1s ease-out 0.5s forwards;
                    opacity: 0; /* Starts invisible */
                }
            `}</style>
        </div>
    );
};

export default Hero;
