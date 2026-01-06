import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send } from 'lucide-react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hello! I am your AI Project Assistant. How can I help you optimize your workflow today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setInput('');

        // Mock AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: "I've analyzed your project velocity. Based on current trends, I recommend assigning more resources to the 'Backend API' task to meet the deadline."
            }]);
        }, 1000);
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-xl shadow-purple-500/30 z-50 flex items-center gap-2"
            >
                <Sparkles className="w-6 h-6 animate-pulse" />
                <span className="font-bold hidden md:inline">Ask AI</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                <h3 className="font-bold">Nexus AI</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
                            <input
                                type="text"
                                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-purple-500"
                                placeholder="Ask anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;
