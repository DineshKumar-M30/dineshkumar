import React from 'react';
import {
    LayoutDashboard,
    Grid,
    Heart,
    MessageSquare,
    ListOrdered,
    Box,
    Gift,
    Calendar,
    ClipboardList,
    Users,
    FileText,
    Layers,
    User,
    Table as TableIcon,
    Settings,
    Power
} from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: Grid, label: 'Products' },
        { icon: Heart, label: 'Favorites' },
        { icon: MessageSquare, label: 'Inbox' },
        { icon: ListOrdered, label: 'Order Lists' },
        { icon: Box, label: 'Product Stock' },
    ];

    const pageItems = [
        { icon: Gift, label: 'Pricing' },
        { icon: Calendar, label: 'Calender' },
        { icon: ClipboardList, label: 'To-Do' },
        { icon: Users, label: 'Contact' },
        { icon: FileText, label: 'Invoice' },
        { icon: Layers, label: 'UI Elements' },
        { icon: User, label: 'Team' },
        { icon: TableIcon, label: 'Table' },
    ];

    return (
        <div className="w-[240px] bg-white h-screen border-r border-gray-100 flex flex-col transition-all duration-300">
            {/* Logo */}
            <div className="h-[70px] flex items-center justify-center border-b border-gray-50">
                <span className="text-2xl font-bold">
                    <span className="text-blue-600">Dash</span>
                    <span className="text-gray-900">Stack</span>
                </span>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-6 px-4 no-scrollbar">
                {/* Main Menu */}
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveItem(item.label)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeItem === item.label
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon size={20} className={activeItem === item.label ? 'text-white' : 'text-gray-500'} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* PAGES Section */}
                <div className="mt-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mb-4">
                        Pages
                    </h3>
                    <div className="space-y-1">
                        {pageItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveItem(item.label)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeItem === item.label
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon size={20} className={activeItem === item.label ? 'text-white' : 'text-gray-500'} />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-50 space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <Settings size={20} className="text-gray-500" />
                    <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <Power size={20} className="text-gray-500 group-hover:text-red-600" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
