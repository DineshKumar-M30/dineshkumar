export const ROLES = {
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    RECEPTIONIST: 'receptionist',
};

export const APPOINTMENT_STATUS = {
    PENDING: 'Pending',
    CONFIRMED: 'Confirmed',
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled',
};

export const INITIAL_DOCTORS = [
    {
        id: 1,
        name: 'Dr. Sarah Wilson',
        specialization: 'Cardiology',
        availability: 'Mon, Wed, Fri (9 AM - 5 PM)',
        email: 'sarah.w@hospital.com',
        phone: '+1 234-567-8901',
        image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?auto=format&fit=crop&q=80&w=800&h=600',
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialization: 'Neurology',
        availability: 'Tue, Thu (10 AM - 6 PM)',
        email: 'm.chen@hospital.com',
        phone: '+1 234-567-8902',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
        id: 3,
        name: 'Dr. Emily Brown',
        specialization: 'Pediatrics',
        availability: 'Mon-Fri (8 AM - 4 PM)',
        email: 'e.brown@hospital.com',
        phone: '+1 234-567-8903',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
    },
];

export const INITIAL_PATIENTS = [
    {
        id: 101,
        name: 'John Doe',
        age: 45,
        gender: 'Male',
        bloodGroup: 'O+',
        phone: '+1 987-654-3210',
        address: '123 Main St, Springfield',
        lastVisit: '2023-12-15',
    },
    {
        id: 102,
        name: 'Jane Smith',
        age: 32,
        gender: 'Female',
        bloodGroup: 'B-',
        phone: '+1 987-654-3211',
        address: '456 Oak Ave, Springfield',
        lastVisit: '2023-12-20',
    },
];

export const SERVICES = [
    { id: 1, name: 'Consultation Fee', price: 50 },
    { id: 2, name: 'Blood Test', price: 30 },
    { id: 3, name: 'X-Ray', price: 80 },
    { id: 4, name: 'MRI Scan', price: 500 },
    { id: 5, name: 'Pharmacy - Medicines', price: 45 },
];

export const INITIAL_APPOINTMENTS = [
    {
        id: 1001,
        patientId: 101,
        doctorId: 1,
        date: '2023-12-28',
        time: '10:30 AM',
        status: APPOINTMENT_STATUS.CONFIRMED,
        reason: 'Regular heart checkup',
    },
    {
        id: 1002,
        patientId: 102,
        doctorId: 3,
        date: '2023-12-29',
        time: '02:00 PM',
        status: APPOINTMENT_STATUS.PENDING,
        reason: 'Child vaccination',
    },
];
