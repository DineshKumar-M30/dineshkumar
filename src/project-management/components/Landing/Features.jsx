import React from 'react';
import { motion } from 'framer-motion';
import { Kanban, Sparkles, BarChart3, Users, Zap, Shield } from 'lucide-react';

const features = [
    {
        icon: <Kanban className="w-6 h-6" />,
        title: 'Smart Kanban Boards',
        description: 'Visualize your workflow with drag-and-drop simplicity. customizable columns and smart automation.',
        color: 'bg-blue-500'
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'AI Project Assistant',
        description: 'Get intelligent suggestions, auto-prioritization, and risk prediction powered by advanced AI.',
        color: 'bg-purple-500'
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: 'Real-time Analytics',
        description: 'Track team velocity, burndown charts, and productivity trends instantly.',
        color: 'bg-green-500'
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Team Collaboration',
        description: 'Seamless communication with built-in comments, mentions, and shared workspaces.',
        color: 'bg-orange-500'
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Automated Workflows',
        description: 'Reduce manual work with rule-based triggers and actions for recurring tasks.',
        color: 'bg-yellow-500'
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and role-based access control to keep your data safe.',
        color: 'bg-red-500'
    }
];

const Features = () => {
    return (
        <div id="features" className="py-24 bg-white dark:bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Everything you need to <span className="text-blue-600">ship faster</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Powerful features designed for modern software teams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl transition-all"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                                <div className={`${feature.color.replace('bg-', 'text-')}`}>
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
