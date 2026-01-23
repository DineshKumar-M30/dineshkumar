import React, { useState } from 'react';
import {
    Plus,
    Mail,
    Star,
    Send,
    File,
    AlertOctagon,
    Bookmark,
    Trash,
    Square,
    Search,
    Download,
    Info,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Check,
    Printer,
    MoreVertical,
    Mic,
    Paperclip,
    Image as Img
} from 'lucide-react';

const getLabelStyles = (label) => {
    switch (label) {
        case 'Primary': return 'bg-teal-50 text-teal-600';
        case 'Work': return 'bg-orange-50 text-orange-600';
        case 'Friends': return 'bg-fuchsia-50 text-fuchsia-600';
        case 'Social': return 'bg-blue-50 text-blue-600';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const EmailDetail = ({ email, onClose }) => (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
                <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-400 hover:text-gray-600">
                    <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-bold text-gray-900">{email.sender}</h2>
                {email.label && (
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${getLabelStyles(email.label)}`}>
                        {email.label}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Printer size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-50 rounded-lg transition-colors">
                    <Star size={20} className={email.starred ? "fill-yellow-400 text-yellow-400" : ""} />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors">
                    <Trash2 size={20} />
                </button>
            </div>
        </div>

        {/* Content (Conversation) */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-gray-50/30 no-scrollbar">
            {/* Received Message */}
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                <div className="flex flex-col gap-1 max-w-[80%]">
                    <div className="bg-gray-100/80 p-6 rounded-2xl rounded-tl-none text-gray-600 leading-relaxed text-sm">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-xs text-gray-400 mt-1">
                        <span>6.30 pm</span>
                        <MoreVertical size={14} />
                    </div>
                </div>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col items-end gap-1">
                <div className="bg-blue-500 text-white p-6 rounded-2xl rounded-br-none max-w-[80%] leading-relaxed text-sm shadow-lg shadow-blue-500/20">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <span>6.34 pm</span>
                    <MoreVertical size={14} />
                </div>
            </div>

            {/* Received Message 2 */}
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                <div className="flex flex-col gap-1 max-w-[80%]">
                    <div className="bg-gray-100/80 p-6 rounded-2xl rounded-tl-none text-gray-600 leading-relaxed text-sm">
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-xs text-gray-400 mt-1">
                        <span>6.38 pm</span>
                        <MoreVertical size={14} />
                    </div>
                </div>
            </div>
        </div>

        {/* Footer / Reply Area */}
        <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Mic size={20} />
                </button>
                <input
                    type="text"
                    placeholder="Write message"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-600 placeholder-gray-400"
                />
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Paperclip size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Img size={20} />
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all">
                        <span>Send</span>
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Inbox = () => {
    const [activeFolder, setActiveFolder] = useState('Inbox');
    const [viewingEmail, setViewingEmail] = useState(null);

    const [emailList, setEmailList] = useState([
        { id: 1, sender: 'Jullu Jalal', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM', starred: false, read: false, trash: false },
        { id: 2, sender: 'Minerva Barnett', label: 'Friends', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM', starred: false, read: false, trash: false },
        { id: 3, sender: 'Peter Lewis', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM', starred: false, read: false, trash: false },
        { id: 4, sender: 'Anthony Briggs', label: '', subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM', starred: true, read: false, trash: false },
        { id: 5, sender: 'Clifford Morgan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM', starred: false, read: false, trash: false },
        { id: 6, sender: 'Cecilia Webster', label: 'Friends', subject: 'Always Look On The Bright Side Of Life', time: '3:52 PM', starred: false, read: false, trash: false },
        { id: 7, sender: 'Harvey Manning', label: '', subject: 'Curling Irons Are As Individual As The Women Who Use Them', time: '2:30 PM', starred: true, read: false, trash: false },
        { id: 8, sender: 'Willie Blake', label: 'Primary', subject: 'Our Bachelor of Commerce program is ACBSP-accredited.', time: '8:38 AM', starred: false, read: false, trash: false },
        { id: 9, sender: 'Minerva Barnett', label: 'Work', subject: 'Get Best Advertiser In Your Side Pocket', time: '8:13 AM', starred: false, read: false, trash: false },
        { id: 10, sender: 'Fanny Weaver', label: '', subject: 'Free Classifieds Using Them To Promote Your Stuff Online', time: '7:52 PM', starred: true, read: false, trash: false },
        { id: 11, sender: 'Olga Hogan', label: 'Social', subject: 'Enhance Your Brand Potential With Giant Advertising Blimps', time: '4:13 PM', starred: false, read: false, trash: false },
        { id: 12, sender: 'Lora Houston', label: 'Friends', subject: 'Vacation Home Rental Success', time: '7:52 PM', starred: false, read: false, trash: false },
    ]);

    const [selectedEmails, setSelectedEmails] = useState([]);

    const handleSelectEmail = (e, id) => {
        e.stopPropagation();
        if (selectedEmails.includes(id)) {
            setSelectedEmails(selectedEmails.filter(emailId => emailId !== id));
        } else {
            setSelectedEmails([...selectedEmails, id]);
        }
    };

    const handleDeleteSelected = () => {
        if (selectedEmails.length === 0) return;

        if (activeFolder === 'Bin') {
            setEmailList(emailList.filter(email => !selectedEmails.includes(email.id)));
        } else {
            const updatedList = emailList.map(email =>
                selectedEmails.includes(email.id) ? { ...email, trash: true } : email
            );
            setEmailList(updatedList);
        }
        setSelectedEmails([]);
    };

    const labels = [
        { label: 'Primary', color: 'text-teal-400' },
        { label: 'Social', color: 'text-blue-400' },
        { label: 'Work', color: 'text-orange-400' },
        { label: 'Friends', color: 'text-fuchsia-400' },
    ];

    const filteredEmails = emailList.filter(email => {
        if (activeFolder === 'Bin') return email.trash;
        if (activeFolder === 'Starred') return email.starred && !email.trash;

        // Filter by Label if activeFolder matches a label name
        const isLabel = labels.some(l => l.label === activeFolder);
        if (isLabel) return email.label === activeFolder && !email.trash;

        if (activeFolder === 'Inbox') return !email.trash;

        // Default return for other folders (Inbox behavior)
        return !email.trash;
    });

    const folders = [
        { icon: Mail, label: 'Inbox', count: emailList.filter(e => !e.trash).length },
        { icon: Star, label: 'Starred', count: emailList.filter(e => e.starred && !e.trash).length },
        { icon: Send, label: 'Sent', count: '24,532' },
        { icon: File, label: 'Draft', count: '09' },
        { icon: AlertOctagon, label: 'Spam', count: '14' },
        { icon: Bookmark, label: 'Important', count: '18' },
        { icon: Trash, label: 'Bin', count: emailList.filter(e => e.trash).length },
    ];

    return (
        <div className="p-4 md:p-6 min-h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Inbox</h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Sidebar */}
                <div className="w-full md:w-64 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col flex-shrink-0">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors shadow-lg shadow-blue-500/30 flex-shrink-0">
                        <Plus size={20} />
                        <span>Compose</span>
                    </button>

                    <div className="mb-8 flex-shrink-0">
                        <h3 className="text-gray-900 font-bold mb-4 px-2">My Email</h3>
                        <div className="space-y-1">
                            {folders.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setActiveFolder(item.label); setViewingEmail(null); }}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeFolder === item.label
                                        ? 'bg-blue-50 text-blue-500'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={18} />
                                        <span>{item.label}</span>
                                    </div>
                                    <span className={`${activeFolder === item.label ? 'text-blue-500' : 'text-gray-500'}`}>
                                        {item.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <h3 className="text-gray-900 font-bold mb-4 px-2">Label</h3>
                        <div className="space-y-1 mb-4">
                            {labels.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setActiveFolder(item.label); setViewingEmail(null); }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeFolder === item.label
                                        ? 'bg-gray-50 text-gray-900'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Square size={18} className={item.color} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                        <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">
                            <Plus size={18} />
                            <span>Create New Label</span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 w-full min-w-0">
                    {viewingEmail ? (
                        <div className="h-full min-h-[500px]">
                            <EmailDetail email={viewingEmail} onClose={() => setViewingEmail(null)} />
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                            <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-gray-50">
                                <div className="relative w-full max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search mail"
                                        className="w-full pl-12 pr-4 py-2 sm:py-2.5 bg-gray-50 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
                                    />
                                </div>
                                <div className="flex items-center border border-gray-200 rounded-lg self-end sm:self-auto">
                                    <button className="p-2 text-gray-600 hover:bg-gray-50 border-r border-gray-200 transition-colors">
                                        <Download size={18} />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:bg-gray-50 border-r border-gray-200 transition-colors">
                                        <Info size={18} />
                                    </button>
                                    <button
                                        onClick={handleDeleteSelected}
                                        disabled={selectedEmails.length === 0}
                                        className={`p-2 transition-colors ${selectedEmails.length > 0 ? 'text-red-500 hover:bg-red-50' : 'text-gray-300 cursor-not-allowed'}`}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <div className="min-w-full">
                                    {filteredEmails.length === 0 ? (
                                        <div className="px-6 py-12 text-center text-gray-400">
                                            No emails found
                                        </div>
                                    ) : (
                                        filteredEmails.map((email) => (
                                            <div
                                                key={email.id}
                                                className={`flex items-center px-4 md:px-6 py-3 md:py-4 border-b border-gray-50 transition-colors cursor-pointer group select-none ${selectedEmails.includes(email.id) ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                                                onClick={() => setViewingEmail(email)}
                                            >
                                                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                                                    {/* Custom Checkbox */}
                                                    <div
                                                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedEmails.includes(email.id)
                                                            ? 'bg-gray-900 border-gray-900'
                                                            : 'border-gray-300 group-hover:border-gray-400'
                                                            }`}
                                                        onClick={(e) => handleSelectEmail(e, email.id)}
                                                    >
                                                        {selectedEmails.includes(email.id) && <Check size={12} className="text-white" strokeWidth={3} />}
                                                    </div>

                                                    <button className="text-gray-400 hover:text-yellow-400 transition-colors hidden sm:block" onClick={(e) => { e.stopPropagation(); }}>
                                                        <Star size={20} className={email.starred ? "fill-yellow-400 text-yellow-400" : ""} />
                                                    </button>
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 w-[120px] sm:w-[180px]">
                                                        <span className={`text-sm font-bold text-gray-900 truncate ${email.read ? 'font-normal' : ''}`}>
                                                            {email.sender}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-gray-500 sm:hidden">
                                                            {email.time}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0 px-2 md:px-4">
                                                    {email.label && (
                                                        <span className={`px-2 py-0.5 rounded text-[10px] md:text-xs font-semibold shrink-0 ${getLabelStyles(email.label)}`}>
                                                            {email.label}
                                                        </span>
                                                    )}
                                                    <p className="text-sm text-gray-600 truncate">
                                                        {email.subject}
                                                    </p>
                                                </div>

                                                <span className="text-xs font-bold text-gray-500 min-w-[60px] text-right hidden sm:block">
                                                    {email.time}
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>

                                <div className="px-6 py-4 flex items-center justify-between mt-auto border-t border-gray-50">
                                    <span className="text-sm text-gray-500">
                                        Showing {filteredEmails.length} of {emailList.length}
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Inbox;
