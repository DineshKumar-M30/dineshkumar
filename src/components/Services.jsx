import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <h2 className="services-title">Services</h2>
                    <button className="btn btn-dark">Submit your application</button>
                </div>

                <div className="services-grid">
                    <div className="service-card shipping-card">
                        <div className="card-overlay">
                            <h3 className="service-title">01 / SHIPPING</h3>
                        </div>
                    </div>
                    <div className="service-card warranty-card">
                        <div className="card-overlay">
                            <h3 className="service-title">02 / WARRANTY PURCHASE</h3>
                        </div>
                    </div>
                    <div className="service-card financing-card">
                        <div className="card-overlay">
                            <h3 className="service-title">03 / FINANCING</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
