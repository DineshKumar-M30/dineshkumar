import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Calendar, PieChart, Users, Settings, LogOut, CheckSquare } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { logout } = useAuth();

    const links = [
        { to: "/project-dashboard/app/dashboard", icon: LayoutDashboard, label: "Overview" },
        { to: "/project-dashboard/app/projects", icon: FolderKanban, label: "Projects" },
        { to: "/project-dashboard/app/kanban", icon: CheckSquare, label: "My Tasks" },
        { to: "/project-dashboard/app/calendar", icon: Calendar, label: "Calendar" },
        { to: "/project-dashboard/app/analytics", icon: PieChart, label: "Analytics" },
        { to: "/project-dashboard/app/team", icon: Users, label: "Team" },
        { to: "/project-dashboard/app/settings", icon: Settings, label: "Settings" },
    ];

    const sidebarClasses = `
    fixed inset-y-0 left-0 bg-white dark:bg-slate-900 w-64 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 z-40
    ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:h-screen
  `;

    return (
        <>
            <div className={sidebarClasses}>
                <div className="p-6 h-full flex flex-col">
                    {/* Logo */}
                    <Link to="/project-dashboard" className="flex items-center space-x-2 mb-10">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <LayoutDashboard className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">Nexus</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => window.innerWidth < 768 && onClose()}
                                className={({ isActive }) => `
                    flex items-center px-4 py-3 rounded-xl transition-all group
                    ${isActive
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}
                  `}
                            >
                                <link.icon className="w-5 h-5 mr-3" />
                                <span className="font-medium">{link.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* User Profile & Logout */}
                    <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                        <button
                            onClick={logout}
                            className="flex items-center w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-30 md:hidden glass"
                    onClick={onClose}
                />
            )}
        </>
    );
};

export default Sidebar;
