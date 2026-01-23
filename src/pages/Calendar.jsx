import React, { useState, useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight, MapPin, MoreHorizontal, Camera, ChevronDown } from 'lucide-react';

const Calendar = () => {
    const [currentView, setCurrentView] = useState('Month');
    const [hoveredEventId, setHoveredEventId] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const [newEvent, setNewEvent] = useState({
        name: '',
        time: '',
        date: '',
        address: '',
        contactNumber: ''
    });

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        // In a real app we would add to a list, here we just reset
        console.log('New Event:', { ...newEvent, image: imagePreview });
        setShowAddForm(false);
        setNewEvent({ name: '', time: '', date: '', address: '', contactNumber: '' });
        setImagePreview(null);
    };

    // Mock Data based on the screenshot
    const eventsData = [
        {
            id: 1,
            title: "Design Conference",
            subtitle: "Zillul Design Agency",
            time: "Today 07:19 AM",
            location: "56 Davion Mission Suite 157",
            location2: "Meaghanberg",
            count: 15,
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=100&h=100",
            popoverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
            id: 2,
            title: "Weekend Festival",
            subtitle: "Global Events Co",
            time: "16 October 2019 at 5.00 PM",
            location: "853 Moore Flats Suite 158",
            location2: "Sweden",
            count: 20,
            image: "https://i.pinimg.com/1200x/0c/93/be/0c93be2773f8dcd49345e848e623724b.jpg"
        },
        {
            id: 3,
            title: "Glastonbury Festival",
            subtitle: "Music Works",
            time: "20-22 October 2019 at 8.00 PM",
            location: "646 Walter Road Apt. 571",
            location2: "Turks and Caicos Islands",
            count: 14,
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
            id: 4,
            title: "Ultra Europe 2019",
            subtitle: "Live Nation",
            time: "25 October 2019 at 10.00 PM",
            location: "506 Satterfield Tunnel Apt. 963",
            location2: "San Marino",
            count: 42,
            image: "https://i.pinimg.com/736x/e7/34/6f/e7346f9c7e867436c454f19da4207d62.jpg"
        }
    ];

    const getEventById = (id) => eventsData.find(e => e.id === id);

    // Event details popover component
    const EventPopover = ({ event, positionClass = "bottom-[110%] left-1/2 -translate-x-1/2" }) => (
        <div className={`absolute ${positionClass} w-[280px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200 pointer-events-none`}>
            <div className="p-3 text-left">
                <div className="w-full h-32 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img
                        src={event.popoverImage || event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="px-1 mb-4">
                    <h5 className="text-gray-900 font-bold text-base mb-1">{event.title}</h5>
                    <p className="text-gray-400 text-[10px] mb-3 font-medium">{event.subtitle}</p>
                    <p className="text-gray-500 text-[11px] font-semibold mb-2">{event.time}</p>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{event.location}</p>
                </div>
                <hr className="border-gray-50 mb-4" />
                <div className="flex items-center -space-x-2 px-1 pb-1">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${event.id * 10 + i}`} alt="User" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 text-[10px] font-bold text-blue-500 flex items-center justify-center shadow-sm">
                        {event.count}+
                    </div>
                </div>
            </div>
        </div>
    );

    // Grid Data ensuring visual match with screenshot (Oct 1st 2019 on Sunday as per mock)
    const calendarDays = [
        // Prev Month (Hatched)
        { d: 25, type: 'prev' }, { d: 26, type: 'prev' }, { d: 27, type: 'prev' }, { d: 28, type: 'prev' }, { d: 29, type: 'prev' }, { d: 30, type: 'prev' },
        // Current Month
        { d: 1, type: 'current' },
        { d: 2, type: 'current' }, { d: 3, type: 'current' }, { d: 4, type: 'current' }, { d: 5, type: 'current' }, { d: 6, type: 'current' }, { d: 7, type: 'current' }, { d: 8, type: 'current' },
        { d: 9, type: 'current' }, { d: 10, type: 'current' }, { d: 11, type: 'current' }, { d: 12, type: 'current' }, { d: 13, type: 'current' }, { d: 14, type: 'current' }, { d: 15, type: 'current' },
        { d: 16, type: 'current' }, { d: 17, type: 'current' }, { d: 18, type: 'current' }, { d: 19, type: 'current' }, { d: 20, type: 'current' }, { d: 21, type: 'current' }, { d: 22, type: 'current' },
        { d: 23, type: 'current' }, { d: 24, type: 'current' }, { d: 25, type: 'current' }, { d: 26, type: 'current' }, { d: 27, type: 'current' }, { d: 28, type: 'current' }, { d: 29, type: 'current' },
        { d: 30, type: 'current' }, { d: 31, type: 'current' },
        // Next Month (Hatched)
        { d: 1, type: 'next' }, { d: 2, type: 'next' }, { d: 3, type: 'next' }, { d: 4, type: 'next' }, { d: 5, type: 'next' }
    ];

    // Mapped events on the grid
    const gridEvents = {
        5: { name: "Design Conference", color: "purple" }, // Oct 5
        16: { name: "Weekend Festival", color: "pink", isStart: true, span: 2 }, // Oct 16 (implied span)
        20: { name: "Glastonbury Festival", color: "orange", isStart: true, span: 3 }, // Oct 20-22
        25: { name: "Glastonbury Festival", color: "blue", isStart: true }, // Using Ultra Europe label for visual
    };

    if (showAddForm) {
        return (
            <div className="p-4 md:p-8 bg-gray-50 min-h-full">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Add New Event</h2>
                    <button
                        onClick={() => setShowAddForm(false)}
                        className="text-gray-500 hover:text-gray-700 font-semibold text-sm"
                    >
                        Cancel
                    </button>
                </div>

                <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 md:p-12 max-w-5xl mx-auto">
                    <form onSubmit={handleAddEvent} className="space-y-8 md:space-y-10">
                        {/* Photo Upload */}
                        <div className="flex flex-col items-center gap-4">
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <div
                                onClick={handlePhotoClick}
                                className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden"
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <Camera size={20} className="text-gray-400" />
                                )}
                            </div>
                            <span
                                onClick={handlePhotoClick}
                                className="text-blue-500 font-bold text-xs md:text-sm cursor-pointer hover:text-blue-600 transition-colors"
                            >
                                Upload Cover Photo
                            </span>
                        </div>

                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8">
                            <div>
                                <label className="block text-gray-400 font-bold text-xs mb-2 md:mb-3">Event Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter event name"
                                    className="w-full bg-gray-50 border border-transparent rounded-xl p-3 md:p-4 text-sm md:text-base text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    value={newEvent.name}
                                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold text-xs mb-2 md:mb-3">Time</label>
                                <input
                                    type="text"
                                    placeholder="12:34 BDT"
                                    className="w-full bg-gray-50 border border-transparent rounded-xl p-3 md:p-4 text-sm md:text-base text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    value={newEvent.time}
                                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold text-xs mb-2 md:mb-3">Date</label>
                                <input
                                    type="text"
                                    placeholder="11-09-2019"
                                    className="w-full bg-gray-50 border border-transparent rounded-xl p-3 md:p-4 text-sm md:text-base text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    value={newEvent.date}
                                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 font-bold text-xs mb-2 md:mb-3">Address</label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full bg-gray-50 border border-transparent rounded-xl p-3 md:p-4 text-sm md:text-base text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    value={newEvent.address}
                                    onChange={(e) => setNewEvent({ ...newEvent, address: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-gray-400 font-bold text-xs mb-2 md:mb-3">Contact Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your Contact Number"
                                    className="w-full bg-gray-50 border border-transparent rounded-xl p-3 md:p-4 text-sm md:text-base text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    value={newEvent.contactNumber}
                                    onChange={(e) => setNewEvent({ ...newEvent, contactNumber: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-6 md:pt-10">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-extrabold px-12 md:px-20 py-3 md:py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 text-xs md:text-sm tracking-wide"
                            >
                                Add Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-full flex flex-col xl:flex-row gap-8 overflow-hidden">
            {/* Left Sidebar: Events */}
            <div className="w-full xl:w-[350px] flex-shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Calender</h2>

                <div className="bg-white rounded-[24px] md:rounded-[30px] p-6 shadow-sm border border-gray-100">
                    <button
                        onClick={() => setShowAddForm(true)}
                        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl mb-8 flex items-center justify-center gap-2 transition-all duration-300 hover-scale shadow-lg shadow-blue-500/30`}
                    >
                        <Plus size={20} />
                        Add New Event
                    </button>

                    <h3 className="text-gray-900 font-bold text-lg mb-6">You are going to</h3>

                    <div className="space-y-6">
                        {eventsData.map((event) => (
                            <div key={event.id} className="flex gap-4 group cursor-pointer">
                                {/* Icon/Image */}
                                <div className="flex-shrink-0">
                                    {event.image ? (
                                        <img src={event.image} alt={event.title} className="w-12 h-12 rounded-xl object-cover" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                                            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-gray-900 font-bold text-sm truncate">{event.title}</h4>
                                    <p className="text-gray-400 text-xs mt-1 mb-2">
                                        {event.time}
                                    </p>
                                    <p className="text-gray-500 text-xs flex items-start gap-1 mb-3">
                                        <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                                        <span className="truncate">{event.location} <br /> {event.location2}</span>
                                    </p>

                                    {/* Avatar Group */}
                                    <div className="flex items-center -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${event.id * 10 + i}`} alt="User" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-50 text-[8px] font-bold text-blue-500 flex items-center justify-center">
                                            {event.count}+
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-500 font-semibold rounded-xl text-sm transition-colors">
                        See More
                    </button>
                </div>
            </div>

            {/* Right Content: Calendar Grid */}
            <div className="flex-1 bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 h-fit min-w-0">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    <span className="text-gray-400 font-medium hidden md:block">Today</span>
                    <div className="flex items-center gap-4">
                        <button className="p-1.5 md:p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors">
                            <ChevronLeft size={20} md:size={24} />
                        </button>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">October 2019</h2>
                        <button className="p-1.5 md:p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors">
                            <ChevronRight size={20} md:size={24} />
                        </button>
                    </div>
                    <div className="flex bg-gray-50 rounded-xl p-1 w-full md:w-auto overflow-x-auto no-scrollbar">
                        {['Day', 'Week', 'Month'].map((view) => (
                            <button
                                key={view}
                                onClick={() => setCurrentView(view)}
                                className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${currentView === view
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {view}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="overflow-x-auto no-scrollbar -mx-2 px-2">
                    <div className="min-w-[600px] md:min-w-0 w-full">
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 mb-4">
                            {['MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT', 'SUN'].map((day) => (
                                <div key={day} className="text-center text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Matrix */}
                        <div className="grid grid-cols-7 border-t border-l border-gray-100">
                            {calendarDays.map((date, index) => {
                                const isHatched = date.type !== 'current';
                                const colIndex = index % 7;
                                const rowIndex = Math.floor(index / 7);

                                // Dynamic positioning logic
                                let popoverPos = "bottom-[110%]"; // Default above
                                if (rowIndex === 0) popoverPos = "top-[110%]"; // First row shows below

                                let popoverAlign = "left-1/2 -translate-x-1/2"; // Default center
                                if (colIndex <= 1) popoverAlign = "left-0"; // Mon, Tue align left
                                if (colIndex >= 5) popoverAlign = "right-0 translate-x-0"; // Sat, Sun align right

                                const finalPositionClass = `${popoverPos} ${popoverAlign}`;

                                // Mapped events on the grid
                                return (
                                    <div
                                        key={index}
                                        className={`
                                            h-24 md:h-32 border-b border-r border-gray-100 p-1 md:p-2 relative flex flex-col items-end
                                            ${isHatched ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0tMSw1IEw1LC0xIE0xLDYgTDYsMSBNLTEsMSBMLTEsMSIgc3Ryb2tlPSIjZjNmNGY2IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=")]' : 'bg-white'}
                                        `}
                                    >
                                        <span className={`text-sm font-medium ${isHatched ? 'text-gray-300' : 'text-gray-900'}`}>
                                            {date.d}
                                        </span>

                                        {/* Design Conference - Purple bars (Date 16) */}
                                        {date.type === 'current' && date.d === 16 && (
                                            <div
                                                className="absolute bottom-2 left-0 right-0 mx-2 bg-purple-100 border-l-2 border-purple-500 px-1 py-0.5 rounded-sm cursor-pointer z-40 transition-all hover:bg-purple-200"
                                                onMouseEnter={() => setHoveredEventId(1)}
                                                onMouseLeave={() => setHoveredEventId(null)}
                                            >
                                                <div className="text-[8px] font-bold text-purple-600 truncate leading-tight">Design Conference</div>
                                                {hoveredEventId === 1 && <EventPopover event={getEventById(1)} positionClass={finalPositionClass} />}
                                            </div>
                                        )}

                                        {/* Design Conference Popover specifically on 4 */}
                                        {date.type === 'current' && date.d === 4 && (
                                            <div
                                                className="absolute bottom-2 left-0 right-0 mx-2 bg-purple-100 border-l-2 border-purple-500 px-1 py-0.5 rounded-sm cursor-pointer z-40"
                                                onMouseEnter={() => setHoveredEventId(104)}
                                                onMouseLeave={() => setHoveredEventId(null)}
                                            >
                                                <div className="text-[8px] font-bold text-purple-600 truncate leading-tight">Design Conference</div>
                                                {hoveredEventId === 104 && <EventPopover event={getEventById(1)} positionClass={finalPositionClass} />}
                                            </div>
                                        )}

                                        {/* Weekend Festival - Pink bar */}
                                        {date.type === 'current' && date.d === 16 && (
                                            <div
                                                className="absolute bottom-10 left-0 right-0 mx-2 bg-pink-100 border-l-2 border-pink-500 px-1 py-0.5 rounded-sm cursor-pointer z-40"
                                                onMouseEnter={() => setHoveredEventId(1016)}
                                                onMouseLeave={() => setHoveredEventId(null)}
                                            >
                                                <div className="text-[8px] font-bold text-pink-600 truncate leading-tight">Weekend Festival</div>
                                                {hoveredEventId === 1016 && <EventPopover event={getEventById(2)} positionClass={finalPositionClass} />}
                                            </div>
                                        )}

                                        {/* Glastonbury Festival - Orange bar */}
                                        {date.type === 'current' && date.d === 20 && (
                                            <div
                                                className="absolute bottom-10 left-0 w-[300%] z-20 bg-orange-100 border-l-2 border-orange-500 px-1 py-0.5 rounded-sm cursor-pointer hover:bg-orange-200"
                                                onMouseEnter={() => setHoveredEventId(1020)}
                                                onMouseLeave={() => setHoveredEventId(null)}
                                            >
                                                <div className="text-[8px] font-bold text-orange-600 truncate leading-tight pl-1">Glastonbury Festival</div>
                                                {hoveredEventId === 1020 && <EventPopover event={getEventById(3)} positionClass={finalPositionClass} />}
                                            </div>
                                        )}

                                        {/* Glastonbury Festival - Blue bar */}
                                        {date.type === 'current' && date.d === 24 && (
                                            <div
                                                className="absolute bottom-2 left-0 w-full z-20 bg-blue-100 border-l-2 border-blue-500 px-1 py-0.5 rounded-sm cursor-pointer hover:bg-blue-200"
                                                onMouseEnter={() => setHoveredEventId(1024)}
                                                onMouseLeave={() => setHoveredEventId(null)}
                                            >
                                                <div className="text-[8px] font-bold text-blue-600 truncate leading-tight pl-1">Glastonbury Festival</div>
                                                {hoveredEventId === 1024 && <EventPopover event={getEventById(4)} positionClass={finalPositionClass} />}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
