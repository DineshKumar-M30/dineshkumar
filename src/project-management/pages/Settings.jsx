import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import Input from '../components/Shared/Input';
import Button from '../components/Shared/Button';
import Avatar from '../components/Shared/Avatar';
import { Moon, Sun, Bell, Lock, Globe } from 'lucide-react';
import toast from 'react-hot-toast';

const Settings = () => {
    const { user, updateUser } = useAuth();
    const { theme, toggleTheme } = useApp();
    const [formData, setFormData] = React.useState({
        name: user?.name || '',
        email: user?.email || '',
        bio: user?.bio || 'Product Manager at TechCorp',
        notifications: true
    });

    React.useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                email: user.email || '',
                bio: user.bio || 'Product Manager at TechCorp'
            }));
        }
    }, [user]);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        if (!formData.name || !formData.email) return toast.error("Name and Email are required");
        updateUser({
            name: formData.name,
            email: formData.email,
            bio: formData.bio
        });
        toast.success("Profile updated successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Account Settings</h1>

            {/* Profile Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-center space-y-4">
                        <Avatar src={user?.avatar} size="2xl" className="ring-4 ring-slate-50 dark:ring-slate-800" />
                        <Button variant="outline" size="sm">Change Avatar</Button>
                    </div>

                    <div className="flex-1 space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">Personal Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Full Name"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />
                            <Input
                                label="Email Address"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bio</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow h-24 resize-none"
                                value={formData.bio}
                                onChange={(e) => handleChange('bio', e.target.value)}
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button onClick={handleSave}>Save Changes</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Preference */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">App Preferences</h2>

                <div className="space-y-6">
                    <div className="flex items-center justify-between group">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                {theme === 'dark' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Dark Mode</h3>
                                <p className="text-sm text-slate-500">Toggle the application theme.</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`w-14 h-8 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-200'}`}
                        >
                            <span className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md ${theme === 'dark' ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between group">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Bell className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                                <p className="text-sm text-slate-500">Receive email alerts for task updates.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleChange('notifications', !formData.notifications)}
                            className={`w-14 h-8 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${formData.notifications ? 'bg-blue-600' : 'bg-slate-200'}`}
                        >
                            <span className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-md ${formData.notifications ? 'left-7' : 'left-1'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
