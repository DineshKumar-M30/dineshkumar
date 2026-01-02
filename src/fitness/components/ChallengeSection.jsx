import React, { useState, useEffect } from 'react';
import '../fitness.css';

const ChallengeSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 14,
        minutes: 32,
        seconds: 45
    });

    const [isJoined, setIsJoined] = useState(false);

    useEffect(() => {
        // Countdown timer
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleJoinChallenge = () => {
        setIsJoined(true);
        alert('🎉 Welcome to the 30-Day Fitness Challenge!\n\n✅ You\'re now registered!\n\n📧 Check your email for challenge details and daily workout plans.\n\n💪 Let\'s crush this together!');
    };

    const challenges = [
        {
            id: 1,
            name: '30-Day Fitness Challenge',
            description: 'Complete 30 workouts in 30 days and transform your body',
            duration: '30 Days',
            participants: '2,847',
            rewards: ['🏆 Exclusive Badge', '⭐ 5000 XP', '👕 Challenge T-Shirt'],
            difficulty: 'Medium',
            startDate: 'Jan 10, 2026',
            featured: true
        },
        {
            id: 2,
            name: 'Cardio Blast Week',
            description: 'Burn 3000 calories in 7 days with intense cardio sessions',
            duration: '7 Days',
            participants: '1,523',
            rewards: ['🔥 Cardio King Badge', '⭐ 1500 XP'],
            difficulty: 'Hard',
            startDate: 'Jan 15, 2026',
            featured: false
        },
        {
            id: 3,
            name: 'Strength Builder',
            description: 'Complete 20 strength training sessions this month',
            duration: '30 Days',
            participants: '892',
            rewards: ['💪 Strength Master Title', '⭐ 3000 XP'],
            difficulty: 'Medium',
            startDate: 'Jan 1, 2026',
            featured: false
        }
    ];

    return (
        <section className="section" id="challenges">
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Join a Challenge</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Push your limits and compete with thousands of fitness enthusiasts! 🚀
                    </p>
                </div>

                {/* Featured Challenge */}
                <div
                    className="glass-card"
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto 3rem',
                        padding: '0',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                        border: '2px solid rgba(59, 130, 246, 0.3)'
                    }}
                >
                    {/* Featured Badge */}
                    <div style={{
                        background: 'var(--primary-gradient)',
                        padding: '0.5rem 1.5rem',
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        ⭐ Featured Challenge
                    </div>

                    <div style={{ padding: 'var(--spacing-xl)' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            gap: '2rem',
                            alignItems: 'start'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    marginBottom: '1rem',
                                    background: 'var(--primary-gradient)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    {challenges[0].name}
                                </h3>

                                <p style={{
                                    fontSize: '1.125rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '2rem',
                                    lineHeight: 1.6
                                }}>
                                    {challenges[0].description}
                                </p>

                                {/* Challenge Stats */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '1rem',
                                    marginBottom: '2rem'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                            Duration
                                        </div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                                            ⏱️ {challenges[0].duration}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                            Participants
                                        </div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                                            👥 {challenges[0].participants}
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                            Difficulty
                                        </div>
                                        <div>
                                            <span className="badge badge-medium">
                                                {challenges[0].difficulty}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rewards */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--text-muted)',
                                        marginBottom: '0.75rem',
                                        fontWeight: 600
                                    }}>
                                        🎁 Rewards
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {challenges[0].rewards.map((reward, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(59, 130, 246, 0.1)',
                                                    border: '1px solid rgba(59, 130, 246, 0.3)',
                                                    borderRadius: 'var(--radius-full)',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                }}
                                            >
                                                {reward}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                {!isJoined ? (
                                    <button
                                        className="btn btn-primary btn-shimmer"
                                        style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}
                                        onClick={handleJoinChallenge}
                                    >
                                        <span>🚀</span>
                                        Join Challenge Now
                                    </button>
                                ) : (
                                    <div style={{
                                        padding: '1rem 2rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        border: '2px solid rgba(16, 185, 129, 0.3)',
                                        borderRadius: 'var(--radius-full)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        color: 'var(--success-green)'
                                    }}>
                                        <span>✅</span>
                                        You're In!
                                    </div>
                                )}
                            </div>

                            {/* Countdown Timer */}
                            <div style={{
                                background: 'rgba(15, 23, 42, 0.8)',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--glass-border)',
                                minWidth: '200px'
                            }}>
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '1rem',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Starts In
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '0.75rem'
                                }}>
                                    {[
                                        { label: 'Days', value: timeLeft.days },
                                        { label: 'Hours', value: timeLeft.hours },
                                        { label: 'Mins', value: timeLeft.minutes },
                                        { label: 'Secs', value: timeLeft.seconds }
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                textAlign: 'center',
                                                padding: '0.75rem',
                                                background: 'var(--primary-gradient)',
                                                borderRadius: 'var(--radius-md)'
                                            }}
                                        >
                                            <div style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 800,
                                                lineHeight: 1,
                                                marginBottom: '0.25rem'
                                            }}>
                                                {String(item.value).padStart(2, '0')}
                                            </div>
                                            <div style={{
                                                fontSize: '0.625rem',
                                                textTransform: 'uppercase',
                                                opacity: 0.9
                                            }}>
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Challenges */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {challenges.slice(1).map((challenge, index) => (
                        <div
                            key={challenge.id}
                            className="glass-card glass-card-hover stagger-item"
                            style={{
                                padding: 'var(--spacing-lg)',
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                marginBottom: '1rem'
                            }}>
                                <h4 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem'
                                }}>
                                    {challenge.name}
                                </h4>
                                <span className={`badge ${challenge.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'}`}>
                                    {challenge.difficulty}
                                </span>
                            </div>

                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.5
                            }}>
                                {challenge.description}
                            </p>

                            <div style={{
                                display: 'flex',
                                gap: '1.5rem',
                                marginBottom: '1.5rem',
                                paddingBottom: '1.5rem',
                                borderBottom: '1px solid var(--glass-border)'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                        Duration
                                    </div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                                        {challenge.duration}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                        Participants
                                    </div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                                        {challenge.participants}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                    Rewards
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    {challenge.rewards.map((reward, i) => (
                                        <div key={i} style={{ fontSize: '0.875rem' }}>
                                            {reward}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="btn btn-secondary w-full"
                                onClick={() => {
                                    alert(`🎯 Joining "${challenge.name}"!\n\nChallenge starts on ${challenge.startDate}.\n\nGet ready to earn amazing rewards! 💪`);
                                }}
                            >
                                <span>📝</span>
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="glass-card mt-lg" style={{
                    padding: 'var(--spacing-xl)',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '3rem auto 0'
                }}>
                    <h3 className="text-2xl font-bold mb-md">
                        💡 Why Join Challenges?
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {[
                            { icon: '🏆', title: 'Earn Rewards', desc: 'Exclusive badges and XP' },
                            { icon: '👥', title: 'Community', desc: 'Connect with others' },
                            { icon: '📈', title: 'Track Progress', desc: 'See your improvement' },
                            { icon: '🎯', title: 'Stay Motivated', desc: 'Achieve your goals' }
                        ].map((item, index) => (
                            <div key={index}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
