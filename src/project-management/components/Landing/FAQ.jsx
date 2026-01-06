import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "Is there a free trial?",
        a: "Yes! We offer a 14-day free trial on all paid plans. No credit card required to start."
    },
    {
        q: "Can I use this for personal projects?",
        a: "Absolutely. Our Starter plan is free forever for up to 3 projects."
    },
    {
        q: "Is my data secure?",
        a: "We use AES-256 encryption and adhere to strict privacy standards. Your data is safe with us."
    },
    {
        q: "Can I import from Trello or Jira?",
        a: "Yes, we offer one-click migration tools for Trello, Jira, and Asana."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-slate-900 dark:text-white">{faq.q}</span>
                                {openIndex === i ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
