import React from 'react';
import { CircleCheck } from 'lucide-react';
import green from "../assets/green vegetables.png"
const AboutWhyUsSection = () => {
    return (
        <section className="py-20 bg-[#F9F9F9] font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="animate-slide-up">
                        <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 block italic">
                            Why Us?
                        </span>
                        <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold leading-tight mb-6">
                            We buy seeds and nuts from the best farmers.
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>

                        {/* List/Buttons */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 bg-[#EBEDED] rounded-full px-6 py-4 max-w-md cursor-default hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#7DAF56]/20">
                                <div className="w-5 h-5 rounded-full border-2 border-[#7DAF56] flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-[#7DAF56] rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-[#2A4B56] font-bold text-sm">100% Natural products</span>
                            </div>
                            <div className="max-w-md pl-14 mb-4">
                                <p className="text-gray-500 text-xs">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                            </div>

                            <div className="flex items-center gap-3 bg-[#EBEDED] rounded-full px-6 py-4 max-w-md opacity-60 hover:opacity-100 transition-opacity duration-300">
                                <div className="w-5 h-5 rounded-full border-2 border-[#7DAF56]"></div>
                                <span className="text-[#2A4B56] font-bold text-sm">Quality and compliance certificates</span>
                            </div>
                            <div className="max-w-md pl-14 hidden">
                                <p className="text-gray-500 text-xs">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-[500px] rounded-[50px] overflow-hidden shadow-xl animate-fade-in-scale">
                        <img
                            src={green}
                            alt="Green vegetables lay"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutWhyUsSection;
