import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "14.99",
            features: [
                { name: "Free Setup", active: true },
                { name: "Bandwidth Limit 10 GB", active: true },
                { name: "20 User Connection", active: true },
                { name: "Analytics Report", active: false },
                { name: "Public API Access", active: false },
                { name: "Plugins Intregation", active: false },
                { name: "Custom Content Management", active: false },
            ],
            buttonStyle: "outline"
        },
        {
            name: "Standard",
            price: "49.99",
            features: [
                { name: "Free Setup", active: true },
                { name: "Bandwidth Limit 10 GB", active: true },
                { name: "20 User Connection", active: true },
                { name: "Analytics Report", active: true },
                { name: "Public API Access", active: true },
                { name: "Plugins Intregation", active: false },
                { name: "Custom Content Management", active: false },
            ],
            buttonStyle: "outline"
        },
        {
            name: "Premium",
            price: "89.99",
            features: [
                { name: "Free Setup", active: true },
                { name: "Bandwidth Limit 10 GB", active: true },
                { name: "20 User Connection", active: true },
                { name: "Analytics Report", active: true },
                { name: "Public API Access", active: true },
                { name: "Plugins Intregation", active: true },
                { name: "Custom Content Management", active: true },
            ],
            buttonStyle: "solid"
        }
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                    >
                        {/* Background Decoration (Subtle Wave Simulation) */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path fill="#4F46E5" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.2,21.9,71.4,33.1C60.6,44.3,50.3,53.6,39.1,61.9C27.9,70.2,15.8,77.6,2.7,72.9C-10.4,68.2,-24.5,51.4,-36.8,38.1C-49.1,24.8,-59.6,15,-66.4,1.8C-73.2,-11.4,-76.3,-28,-69.8,-41.8C-63.3,-55.6,-47.2,-66.6,-31.6,-73.1C-16,-79.6,-0.9,-81.6,13.2,-79.8C27.3,-78,41.4,-72.4,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* Title Section */}
                        <div className="text-center mb-8 relative z-10 w-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">Monthly Charge</p>
                            <div className="text-5xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">
                                ${plan.price}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-100 mb-8 z-10"></div>

                        {/* Features List */}
                        <div className="flex-1 w-full relative z-10">
                            <ul className="space-y-6 text-center">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`text-sm font-medium ${feature.active ? 'text-gray-900' : 'text-gray-300'}`}
                                    >
                                        {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Section */}
                        <div className="mt-10 w-full flex flex-col items-center gap-6 relative z-10">
                            <button
                                className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 border w-48 text-sm
                                    ${plan.buttonStyle === 'solid'
                                        ? 'bg-transparent text-gray-400 border-gray-200 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30'
                                        : 'bg-transparent text-gray-400 border-gray-200 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30'
                                    }`}
                            >
                                Get Started
                            </button>
                            <button className="text-gray-900 text-xs font-bold underline decoration-gray-900/30 underline-offset-4 hover:decoration-gray-900 transition-all">
                                Start Your 30 Day Free Trial
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
