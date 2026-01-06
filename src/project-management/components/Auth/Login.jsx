import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
            return;
        }
        if (!formData.password) {
            setErrors(prev => ({ ...prev, password: 'Password is required' }));
            return;
        }

        setLoading(true);

        // Simulate network delay
        setTimeout(() => {
            const result = login(formData.email, formData.password);
            if (result.success) {
                toast.success('Welcome back!');
                navigate('/project-dashboard/app/dashboard');
            } else {
                toast.error(result.message);
                setLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back</h1>
                        <p className="text-slate-500 mb-8">Please enter your details to sign in.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                error={errors.email}
                            />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={errors.password}
                            />

                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center text-slate-600 dark:text-slate-400 cursor-pointer">
                                    <input type="checkbox" className="mr-2 rounded border-slate-300" />
                                    Remember me
                                </label>
                                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                            </div>

                            <Button type="submit" isLoading={loading} className="w-full py-3">
                                Sign In
                            </Button>
                        </form>

                        <p className="mt-6 text-center text-slate-600 dark:text-slate-400">
                            Don't have an account? {' '}
                            <Link to="/project-dashboard/signup" className="text-blue-600 font-bold hover:underline">Sign up</Link>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:block w-1/2 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                    alt="Team working"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white p-12">
                        <h2 className="text-4xl font-bold mb-4">Manage projects effortlessly.</h2>
                        <p className="text-lg text-blue-100">Join thousands of teams shipping faster with Nexus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
