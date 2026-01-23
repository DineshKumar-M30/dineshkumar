import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accepted, setAccepted] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black font-['Outfit']">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4880FF] rounded-full blur-[120px] opacity-40 animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7B48FF] rounded-full blur-[120px] opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-[#FF48A6] rounded-full blur-[150px] opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Glass Card */}
            <div className="relative z-10 w-full max-w-[480px] mx-4">
                <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[32px] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                            {isSignUp ? "Create Account" : "Welcome Back"}
                        </h1>
                        <p className="text-gray-400 text-sm font-light">
                            {isSignUp ? "Enter your details to get started" : "Enter your credentials to access your account"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username (Sign Up Only) */}
                        {isSignUp && (
                            <div className="group">
                                <div className="relative">
                                    <input
                                        type="text"
                                        required={isSignUp}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:bg-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all outline-none font-medium placeholder-gray-500"
                                        placeholder="Full Name"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div className="group">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:bg-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all outline-none font-medium placeholder-gray-500"
                                    placeholder="Email Address"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="group">
                            <div className="relative">
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:bg-white/10 focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all outline-none font-medium tracking-widest placeholder-gray-500"
                                    placeholder="Password"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Extras */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${accepted ? 'bg-[#4880FF] border-[#4880FF]' : 'bg-transparent border-gray-600 group-hover:border-gray-500'}`}>
                                    {accepted && (
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <input type="checkbox" className="hidden" checked={accepted} onChange={() => setAccepted(!accepted)} />
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {isSignUp ? "I agree to Terms" : "Remember me"}
                                </span>
                            </label>

                            {!isSignUp && (
                                <button type="button" className="text-[#4880FF] hover:text-[#7B48FF] transition-colors font-medium">
                                    Forgot Password?
                                </button>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#4880FF] to-[#7B48FF] hover:from-[#598BFF] hover:to-[#8E61FF] text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(72,128,255,0.5)]"
                        >
                            {isSignUp ? "Create Account" : "Sign In"}
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-4 bg-transparent text-gray-500 backdrop-blur-xl">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                                <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                                </svg>
                            </button>
                            <button type="button" className="flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group">
                                <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 512 512" fill="currentColor"><path d="M385.2 277.6c5.4 78.5 76.5 106.3 77.3 107.1-0.6 1.7-12 41.1-39.7 81.6-24.1 34.6-49.2 69-88.6 69.4-38.2 0.4-50.6-22.6-94.3-22.9-44.5-0.4-58.4 22.3-95 23.3-37.9 1-67-34.9-91.1-69.8-49.6-71.6-87.5-182.2-36.5-270.8 25.3-43.9 70.5-71.7 119.8-72.6 37.1-0.7 72 24.9 94.6 24.9 21.6 0 62.1-30.8 104.7-26.3 17.8 0.7 68.3 7.3 100.2 53.6-2.5 1.5-60 35-59.5 102.5zM273.7 75c20.3-24.6 34-58.9 30.2-93.5-29.2 1.2-64.6 19.5-85.6 44.1-18.7 21.8-35.1 56.6-30.7 90.1 32.5 2.5 65.6-16.1 86.1-40.7z" /></svg>
                            </button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="text-center mt-8">
                        <p className="text-gray-400 text-sm">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"} <button onClick={() => setIsSignUp(!isSignUp)} className="text-[#4880FF] hover:text-[#7B48FF] font-medium transition-colors">{isSignUp ? "Sign In" : "Sign Up"}</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
