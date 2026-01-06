import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Product Manager at TechCorp",
        content: "Nexus has completely transformed how our team operates. The AI suggestions are uncannily accurate and save us hours.",
        image: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=random"
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        content: "Finally, a project management tool that doesn't feel like a chore. The dark mode is beautiful and the keyboard shortcuts are a lifesaver.",
        image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random"
    },
    {
        name: "Jessica Ford",
        role: "Design Director",
        content: "Visually stunning and incredibly functional. My design team actually enjoys updating their tasks now.",
        image: "https://ui-avatars.com/api/?name=Jessica+Ford&background=random"
    }
];

const Testimonials = () => {
    return (
        <div className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Trusted by <span className="text-blue-600">innovators</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 italic">"{t.content}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
