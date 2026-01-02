import React, { useState } from 'react';
import '../fitness.css';

const GymGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
            title: 'Cardio Training',
            description: 'High-energy cardio workouts to boost your endurance',
            category: 'Cardio'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
            title: 'Strength Training',
            description: 'Build muscle and increase power with weights',
            category: 'Strength'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
            title: 'Yoga & Flexibility',
            description: 'Find your zen with calming yoga sessions',
            category: 'Flexibility'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
            title: 'HIIT Workouts',
            description: 'Intense interval training for maximum results',
            category: 'HIIT'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
            title: 'Boxing Fitness',
            description: 'Channel your energy with boxing training',
            category: 'Boxing'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
            title: 'Group Classes',
            description: 'Join our community fitness sessions',
            category: 'Group'
        }
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="fitness-container">
                <div className="text-center mb-lg">
                    <h2 className="text-4xl font-bold mb-sm">
                        <span className="gradient-text">Our Training Facilities</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        Experience world-class fitness environments 🏋️‍♂️
                    </p>
                </div>

                {/* Gallery Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    justifyContent: 'center'
                }}>
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="glass-card stagger-item"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.1}s`,
                                transition: 'all var(--transition-normal)'
                            }}
                            onClick={() => setSelectedImage(image)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-xl), var(--glow-blue)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                            }}
                        >
                            {/* Image Container */}
                            <div style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: '250px'
                            }}>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform var(--transition-slow)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                                {/* Category Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    padding: '0.5rem 1rem',
                                    background: 'var(--primary-gradient)',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    boxShadow: 'var(--shadow-lg)'
                                }}>
                                    {image.category}
                                </div>
                            </div>

                            {/* Image Info */}
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {image.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6
                                }}>
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(15, 23, 42, 0.95)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            animation: 'fadeIn 0.3s ease-out'
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div style={{
                            maxWidth: '1200px',
                            maxHeight: '90vh',
                            position: 'relative'
                        }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-xl), var(--glow-blue)'
                                }}
                            />
                            <div style={{
                                marginTop: '1rem',
                                textAlign: 'center',
                                color: 'var(--text-primary)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                    {selectedImage.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {selectedImage.description}
                                </p>
                            </div>
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-1rem',
                                    right: '-1rem',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--primary-gradient)',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-xl)',
                                    transition: 'all var(--transition-fast)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="glass-card mt-lg" style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                        🎯 Ready to Transform Your Fitness Journey?
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
                        Join thousands of members who have achieved their fitness goals in our world-class facilities.
                        Start your transformation today!
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary btn-shimmer">
                            <span>🚀</span>
                            Start Free Trial
                        </button>
                        <button className="btn btn-secondary">
                            <span>📅</span>
                            Schedule a Tour
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GymGallery;
