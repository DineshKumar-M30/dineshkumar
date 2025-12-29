import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_DOCTORS, INITIAL_PATIENTS, INITIAL_APPOINTMENTS, ROLES } from '../data/mockData';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('hms_user');
        return savedUser ? JSON.parse(savedUser) : { role: ROLES.ADMIN, name: 'Admin User' };
    });

    const [doctors, setDoctors] = useState(() => {
        const saved = localStorage.getItem('hms_doctors');
        return saved ? JSON.parse(saved) : INITIAL_DOCTORS;
    });

    const [patients, setPatients] = useState(() => {
        const saved = localStorage.getItem('hms_patients');
        return saved ? JSON.parse(saved) : INITIAL_PATIENTS;
    });

    const [appointments, setAppointments] = useState(() => {
        const saved = localStorage.getItem('hms_appointments');
        return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    });

    useEffect(() => {
        localStorage.setItem('hms_doctors', JSON.stringify(doctors));
    }, [doctors]);

    useEffect(() => {
        localStorage.setItem('hms_patients', JSON.stringify(patients));
    }, [patients]);

    useEffect(() => {
        localStorage.setItem('hms_appointments', JSON.stringify(appointments));
    }, [appointments]);

    useEffect(() => {
        localStorage.setItem('hms_user', JSON.stringify(user));
    }, [user]);

    // Data Repair Effect - Ensures known broken images are updated in existing localStorage
    useEffect(() => {
        const brokenUrlPart = 'photo-1559839734-2b71f153678';
        const hasBrokenImage = doctors.some(d => d.image.includes(brokenUrlPart));

        if (hasBrokenImage) {
            const updatedDoctors = doctors.map(d => {
                const initial = INITIAL_DOCTORS.find(i => i.id === d.id);
                if (d.image.includes(brokenUrlPart) && initial) {
                    return { ...d, image: initial.image };
                }
                return d;
            });
            setDoctors(updatedDoctors);
        }
    }, [doctors]);

    const login = (role, name) => {
        setUser({ role, name });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('hms_user');
    };

    // Patient Actions
    const addPatient = (patient) => {
        const newPatient = { ...patient, id: Date.now() };
        setPatients([...patients, newPatient]);
    };

    const updatePatient = (id, updatedData) => {
        setPatients(patients.map(p => p.id === id ? { ...p, ...updatedData } : p));
    };

    const deletePatient = (id) => {
        setPatients(patients.filter(p => p.id !== id));
        setAppointments(appointments.filter(a => a.patientId !== id));
    };

    // Appointment Actions
    const bookAppointment = (appointment) => {
        const newAppointment = { ...appointment, id: Date.now() };
        setAppointments([...appointments, newAppointment]);
    };

    const updateAppointmentStatus = (id, status) => {
        setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
    };

    const value = {
        user,
        login,
        logout,
        doctors,
        patients,
        appointments,
        addPatient,
        updatePatient,
        deletePatient,
        bookAppointment,
        updateAppointmentStatus,
    };

    return (
        <HospitalContext.Provider value={value}>
            {children}
        </HospitalContext.Provider>
    );
};

export const useHospital = () => {
    const context = useContext(HospitalContext);
    if (!context) {
        throw new Error('useHospital must be used within a HospitalProvider');
    }
    return context;
};
