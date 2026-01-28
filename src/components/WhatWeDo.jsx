import React from 'react';
import { Settings, ArrowUpRight, Flame, ShieldCheck, Factory, Box } from 'lucide-react';
import Sparks from "../assets/Sparks grinding.jpg"

const WhatWeDo = () => {
    return (
        <section className="relative w-full flex flex-col lg:flex-row bg-[#1A1A1A] font-sans min-h-[900px]">

            {/* Left Content Section */}
            <div className="w-full lg:w-[55%] relative px-8 py-16 md:px-16 lg:pl-32 lg:pr-24 lg:py-28 flex flex-col justify-center overflow-hidden">
                {/* Background Overlay Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#505050 1px, transparent 1px), linear-gradient(90deg, #505050 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>

                <div className="relative z-10">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                            <Settings className="text-orange-500 w-3 h-3" />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">What We Do</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-[62px] font-light text-white leading-[1.1] mb-16 tracking-tight">
                        Innovative factory and industry <br />
                        <span className="font-semibold">solutions today</span>
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-2xl">
                        {[
                            {
                                icon: <Flame strokeWidth={1} />,
                                title: "Automation Solutions",
                                desc: "Streamlining processes through cutting-edge technology."
                            },
                            {
                                icon: <ShieldCheck strokeWidth={1} />,
                                title: "Quality Control",
                                desc: "Ensuring product excellence through rigorous testing."
                            },
                            {
                                icon: <Factory strokeWidth={1} />,
                                title: "Process Engineering",
                                desc: "Ensuring product excellence through rigorous testing."
                            },
                            {
                                icon: <Box strokeWidth={1} />,
                                title: "Product Development",
                                desc: "Streamlining processes through cutting-edge technology."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#242424] border border-white/5 rounded-[32px] p-9 hover:bg-[#2a2a2a] transition-all group min-h-[220px] flex flex-col justify-start">
                                <div className="mb-6 text-orange-500">
                                    {React.cloneElement(item.icon, { size: 34, strokeWidth: 1 })}
                                </div>
                                <h3 className="text-[18px] font-medium text-white mb-3 tracking-wide">{item.title}</h3>
                                <p className="text-[14px] text-gray-400 leading-relaxed font-light pr-2">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-gray-400 text-[14px] font-medium tracking-wide">
                        Let's make something great work together. <a href="#" className="ml-0.5 text-orange-500 font-bold border-b border-orange-500/50 hover:text-orange-400 transition-colors pb-0.5">Get Free Quote</a>
                    </div>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-full">
                <img
                    src={Sparks}
                    alt="Sparks Grinding"
                    className="w-full h-full object-cover grayscale-[20%]"
                />

                {/* Floating Orange Button - Centered Vertical on Left Edge of Image */}
                <div className="absolute top-1/2 -left-[60px] -translate-y-1/2 z-30 hidden lg:flex items-center justify-center">
                    <div className="relative w-[120px] h-[120px] bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl">
                        {/* Rotating Text Text */}
                        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                            <svg viewBox="0 0 100 100" width="100" height="100">
                                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text className="text-[7.5px] font-bold uppercase fill-white tracking-[0.18em]">
                                    <textPath xlinkHref="#textPath" startOffset="0%">
                                        Connect Now • Connect Now • Connect Now •
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Center Icon */}
                        <ArrowUpRight className="text-white w-7 h-7 relative z-10" strokeWidth={2.5} />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhatWeDo;
