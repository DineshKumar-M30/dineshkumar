import React, { useState } from 'react';
import '../fitness.css';

const NutritionTips = () => {
    const [waterIntake, setWaterIntake] = useState(6);
    const dailyWaterGoal = 8; // glasses

    const nutritionTips = [
        {
            icon: '🥗',
            title: 'Balanced Diet',
            description: 'Include proteins, carbs, and healthy fats in every meal',
            color: '#10B981'
        },
        {
            icon: '💧',
            title: 'Stay Hydrated',
            description: 'Drink at least 8 glasses of water daily for optimal performance',
            color: '#06B6D4'
        },
        {
            icon: '🍎',
            title: 'Eat the Rainbow',
            description: 'Consume colorful fruits and vegetables for diverse nutrients',
            color: '#F59E0B'
        },
        {
            icon: '⏰',
            title: 'Meal Timing',
            description: 'Eat within 2 hours after workout for best recovery',
            color: '#8B5CF6'
        },
        {
            icon: '🥜',
            title: 'Protein Power',
            description: 'Aim for 0.8g of protein per kg of body weight',
            color: '#EF4444'
        },
        {
            icon: '🚫',
            title: 'Avoid Processed',
            description: 'Limit processed foods and added sugars',
            color: '#F97316'
        }
    ];

    const mealPlan = [
        {
            meal: 'Breakfast',
            time: '7:00 AM',
            icon: '🌅',
            items: ['Oatmeal with berries', 'Scrambled eggs', 'Green tea'],
            calories: 450,
            protein: '25g'
        },
        {
            meal: 'Mid-Morning Snack',
            time: '10:00 AM',
            icon: '🍎',
            items: ['Greek yogurt', 'Almonds', 'Banana'],
            calories: 250,
            protein: '15g'
        },
        {
            meal: 'Lunch',
            time: '1:00 PM',
            icon: '☀️',
            items: ['Grilled chicken breast', 'Quinoa', 'Mixed vegetables'],
            calories: 550,
            protein: '40g'
        },
        {
            meal: 'Pre-Workout',
            time: '4:30 PM',
            icon: '💪',
            items: ['Protein shake', 'Rice cakes', 'Peanut butter'],
            calories: 300,
            protein: '20g'
        },
        {
            meal: 'Dinner',
            time: '7:30 PM',
            icon: '🌙',
            items: ['Salmon fillet', 'Sweet potato', 'Broccoli'],
            calories: 600,
            protein: '45g'
        }
    ];

    const incrementWater = () => {
        if (waterIntake < dailyWaterGoal) {
            setWaterIntake(waterIntake + 1);
        }
    };

    return (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Nutrition Guide</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Fuel your body right for optimal performance! 🥗
                    </p>
                </div>

                {/* Nutrition Tips Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '3rem'
                }}>
                    {nutritionTips.map((tip, index) => (
                        <div
                            key={index}
                            className="glass-card glass-card-hover stagger-item"
                            style={{
                                padding: '1.5rem',
                                textAlign: 'center',
                                animationDelay: `${index * 0.1}s`,
                                borderTop: `4px solid ${tip.color}`,
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                                filter: `drop-shadow(0 0 10px ${tip.color}80)`
                            }}>
                                {tip.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--text-primary)'
                            }}>
                                {tip.title}
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.6
                            }}>
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Water Intake Tracker */}
                <div className="glass-card mb-lg" style={{ padding: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-sm">
                            💧 Daily Water Tracker
                        </h3>
                        <p className="text-secondary">
                            Stay hydrated to boost your performance and recovery
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        {[...Array(dailyWaterGoal)].map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    fontSize: '3rem',
                                    opacity: index < waterIntake ? 1 : 0.3,
                                    filter: index < waterIntake ? 'drop-shadow(0 0 10px #06B6D4)' : 'none',
                                    transition: 'all var(--transition-normal)',
                                    cursor: 'pointer'
                                }}
                                onClick={incrementWater}
                            >
                                💧
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            marginBottom: '0.5rem',
                            color: 'var(--info-cyan)'
                        }}>
                            {waterIntake} / {dailyWaterGoal} glasses
                        </div>
                        {waterIntake >= dailyWaterGoal ? (
                            <div style={{ color: 'var(--success-green)', fontWeight: 600 }}>
                                ✅ Goal Achieved! Great job staying hydrated!
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary mt-sm"
                                onClick={incrementWater}
                            >
                                Add Glass 💧
                            </button>
                        )}
                    </div>
                </div>

                {/* Sample Meal Plan */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h3 className="text-2xl font-bold mb-sm">
                            🍽️ Sample Daily Meal Plan
                        </h3>
                        <p className="text-secondary">
                            A balanced nutrition plan for active individuals
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gap: '1rem'
                    }}>
                        {mealPlan.map((meal, index) => (
                            <div
                                key={index}
                                className="stagger-item"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.25rem',
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--glass-border)',
                                    animationDelay: `${index * 0.1}s`,
                                    gap: '1rem',
                                    flexWrap: 'wrap',
                                    transition: 'all var(--transition-fast)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1', minWidth: '200px' }}>
                                    <div style={{ fontSize: '2.5rem' }}>{meal.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                                            {meal.meal}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                            {meal.time}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ flex: '2', minWidth: '200px' }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '0.5rem',
                                        flexWrap: 'wrap',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {meal.items.map((item, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    fontSize: '0.75rem',
                                                    padding: '0.25rem 0.75rem',
                                                    background: 'var(--bg-tertiary)',
                                                    borderRadius: 'var(--radius-full)',
                                                    color: 'var(--text-secondary)'
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                            Calories
                                        </div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--warning-orange)' }}>
                                            {meal.calories}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                            Protein
                                        </div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--success-green)' }}>
                                            {meal.protein}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Daily Totals */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        background: 'var(--primary-gradient)',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                            Daily Totals
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: '0.875rem', opacity: 0.9, color: 'white' }}>Total Calories</div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>2,150</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.875rem', opacity: 0.9, color: 'white' }}>Total Protein</div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>145g</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionTips;
