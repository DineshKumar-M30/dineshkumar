import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import development from "../assets/Development.png";
import automation from "../assets/Automation.png";
import infrastructure from "../assets/Infrastructure.png";
import manufacturing from "../assets/manufacturing.jpg";

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = [
        "All", "Automation", "Development", "Infrastructure", "Manufacturing", "Sustainability"
    ];

    const projects = [
        {
            id: 1,
            tag: "Development",
            title: "Total Quality Management Implementation",
            image: development // Robotic arms
        },
        {
            id: 2,
            tag: "Automation",
            title: "Advanced Research In Material Science",
            image:  automation
        },
        {
            id: 3,
            tag: "Infrastructure",
            title: "Workplace Safety Enhancement Initiative",
            image: infrastructure
        },
        {
            id: 4,
            tag: "Infrastructure",
            title: "Robotic Process Automation Deployment",
            image: manufacturing
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Work</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] tracking-tight">
                            Our successful project <br />
                            <span className="font-bold">initiatives</span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:mb-2">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Our successful project initiatives showcase our commitment to excellence and innovation across various industries.
                        </p>
                    </div>
                </div>

                {/* Filter Navigation */}
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-16 text-sm font-medium overflow-x-auto">
                    {categories.map((cat, index) => (
                        <React.Fragment key={cat}>
                            <button
                                onClick={() => setActiveTab(cat)}
                                className={`transition-colors ${activeTab === cat ? 'text-orange-500 font-bold' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                {cat}
                            </button>
                            {index < categories.length - 1 && (
                                <span className="text-gray-300">/</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col text-center group cursor-pointer">
                            <div className="relative mb-6 overflow-hidden rounded-[40px] shadow-sm aspect-[4/3]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Tag Badge */}
                                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/10 text-white text-[11px] px-4 py-1.5 rounded-full font-medium tracking-wide">
                                    {project.tag}
                                </div>
                            </div>

                            <h3 className="text-lg md:text-[20px] font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
