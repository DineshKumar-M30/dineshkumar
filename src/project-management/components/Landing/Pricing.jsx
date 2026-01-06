import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: 0,
        features: ["Up to 3 projects", "Basic Kanban", "5 Team members", "Community Support"]
    },
    {
        name: "Pro",
        price: 29,
        popular: true,
        features: ["Unlimited projects", "Advanced Analytics", "AI Assistant", "Priority Support", "Custom Workflows"]
    },
    {
        name: "Enterprise",
        price: 99,
        features: ["Unlimited everything", "Dedicated Account Manager", "SSO & Security", "On-premise deployment", "API Access"]
    }
];

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <div id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Simple, transparent <span className="text-blue-600">pricing</span>
                    </h2>

                    <div className="flex items-center justify-center mt-8">
                        <span className={`text-sm font-medium ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Monthly</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="bg-blue-600 w-12 h-6 rounded-full mx-4 relative transition-colors focus:outline-none"
                        >
                            <span className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${annual ? 'left-7' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                            Yearly <span className="text-green-500 text-xs ml-1 font-bold">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl bg-white dark:bg-slate-800 border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-slate-100 dark:border-slate-700'} relative`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                ${annual ? plan.price * 10 : plan.price}<span className="text-lg text-slate-500 font-normal">/{annual ? 'yr' : 'mo'}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'}`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
