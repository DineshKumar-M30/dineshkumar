import React from 'react';
import { ArrowRight, Leaf, Award } from 'lucide-react';
import Pumpkin from "../assets/pumpkin seeds.png"

const AboutSection = () => {
    return (
        <section className="relative w-full py-20 bg-[#F2EFE9] font-sans overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image */}
                    <div className="relative">
                        {/* Using a placeholder for the pumpkin seeds image */}
                        <div className="relative z-10 rounded-full/10">
                            <img
                                src={Pumpkin}
                                alt="Pumpkin seeds"
                                className="w-full h-auto object-contain scale-110"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="relative z-20">
                        <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 block italic">
                            About Us
                        </span>
                        <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold leading-tight mb-6">
                            We work only with quality raw materials from local farmers
                        </h2>
                        <p className="text-gray-600 mb-10 leading-relaxed text-sm">
                            Working with local farmers brings production companies the advantage of high-quality raw materials, strengthens the local community, reduces the ecological footprint, and contributes to supply chain sustainability, ensuring reliability and transparency.
                        </p>

                        {/* Feature 1 */}
                        <div className="flex gap-4 mb-8 group hover:translate-x-2 transition-transform duration-300">
                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                <Leaf className="w-8 h-8 text-[#7DAF56]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[#2A4B56] font-bold text-lg mb-2 group-hover:text-[#7DAF56] transition-colors">
                                    Only natural products
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Relying on nature, we offer products without artificial additives, guaranteeing you purity and quality.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 mb-10 group hover:translate-x-2 transition-transform duration-300">
                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                <Award className="w-8 h-8 text-[#7DAF56]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-[#2A4B56] font-bold text-lg mb-2 group-hover:text-[#7DAF56] transition-colors">
                                    High quality standards
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    At every stage of production, we strive for perfection so you can enjoy products with excellent quality and taste.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-[#2A4B56] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#1e363e] transition-colors text-sm">
                            Read More
                            <ArrowRight className="w-4 h-4 text-[#7DAF56]" />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
