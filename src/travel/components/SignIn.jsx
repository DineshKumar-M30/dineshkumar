import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

const SignIn = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate network delay
        setTimeout(() => {
            // Gmail Validation Logic
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

            if (!email) {
                setError('Email is required');
                setLoading(false);
                return;
            }

            if (!gmailRegex.test(email)) {
                setError('Please enter a valid @gmail.com address');
                setLoading(false);
                return;
            }

            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                setLoading(false);
                return;
            }

            // Success
            onLogin();
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2560")' }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 w-full max-w-md border border-white/20 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-tr from-rose-500 to-purple-600 p-3 rounded-xl shadow-lg">
                            <Compass className="text-white w-8 h-8 animate-spin-slow" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300">Sign in to continue your journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@gmail.com"
                                className={`w-full bg-black/20 border ${error.includes('gmail') ? 'border-red-500' : 'border-white/10'} rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-rose-500 transition-colors`}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none focus:border-rose-500 transition-colors"
                            />
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center space-x-2 text-red-200 text-sm"
                        >
                            <AlertCircle size={16} />
                            <span>{error}</span>
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <span>Sign In</span>
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                        Only <span className="text-white font-medium">@gmail.com</span> accounts are supported.
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

export default SignIn;
