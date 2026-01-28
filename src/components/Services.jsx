import React from 'react';
import { Settings, ArrowRight, Factory, Bot, PenTool, Wrench } from 'lucide-react';
import robotic from '../assets/Robotic Arms.jpg';

const Services = () => {
    const services = [
        {
            icon: <Factory strokeWidth={1} />,
            title: "Custom Manufacturing Solution",
            link: "#"
        },
        {
            icon: <Bot strokeWidth={1} />,
            title: "Industrial Automation And Robotics",
            link: "#"
        },
        {
            icon: <PenTool strokeWidth={1} />,
            title: "Product Design And Prototyping",
            link: "#"
        },
        {
            icon: <Wrench strokeWidth={1} />,
            title: "Equipment Maintenance Support",
            link: "#"
        }
    ];

    return (
        <section className="relative w-full font-sans">
            {/* Dark Background Section */}
            <div className="relative h-[600px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={robotic}
                        alt="Robotic Arms"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay - Darkened for text contrast */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        {/* Title Section */}
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-0.5 border border-orange-500 rounded-full">
                                    <Settings className="text-orange-500 w-3 h-3" />
                                </div>
                                <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">Services</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.15] font-light">
                                Comprehensive solutions <br />
                                <span className="font-semibold text-white">for industrial excellence</span>
                            </h2>
                        </div>

                        {/* Description Section */}
                        <div className="max-w-lg lg:mt-10">
                            <p className="text-gray-300 text-[15px] leading-relaxed font-light">
                                We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlapping Cards Container */}
            <div className="relative z-20 px-6 md:px-12 lg:px-20 -mt-48 mb-24">
                <div className="max-w-[1440px] mx-auto bg-white rounded-[40px] shadow-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 text-left">
                        {services.map((service, index) => (
                            <div key={index} className={`flex flex-col h-full px-6 py-4 border-gray-100 ${index !== services.length - 1 ? 'lg:border-r border-b lg:border-b-0' : ''
                                } ${index === 0 ? 'pl-0' : ''}`}>

                                <div className="mb-6">
                                    <div className="w-12 h-12 text-orange-500">
                                        {/* Cloning element to enforce consistent stroke and sizing */}
                                        {React.cloneElement(service.icon, { size: 48, strokeWidth: 1 })}
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium text-gray-900 mb-8 max-w-[200px] leading-snug min-h-[54px]">
                                    {service.title}
                                </h3>

                                <div className="mt-auto">
                                    <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg flex items-center justify-center transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
