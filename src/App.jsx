import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EcommerceApp from './ecommerce/EcommerceApp';

// Hospital Components
import { HospitalProvider } from './hospital/context/HospitalContext';
import HospitalLayout from './hospital/components/HospitalLayout';
import Dashboard from './hospital/pages/Dashboard';
import Patients from './hospital/pages/Patients';
import Doctors from './hospital/pages/Doctors';
import Appointments from './hospital/pages/Appointments';
import Billing from './hospital/pages/Billing';
import Login from './hospital/pages/Login';
import TravelApp from './travel/TravelApp';
import LandingPage from './landing/LandingPage';
import FitnessApp from './fitness/FitnessApp';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect Root to Fitness Page */}
                <Route path="/" element={<Navigate to="/fitness" replace />} />

                {/* Hospital Management System */}
                <Route path="/hospital/login" element={
                    <HospitalProvider>
                        <Login />
                    </HospitalProvider>
                } />

                <Route path="/hospital" element={
                    <HospitalProvider>
                        <HospitalLayout />
                    </HospitalProvider>
                }>
                    <Route index element={<Dashboard />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="doctors" element={<Doctors />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="billing" element={<Billing />} />
                </Route>

                {/* Travel Booking App */}
                <Route path="/travel/*" element={<TravelApp />} />

                {/* Animated Landing Page */}
                <Route path="/landing" element={<LandingPage />} />

                {/* Gamified Fitness Webpage */}
                <Route path="/fitness" element={<FitnessApp />} />

                {/* E-commerce Platform - Primary Application */}
                <Route path="/*" element={<EcommerceApp />} />
            </Routes>
        </Router>
    );
}

export default App;
