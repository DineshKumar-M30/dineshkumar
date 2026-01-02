import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import '../fitness.css';

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [touched, setTouched] = useState({});

    const navigate = useNavigate();
    const { showToast } = useToast();

    // Check if already logged in
    useEffect(() => {
        const user = localStorage.getItem('fitness_user');
        if (user) {
            navigate('/fitness');
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation if already touched
        if (touched[name]) {
            validateField(name, value);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'email':
                // Strict Gmail Validation
                const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (!value) {
                    error = 'Email is required';
                } else if (!gmailRegex.test(value)) {
                    error = 'Only @gmail.com addresses are allowed';
                }
                break;

            case 'password':
                if (!value) {
                    error = 'Password is required';
                } else if (value.length < 8) {
                    error = 'Must be at least 8 characters';
                } else if (!/[A-Z]/.test(value)) {
                    error = 'Must contain an uppercase letter';
                } else if (!/[0-9]/.test(value)) {
                    error = 'Must contain a number';
                } else if (!/[!@#$%^&*]/.test(value)) {
                    error = 'Must contain a special char (!@#$%^&*)';
                }
                break;

            case 'confirmPassword':
                if (!isLogin && value !== formData.password) {
                    error = 'Passwords do not match';
                }
                break;

            case 'name':
                if (!isLogin && !value.trim()) {
                    error = 'Name is required';
                }
                break;

            default:
                break;
        }

        setErrors(prev => ({ ...prev, [name]: error }));
        return error;
    };

    const validate = () => {
        const newErrors = {};

        // Email
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!gmailRegex.test(formData.email)) newErrors.email = 'Only @gmail.com addresses are allowed';

        // Password
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Must be at least 8 characters';
        else if (!/[A-Z]/.test(formData.password)) newErrors.password = 'Must contain an uppercase letter';
        else if (!/[0-9]/.test(formData.password)) newErrors.password = 'Must contain a number';
        else if (!/[!@#$%^&*]/.test(formData.password)) newErrors.password = 'Must contain a special char (!@#$%^&*)';

        if (!isLogin) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        // Mark all as touched on submit
        setTouched({
            name: true,
            email: true,
            password: true,
            confirmPassword: true
        });

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            showToast('Please fix the errors in the form', 'error');
            return;
        }

        setIsLoading(true);

        // Mock API Call
        setTimeout(() => {
            setIsLoading(false);

            if (isLogin) {
                // Mock Login Success
                const mockUser = {
                    id: 1,
                    name: 'Dinesh Kumar', // Hardcoded for demo
                    email: formData.email,
                    level: 12,
                    xp: 2450
                };
                localStorage.setItem('fitness_user', JSON.stringify(mockUser));
                localStorage.setItem('isLoggedIn', 'true');
                showToast(`Welcome back, ${mockUser.name}!`, 'success');
                navigate('/fitness');
            } else {
                // Mock Register Success
                const mockUser = {
                    id: Date.now(),
                    name: formData.name,
                    email: formData.email,
                    level: 1,
                    xp: 0
                };
                localStorage.setItem('fitness_user', JSON.stringify(mockUser));
                localStorage.setItem('isLoggedIn', 'true');
                showToast('Account created successfully! Welcome to FitQuest!', 'success');
                navigate('/fitness');
            }
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            position: 'relative',
            overflow: 'hidden',
            padding: '1rem'
        }}>
            {/* Animated Background Particles */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 200 + 50}px`,
                        height: `${Math.random() * 200 + 50}px`,
                        borderRadius: '50%',
                        background: i % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-purple)',
                        filter: 'blur(60px)',
                        animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`
                    }} />
                ))}
            </div>

            <div className="glass-card animate-fadeInUp" style={{
                width: '100%',
                maxWidth: '450px',
                padding: '2.5rem',
                position: 'relative',
                zIndex: 10,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '0.5rem',
                        display: 'inline-block',
                        animation: 'float 3s ease-in-out infinite'
                    }}>
                        💪
                    </div>
                    <h1 className="text-3xl font-bold gradient-text" style={{ marginBottom: '0.5rem' }}>
                        {isLogin ? 'Welcome Back' : 'Join the Quest'}
                    </h1>
                    <p className="text-secondary">
                        {isLogin ? 'Enter your credentials to access your account' : 'Start your epic fitness journey today'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {!isLogin && (
                        <div className="input-group animate-fadeInUp">
                            <label className="text-sm font-semibold text-secondary mb-xs block">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="John Doe"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: `1px solid ${touched.name && errors.name ? '#EF4444' : touched.name ? '#10B981' : 'rgba(255, 255, 255, 0.1)'}`,
                                    color: 'white',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                            {touched.name && errors.name && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</span>}
                        </div>
                    )}

                    <div className="input-group">
                        <label className="text-sm font-semibold text-secondary mb-xs block">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="you@gmail.com"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: `1px solid ${touched.email && errors.email ? '#EF4444' : touched.email ? '#10B981' : 'rgba(255, 255, 255, 0.1)'}`,
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}
                        />
                        {touched.email && errors.email && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <label className="text-sm font-semibold text-secondary mb-xs block">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: `1px solid ${touched.password && errors.password ? '#EF4444' : touched.password ? '#10B981' : 'rgba(255, 255, 255, 0.1)'}`,
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}
                        />
                        {touched.password && errors.password && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.password}</span>}
                        {isLogin && (
                            <div style={{ textAlign: 'right', marginTop: '0.25rem' }}>
                                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none' }}>Forgot Password?</a>
                            </div>
                        )}
                    </div>

                    {!isLogin && (
                        <div className="input-group animate-fadeInUp">
                            <label className="text-sm font-semibold text-secondary mb-xs block">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: `1px solid ${touched.confirmPassword && errors.confirmPassword ? '#EF4444' : touched.confirmPassword ? '#10B981' : 'rgba(255, 255, 255, 0.1)'}`,
                                    color: 'white',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                            {touched.confirmPassword && errors.confirmPassword && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.confirmPassword}</span>}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary btn-shimmer"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            marginTop: '0.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {isLoading ? (
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span className="loader" style={{
                                    width: '16px',
                                    height: '16px',
                                    border: '2px solid white',
                                    borderBottomColor: 'transparent',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    animation: 'spin 1s linear infinite'
                                }}></span>
                                Processing...
                            </span>
                        ) : (
                            isLogin ? 'Sign In' : 'Create Account'
                        )}
                    </button>

                    <style>
                        {`
                            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        `}
                    </style>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setErrors({});
                                setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                            }}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary-blue)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>

                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <button
                        onClick={() => navigate('/fitness')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-muted)',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                        }}
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
