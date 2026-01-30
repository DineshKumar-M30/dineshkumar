import React from 'react';
import Man from "../assets/Man in Market.png"

const NewsDetailsBanner = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Man}
                    alt="Man in greenhouse"
                    className="w-full h-full object-cover object-center animate-fade-in-scale"
                />
                {/* Dark overlay? Maybe slight */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Overlapping Card */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 container mx-auto px-4 max-w-6xl z-10 w-full animate-slide-up">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl  w-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[#2A4B56] font-semibold text-sm">
                            <span className="text-gray-500">Date:</span>
                            <span>January 6, 2024</span>
                        </div>

                        <h1 className="text-[#2A4B56] text-3xl md:text-5xl font-bold leading-tight">
                            Research More Organic Food
                        </h1>

                        <p className="text-gray-500 max-w-2xl leading-relaxed">
                            Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetailsBanner;
