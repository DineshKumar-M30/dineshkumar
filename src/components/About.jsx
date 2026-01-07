import React from 'react';
import car1 from '../assets/8.png'; // Using Lincoln for the BW stats image
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">

                {/* Who We Are Row */}
                <div className="who-we-are-row">
                    <div className="who-col-left">
                        <h2 className="big-title">Who <br />are we?</h2>
                        <button className="btn btn-dark">Read reviews</button>
                    </div>
                    <div className="who-col-right">
                        <h3 className="sub-header">1956 Chevrolet Chevelle SS - STK 2601</h3>
                        <p>
                            The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped
                            Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon.
                            In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing
                            numerous styling upgrades and an unwavering focus on performance.
                        </p>
                        <p>
                            This '138' code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging
                            as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior,
                            complemented by a meticulous restoration of the interior in original red vinyl.
                        </p>
                        <p>
                            Under the hood, the original 396ci 'Rat' powerplant gave way to a robust 427ci big-block. This
                            powerhouse, meitculously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a
                            street-savvy cam.
                        </p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="stats-container">
                    <div className="circle-stat stat-1">
                        <span className="stat-num">32</span>
                        <span className="stat-desc">Retro car</span>
                    </div>
                    <div className="circle-stat stat-2">
                        <span className="stat-num">400</span>
                        <span className="stat-desc">Satisfied clients</span>
                    </div>
                    <div className="circle-stat stat-3">
                        <span className="stat-num">5</span>
                        <span className="stat-desc">Years <br /> Delight our clients</span>
                    </div>

                    <div className="stats-car-wrapper">
                        <img src={car1} alt="Retro Car Stats" className="stats-car-img" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
