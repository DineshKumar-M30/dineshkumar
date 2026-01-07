import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container foo-container">

                <div className="foo-col logo-col">
                    <h3 className="foo-logo">Cars Classic Autotrader</h3>
                    <a href="#" className="privacy-link">Privacy Policies</a>
                    <p className="copyright">&copy; Cars Classic Autotrader 2024</p>
                </div>

                <div className="foo-col links-col">
                    <div className="link-group">
                        <a href="#">Cars</a>
                        <a href="#">About Us</a>
                        <a href="#">About Us</a>
                    </div>
                    <div className="link-group">
                        <a href="#">How to rent</a>
                        <a href="#">Contacts</a>
                    </div>
                </div>

                <div className="foo-col contact-col">
                    <h3 className="phone-number">+1 (701) 581-1331</h3>
                    <p className="address">161 Trumpeter Ave, Soldotna, Alaska</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
