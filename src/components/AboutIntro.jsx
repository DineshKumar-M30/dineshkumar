import React from 'react';
import { Settings, ArrowUpRight, BadgeCheck } from 'lucide-react';
import { Star } from 'lucide-react';

const AboutIntro = () => {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Images Section */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* This matches the overlapping style from the screenshot */}
                        <div className="relative h-[600px] w-full">
                            {/* Top Left Image */}
                            <div className="absolute top-0 left-0 w-[280px] h-[200px] rounded-[40px] overflow-hidden shadow-xl border-4 border-white z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                                    alt="Robotic Arm"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Main Large Image */}
                            <div className="absolute bottom-0 left-[60px] w-[350px] h-[480px] rounded-[60px] overflow-hidden shadow-2xl z-0">
                                <img
                                    src="https://i.pinimg.com/1200x/09/94/85/099485df7951cbfe8140416c2547b5a9.jpg"
                                    alt="Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute top-[40px] left-[300px] bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4 z-20 animate-bounce-slow">
                                <span className="text-4xl font-bold text-orange-500">25+</span>
                                <span className="text-xs text-gray-800 font-medium leading-tight">Year Of <br /> Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">About Us</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            Building quality through <br />
                            <span className="font-bold">industrial innovation</span>
                        </h2>

                        <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-lg">
                            At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-12 mb-10">
                            {/* Features List */}
                            <div className="space-y-4">
                                {[
                                    "Sustainable Manufacturing",
                                    "Advanced Automation",
                                    "Efficient Production Processes",
                                    "Reliable Delivery Services"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Settings className="w-3 h-3 text-orange-500" />
                                        </div>
                                        <span className="text-[14px] text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}

                                <button className="mt-8 px-6 py-3 rounded-xl border border-orange-500 text-gray-900 font-bold text-[13px] flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all group w-fit">
                                    Contact Us
                                    <span className="bg-orange-500 text-white p-1 rounded group-hover:bg-white group-hover:text-orange-500 transition-colors">
                                        <ArrowUpRight size={14} />
                                    </span>
                                </button>
                            </div>

                            {/* Rating Card */}
                            <div className="bg-[#F9F9F9] rounded-[32px] p-8 flex flex-col items-center justify-center min-w-[200px]">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                                    ))}
                                </div>
                                <span className="text-[13px] text-gray-500 font-medium text-center">15.5K Genuine Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
