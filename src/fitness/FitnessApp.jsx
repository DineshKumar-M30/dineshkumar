import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import DailyGoalRing from './components/DailyGoalRing';
import WorkoutCards from './components/WorkoutCards';
import XPProgress from './components/XPProgress';
import Achievements from './components/Achievements';
import WeeklyChart from './components/WeeklyChart';
import StreakCounter from './components/StreakCounter';
import ChallengeSection from './components/ChallengeSection';
import Leaderboard from './components/Leaderboard';
import NutritionTips from './components/NutritionTips';
import GymGallery from './components/GymGallery';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import './fitness.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(15deg) scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(0) scale(1)'}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
};

const FitnessAppContent = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('fitness_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleProfileClick = () => {
        if (!user) {
            navigate('/fitness/signin');
        } else {
            // Simple logout for demo
            if (window.confirm(`Logged in as ${user.name}. Log out?`)) {
                localStorage.removeItem('fitness_user');
                localStorage.removeItem('isLoggedIn');
                setUser(null);
                window.location.reload();
            }
        }
    };

    return (
        <div className="fitness-app">
            {/* Navigation Bar */}
            <nav style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '1rem 0'
            }}>
                <div className="fitness-container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {/* Logo Section */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--primary-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem'
                            }}>
                                💪
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800,
                                    background: 'var(--primary-gradient)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    FitQuest
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)'
                                }}>
                                    Level Up Your Fitness
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'center'
                        }}>
                            {[
                                { label: 'Workouts', id: 'workouts', icon: '🏋️' },
                                { label: 'Progress', id: 'xp-progress', icon: '📊' },
                                { label: 'Achievements', id: 'achievements', icon: '🏆' },
                                { label: 'Challenges', id: 'challenges', icon: '🎯' }
                            ].map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'color var(--transition-fast)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(link.id)?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }}
                                >
                                    <span>{link.icon}</span>
                                    <span className="nav-link-text">{link.label}</span>
                                </a>
                            ))}
                        </div>

                        {/* User Profile & Theme Toggle */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <ThemeToggle />

                            <div style={{ textAlign: 'right' }}>
                                <div style={{
                                    fontSize: '0.875rem',
                                    fontWeight: 600
                                }}>
                                    {user ? user.name : 'Guest'}
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)'
                                }}>
                                    {user ? `Level ${user.level}` : 'Sign In'}
                                </div>
                            </div>
                            <div
                                onClick={handleProfileClick}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: user ? 'var(--primary-gradient)' : 'var(--bg-tertiary)',
                                    border: user ? 'none' : '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    boxShadow: user ? 'var(--glow-blue)' : 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                title={user ? "Click to Log Out" : "Click to Sign In"}
                            >
                                👤
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Hero />
                <DailyGoalRing />
                <WorkoutCards />
                <XPProgress />
                <Achievements />
                <WeeklyChart />
                <StreakCounter />
                <GymGallery />
                <Leaderboard />
                <NutritionTips />
                <ChallengeSection />
            </main>

            {/* Footer */}
            <footer style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--glass-border)',
                padding: '3rem 0 2rem'
            }}>
                <div className="fitness-container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--primary-gradient)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    💪
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800,
                                    background: 'var(--primary-gradient)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    FitQuest
                                </div>
                            </div>
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.6
                            }}>
                                Transform your fitness journey into an epic adventure.
                                Track workouts, earn XP, and level up your health!
                            </p>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}>
                                Quick Links
                            </h4>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {['Workouts', 'Achievements', 'Challenges', 'Leaderboard'].map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color var(--transition-fast)'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}>
                                Community
                            </h4>
                            <div style={{
                                display: 'flex',
                                gap: '1rem'
                            }}>
                                {['💬', '📱', '🐦', '📸'].map((icon, index) => (
                                    <button
                                        key={index}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.25rem',
                                            cursor: 'pointer',
                                            transition: 'all var(--transition-fast)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'var(--primary-gradient)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'var(--bg-tertiary)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--glass-border)',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)'
                    }}>
                        <p>
                            © 2026 FitQuest. Made with 💙 for fitness enthusiasts worldwide.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--primary-gradient)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-xl), var(--glow-blue)',
                    transition: 'all var(--transition-normal)',
                    zIndex: 50
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                aria-label="Scroll to top"
            >
                ⬆️
            </button>

            {/* Responsive Styles */}
            <style>
                {`
          @media (max-width: 768px) {
            nav .nav-link-text {
              display: none;
            }
            nav > div > div > div:nth-child(2) {
              gap: 1rem !important;
            }
            nav > div > div > div:nth-child(3) > div:first-child {
              display: none;
            } 
            
            /* Adjust padding for container on mobile */
            nav .fitness-container {
                padding: 0 1rem;
            }
          }
        `}
            </style>
        </div>
    );
};

const FitnessApp = () => {
    return (
        <ThemeProvider>
            <ToastProvider>
                <FitnessAppContent />
            </ToastProvider>
        </ThemeProvider>
    );
};

export default FitnessApp;
