import React, { useState, useEffect } from 'react';
import '../fitness.css';

const XPProgress = () => {
    const [currentXP, setCurrentXP] = useState(0);
    const level = 12;
    const xp = 2450;
    const xpForNextLevel = 3000;
    const xpProgress = (xp / xpForNextLevel) * 100;

    useEffect(() => {
        // Animate XP bar on mount
        const timer = setTimeout(() => {
            setCurrentXP(xpProgress);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const milestones = [
        { level: 5, reward: '🎯 Core Crusher Unlocked', achieved: true },
        { level: 10, reward: '💪 Strength Master Badge', achieved: true },
        { level: 15, reward: '🔥 HIIT Legend Title', achieved: false },
        { level: 20, reward: '👑 Fitness King Crown', achieved: false }
    ];

    return (
        <section className="section" id="xp-progress">
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Level & XP Progress</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Keep grinding to unlock exclusive rewards! 🎮
                    </p>
                </div>

                {/* Main XP Card */}
                <div className="glass-card" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: 'var(--spacing-xl)'
                }}>
                    {/* Level Display */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'var(--primary-gradient)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: 800,
                                boxShadow: 'var(--glow-blue)',
                                animation: 'pulse 2s infinite'
                            }}>
                                {level}
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-muted)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '0.25rem'
                                }}>
                                    Current Level
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                    Fitness Warrior
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                marginBottom: '0.25rem'
                            }}>
                                Next Level
                            </div>
                            <div style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--primary-blue)'
                            }}>
                                {xpForNextLevel - xp} XP needed
                            </div>
                        </div>
                    </div>

                    {/* XP Progress Bar */}
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '0.5rem'
                        }}>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {xp.toLocaleString()} XP
                            </span>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {xpForNextLevel.toLocaleString()} XP
                            </span>
                        </div>

                        <div className="progress-bar" style={{ height: '20px' }}>
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${currentXP}%` }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    zIndex: 1
                                }}>
                                    {Math.round(xpProgress)}%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        marginTop: '2rem'
                    }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => alert('🎉 +50 XP earned from completing a workout!')}
                        >
                            <span>⚡</span>
                            Earn Quick XP
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span>🏆</span>
                            View Rewards
                        </button>
                    </div>
                </div>

                {/* Milestones */}
                <div style={{
                    maxWidth: '800px',
                    margin: '2rem auto 0',
                }}>
                    <h3 className="text-2xl font-bold mb-md text-center">
                        🎯 Level Milestones
                    </h3>

                    <div style={{
                        display: 'grid',
                        gap: '1rem'
                    }}>
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="glass-card stagger-item"
                                style={{
                                    padding: 'var(--spacing-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    opacity: milestone.achieved ? 1 : 0.6,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: milestone.achieved
                                            ? 'var(--primary-gradient)'
                                            : 'var(--bg-tertiary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.25rem',
                                        fontWeight: 700
                                    }}>
                                        {milestone.level}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                                            Level {milestone.level}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                            {milestone.reward}
                                        </div>
                                    </div>
                                </div>

                                {milestone.achieved ? (
                                    <div style={{
                                        fontSize: '1.5rem',
                                        animation: 'bounce 2s infinite'
                                    }}>
                                        ✅
                                    </div>
                                ) : (
                                    <div style={{ fontSize: '1.5rem', opacity: 0.3 }}>
                                        🔒
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default XPProgress;
