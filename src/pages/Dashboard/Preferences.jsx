import { useState } from 'react';

export default function Preferences() {
    const [language, setLanguage] = useState('English');
    const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
    const [theme, setTheme] = useState('System');
    const [defaultPage, setDefaultPage] = useState('Dashboard');
    const [country, setCountry] = useState('India');

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-2xl p-8 space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Preferences</h2>

                {/* Languages and Date Format Row */}
                <div className="grid grid-cols-2 gap-12">
                    {/* Languages */}
                    <div className="flex items-center gap-6">
                        <label className="text-gray-900 font-medium text-base whitespace-nowrap">Languages</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center'
                            }}
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>

                    {/* Date Format */}
                    <div className="flex items-center gap-6">
                        <label className="text-gray-900 font-medium text-base whitespace-nowrap">Date Format</label>
                        <select
                            value={dateFormat}
                            onChange={(e) => setDateFormat(e.target.value)}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 12px center'
                            }}
                        >
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select>
                    </div>
                </div>

                {/* Theme */}
                <div className="flex items-center gap-6">
                    <label className="text-gray-900 font-medium text-base">Theme:</label>
                    <div className="flex items-center gap-8">
                        {/* Light */}
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="theme"
                                    value="Light"
                                    checked={theme === 'Light'}
                                    onChange={(e) => setTheme(e.target.value)}
                                    className="sr-only peer"
                                />
                                <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-gray-500 peer-checked:border-[6px] transition-all"></div>
                            </div>
                            <span className="text-gray-700 text-base">Light</span>
                        </label>

                        {/* Dark */}
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="theme"
                                    value="Dark"
                                    checked={theme === 'Dark'}
                                    onChange={(e) => setTheme(e.target.value)}
                                    className="sr-only peer"
                                />
                                <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-gray-500 peer-checked:border-[6px] transition-all"></div>
                            </div>
                            <span className="text-gray-700 text-base">Dark</span>
                        </label>

                        {/* System */}
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="theme"
                                    value="System"
                                    checked={theme === 'System'}
                                    onChange={(e) => setTheme(e.target.value)}
                                    className="sr-only peer"
                                />
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all flex items-center justify-center">
                                    {theme === 'System' && (
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    )}
                                </div>
                            </div>
                            <span className="text-gray-700 text-base">System</span>
                        </label>
                    </div>
                </div>

                {/* Default Landing Page */}
                <div className="flex items-center gap-6">
                    <label className="text-gray-900 font-medium text-base whitespace-nowrap">Default landing page</label>
                    <select
                        value={defaultPage}
                        onChange={(e) => setDefaultPage(e.target.value)}
                        className="w-56 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center'
                        }}
                    >
                        <option>Dashboard</option>
                        <option>Analytics</option>
                        <option>Reports</option>
                        <option>Settings</option>
                    </select>
                </div>

                {/* Country */}
                <div className="flex items-center gap-6">
                    <label className="text-gray-900 font-medium text-base">Country</label>
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-56 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center'
                        }}
                    >
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
