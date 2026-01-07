import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Auto-open modal logic for demo purposes, or purely button driven.
    // Reference implies a "Connect with us" form likely triggered by action or always present in a specific view.
    // The prompt asks for "Contact Section (Map + Form Modal)". Let's make the form a modal triggered by a button or always visible over map?
    // Reference 2 shows map is background and modal is overlay.
    // Let's make an overlay that can be closed.

    return (
        <section id="contacts" className="contact-section">
            <div className="contact-header container">
                <h2 className="contact-title">Contacts</h2>

                <div className="contact-info-block">
                    <h3>+1 (701) 581-1331</h3>
                    <p>161 Trumpeter Ave, Soldotna, Alaska</p>
                </div>

                <button className="btn btn-dark contact-btn" onClick={() => setIsModalOpen(true)}>Submit your application</button>
            </div>

            <div className="map-container">
                {/* Placeholder Map Background - using CSS pattern or solid color if image fails */}
                <div className="map-background"></div>

                {isModalOpen && (
                    <div className="connect-modal">
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
                        <div className="modal-header">
                            <h2>Connect <br /> with us</h2>
                        </div>
                        <form className="connect-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" placeholder="Surname" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group phone-group">
                                    <label>Phone</label>
                                    <div className="phone-input">
                                        <span className="flag">🇺🇸 +1</span>
                                        <input type="tel" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Comment</label>
                                <input type="text" className="comment-input" />
                            </div>

                            <div className="form-footer">
                                <button type="submit" className="btn btn-dark">Contact me</button>
                                <div className="privacy-check">
                                    <input type="checkbox" id="privacy" />
                                    <label htmlFor="privacy">I agree with the privacy policy</label>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
