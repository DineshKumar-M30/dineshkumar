import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HospitalProvider } from './hospital/context/HospitalContext';
import HospitalLayout from './hospital/components/HospitalLayout';
import Dashboard from './hospital/pages/Dashboard';
import Patients from './hospital/pages/Patients';
import Appointments from './hospital/pages/Appointments';
import Login from './hospital/pages/Login';
import Doctors from './hospital/pages/Doctors';
import Billing from './hospital/pages/Billing';

function App() {
  return (
    <Router>
      <HospitalProvider>
        <Routes>
          {/* Main Redirect */}
          <Route path="/" element={<Navigate to="/hospital/login" replace />} />

          {/* HMS Portal */}
          <Route path="/hospital/login" element={<Login />} />

          <Route path="/hospital" element={<HospitalLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="billing" element={<Billing />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/hospital/login" replace />} />
        </Routes>
      </HospitalProvider>
    </Router>
  );
}

export default App;
