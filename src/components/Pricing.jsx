import React from 'react';
import { Settings, BadgeCheck, Calendar, CreditCard, Clock, Layers, Cog, Circle } from 'lucide-react';

const Pricing = () => {
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
            icon: <Layers className="w-24 h-24 text-orange-200 opacity-20" /> // Abstract decoration
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
            icon: <Cog className="w-24 h-24 text-orange-200 opacity-20" /> // Abstract decoration
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
            icon: <div className="flex gap-1"><Circle className="w-10 h-10 text-orange-200 opacity-20" /><Circle className="w-10 h-10 text-orange-200 opacity-20" /></div> // Abstract decoration
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Pricing Plan</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-gray-900 leading-[1.1] tracking-tight">
                            Transparent pricing for <br />
                            <span className="font-bold">every solution</span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:mb-2 text-left lg:text-right">
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                            We believe in providing clear and upfront pricing to ensure that you understand the value of our services.
                        </p>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#F8F9FA] rounded-[40px] p-10 lg:p-12 hover:bg-orange-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                        >
                            {/* Decorative Icon Positioned Top Right */}
                            <div className="absolute top-0 right-0 p-6 pointer-events-none group-hover:text-white/20 transition-colors">
                                {plan.icon}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl lg:text-5xl font-bold text-orange-500 group-hover:text-white transition-colors">${plan.price}</span>
                                    <span className="text-sm text-gray-400 group-hover:text-white/80 transition-colors">/month</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-10 transition-colors">
                                    {plan.name}
                                </h3>

                                <div className="space-y-5 mb-12">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <BadgeCheck className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors flex-shrink-0" />
                                            <span className="text-[13px] text-gray-600 group-hover:text-white/90 font-medium transition-colors">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-4 rounded-xl border border-orange-500 text-gray-900 font-bold text-[13px] group-hover:bg-white group-hover:text-orange-500 group-hover:border-white transition-all duration-300">
                                    Purchase Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-[13px] font-medium text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>Get 30 day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-orange-500" />
                        <span>No any hidden fees pay</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>You can cancel anytime</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
