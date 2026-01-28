import React, { useState } from 'react';
import { ArrowLeft, Link, FileText, Download, Image as ImageIcon, FileSpreadsheet } from 'lucide-react';

const SharedMedia = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('media'); // 'media', 'links', 'docs'

    const mediaSections = [
        {
            date: "27th Oct 22",
            images: [
                "https://i.pinimg.com/1200x/34/73/f1/3473f16ed29d28241b7559d6281d02de.jpg",
                "https://i.pinimg.com/1200x/21/3d/09/213d09fd52b63d6da784f58d4d081d76.jpg",
                "https://i.pinimg.com/1200x/77/2a/b7/772ab7e36aa7c3051bc30500ce326240.jpg",
                "https://i.pinimg.com/736x/b6/5e/ae/b65eaef1bf704fe81109b0314b227104.jpg",
                "https://i.pinimg.com/736x/57/09/e6/5709e6c512e2b00df863c690956d7ae2.jpg",
                "https://i.pinimg.com/1200x/37/97/07/379707e136a1bee183c3d4699d99b566.jpg",
                "https://i.pinimg.com/736x/fb/24/64/fb24641b8b072b8547314b4d0fd58e80.jpg",
                "https://i.pinimg.com/1200x/f9/53/c9/f953c93a8bc71461c34beaddf96a5afd.jpg",
                "https://i.pinimg.com/736x/49/c6/9f/49c69f4bbdd626de898cfaa8897fe1b6.jpg",
            ]
        },
        {
            date: "24th Oct 22",
            images: [
                "https://i.pinimg.com/736x/b4/8a/91/b48a9105e9285a087474ac8fee0facb4.jpg",
                "https://i.pinimg.com/1200x/54/8a/4e/548a4e5c405c0d2dae7a8ee7f384cf9c.jpg",
                "https://i.pinimg.com/1200x/02/5e/a7/025ea7621d456af27deee243542a9868.jpg",
            ]
        }
    ];

    const docsSections = [
        {
            date: "27th Oct 22",
            docs: [
                { name: "Booked Ticket", icon: FileText, color: "blue", type: "PDF" }, // Using FileText for PDF
                { name: "Invoice 22 Oct", icon: ImageIcon, color: "blue", type: "Image" },
                { name: "Sales Report", icon: FileSpreadsheet, color: "green", type: "XLS" },
            ]
        }
    ];

    const linksSections = [
        {
            date: "27th Oct 22",
            links: [
                { title: "https://codingmonk.in/blogs", domain: "codingmonk.in" },
                { title: "https://codingmonk.in/blogs", domain: "codingmonk.in" },
                { title: "https://codingmonk.in/blogs", domain: "codingmonk.in" },
                { title: "https://codingmonk.in/blogs", domain: "codingmonk.in" },
            ]
        }
    ];


    return (
        <div className="w-[380px] h-full bg-white border-l border-gray-200 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 flex-shrink-0">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center px-6 border-b border-gray-100 flex-shrink-0">
                {['Media', 'Links', 'Docs'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === tab.toLowerCase()
                            ? 'text-blue-500'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab}
                        {activeTab === tab.toLowerCase() && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-t-full"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Content (Media Grid) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                {activeTab === 'media' && (
                    <div className="space-y-8">
                        {mediaSections.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-medium text-gray-500 mb-4">{section.date}</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {section.images.map((img, imgIdx) => (
                                        <div key={imgIdx} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                            <img
                                                src={img}
                                                alt={`Media ${imgIdx}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'links' && (
                    <div className="space-y-8">
                        {linksSections.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-medium text-gray-500 mb-4">{section.date}</h3>
                                <div className="space-y-4">
                                    {section.links.map((link, linkIdx) => (
                                        <div key={linkIdx} className="flex items-center gap-4 bg-gray-50/50 p-2 rounded-xl group hover:bg-gray-50 transition-colors cursor-pointer">
                                            <div className="w-12 h-12 bg-[#D9D9D9] rounded-xl flex items-center justify-center text-gray-700 flex-shrink-0">
                                                <Link size={24} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate mb-0.5">{link.title}</h4>
                                                <p className="text-xs text-blue-500 font-medium truncate hover:underline">{link.domain}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'docs' && (
                    <div className="space-y-8">
                        {docsSections.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-medium text-gray-500 mb-4">{section.date}</h3>
                                <div className="space-y-4">
                                    {section.docs.map((doc, docIdx) => {
                                        const Icon = doc.icon;
                                        return (
                                            <div key={docIdx} className="border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow cursor-pointer bg-white">
                                                <div className="w-full h-32 bg-[#D9D9D9] rounded-xl mb-4"></div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${doc.color === 'blue' ? 'bg-cyan-50' : doc.color === 'green' ? 'bg-green-50' : 'bg-blue-50'}`}>
                                                            <Icon size={20} className={doc.color === 'blue' ? 'text-cyan-500' : doc.color === 'green' ? 'text-green-600' : 'text-blue-500'} />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                                                    </div>
                                                    <button className="text-gray-400 hover:text-gray-600">
                                                        <Download size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SharedMedia;
