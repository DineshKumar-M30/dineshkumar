import React from 'react';
import { Settings, ArrowLeft, ArrowRight, Zap, Sun, Waves, Droplet, MoveRight } from 'lucide-react';

const Testimonial = () => {
    return (
        <section className="relative py-20 lg:py-28 bg-[#F8F9FB] overflow-hidden font-sans">

            {/* Background Dotted Map Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[1/1] w-full rounded-[48px] overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                                alt="Factory Engineer with Tablet"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Client Say</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            What our satisfied clients <br />
                            <span className="font-bold">are saying</span>
                        </h2>

                        <p className="text-gray-400 text-[15px] leading-relaxed mb-12 max-w-lg">
                            The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!
                        </p>

                        <div className="flex items-center justify-between">
                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                                        alt="Brooklyn Simmons"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[17px] font-bold text-gray-900">Brooklyn Simmons</h4>
                                    <span className="text-[13px] text-gray-400 font-medium">Homeowner</span>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                <button className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                                    <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                                <button className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Row */}
                <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-12 px-4 md:px-0">
                    {[
                        { icon: <Zap className="fill-orange-500 text-orange-500" size={24} strokeWidth={0} />, name: "Logoipsum" },
                        { icon: <Waves className="text-orange-500" size={28} strokeWidth={2.5} />, name: "Logoipsum" },
                        { icon: <Sun className="text-orange-500" size={28} strokeWidth={2.5} />, name: "Logoipsum" },
                        { icon: <Droplet className="fill-orange-500 text-orange-500" size={24} strokeWidth={0} />, name: "Logoipsum" },
                        { icon: <Sun className="text-orange-500" size={28} strokeWidth={2.5} />, name: "Logoipsum" },
                    ].map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="flex items-center justify-center">
                                {logo.icon}
                            </div>
                            <span className="text-[20px] font-bold text-[#111] tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
