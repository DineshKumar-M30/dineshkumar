import React, { useState, useEffect } from 'react';
import '../fitness.css';

const DailyGoalRing = () => {
    const [progress, setProgress] = useState(0);
    const targetProgress = 68; // 68% completion
    const calories = 1360;
    const calorieGoal = 2000;

    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        // Animate progress on mount
        const timer = setTimeout(() => {
            setProgress(targetProgress);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section" id="daily-goal">
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Today's Progress</span>
                    </h2>
                    <p className="text-secondary text-lg">Keep pushing! You're doing amazing 💪</p>
                </div>

                <div className="glass-card" style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: 'var(--spacing-xl)',
                    textAlign: 'center'
                }}>
                    {/* SVG Progress Ring */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <svg width="220" height="220" style={{ transform: 'rotate(-90deg)' }}>
                            {/* Background Circle */}
                            <circle
                                cx="110"
                                cy="110"
                                r={radius}
                                stroke="var(--bg-tertiary)"
                                strokeWidth="16"
                                fill="none"
                            />
                            {/* Progress Circle */}
                            <circle
                                cx="110"
                                cy="110"
                                r={radius}
                                stroke="url(#gradient)"
                                strokeWidth="16"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                strokeLinecap="round"
                                style={{
                                    transition: 'stroke-dashoffset 1s ease-in-out',
                                    filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
                                }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Center Content */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                background: 'var(--primary-gradient)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1
                            }}>
                                {progress}%
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                marginTop: '0.5rem'
                            }}>
                                Complete
                            </div>
                        </div>
                    </div>

                    {/* Stats - Enhanced Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '2rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--glass-border)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔥</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--warning-orange)' }}>
                                {calories}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Calories Burned
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Goal: {calorieGoal}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--info-cyan)' }}>
                                45 min
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Active Time
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Goal: 60 min
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👟</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success-green)' }}>
                                8,420
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Steps
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Goal: 10,000
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💧</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-blue)' }}>
                                6/8
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Water Intake
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                                Glasses
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        className="btn btn-success w-full mt-lg"
                        onClick={() => {
                            alert('🎉 Great job! Keep up the momentum!');
                        }}
                    >
                        <span>✅</span>
                        Complete Today's Goal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DailyGoalRing;
