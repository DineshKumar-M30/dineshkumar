import React, { useEffect } from 'react';
import { Settings, CheckCircle2, Check, ArrowUpRight } from 'lucide-react';
import WhatWeDo from '../components/WhatWeDo';
import Testimonial from '../components/Testimonial';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plans = [
        {
            price: "39",
            name: "Advanced Plan",
            features: [
                "Standard Manufacturing Services",
                "Quality Control Checks",
                "Technical Support",
                "Monthly Progress Reports"
            ],
            highlight: false
        },
        {
            price: "39",
            name: "Advanced Plan",
            features: [
                "Standard Manufacturing Services",
                "Quality Control Checks",
                "Technical Support",
                "Monthly Progress Reports"
            ],
            highlight: true
        },
        {
            price: "39",
            name: "Advanced Plan",
            features: [
                "Standard Manufacturing Services",
                "Quality Control Checks",
                "Technical Support",
                "Monthly Progress Reports"
            ],
            highlight: false
        }
    ];

    return (
        <div className="font-sans bg-white">

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-start overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.pinimg.com/736x/c2/6f/68/c26f68ef324a7b99a552da4aeac745bc.jpg"
                        alt="Factory Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 mt-16 max-w-[1440px] mx-auto w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light mb-4 text-left">
                        Pricing <span className="font-bold">plan</span>
                    </h1>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                        <span>Home</span>
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-500">Pricing</span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className="group relative rounded-[32px] p-10 lg:p-12 overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-[#F8F9FB] hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/20"
                            >
                                {/* Background Decoration - Only visible on hover */}
                                <div className="absolute top-0 right-0 p-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                    <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                                        <circle cx="80" cy="20" r="30" stroke="white" strokeWidth="1.5" />
                                        <circle cx="80" cy="20" r="15" stroke="white" strokeWidth="1.5" />
                                        <path d="M50 0 L100 50" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                                    <Settings size={60} strokeWidth={1} />
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-5xl font-bold text-orange-500 group-hover:text-white transition-colors duration-300">${plan.price}</span>
                                    <span className="text-[15px] mb-1.5 text-gray-400 group-hover:text-white/80 transition-colors duration-300">/month</span>
                                </div>

                                {/* Plan Name */}
                                <h3 className="text-lg font-medium mb-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                                    {plan.name}
                                </h3>

                                {/* Features */}
                                <ul className="flex flex-col gap-5 mb-12">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-orange-100 group-hover:bg-white/20 transition-colors duration-300">
                                                <Settings
                                                    size={14}
                                                    className="text-orange-500 group-hover:text-white transition-colors duration-300"
                                                    strokeWidth={2}
                                                />
                                            </div>
                                            <span className="text-[15px] font-light text-gray-500 group-hover:text-white transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className="w-full py-4 rounded-xl font-bold text-[15px] transition-colors border bg-transparent border-orange-500 text-gray-900 
                                    group-hover:border-white group-hover:bg-white group-hover:text-orange-500">
                                    Purchase Now
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Features */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-orange-500" />
                            <span>Get 30 day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Settings size={18} className="text-orange-500" />
                            <span>No any hidden fees pay</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-orange-500" />
                            <span>You can cancel anytime</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* What We Do Component */}
            <WhatWeDo />

            {/* Testimonial Component */}
            <Testimonial />

        </div>
    );
};

export default Pricing;
