import React from 'react';
import { Settings } from 'lucide-react';

const OurProcess = () => {
    const steps = [
        {
            id: "01",
            title: "Understanding Your Needs",
            desc: "We begin by thoroughly assessing your requirements and objectives to develop a tailored approach."
        },
        {
            id: "02",
            title: "Design and Planning",
            desc: "Our team collaborates to create detailed project plans, ensuring all aspects of the process."
        },
        {
            id: "03",
            title: "Implementation",
            desc: "Utilizing advanced technologies and skilled personnel, we execute the project"
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-[#FAFAFA] font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Process</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight">
                            Streamlined processes <span className="font-bold">for <br /> optimal efficiency</span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:mb-2 text-right">
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                            Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.
                        </p>
                    </div>
                </div>

                {/* Content Content Section */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-square w-full rounded-[48px] overflow-hidden shadow-xl">
                            <img
                                src="https://i.pinimg.com/736x/0e/94/0f/0e940f6b4aeea77500ba02de55c6a2d3.jpg"
                                alt="Process CNC Machine"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Steps List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="group relative p-8 rounded-[32px] transition-all duration-300 bg-transparent hover:bg-orange-500 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-4xl font-bold text-orange-500 group-hover:text-white/90 transition-colors">
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-[13px] leading-relaxed text-gray-500 group-hover:text-white/80 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OurProcess;
