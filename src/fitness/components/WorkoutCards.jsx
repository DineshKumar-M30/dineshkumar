import React, { useState } from 'react';
import '../fitness.css';

const WorkoutCards = () => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const workouts = [
        {
            id: 1,
            name: 'Morning Cardio Blast',
            difficulty: 'Easy',
            duration: '20 min',
            calories: 180,
            xp: 50,
            icon: '🏃',
            type: 'Cardio',
            description: 'Start your day with an energizing cardio session'
        },
        {
            id: 2,
            name: 'Strength Training Pro',
            difficulty: 'Hard',
            duration: '45 min',
            calories: 320,
            xp: 150,
            icon: '💪',
            type: 'Strength',
            description: 'Build muscle and increase your power'
        },
        {
            id: 3,
            name: 'Yoga Flow',
            difficulty: 'Easy',
            duration: '30 min',
            calories: 120,
            xp: 40,
            icon: '🧘',
            type: 'Flexibility',
            description: 'Improve flexibility and find your zen'
        },
        {
            id: 4,
            name: 'HIIT Inferno',
            difficulty: 'Hard',
            duration: '25 min',
            calories: 280,
            xp: 120,
            icon: '🔥',
            type: 'HIIT',
            description: 'High-intensity interval training for maximum burn'
        },
        {
            id: 5,
            name: 'Core Crusher',
            difficulty: 'Medium',
            duration: '15 min',
            calories: 100,
            xp: 60,
            icon: '🎯',
            type: 'Core',
            description: 'Strengthen your core with targeted exercises'
        },
        {
            id: 6,
            name: 'Full Body Burn',
            difficulty: 'Medium',
            duration: '35 min',
            calories: 250,
            xp: 90,
            icon: '⚡',
            type: 'Full Body',
            description: 'Complete workout targeting all muscle groups'
        },
        {
            id: 7,
            name: 'Boxing Power Hour',
            difficulty: 'Hard',
            duration: '50 min',
            calories: 400,
            xp: 180,
            icon: '🥊',
            type: 'Boxing',
            description: 'Unleash your inner fighter with intense boxing drills'
        },
        {
            id: 8,
            name: 'Swimming Sprint',
            difficulty: 'Medium',
            duration: '40 min',
            calories: 300,
            xp: 100,
            icon: '🏊',
            type: 'Swimming',
            description: 'Low-impact cardio for full-body conditioning'
        },
        {
            id: 9,
            name: 'Cycling Adventure',
            difficulty: 'Easy',
            duration: '30 min',
            calories: 200,
            xp: 55,
            icon: '🚴',
            type: 'Cycling',
            description: 'Explore the virtual world while burning calories'
        },
        {
            id: 10,
            name: 'Dance Cardio Party',
            difficulty: 'Easy',
            duration: '25 min',
            calories: 150,
            xp: 45,
            icon: '💃',
            type: 'Dance',
            description: 'Have fun while getting fit with dance moves'
        },
        {
            id: 11,
            name: 'Pilates Precision',
            difficulty: 'Medium',
            duration: '35 min',
            calories: 140,
            xp: 70,
            icon: '🤸',
            type: 'Pilates',
            description: 'Improve posture and build lean muscle'
        },
        {
            id: 12,
            name: 'CrossFit Challenge',
            difficulty: 'Hard',
            duration: '60 min',
            calories: 450,
            xp: 200,
            icon: '🏋️',
            type: 'CrossFit',
            description: 'Ultimate test of strength, speed, and endurance'
        }
    ];

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'badge-easy';
            case 'Medium': return 'badge-medium';
            case 'Hard': return 'badge-hard';
            default: return 'badge-easy';
        }
    };

    const handleStartWorkout = (workout) => {
        setSelectedWorkout(workout);
        alert(`🎉 Starting "${workout.name}"!\n\n💪 Get ready to earn ${workout.xp} XP and burn ${workout.calories} calories!`);
    };

    return (
        <section className="section" id="workouts" style={{ background: 'var(--bg-secondary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Choose Your Workout</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Select a workout and start earning XP! 🎮
                    </p>
                </div>

                <div className="workout-grid">
                    {workouts.map((workout, index) => (
                        <div
                            key={workout.id}
                            className="glass-card glass-card-hover workout-card stagger-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Difficulty Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                zIndex: 2
                            }}>
                                <span className={`badge ${getDifficultyClass(workout.difficulty)}`}>
                                    {workout.difficulty}
                                </span>
                            </div>

                            {/* Workout Icon */}
                            <div className="workout-icon">
                                <span>{workout.icon}</span>
                            </div>

                            {/* Workout Info */}
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: 'var(--text-primary)'
                            }}>
                                {workout.name}
                            </h3>

                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                marginBottom: '1rem',
                                lineHeight: 1.5
                            }}>
                                {workout.description}
                            </p>

                            {/* Stats Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.75rem',
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                background: 'rgba(15, 23, 42, 0.5)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>⏱️</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                        {workout.duration}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>🔥</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--warning-orange)' }}>
                                        {workout.calories} cal
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>⭐</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-purple)' }}>
                                        +{workout.xp} XP
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button
                                className="btn btn-primary w-full"
                                onClick={() => handleStartWorkout(workout)}
                            >
                                <span>▶️</span>
                                Start Workout
                            </button>
                        </div>
                    ))}
                </div>

                {/* Quick Stats Summary */}
                <div className="glass-card mt-lg" style={{
                    padding: 'var(--spacing-lg)',
                    textAlign: 'center'
                }}>
                    <h3 className="text-2xl font-bold mb-md">
                        💡 Pro Tip
                    </h3>
                    <p className="text-secondary">
                        Complete harder workouts to earn more XP and level up faster!
                        Mix different workout types for balanced fitness progress.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WorkoutCards;
