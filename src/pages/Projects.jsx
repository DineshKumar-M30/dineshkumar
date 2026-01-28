import React, { useEffect, useState } from 'react';
import development from "../assets/Development.png";
import automation from "../assets/Automation.png";
import infrastructure from "../assets/Infrastructure.png";
import manufacturing from "../assets/manufacturing.jpg";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        "All",
        "Automation",
        "Development",
        "Infrastructure",
        "Manufacturing",
        "Sustainability"
    ];

    const projects = [
        {
            title: "Total Quality Management Implementation",
            category: "Development",
            image: development
        },
        {
            title: "Advanced Research In Material Science",
            category: "Automation",
            image: automation
        },
        {
            title: "Workplace Safety Enhancement Initiative",
            category: "Infrastructure",
            image: infrastructure
        },
        {
            title: "Robotic Process Automation Deployment",
            category: "Infrastructure",
            image: manufacturing
        },
        {
            title: "Energy-Efficient Manufacturing Systems",
            category: "Development",
            image: development
        },
        {
            title: "Redesigning Factory Layouts For Efficiency",
            category: "Development",
            image: "https://i.pinimg.com/1200x/e9/76/c0/e976c0382530a130dc5107b4b1c39614.jpg" // Factory layout
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="font-sans bg-white pb-32">

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-start overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.pinimg.com/736x/c2/6f/68/c26f68ef324a7b99a552da4aeac745bc.jpg"
                        alt="Factory Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 mt-16 max-w-[1440px] mx-auto w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light mb-4 text-left">
                        Our Project
                    </h1>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                        <span>Home</span>
                        <span className="text-orange-500">•</span>
                        <span className="text-orange-500">Projects</span>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24">
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-16 text-[15px] font-medium text-gray-500">
                    {filters.map((filter, index) => (
                        <div key={index} className="flex items-center">
                            <button
                                onClick={() => setActiveFilter(filter)}
                                className={`transition-colors duration-300 ${activeFilter === filter ? 'text-orange-500 font-bold' : 'hover:text-orange-400'}`}
                            >
                                {filter}
                            </button>
                            {index !== filters.length - 1 && (
                                <span className="ml-4 text-gray-300">/</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Tag */}
                                <div className="absolute top-8 left-8">
                                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-gray-600">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-center text-[18px] lg:text-[20px] font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Projects;
