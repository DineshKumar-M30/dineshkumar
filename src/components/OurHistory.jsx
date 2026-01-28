import React, { useState } from 'react';
import { Settings, CheckCircle2 } from 'lucide-react';

const OurHistory = () => {
    const [activeYear, setActiveYear] = useState('1920');

    const timeline = [
        { year: '1920', label: 'In 1920 - Planning' },
        { year: '1922', label: 'In 1922 - Journey Started' },
        { year: '1925', label: 'In 1925 - Journey Progress' },
        { year: '1930', label: 'In 1930 - Global Reach' },
        { year: '1940', label: 'In 1940 - Industry Leadership' },
    ];

    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our History</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Foundation of excellences <br />
                            <span className="font-bold">in industry</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-gray-400 text-[13px] leading-relaxed lg:text-right">
                        Built on a legacy of quality and innovation, we have established a strong foundation in the industrial sector, consistently delivering reliable solutions that drive progress and set industry standards.
                    </div>
                </div>

                {/* Timeline & Content */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Timeline Navigation - Contiguous Block */}
                    <div className="lg:w-[25%] flex flex-col">
                        <div
                            className="bg-white shadow-sm border border-gray-100 overflow-hidden"
                            style={{ borderRadius: '20px' }}
                        >
                            {timeline.map((item, index) => (
                                <button
                                    key={item.year}
                                    onClick={() => setActiveYear(item.year)}
                                    className={`w-full py-5 px-8 text-center font-bold text-[15px] transition-all duration-300 relative first:rounded-t-[20px] last:rounded-b-[20px]
                                        ${activeYear === item.year
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'}
                                        ${index !== timeline.length - 1 ? 'border-b border-gray-100' : ''}
                                    `}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-[75%] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        <div className="flex-1">
                            <h3 className="text-4xl md:text-[46px] font-light text-gray-900 mb-6 tracking-tight">
                                Company <span className="font-bold">started</span>
                            </h3>
                            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-md">
                                Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Quality Control System",
                                    "Building Quality Industrial",
                                    "Environmental Responsibility",
                                    "Building Quality Industrial"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Settings className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
                                        <span className="text-[14px] font-medium text-gray-700">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                    alt="Factory Planning"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurHistory;
