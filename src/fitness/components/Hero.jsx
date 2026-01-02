import React, { useState } from 'react';
import '../fitness.css';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="section" style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Particles */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                pointerEvents: 'none'
            }}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: Math.random() * 100 + 50 + 'px',
                            height: Math.random() * 100 + 50 + 'px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            filter: 'blur(40px)',
                            animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(20px, -20px); }
            50% { transform: translate(-20px, 20px); }
            75% { transform: translate(20px, 20px); }
          }
        `}
            </style>

            <div className="fitness-container" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                padding: '6rem 1rem'
            }}>
                <div className="animate-fadeInUp">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        <span className="gradient-text">Level Up</span>
                        <br />
                        Your Fitness Journey
                    </h1>
                </div>

                <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
                    <p style={{
                        fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6
                    }}>
                        Track your workouts, earn XP, unlock achievements, and build unstoppable streaks.
                        Transform fitness into an epic adventure! 🚀
                    </p>
                </div>

                <div className="animate-fadeInUp" style={{
                    animationDelay: '0.4s',
                    opacity: 0,
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <button
                        className="btn btn-primary btn-shimmer btn-pulse"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            document.getElementById('workouts')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span>🎯</span>
                        Start Your Journey
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span>🏆</span>
                        View Achievements
                    </button>
                </div>

                {/* Stats Preview */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '4rem',
                    maxWidth: '900px',
                    margin: '4rem auto 0'
                }}>
                    {[
                        { icon: '💪', label: 'Workouts', value: '127', color: '#3B82F6' },
                        { icon: '🔥', label: 'Day Streak', value: '15', color: '#F59E0B' },
                        { icon: '⭐', label: 'Total XP', value: '8,450', color: '#8B5CF6' },
                        { icon: '🏅', label: 'Achievements', value: '12/20', color: '#10B981' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="glass-card stagger-item"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'center',
                                animationDelay: `${0.6 + index * 0.1}s`
                            }}
                        >
                            <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>{stat.icon}</div>
                            <div style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 700,
                                color: stat.color,
                                marginBottom: '0.25rem'
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
