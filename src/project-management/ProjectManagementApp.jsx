import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import DashboardHome from './pages/DashboardHome';
import Projects from './pages/Projects';
import Kanban from './pages/Kanban';
import Calendar from './pages/Calendar';
import Analytics from './pages/Analytics';
import Team from './pages/Team';
import Settings from './pages/Settings';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import DashboardLayout from './components/Layout/DashboardLayout';
import { Toaster } from 'react-hot-toast';

const ProjectManagementApp = () => {
    return (
        <AuthProvider>
            <AppProvider>
                <div className="font-sans antialiased text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
                    <Toaster position="top-right" />
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* Protected Routes */}
                        <Route path="/app" element={<DashboardLayout />}>
                            <Route index element={<Navigate to="/project-dashboard/app/dashboard" replace />} />
                            <Route path="dashboard" element={<DashboardHome />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="kanban" element={<Kanban />} />
                            <Route path="calendar" element={<Calendar />} />
                            <Route path="analytics" element={<Analytics />} />
                            <Route path="team" element={<Team />} />
                            <Route path="settings" element={<Settings />} />
                        </Route>

                        {/* Catch all */}
                        <Route path="*" element={<Navigate to="/project-dashboard" replace />} />
                    </Routes>
                </div>
            </AppProvider>
        </AuthProvider>
    );
};

export default ProjectManagementApp;
