import React, { useState } from 'react';
import { Settings, LayoutGrid, Diamond, ScanEye } from 'lucide-react';
// Using icons: Target (Mission), Eye (Vision? using LayoutGrid or similar), Diamond (Value)

const OurApproach = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const content = {
        mission: {
            title: "Our Mission",
            desc: "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
            points: [
                "Sustainable Manufacturing Practices",
                "Advanced Technology Integration",
                "Community and Environmental Responsibility",
                "Innovation-Driven Growth"
            ],
            image: "https://i.pinimg.com/1200x/de/80/f7/de80f78a1da2a17d92ba13083e487e74.jpg"
        },
        vision: {
            title: "Our Vision",
            desc: "To be the global leader in sustainable industrial innovation, setting the standard for efficiency and environmental stewardship in manufacturing.",
            points: [
                "Global Leadership in Industry",
                "Pioneering Eco-friendly Solutions",
                "Zero-waste Manufacturing Goals",
                "Empowering Global Workforce"
            ],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2595&auto=format&fit=crop"
        },
        value: {
            title: "Our Value",
            desc: "We value integrity, excellence, and collaboration. Our commitment to these core principles drives every decision we make and every product we build.",
            points: [
                "Integrity and Transparency",
                "Excellence in Quality",
                "Collaborative Partnerships",
                "Continuous Improvement"
            ],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
        }
    };

    return (
        <section className="relative font-sans">

            {/* Top Dark Section */}
            <div className="relative bg-[#1A1A1A] py-24 pb-48 lg:pb-64">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-20"
                        alt="bg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent"></div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-white">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                    <Settings className="text-orange-500 w-3 h-3" />
                                </div>
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Our Approach</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] tracking-tight">
                                Empowering sustainable <br />
                                <span className="font-bold">growth in industry</span>
                            </h2>
                        </div>
                        <div className="max-w-md text-gray-400 text-[14px] leading-relaxed">
                            We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlapping White Card Section */}
            <div className="relative z-20 -mt-32 lg:-mt-48 px-4 lg:px-0 mb-20">
                <div className="max-w-[1440px] mx-auto bg-white rounded-[40px] lg:rounded-[60px] shadow-2xl overflow-hidden min-h-[600px]">

                    {/* Tab Navigation */}
                    <div className="flex flex-col md:flex-row h-[120px]">
                        <button
                            onClick={() => setActiveTab('mission')}
                            className={`flex flex-1 items-center justify-center gap-4 text-[16px] font-bold transition-all h-full
                                ${activeTab === 'mission'
                                    ? 'bg-orange-500 text-white rounded-tl-[40px] md:rounded-tl-[60px]'
                                    : 'bg-white text-gray-800 hover:text-orange-500 border-b border-gray-100'}`
                            }
                        >
                            <ScanEye className={`w-7 h-7 ${activeTab === 'mission' ? 'text-white' : 'text-orange-500'}`} strokeWidth={1.5} />
                            Our Mission
                        </button>
                        <button
                            onClick={() => setActiveTab('vision')}
                            className={`flex flex-1 items-center justify-center gap-4 text-[16px] font-bold transition-all h-full
                                ${activeTab === 'vision'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-white text-gray-800 hover:text-orange-500 border-b border-gray-100'}`
                            }
                        >
                            <LayoutGrid className={`w-7 h-7 ${activeTab === 'vision' ? 'text-white' : 'text-orange-500'}`} strokeWidth={1.5} />
                            Our Vision
                        </button>
                        <button
                            onClick={() => setActiveTab('value')}
                            className={`flex flex-1 items-center justify-center gap-4 text-[16px] font-bold transition-all h-full
                                ${activeTab === 'value'
                                    ? 'bg-orange-500 text-white rounded-tr-[40px] rounded-bl-[40px] md:rounded-bl-[0px]'
                                    : 'bg-white text-gray-800 hover:text-orange-500 border-b border-gray-100'}`
                            }
                        >
                            <Diamond className={`w-7 h-7 ${activeTab === 'value' ? 'text-white' : 'text-orange-500'}`} strokeWidth={1.5} />
                            Our Value
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 md:p-16 lg:p-20">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Text Content */}
                            <div className="flex-1">
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-lg">
                                    {content[activeTab].desc}
                                </p>
                                <div className="space-y-5">
                                    {content[activeTab].points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            {/* Using rosette/gear icon similar to screenshot */}
                                            <div className="text-orange-500">
                                                <Settings className="w-5 h-5 fill-orange-500" strokeWidth={1} />
                                            </div>
                                            <span className="text-[14px] font-medium text-gray-700">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full">
                                <div className="aspect-[16/10] rounded-[48px] overflow-hidden shadow-lg relative">
                                    <img
                                        src={content[activeTab].image}
                                        alt={content[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OurApproach;
