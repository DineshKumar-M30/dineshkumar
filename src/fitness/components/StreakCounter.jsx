import React, { useState, useEffect } from 'react';
import '../fitness.css';

const StreakCounter = () => {
    const [count, setCount] = useState(0);
    const currentStreak = 15;
    const longestStreak = 23;

    const last7Days = [true, true, true, true, true, true, true];
    const last14Days = [
        true, true, false, true, true, true, true,
        true, true, true, true, true, true, true
    ];

    useEffect(() => {
        // Animate counter
        let start = 0;
        const end = currentStreak;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section" id="streak" style={{ background: 'var(--bg-secondary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Streak Counter</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Don't break the chain! Keep your momentum going! 🔥
                    </p>
                </div>

                <div className="glass-card streak-container" style={{
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    {/* Flame Icon */}
                    <div className="streak-flame">
                        🔥
                    </div>

                    {/* Streak Number */}
                    <div className="streak-number">
                        {count}
                    </div>

                    {/* Label */}
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem'
                    }}>
                        Day Streak
                    </div>

                    {/* Motivational Message */}
                    <div style={{
                        padding: '1rem 2rem',
                        background: 'rgba(245, 158, 11, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        marginBottom: '2rem'
                    }}>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-primary)',
                            fontWeight: 500
                        }}>
                            {currentStreak < 7
                                ? "🎯 Keep going! You're building momentum!"
                                : currentStreak < 14
                                    ? "💪 One week down! You're on fire!"
                                    : currentStreak < 30
                                        ? "🚀 Two weeks strong! Unstoppable!"
                                        : "👑 You're a legend! Keep crushing it!"}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(15, 23, 42, 0.5)',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'var(--primary-purple)',
                                marginBottom: '0.25rem'
                            }}>
                                {longestStreak}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                Longest Streak
                            </div>
                        </div>

                        <div style={{
                            padding: '1.5rem',
                            background: 'rgba(15, 23, 42, 0.5)',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'var(--info-cyan)',
                                marginBottom: '0.25rem'
                            }}>
                                {currentStreak >= longestStreak ? '🎉' : longestStreak - currentStreak}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                {currentStreak >= longestStreak ? 'New Record!' : 'Days to Beat'}
                            </div>
                        </div>
                    </div>

                    {/* Last 7 Days */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Last 7 Days
                        </h4>
                        <div className="streak-days">
                            {last7Days.map((active, index) => (
                                <div
                                    key={index}
                                    className={`streak-day ${active ? 'active' : ''}`}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.25rem'
                                    }}
                                >
                                    {active ? '✓' : ''}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last 14 Days Calendar */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Last 14 Days
                        </h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: '0.5rem'
                        }}>
                            {last14Days.map((active, index) => (
                                <div
                                    key={index}
                                    className={`streak-day ${active ? 'active' : ''}`}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {active ? '✓' : ''}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem'
                    }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                alert('🔥 Streak saved! Come back tomorrow to keep it going!\n\nReminder set for tomorrow at 9:00 AM');
                            }}
                        >
                            <span>⏰</span>
                            Set Reminder
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                alert('📊 Streak Stats\n\nCurrent: ' + currentStreak + ' days\nLongest: ' + longestStreak + ' days\nTotal Active Days: 127\n\nYou\'re doing amazing! 💪');
                            }}
                        >
                            <span>📈</span>
                            View Stats
                        </button>
                    </div>
                </div>

                {/* Streak Rewards */}
                <div className="glass-card mt-lg" style={{
                    padding: 'var(--spacing-lg)',
                    maxWidth: '700px',
                    margin: '2rem auto 0'
                }}>
                    <h3 className="text-xl font-bold mb-md text-center">
                        🎁 Streak Rewards
                    </h3>
                    <div style={{
                        display: 'grid',
                        gap: '0.75rem'
                    }}>
                        {[
                            { days: 7, reward: 'Week Warrior Badge', unlocked: true },
                            { days: 14, reward: 'Fortnight Fighter Title', unlocked: true },
                            { days: 30, reward: 'Monthly Master Crown', unlocked: false },
                            { days: 100, reward: 'Century Champion Trophy', unlocked: false }
                        ].map((milestone, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1rem',
                                    background: milestone.unlocked
                                        ? 'rgba(16, 185, 129, 0.1)'
                                        : 'rgba(15, 23, 42, 0.5)',
                                    borderRadius: 'var(--radius-md)',
                                    border: milestone.unlocked
                                        ? '1px solid rgba(16, 185, 129, 0.2)'
                                        : '1px solid var(--glass-border)',
                                    opacity: milestone.unlocked ? 1 : 0.6
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: milestone.unlocked
                                            ? 'var(--success-green)'
                                            : 'var(--bg-tertiary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.25rem',
                                        fontWeight: 700
                                    }}>
                                        {milestone.days}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                                            {milestone.days} Day Streak
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                            {milestone.reward}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '1.5rem' }}>
                                    {milestone.unlocked ? '✅' : '🔒'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreakCounter;
