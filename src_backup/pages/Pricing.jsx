import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "19",
            description: "Essential features for individuals",
            features: ["5 Projects", "Basic Analytics", "1GB Storage", "Community Support"],
            buttonText: "Get Started",
            highlight: false
        },
        {
            name: "Standard",
            price: "49",
            description: "Best for growing teams",
            features: ["Unlimited Projects", "Advanced Analytics", "10GB Storage", "Priority Support", "Team Collaboration"],
            buttonText: "Try Free Trial",
            highlight: true
        },
        {
            name: "Premium",
            price: "99",
            description: "For large scale operations",
            features: ["Everything in Standard", "24/7 Dedicated Support", "Unlimited Storage", "Custom Integrations", "Multi-user Access"],
            buttonText: "Contact Sales",
            highlight: false
        }
    ];

    return (
        <div className="p-6 h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-[32px] p-10 flex flex-col border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.highlight ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-100'
                            }`}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-500 text-sm mb-8">{plan.description}</p>

                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                            <span className="text-gray-500 font-medium">/ month</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                            }`}>
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
