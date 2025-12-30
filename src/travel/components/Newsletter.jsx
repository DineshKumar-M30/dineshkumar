import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 5000); // Reset after 5s
            setEmail('');
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between">

                    {/* Abstract Circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unlock Exclusive Deals</h2>
                        <p className="text-rose-100 text-lg">
                            Join 50,000+ travelers. Subscribe to our newsletter and get <span className="font-bold text-white">20% OFF</span> your first trip!
                        </p>
                    </div>

                    <div className="relative z-10 md:w-1/2 w-full max-w-md">
                        {subscribed ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center text-white border border-white/30"
                            >
                                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-400" />
                                <h3 className="text-xl font-bold">You're in! 🎉</h3>
                                <p className="text-rose-100">Check your inbox for your promo code.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-inner"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center space-x-2"
                                >
                                    <span>Subscribe</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                        <p className="text-rose-200 text-xs mt-4 text-center md:text-left opacity-80">
                            No spam, we promise. Unsubscribe anytime.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;
