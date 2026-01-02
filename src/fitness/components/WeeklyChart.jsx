import React, { useState, useEffect } from 'react';
import '../fitness.css';

const WeeklyChart = () => {
    const [animatedHeights, setAnimatedHeights] = useState([0, 0, 0, 0, 0, 0, 0]);

    const weekData = [
        { day: 'Mon', workouts: 2, calories: 420, height: 70 },
        { day: 'Tue', workouts: 1, calories: 280, height: 45 },
        { day: 'Wed', workouts: 3, calories: 650, height: 95 },
        { day: 'Thu', workouts: 2, calories: 480, height: 75 },
        { day: 'Fri', workouts: 1, calories: 320, height: 50 },
        { day: 'Sat', workouts: 4, calories: 780, height: 100 },
        { day: 'Sun', workouts: 2, calories: 410, height: 68 }
    ];

    useEffect(() => {
        // Animate bars on mount
        const timer = setTimeout(() => {
            setAnimatedHeights(weekData.map(d => d.height));
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const totalWorkouts = weekData.reduce((sum, day) => sum + day.workouts, 0);
    const totalCalories = weekData.reduce((sum, day) => sum + day.calories, 0);
    const avgCalories = Math.round(totalCalories / 7);

    return (
        <section className="section" id="weekly-chart">
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Weekly Progress</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Track your consistency and see your improvements! 📊
                    </p>
                </div>

                <div className="glass-card chart-container" style={{
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Stats Summary */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(15, 23, 42, 0.5)',
                        borderRadius: 'var(--radius-md)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💪</div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'var(--primary-blue)',
                                marginBottom: '0.25rem'
                            }}>
                                {totalWorkouts}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                Total Workouts
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔥</div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'var(--warning-orange)',
                                marginBottom: '0.25rem'
                            }}>
                                {totalCalories.toLocaleString()}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                Calories Burned
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'var(--success-green)',
                                marginBottom: '0.25rem'
                            }}>
                                {avgCalories}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                Avg per Day
                            </div>
                        </div>
                    </div>

                    {/* Chart */}
                    <div style={{ position: 'relative' }}>
                        <div className="chart-bars">
                            {weekData.map((day, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        flex: 1,
                                        position: 'relative'
                                    }}
                                >
                                    {/* Tooltip on hover */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: `${animatedHeights[index]}%`,
                                            left: '50%',
                                            transform: 'translate(-50%, -120%)',
                                            background: 'var(--bg-primary)',
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1px solid var(--glass-border)',
                                            fontSize: '0.75rem',
                                            whiteSpace: 'nowrap',
                                            opacity: 0,
                                            pointerEvents: 'none',
                                            transition: 'opacity var(--transition-fast)',
                                            zIndex: 10
                                        }}
                                        className="chart-tooltip"
                                    >
                                        <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>
                                            {day.workouts} workout{day.workouts !== 1 ? 's' : ''}
                                        </div>
                                        <div style={{ color: 'var(--warning-orange)' }}>
                                            🔥 {day.calories} cal
                                        </div>
                                    </div>

                                    <div
                                        className="chart-bar"
                                        style={{
                                            height: `${animatedHeights[index]}%`,
                                            width: '100%',
                                            maxWidth: '60px'
                                        }}
                                        onMouseEnter={(e) => {
                                            const tooltip = e.currentTarget.previousSibling;
                                            if (tooltip) tooltip.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            const tooltip = e.currentTarget.previousSibling;
                                            if (tooltip) tooltip.style.opacity = '0';
                                        }}
                                    />

                                    <div className="chart-bar-label" style={{
                                        fontWeight: 600,
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {day.day}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div style={{
                        marginTop: '3rem',
                        paddingTop: '1.5rem',
                        borderTop: '1px solid var(--glass-border)',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            marginBottom: '1rem'
                        }}>
                            Hover over bars to see detailed stats
                        </p>

                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                alert('📊 Weekly Report\n\nGreat week! You completed ' + totalWorkouts + ' workouts and burned ' + totalCalories.toLocaleString() + ' calories.\n\nKeep up the amazing work! 💪');
                            }}
                        >
                            <span>📥</span>
                            Download Report
                        </button>
                    </div>
                </div>

                {/* Insights */}
                <div className="glass-card mt-lg" style={{
                    padding: 'var(--spacing-lg)',
                    maxWidth: '900px',
                    margin: '2rem auto 0'
                }}>
                    <h3 className="text-xl font-bold mb-md">
                        💡 Weekly Insights
                    </h3>
                    <div style={{
                        display: 'grid',
                        gap: '1rem'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>🎯</span>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                                    Best Day: Saturday
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    You crushed 4 workouts and burned 780 calories!
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>📈</span>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                                    Consistency Score: 85%
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                    You worked out 7 out of 7 days this week. Amazing!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeeklyChart;
