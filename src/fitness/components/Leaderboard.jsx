import React from 'react';
import '../fitness.css';

const Leaderboard = () => {
    const topUsers = [
        { rank: 1, name: 'Sarah Champion', xp: 12450, level: 24, avatar: '👑', streak: 45, badge: 'Legendary' },
        { rank: 2, name: 'Mike Thunder', xp: 11200, level: 22, avatar: '⚡', streak: 38, badge: 'Elite' },
        { rank: 3, name: 'Emma Swift', xp: 10800, level: 21, avatar: '🌟', streak: 42, badge: 'Elite' },
        { rank: 4, name: 'You', xp: 8450, level: 16, avatar: '👤', streak: 15, badge: 'Pro', isCurrentUser: true },
        { rank: 5, name: 'Alex Storm', xp: 7950, level: 15, avatar: '🔥', streak: 28, badge: 'Pro' },
        { rank: 6, name: 'Luna Fitness', xp: 7320, level: 14, avatar: '🌙', streak: 21, badge: 'Advanced' },
        { rank: 7, name: 'Max Power', xp: 6890, level: 13, avatar: '💥', streak: 19, badge: 'Advanced' },
        { rank: 8, name: 'Zoe Energy', xp: 6420, level: 13, avatar: '⚡', streak: 16, badge: 'Advanced' }
    ];

    const getRankColor = (rank) => {
        switch (rank) {
            case 1: return '#FFD700'; // Gold
            case 2: return '#C0C0C0'; // Silver
            case 3: return '#CD7F32'; // Bronze
            default: return 'var(--primary-blue)';
        }
    };

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return '🥇';
            case 2: return '🥈';
            case 3: return '🥉';
            default: return `#${rank}`;
        }
    };

    return (
        <section className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Global Leaderboard</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Compete with fitness enthusiasts worldwide! 🌍
                    </p>
                </div>

                {/* Podium for Top 3 */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {/* Second Place */}
                    <div className="glass-card animate-fadeInUp" style={{
                        padding: '2rem 1.5rem',
                        textAlign: 'center',
                        minWidth: '200px',
                        animationDelay: '0.1s',
                        opacity: 0,
                        position: 'relative',
                        borderTop: `4px solid ${getRankColor(2)}`
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{topUsers[1].avatar}</div>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🥈</div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {topUsers[1].name}
                        </h3>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: getRankColor(2),
                            marginBottom: '0.5rem'
                        }}>
                            {topUsers[1].xp.toLocaleString()} XP
                        </div>
                        <div className="badge badge-level" style={{ fontSize: '0.75rem' }}>
                            Level {topUsers[1].level}
                        </div>
                    </div>

                    {/* First Place - Tallest */}
                    <div className="glass-card animate-fadeInUp" style={{
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        minWidth: '220px',
                        animationDelay: '0s',
                        opacity: 0,
                        position: 'relative',
                        borderTop: `4px solid ${getRankColor(1)}`,
                        boxShadow: `var(--shadow-xl), 0 0 30px ${getRankColor(1)}80`
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-10px',
                            fontSize: '2rem',
                            animation: 'bounce 2s infinite'
                        }}>👑</div>
                        <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{topUsers[0].avatar}</div>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🥇</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                            {topUsers[0].name}
                        </h3>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: 900,
                            background: 'var(--primary-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '0.5rem'
                        }}>
                            {topUsers[0].xp.toLocaleString()} XP
                        </div>
                        <div className="badge badge-level">
                            Level {topUsers[0].level}
                        </div>
                    </div>

                    {/* Third Place */}
                    <div className="glass-card animate-fadeInUp" style={{
                        padding: '2rem 1.5rem',
                        textAlign: 'center',
                        minWidth: '200px',
                        animationDelay: '0.2s',
                        opacity: 0,
                        position: 'relative',
                        borderTop: `4px solid ${getRankColor(3)}`
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{topUsers[2].avatar}</div>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🥉</div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {topUsers[2].name}
                        </h3>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: getRankColor(3),
                            marginBottom: '0.5rem'
                        }}>
                            {topUsers[2].xp.toLocaleString()} XP
                        </div>
                        <div className="badge badge-level" style={{ fontSize: '0.75rem' }}>
                            Level {topUsers[2].level}
                        </div>
                    </div>
                </div>

                {/* Full Leaderboard */}
                <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                    {topUsers.map((user, index) => (
                        <div
                            key={user.rank}
                            className="stagger-item"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1.25rem 1.5rem',
                                borderBottom: index < topUsers.length - 1 ? '1px solid var(--glass-border)' : 'none',
                                background: user.isCurrentUser ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                transition: 'all var(--transition-fast)',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.05}s`,
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = user.isCurrentUser
                                    ? 'rgba(59, 130, 246, 0.2)'
                                    : 'rgba(30, 41, 59, 0.5)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = user.isCurrentUser
                                    ? 'rgba(59, 130, 246, 0.1)'
                                    : 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            {/* Rank & Avatar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '200px' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    minWidth: '50px',
                                    textAlign: 'center',
                                    color: getRankColor(user.rank)
                                }}>
                                    {getRankIcon(user.rank)}
                                </div>
                                <div style={{ fontSize: '2rem' }}>{user.avatar}</div>
                                <div>
                                    <div style={{
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        color: user.isCurrentUser ? 'var(--primary-blue)' : 'var(--text-primary)'
                                    }}>
                                        {user.name}
                                        {user.isCurrentUser && <span style={{ marginLeft: '0.5rem' }}>⭐</span>}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                        Level {user.level} • {user.badge}
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div style={{
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                        Total XP
                                    </div>
                                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--primary-purple)' }}>
                                        {user.xp.toLocaleString()}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                                        Streak
                                    </div>
                                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--warning-orange)' }}>
                                        🔥 {user.streak}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Motivation Card */}
                <div className="glass-card mt-lg" style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                        💪 Keep Climbing!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        You're just <strong style={{ color: 'var(--primary-blue)' }}>3,530 XP</strong> away from reaching the top 3!
                        Complete workouts daily to climb the ranks.
                    </p>
                    <button className="btn btn-primary">
                        Start Workout Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;
