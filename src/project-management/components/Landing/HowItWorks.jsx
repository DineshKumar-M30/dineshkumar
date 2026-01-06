import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Create Project",
        desc: "Set up your workspace and invite team members in seconds."
    },
    {
        num: "02",
        title: "Organize Tasks",
        desc: "Break down work into manageable tasks and assign them."
    },
    {
        num: "03",
        title: "Track Progress",
        desc: "Monitor velocity and move tasks through custom workflows."
    },
    {
        num: "04",
        title: "Ship Faster",
        desc: "Hit your deadlines with automated insights and clearer focus."
    }
];

const HowItWorks = () => {
    return (
        <div id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        From chaos to <span className="text-indigo-600">clarity</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        A simple framework for complex projects.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center relative"
                            >
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 border-4 border-white dark:border-slate-800">
                                    {step.num}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
