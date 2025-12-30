import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Check, CreditCard } from 'lucide-react';
import ReactConfetti from 'react-confetti';

const BookingModal = ({ trip, isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Details, 2: Success
    const [travelers, setTravelers] = useState(1);
    const [seatClass, setSeatClass] = useState('economy'); // economy, business, first
    const [bookingId, setBookingId] = useState('');

    // Count up animation state
    const [displayPrice, setDisplayPrice] = useState(0);

    const getPriceMultiplier = () => {
        if (seatClass === 'business') return 1.5;
        if (seatClass === 'first') return 2.5;
        return 1;
    };

    const basePrice = trip ? trip.price * travelers * getPriceMultiplier() : 0;
    const taxes = 45 * travelers;
    const finalPrice = Math.floor(basePrice + taxes);

    useEffect(() => {
        if (trip) {
            let start = 0;
            const end = finalPrice;
            const duration = 1000;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);

                setDisplayPrice(Math.floor(start + (end - start) * ease));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [finalPrice, trip, seatClass, travelers]);

    const handleConfirm = () => {
        // Generate dummy booking ID
        const id = 'BKG-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setBookingId(id);
        setStep(2);
    };

    if (!isOpen || !trip) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
                >
                    {step === 2 && <div className="absolute inset-0 z-10 pointer-events-none"><ReactConfetti width={500} height={600} recycle={false} /></div>}

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>

                    {step === 1 ? (
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Booking</h2>

                            {/* Trip Summary */}
                            <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-start space-x-4">
                                <img src={trip.image || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=200"} alt="Thumbnail" className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                    <h3 className="font-bold text-gray-900">{trip.type === 'Flight' ? `${trip.from} to ${trip.to}` : trip.name}</h3>
                                    <p className="text-sm text-gray-500">{trip.airline || trip.location}</p>
                                    <p className="text-sm font-medium text-rose-500 mt-1">${trip.price} / person</p>
                                </div>
                            </div>

                            {/* Traveler Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                                <div className="flex items-center space-x-4 mb-6">
                                    <button
                                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl font-bold w-8 text-center">{travelers}</span>
                                    <button
                                        onClick={() => setTravelers(travelers + 1)}
                                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['economy', 'business', 'first'].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setSeatClass(c)}
                                            className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${seatClass === c
                                                ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            {c.charAt(0).toUpperCase() + c.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Summary */}
                            <div className="border-t border-gray-100 pt-6 mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-500">Base Fare ({seatClass} x {travelers})</span>
                                    <span className="font-medium">${Math.floor(basePrice)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500">Taxes & Fees</span>
                                    <span className="font-medium">${taxes}</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <div className="text-right">
                                        <span className="text-3xl font-extrabold text-rose-500 block">
                                            ${displayPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleConfirm}
                                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transform hover:-translate-y-0.5 transition-all"
                            >
                                Confirm & Pay
                            </button>
                        </div>
                    ) : (
                        <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[500px]">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                            >
                                <Check size={48} className="text-green-500" />
                            </motion.div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                            <p className="text-gray-500 mb-8">Your trip to {trip.type === 'Flight' ? trip.to : trip.name} is all set.</p>

                            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 border border-gray-200 border-dashed">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Booking ID</p>
                                <p className="text-2xl font-mono font-bold text-gray-900">{bookingId}</p>
                            </div>

                            <div className="flex space-x-3 w-full">
                                <button
                                    onClick={onClose}
                                    className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Done
                                </button>
                                <button className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                    Download Ticket
                                </button>
                            </div>
                        </div>
                    )}

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
