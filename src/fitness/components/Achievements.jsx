import React, { useState } from 'react';
import '../fitness.css';

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const achievements = [
        {
            id: 1,
            name: 'First Steps',
            description: 'Complete your first workout',
            icon: '👟',
            unlocked: true,
            rarity: 'Common'
        },
        {
            id: 2,
            name: 'Week Warrior',
            description: 'Maintain a 7-day streak',
            icon: '🔥',
            unlocked: true,
            rarity: 'Rare'
        },
        {
            id: 3,
            name: 'Cardio King',
            description: 'Complete 25 cardio workouts',
            icon: '👑',
            unlocked: true,
            rarity: 'Epic'
        },
        {
            id: 4,
            name: 'Early Bird',
            description: 'Complete 10 morning workouts',
            icon: '🌅',
            unlocked: true,
            rarity: 'Rare'
        },
        {
            id: 5,
            name: 'Strength Legend',
            description: 'Complete 50 strength workouts',
            icon: '💪',
            unlocked: true,
            rarity: 'Legendary'
        },
        {
            id: 6,
            name: 'Century Club',
            description: 'Complete 100 total workouts',
            icon: '💯',
            unlocked: true,
            rarity: 'Epic'
        },
        {
            id: 7,
            name: 'Calorie Crusher',
            description: 'Burn 10,000 calories total',
            icon: '🔥',
            unlocked: true,
            rarity: 'Rare'
        },
        {
            id: 8,
            name: 'Zen Master',
            description: 'Complete 30 yoga sessions',
            icon: '🧘',
            unlocked: true,
            rarity: 'Epic'
        },
        {
            id: 9,
            name: 'HIIT Hero',
            description: 'Complete 20 HIIT workouts',
            icon: '⚡',
            unlocked: true,
            rarity: 'Rare'
        },
        {
            id: 10,
            name: 'Consistency King',
            description: 'Maintain a 30-day streak',
            icon: '👑',
            unlocked: true,
            rarity: 'Legendary'
        },
        {
            id: 11,
            name: 'Night Owl',
            description: 'Complete 15 evening workouts',
            icon: '🦉',
            unlocked: true,
            rarity: 'Common'
        },
        {
            id: 12,
            name: 'Ultimate Champion',
            description: 'Reach level 20',
            icon: '🏆',
            unlocked: true,
            rarity: 'Legendary'
        }
    ];

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'Common': return '#94A3B8';
            case 'Rare': return '#3B82F6';
            case 'Epic': return '#8B5CF6';
            case 'Legendary': return '#F59E0B';
            default: return '#94A3B8';
        }
    };

    const handleAchievementClick = (achievement) => {
        setSelectedAchievement(achievement);
        if (achievement.unlocked) {
            alert(`🏆 ${achievement.name}\n\n${achievement.description}\n\nRarity: ${achievement.rarity}\n\nUnlocked! ✅`);
        } else {
            alert(`🔒 ${achievement.name}\n\n${achievement.description}\n\nRarity: ${achievement.rarity}\n\nKeep working to unlock this achievement!`);
        }
    };

    const unlockedCount = achievements.filter(a => a.unlocked).length;
    const totalCount = achievements.length;
    const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

    return (
        <section className="section" id="achievements" style={{ background: 'var(--bg-secondary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Unlock badges and show off your progress! 🏅
                    </p>
                </div>

                {/* Progress Summary */}
                <div className="glass-card" style={{
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    padding: 'var(--spacing-lg)',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        marginBottom: '0.5rem'
                    }}>
                        <span className="gradient-text">{unlockedCount}/{totalCount}</span>
                    </div>
                    <div style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                    }}>
                        Achievements Unlocked
                    </div>

                    <div className="progress-bar" style={{ height: '16px' }}>
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${completionPercentage}%` }}
                        />
                    </div>
                    <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.5rem'
                    }}>
                        {completionPercentage}% Complete
                    </div>
                </div>

                {/* Achievement Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    justifyContent: 'center'
                }}>
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className={`glass-card achievement-card stagger-item ${achievement.unlocked ? 'unlocked' : 'locked'} ${achievement.name === 'Strength Legend' ? 'achievement-strength' :
                                    achievement.name === 'Zen Master' ? 'achievement-zen' :
                                        achievement.name === 'Consistency King' ? 'achievement-consistency' :
                                            achievement.name === 'Night Owl' ? 'achievement-night' :
                                                achievement.name === 'Ultimate Champion' ? 'achievement-champion' : ''
                                }`}
                            style={{
                                cursor: 'pointer',
                                animationDelay: `${index * 0.05}s`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '100%',
                                minHeight: '320px'
                            }}
                            onClick={() => handleAchievementClick(achievement)}
                        >
                            {/* Rarity Indicator */}
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: getRarityColor(achievement.rarity),
                                boxShadow: `0 0 10px ${getRarityColor(achievement.rarity)}`
                            }} />

                            {/* Icon */}
                            <div className="achievement-icon" style={{
                                width: '80px',
                                height: '80px',
                                marginBottom: '1.5rem',
                                position: 'relative'
                            }}>
                                <span style={{ fontSize: '2.5rem' }}>
                                    {achievement.unlocked ? achievement.icon : '🔒'}
                                </span>

                                {achievement.unlocked && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-5px',
                                        right: '-5px',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'var(--success-green)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        border: '3px solid var(--bg-secondary)',
                                        color: 'white'
                                    }}>
                                        ✓
                                    </div>
                                )}
                            </div>

                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                                {/* Name */}
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                    color: achievement.unlocked ? 'var(--text-primary)' : 'var(--text-muted)',
                                    textAlign: 'center'
                                }}>
                                    {achievement.name}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.5,
                                    marginBottom: '1.5rem',
                                    minHeight: '3em',
                                    textAlign: 'center'
                                }}>
                                    {achievement.description}
                                </p>

                                {/* Rarity Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    background: `${getRarityColor(achievement.rarity)}20`,
                                    color: getRarityColor(achievement.rarity),
                                    border: `1px solid ${getRarityColor(achievement.rarity)}`,
                                    marginTop: 'auto'
                                }}>
                                    {achievement.rarity}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="glass-card mt-lg" style={{
                    padding: '3rem',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '4rem auto 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <h3 className="text-2xl font-bold">
                        🎯 Keep Pushing!
                    </h3>
                    <p className="text-secondary">
                        You have {totalCount - unlockedCount} more achievements to unlock.
                        Complete workouts and maintain streaks to earn them all!
                    </p>
                    <button
                        className="btn btn-primary btn-pulse"
                        onClick={() => {
                            document.getElementById('workouts')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span>💪</span>
                        Start a Workout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
