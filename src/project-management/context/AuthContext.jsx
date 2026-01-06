import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for user
        const storedUser = localStorage.getItem('pm_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Simulate login
        // In a real app, verify against stored users or backend
        const users = JSON.parse(localStorage.getItem('pm_users') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('pm_user', JSON.stringify(foundUser));
            return { success: true };
        }
        return { success: false, message: 'Invalid credentials' };
    };

    const signup = (userData) => {
        // Simulate signup
        const users = JSON.parse(localStorage.getItem('pm_users') || '[]');
        const exists = users.find(u => u.email === userData.email);

        if (exists) {
            return { success: false, message: 'User already exists' };
        }

        const newUser = { ...userData, id: Date.now().toString(), avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=random` };
        const updatedUsers = [...users, newUser];
        localStorage.setItem('pm_users', JSON.stringify(updatedUsers));

        // Auto login
        setUser(newUser);
        localStorage.setItem('pm_user', JSON.stringify(newUser));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('pm_user');
    };

    const updateUser = (data) => {
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem('pm_user', JSON.stringify(updatedUser));

        // Update in users list too
        const users = JSON.parse(localStorage.getItem('pm_users') || '[]');
        const newUsers = users.map(u => u.id === user.id ? updatedUser : u);
        localStorage.setItem('pm_users', JSON.stringify(newUsers));
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, updateUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
