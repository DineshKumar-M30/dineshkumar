import React from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import Profile from './components/Profile';

import CallLog from './components/CallLog';
import UpdatesList from './components/UpdatesList';
import StatusViewer from './components/StatusViewer';
import StatusEditor from './components/StatusEditor';
import ContactInfo from './components/ContactInfo';
import Settings from './components/Settings';
import WallpaperPreview from './components/WallpaperPreview';
import conversation from "../src/assets/conversation.png"

const INITIAL_CHATS = [
  { id: 1, name: "Animal Kingdom", message: "You: thnx!", time: "9:36", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", pinned: true, status: "active", type: "group", members: "Pink Panda, Turtle, 212 others" },
  { id: 2, name: "Dog Hat", message: "It's so quite outside 😐", time: "9:36", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", unread: 2, pinned: true, status: "active" },
  { id: 3, name: "Cute Turtle", message: "That 's it. Goodbye!", time: "9:36", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", unread: 3, status: "active" },
  { id: 4, name: "Cool spirit", message: "Look what I found", time: "9:36", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", status: "inactive" },
  { id: 5, name: "strange cat", message: "You: Hi, sorry to bother you..", time: "9:36", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", status: "active", hasDropdown: true },
  { id: 6, name: "Fire Fox", message: "What does the fox says?", time: "9:36", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", status: "active" },
];

function App() {
  const [activeView, setActiveView] = React.useState('chatList');
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [selectedUpdate, setSelectedUpdate] = React.useState(null);
  const [isEditingStatus, setIsEditingStatus] = React.useState(false);
  const [showContactInfo, setShowContactInfo] = React.useState(false);
  const [chats, setChats] = React.useState(INITIAL_CHATS);

  // New state for settings view coordination
  const [activeSettingsView, setActiveSettingsView] = React.useState('main');
  const [wallpaperColor, setWallpaperColor] = React.useState('#4a4a6a');

  const handleCreateGroup = (groupData) => {
    // groupData contains { name, members }
    // Format members names string
    const memberNames = groupData.members ? groupData.members.map(m => m.name).join(', ') : '';

    const newChat = {
      id: Date.now(),
      name: groupData.name || "New Group",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", // Using a default group avatar
      message: "Group created",
      time: "Just now",
      pinned: true,
      type: 'group',
      unread: 0,
      status: 'active',
      members: memberNames
    };
    setChats(prev => [newChat, ...prev]);
    setSelectedChat(newChat);
  };

  const renderSidePanel = () => {
    switch (activeView) {
      case 'chatList':
        return <ChatList
          chats={chats}
          onChatSelect={setSelectedChat}
          selectedChatId={selectedChat?.id}
          onCreateGroup={handleCreateGroup}
          onNavigate={setActiveView}
        />;
      case 'updates':
        return <UpdatesList
          onBack={() => {
            setActiveView('chatList');
            setSelectedUpdate(null);
            setIsEditingStatus(false);
          }}
          onSelectUpdate={setSelectedUpdate}
          onEditUpdate={() => {
            setSelectedUpdate(null);
            setIsEditingStatus(true);
          }}
        />;
      case 'callLog':
        return <CallLog />;
      case 'profile':
        return <Profile onBack={() => setActiveView('chatList')} />;
      case 'settings':
        return <Settings
          onBack={() => setActiveView('chatList')}
          onSettingsViewChange={setActiveSettingsView}
          onWallpaperChange={setWallpaperColor}
        />;
      default:
        return <ChatList
          chats={chats}
          onChatSelect={setSelectedChat}
          selectedChatId={selectedChat?.id}
          onCreateGroup={handleCreateGroup}
          onNavigate={setActiveView}
        />;
    }
  };

  return (
    <div className="flex w-full h-full bg-white font-sans overflow-hidden relative">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      {renderSidePanel()}

      {activeView === 'updates' ? (
        isEditingStatus ? (
          <StatusEditor onClose={() => setIsEditingStatus(false)} />
        ) : selectedUpdate ? (
          <StatusViewer
            status={selectedUpdate}
            onClose={() => setSelectedUpdate(null)}
          />
        ) : (
          <div className="flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
            <div className="w-12 h-12 border-4 border-gray-200 border-dashed rounded-full animate-spin-slow mb-4" style={{ animationDuration: '3s' }}></div>
            <p className="text-gray-900 font-bold text-sm">Click on an update to view</p>
          </div>
        )
      ) : activeView === 'settings' ? (
        activeSettingsView === 'wallpaper' ? (
          <WallpaperPreview color={wallpaperColor} />
        ) : (
          <div className="flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
            <div className="mb-8">
              <img
                src={conversation}
                alt="Settings Illustration"
                className="w-64 h-64 object-contain opacity-80"
              />
            </div>
            <p className="text-gray-900 font-bold text-sm">Select a conversation or start a <span className="text-blue-500 cursor-pointer">new one</span></p>
          </div>
        )
      ) : (
        <>
          <ChatWindow
            chat={selectedChat}
            onProfileClick={() => setShowContactInfo(true)}
          />
          {showContactInfo && (
            <ContactInfo
              chat={selectedChat}
              onClose={() => setShowContactInfo(false)}
            />
          )}
        </>
      )}
    </div>
  )
}

export default App;
