import React from 'react';
import { ArrowRight, Tractor, Factory } from 'lucide-react';

const AboutHealthSection = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <div className="relative flex justify-center">
                        <div className="w-[80%] aspect-square rounded-full overflow-hidden shadow-2xl relative animate-fade-in-scale">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                                alt="Salad Bowl"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="relative animate-slide-up">
                        <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 block italic">
                            About Us
                        </span>
                        <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Natural products - healthy population
                        </h2>
                        <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <p className="text-gray-500 mb-10 leading-relaxed text-sm">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start gap-4 group hover:translate-y-[-5px] transition-transform duration-300">
                                <div className="bg-[#EFF6F1] p-3 rounded-2xl text-[#7DAF56] group-hover:bg-[#7DAF56] group-hover:text-white transition-colors duration-300">
                                    <Tractor className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold text-base leading-tight group-hover:text-[#7DAF56] transition-colors">Modern agricultural machinery</h4>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group hover:translate-y-[-5px] transition-transform duration-300">
                                <div className="bg-[#EFF6F1] p-3 rounded-2xl text-[#7DAF56] group-hover:bg-[#7DAF56] group-hover:text-white transition-colors duration-300">
                                    <Factory className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold text-base leading-tight group-hover:text-[#7DAF56] transition-colors">Growing without hormones</h4>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-[#2A4B56] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#1e363e] transition-all hover:shadow-lg text-sm group">
                            Contacts
                            <ArrowRight className="w-4 h-4 text-[#7DAF56] group-hover:translate-x-1 transition-transform" />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHealthSection;
