import React, { useState } from 'react';
import car1 from '../assets/car_1.png';
import car2 from '../assets/car_2.png';
import car3 from '../assets/car_3.png';
import car4 from '../assets/car_4.png';
import car5 from '../assets/car_5.png';
import './Gallery.css';

const cars = [
    {
        id: 1,
        name: '1965 Lincoln Continental',
        image: car1,
        year: '1965',
        price: '$85,000',
        description: "The epitome of 60s luxury, this Continental features the iconic suicide doors and a silky smooth V8 engine. Fully restored interior with original leather.",
        specs: {
            engine: "7.0L MEL V8",
            transmission: "3-Speed Turbo-Drive Automatic",
            mileage: "45,200",
            color: "Raven Black"
        }
    },
    {
        id: 2,
        name: '1971 Datsun 240Z',
        image: car2,
        year: '1971',
        price: '$55,000',
        description: "A Japanese classic that redefined the sports car market. Lightweight, agile, and finished in a stunning Sunset Orange. Perfect for the canyon roads.",
        specs: {
            engine: "2.4L L24 Inline-6",
            transmission: "4-Speed Manual",
            mileage: "88,000",
            color: "Sunset Orange"
        }
    },
    {
        id: 3,
        name: '1957 Chevy Bel Air',
        image: car3,
        year: '1957',
        price: '$95,000',
        description: "The quintessential 50s icon. This convertible Bel Air attracts attention wherever it goes with its dramatic tail fins and chrome accents.",
        specs: {
            engine: "4.6L Super Turbo-Fire V8",
            transmission: "2-Speed Powerglide",
            mileage: "12,500 (Since Resto)",
            color: "Matador Red"
        }
    },
    {
        id: 4,
        name: '1961 Jaguar E-Type',
        image: car4,
        year: '1961',
        price: '$160,000',
        description: "Enzo Ferrari called it 'the most beautiful car ever made'. This Series 1 E-Type Roadster in British Racing Green is a masterpiece of design and engineering.",
        specs: {
            engine: "3.8L XK Inline-6",
            transmission: "4-Speed Manual",
            mileage: "32,000",
            color: "British Racing Green"
        }
    },
    {
        id: 5,
        name: '1967 Mustang Shelby GT500',
        image: car5,
        year: '1967',
        price: '$210,000',
        description: "Pure American muscle. The GT500 is a legend of the road, featuring a roaring V8 and aggressive styling that commands authority.",
        specs: {
            engine: "428 Police Interceptor V8",
            transmission: "4-Speed Manual",
            mileage: "15,000",
            color: "Midnight Blue"
        }
    },
];

const Gallery = () => {
    const [selectedCar, setSelectedCar] = useState(null);

    const openModal = (car) => {
        setSelectedCar(car);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedCar(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-title">Our Collection</h2>
                <div className="car-grid">
                    {cars.map((car) => (
                        <div key={car.id} className="car-card">
                            <div className="card-image-wrapper">
                                <img src={car.image} alt={car.name} className="card-image" />
                            </div>
                            <div className="card-content">
                                <h3 className="car-name">{car.name}</h3>
                                <div className="car-details">
                                    <span className="car-year">{car.year}</span>
                                    <span className="car-price">{car.price}</span>
                                </div>
                                <button className="btn btn-outline" onClick={() => openModal(car)}>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCar && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            <div className="modal-image-col">
                                <img src={selectedCar.image} alt={selectedCar.name} className="modal-image" />
                            </div>
                            <div className="modal-info-col">
                                <h3 className="modal-title">{selectedCar.name}</h3>
                                <p className="modal-price">{selectedCar.price}</p>
                                <p className="modal-description">{selectedCar.description}</p>

                                <div className="modal-specs">
                                    <h4>Specifications</h4>
                                    <ul>
                                        <li><strong>Engine:</strong> {selectedCar.specs.engine}</li>
                                        <li><strong>Transmission:</strong> {selectedCar.specs.transmission}</li>
                                        <li><strong>Mileage:</strong> {selectedCar.specs.mileage}</li>
                                        <li><strong>Color:</strong> {selectedCar.specs.color}</li>
                                    </ul>
                                </div>

                                <button className="btn" style={{ marginTop: '20px', width: '100%' }}>
                                    Inquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
