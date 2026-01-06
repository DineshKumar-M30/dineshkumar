import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic } from 'lucide-react';

const VoiceCommand = () => {
    const [isListening, setIsListening] = useState(false);

    const toggleListening = () => {
        setIsListening(!isListening);
        // Simulate voice recognition logic
        if (!isListening) {
            setTimeout(() => {
                setIsListening(false);
            }, 3000);
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <AnimatePresence>
                {isListening && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5, x: -20 }}
                        className="absolute left-16 bottom-0 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center whitespace-nowrap"
                    >
                        <span className="flex space-x-1 mr-3">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [8, 16, 8] }}
                                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                                    className="w-1 bg-red-500 rounded-full"
                                />
                            ))}
                        </span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Listening...</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleListening}
                className={`p-4 rounded-full shadow-xl transition-colors ${isListening
                        ? 'bg-red-500 text-white shadow-red-500/30'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700'
                    }`}
            >
                <Mic className={`w-6 h-6 ${isListening ? 'animate-pulse' : ''}`} />
            </motion.button>
        </div>
    );
};

export default VoiceCommand;
