import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Input from '../Shared/Input';
import Button from '../Shared/Button';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        // Basic validation
        if (!formData.name) {
            setErrors(prev => ({ ...prev, name: 'Name is required' }));
            return;
        }
        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: 'Email is required' }));
            return;
        }
        if (formData.password.length < 6) {
            setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const result = signup(formData);
            if (result.success) {
                toast.success('Account created successfully!');
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
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Create an account</h1>
                        <p className="text-slate-500 mb-8">Start your 14-day free trial today.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                label="Full Name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                error={errors.name}
                            />
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
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={errors.password}
                            />

                            <Button type="submit" isLoading={loading} className="w-full py-3">
                                Create Account
                            </Button>
                        </form>

                        <p className="mt-6 text-center text-slate-600 dark:text-slate-400">
                            Already have an account? {' '}
                            <Link to="/project-dashboard/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:block w-1/2 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                    alt="Team structure"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white p-12">
                        <h2 className="text-4xl font-bold mb-4">Build better together.</h2>
                        <p className="text-lg text-indigo-100">Powerful tools for teams that want to achieve more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
