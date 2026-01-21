import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { User, Shield, Bell, Key, Moon, Sun, Smartphone, Target } from 'lucide-react';

const SettingsPage = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const sections = [
        { title: 'Profile Info', icon: User, desc: 'Update your personal details and public profile.' },
        { title: 'Security', icon: Shield, desc: 'Manage your passwords and two-factor authentication.' },
        { title: 'Notifications', icon: Bell, desc: 'Configure how you receive alerts and updates.' },
        { title: 'API Management', icon: Key, desc: 'Manage your developer keys and integration access.' },
    ];

    return (
        <div className="max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>
                    Account Settings
                </h1>
                <p className="text-slate-400">Manage your profile, security, and application preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <aside className="space-y-1">
                    {sections.map((section) => (
                        <button key={section.title} className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all text-sm font-bold group",
                            section.title === 'Profile Info'
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "text-slate-500 hover:text-slate-200 hover:bg-slate-800"
                        )}>
                            <section.icon size={18} />
                            {section.title}
                        </button>
                    ))}
                </aside>

                <div className="md:col-span-2 space-y-6">
                    <div className={cn(
                        "p-8 rounded-3xl border space-y-8",
                        isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                    )}>
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-blue-600/30">
                                DK
                            </div>
                            <div>
                                <h4 className={cn("text-xl font-bold mb-1", isDark ? "text-white" : "text-slate-900")}>Dinesh Kumar</h4>
                                <p className="text-sm text-slate-500 mb-4 font-medium">Administrator • Joined Oct 2025</p>
                                <button className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors">
                                    Change Photo
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                                <input type="text" defaultValue="Dinesh Kumar" className={cn(
                                    "w-full p-3 rounded-xl border outline-none bg-transparent font-bold text-sm",
                                    isDark ? "border-slate-800 text-white" : "border-slate-200"
                                )} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                                <input type="email" defaultValue="dinesh@master.com" className={cn(
                                    "w-full p-3 rounded-xl border outline-none bg-transparent font-bold text-sm",
                                    isDark ? "border-slate-800 text-white" : "border-slate-200"
                                )} />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800/50">
                            <h4 className={cn("font-bold text-slate-300")}>Current Plan</h4>
                            <div className={cn(
                                "p-6 rounded-3xl border flex items-center justify-between border-blue-500 bg-blue-500/5 shadow-xl shadow-blue-500/5",
                                !isDark && "bg-blue-50"
                            )}>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-blue-600 text-white">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h5 className={cn("font-bold", isDark ? "text-white" : "text-slate-900")}>Enterprise Master</h5>
                                        <p className="text-xs text-slate-500 font-medium">Billed annually • Next payment: Oct 12, 2026</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors">
                                    Upgrade
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800/50">
                            <h4 className={cn("font-bold text-slate-300")}>Theme Preference</h4>
                            <div className="flex gap-4">
                                <button onClick={() => theme !== 'light' && toggleTheme()} className={cn(
                                    "flex-1 p-4 rounded-3xl border flex items-center justify-center gap-3 font-bold transition-all",
                                    !isDark ? "bg-white border-blue-500 text-blue-600 shadow-xl shadow-blue-500/10" : "border-slate-800 text-slate-500 bg-slate-800/20"
                                )}>
                                    <Sun size={20} /> Light
                                </button>
                                <button onClick={() => theme !== 'dark' && toggleTheme()} className={cn(
                                    "flex-1 p-4 rounded-3xl border flex items-center justify-center gap-3 font-bold transition-all",
                                    isDark ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20" : "border-slate-200 text-slate-400"
                                )}>
                                    <Moon size={20} /> Dark
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800/50">
                            <h4 className={cn("font-bold text-slate-300")}>Notification Preferences</h4>
                            <div className="space-y-4">
                                {[
                                    { title: 'Email Alerts', desc: 'Receive daily summaries of your account activity.' },
                                    { title: 'Push Notifications', desc: 'Real-time alerts for server status and security.' },
                                ].map((notify) => (
                                    <div key={notify.title} className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/10">
                                        <div>
                                            <h5 className={cn("text-xs font-bold", isDark ? "text-slate-200" : "text-slate-800")}>{notify.title}</h5>
                                            <p className="text-[10px] text-slate-500 font-medium">{notify.desc}</p>
                                        </div>
                                        <div className="w-10 h-5 rounded-full bg-blue-600 relative cursor-pointer">
                                            <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-6 rounded-3xl bg-blue-600/5 border border-blue-500/20">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-600 text-white">
                                    <Smartphone size={20} />
                                </div>
                                <div>
                                    <h5 className={cn("text-sm font-bold", isDark ? "text-white" : "text-slate-900")}>Two-Factor Authentication</h5>
                                    <p className="text-xs text-slate-500 font-medium">Add an extra layer of security to your account.</p>
                                </div>
                            </div>
                            <div className="w-12 h-6 rounded-full bg-blue-600 relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-6">
                            <button className="px-6 py-3 rounded-2xl text-slate-500 font-bold hover:text-slate-300 transition-colors">Cancel</button>
                            <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-black shadow-xl shadow-blue-600/20 hover:scale-105 transition-all">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
