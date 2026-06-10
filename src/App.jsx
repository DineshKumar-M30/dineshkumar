import { useState } from 'react';
import { Ship, List, CalendarCheck, DollarSign, HelpCircle, Search, Plus, ChevronDown, Calendar, CheckSquare, XSquare, Clock, Bell, Filter, TrendingUp, AlertTriangle, CheckCircle, XCircle, RefreshCcw, Bed } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const [activeTab, setActiveTab] = useState('bookings');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <Ship size={28} className="brand-logo" />
          <div>
            <h1>iCruise Egypt</h1>
            <span className="admin-badge">Admin Dashboard</span>
          </div>
        </div>

        <nav className="nav-menu">
          <a className={`nav-item ${activeTab === 'listings' ? 'active' : ''}`} onClick={() => setActiveTab('listings')}>
            <List size={20} className="nav-icon" />
            Listings
          </a>
          <a className={`nav-item ${activeTab === 'revenue' ? 'active' : ''}`} onClick={() => setActiveTab('revenue')}>
            <DollarSign size={20} className="nav-icon" />
            Revenue & Commission
          </a>
          <a className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>
            <CalendarCheck size={20} className="nav-icon" />
            Bookings
          </a>
          <a className={`nav-item ${activeTab === 'alerts' ? 'active' : ''}`} onClick={() => setActiveTab('alerts')}>
            <Bell size={20} className="nav-icon" />
            Alerts & Notification
          </a>
        </nav>

        <div style={{ flexGrow: 1 }}></div>

        <nav className="nav-menu">
          <a className="nav-item">
            <HelpCircle size={20} className="nav-icon" />
            Help & Support
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="search-bar">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search" />
          </div>

          <div className="header-actions">
            <button className="btn-primary">
              <Plus size={18} />
              Smart Trip Planner Setup
            </button>
            <div className="user-profile">
              <div className="avatar"></div>
              <div className="user-info">
                <span className="user-name">Easin Arafat</span>
                <span className="user-email">kumar@icruise.com</span>
              </div>
              <ChevronDown size={16} color="#64748b" />
            </div>
          </div>
        </header>

        <div className="page-content">
          {activeTab === 'bookings' && <BookingsView />}
          {activeTab === 'revenue' && <RevenueView />}
          {activeTab === 'alerts' && <AlertsView />}
          {activeTab === 'listings' && <div>Listings View (Not shown in Figma)</div>}
        </div>
      </main>
    </div>
  );
}

const mockBookingsData = [
  { id: 'BK-000123', name: 'John Doe', cruise: 'Nile Explorer', travelDate: '18 July 2026', bookDate: '01 Jun 2026', status: 'Confirmed' },
  { id: 'BK-000124', name: 'Sara Ali', cruise: 'Red Sea Pearl', travelDate: '25 July 2026', bookDate: '05 Jun 2026', status: 'Confirmed' },
  { id: 'BK-000125', name: 'Ahmed Khan', cruise: 'Med Cruise', travelDate: '02 Aug 2026', bookDate: '07 Jun 2026', status: 'Confirmed' },
  { id: 'BK-000126', name: 'John Doe', cruise: 'Nile Explorer', travelDate: '18 July 2026', bookDate: '01 Jun 2026', status: 'Pending' },
  { id: 'BK-000127', name: 'Sara Ali', cruise: 'Red Sea Pearl', travelDate: '25 July 2026', bookDate: '05 Jun 2026', status: 'Pending' },
  { id: 'BK-000128', name: 'Ahmed Khan', cruise: 'Med Cruise', travelDate: '02 Aug 2026', bookDate: '07 Jun 2026', status: 'Pending' },
  { id: 'BK-000129', name: 'John Doe', cruise: 'Nile Explorer', travelDate: '18 July 2026', bookDate: '01 Jun 2026', status: 'Cancelled' },
  { id: 'BK-000130', name: 'Sara Ali', cruise: 'Red Sea Pearl', travelDate: '25 July 2026', bookDate: '05 Jun 2026', status: 'Cancelled' },
  { id: 'BK-000131', name: 'Ahmed Khan', cruise: 'Med Cruise', travelDate: '02 Aug 2026', bookDate: '07 Jun 2026', status: 'Cancelled' },
];

function BookingsView() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [isStatusFilterOpen, setIsStatusFilterOpen] = useState(false);

  const filteredBookings = filterStatus === 'All' 
    ? mockBookingsData 
    : mockBookingsData.filter(b => b.status === filterStatus);

  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Booking Insights</h2>
        <p className="page-subtitle">Manage and view all Partner Booking Insights Details</p>
      </div>

      <div className="filters-container">
        <div className="filter-input">
          <Search size={18} color="#94a3b8" />
          <input type="text" placeholder="Search by Booking ID/ Customer Name..." />
        </div>
        
        <div className="filter-select">
          <label>Date Range</label>
          <div className="select-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} />
              Pick Date
            </div>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="filter-select">
          <label>Status:</label>
          <div style={{ position: 'relative' }}>
            <div 
              className="select-box" 
              style={{ border: '1px solid #3266ff', color: '#3266ff', cursor: 'pointer' }}
              onClick={() => setIsStatusFilterOpen(!isStatusFilterOpen)}
            >
              {filterStatus === 'All' ? 'Select an option' : filterStatus}
              <ChevronDown size={16} />
            </div>
            {isStatusFilterOpen && (
              <div className="dropdown-menu">
                {['All', 'Confirmed', 'Pending', 'Cancelled'].map(option => (
                  <div 
                    key={option} 
                    className="dropdown-item"
                    onClick={() => {
                      setFilterStatus(option);
                      setIsStatusFilterOpen(false);
                    }}
                  >
                    {option === 'All' ? 'Select an option' : option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div 
          className="stat-card stat-card-blue stat-card-horizontal" 
          style={{ cursor: 'pointer', opacity: filterStatus === 'All' ? 1 : 0.6 }}
          onClick={() => setFilterStatus('All')}
        >
          <div className="stat-icon"><Ship size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Total Bookings</span>
            <span className="stat-value">245</span>
          </div>
        </div>
        <div 
          className="stat-card stat-card-green stat-card-horizontal"
          style={{ cursor: 'pointer', opacity: filterStatus === 'All' || filterStatus === 'Confirmed' ? 1 : 0.6 }}
          onClick={() => setFilterStatus('Confirmed')}
        >
          <div className="stat-icon"><CalendarCheck size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Confirmed</span>
            <span className="stat-value">210</span>
          </div>
        </div>
        <div 
          className="stat-card stat-card-yellow stat-card-horizontal"
          style={{ cursor: 'pointer', opacity: filterStatus === 'All' || filterStatus === 'Pending' ? 1 : 0.6 }}
          onClick={() => setFilterStatus('Pending')}
        >
          <div className="stat-icon"><Clock size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Pending</span>
            <span className="stat-value">20</span>
          </div>
        </div>
        <div 
          className="stat-card stat-card-red stat-card-horizontal"
          style={{ cursor: 'pointer', opacity: filterStatus === 'All' || filterStatus === 'Cancelled' ? 1 : 0.6 }}
          onClick={() => setFilterStatus('Cancelled')}
        >
          <div className="stat-icon"><XSquare size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Cancelled</span>
            <span className="stat-value">15</span>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Cruise Name</th>
              <th>Travel date</th>
              <th>Booking Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.cruise}</td>
                <td>{booking.travelDate}</td>
                <td>{booking.bookDate}</td>
                <td>
                  <span className={`status-badge status-${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const chartData = [
  { name: 'Jan', current: 50000, previous: 85000 },
  { name: 'Feb', current: 62000, previous: 22000 },
  { name: 'Mar', current: 42000, previous: 40000 },
  { name: 'Apr', current: 102000, previous: 25000 },
  { name: 'May', current: 18000, previous: 50000 },
  { name: 'Jun', current: 18000, previous: 15000 },
  { name: 'Jul', current: 48000, previous: 70000 },
  { name: 'Aug', current: 118000, previous: 18000 },
  { name: 'Sep', current: 118000, previous: 70000 },
  { name: 'Oct', current: 68000, previous: 65000 },
  { name: 'Nov', current: 18000, previous: 102000 },
  { name: 'Dec', current: 18000, previous: 52000 },
];

function RevenueView() {
  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Revenue & Commission</h2>
        <p className="page-subtitle">Manage and view all Your Revenue & Commission Details</p>
      </div>

      <div className="filters-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="filter-input" style={{ flex: '0 1 400px' }}>
          <Search size={18} color="#94a3b8" />
          <input type="text" placeholder="Search by Booking ID/ Traveller/ Cruise Name..." />
        </div>
        
        <div className="filter-select">
          <label>Time filter:</label>
          <div className="select-box">
            This Month
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="stat-card stat-card-blue stat-card-horizontal">
          <div className="stat-icon"><CheckSquare size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Total Bookings</span>
            <span className="stat-value">245</span>
          </div>
        </div>
        <div className="stat-card stat-card-green stat-card-horizontal">
          <div className="stat-icon"><DollarSign size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Total Revenue</span>
            <span className="stat-value">$125,000</span>
          </div>
        </div>
        <div className="stat-card stat-card-red stat-card-horizontal">
          <div className="stat-icon"><DollarSign size={24} /></div>
          <div className="stat-content">
            <span className="stat-title">Commission Earned</span>
            <span className="stat-value">$18,500</span>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <h3 className="chart-title">Revenue Trends</h3>
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip />
              <Area type="monotone" dataKey="current" stroke="#22c55e" fill="#dcfce7" fillOpacity={0.5} strokeWidth={2} dot={{ r: 4, fill: "#fff", stroke: "#22c55e", strokeWidth: 2 }} />
              <Area type="monotone" dataKey="previous" stroke="#3b82f6" fill="#e2eafc" fillOpacity={0.5} strokeWidth={2} dot={{ r: 4, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', fontSize: '12px', color: '#64748b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#e2eafc', border: '2px solid #3b82f6' }}></div>
            Previous Period ($110,000)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#dcfce7', border: '2px solid #22c55e' }}></div>
            Current Period ($125,000)
          </div>
        </div>
      </div>

      <div className="commission-summary">
        <h3 className="commission-title">Commission Summary</h3>
        <div className="commission-grid">
          <div className="commission-card commission-card-yellow">
            <div className="stat-content">
              <span className="stat-title">Total Commission Earned</span>
              <span className="stat-value" style={{color: '#ca8a04'}}>$18,500</span>
            </div>
          </div>
          <div className="commission-card commission-card-green">
            <div className="stat-content">
              <span className="stat-title">Booking Eligible Commission</span>
              <span className="stat-value" style={{color: '#16a34a'}}>220</span>
            </div>
          </div>
          <div className="commission-card commission-card-red">
            <div className="stat-content">
              <span className="stat-title">Pending Commission</span>
              <span className="stat-value" style={{color: '#dc2626'}}>$2,300</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function AlertsView() {
  const [activeAlertTab, setActiveAlertTab] = useState('low-availability'); // 'low-availability', 'high-demand', 'notifications'
  const [isTimeFilterOpen, setIsTimeFilterOpen] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('All Time');

  return (
    <>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ backgroundColor: '#3266ff', color: 'white', borderRadius: '12px', padding: '12px', display: 'flex' }}>
          <Bell size={28} />
        </div>
        <div>
          <h2 className="page-title" style={{ marginBottom: '4px' }}>Alerts & Notification</h2>
          <p className="page-subtitle">Stay updated with your booking alerts and system notifications</p>
        </div>
      </div>

      <div className="filters-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: 600, fontSize: '14px' }}>
          <Filter size={16} /> Filters:
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div className="select-box" style={{ background: '#3266ff', color: 'white', border: 'none', width: '200px' }}>
            ALL
            <ChevronDown size={16} />
          </div>
          <div style={{ position: 'relative' }}>
            <div 
              className="select-box" 
              style={{ background: '#1e293b', color: 'white', border: 'none', width: '200px', cursor: 'pointer' }}
              onClick={() => setIsTimeFilterOpen(!isTimeFilterOpen)}
            >
              {selectedTimeFilter}
              <ChevronDown size={16} />
            </div>
            {isTimeFilterOpen && (
              <div className="dropdown-menu">
                {['All Time', 'Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days'].map(option => (
                  <div 
                    key={option} 
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedTimeFilter(option);
                      setIsTimeFilterOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="alert-summary-container">
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Alert Summary</h3>
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 0 }}>
          <div 
            className="stat-card stat-card-orange stat-card-horizontal"
            style={{ cursor: 'pointer', border: activeAlertTab === 'low-availability' ? '2px solid #f97316' : '1px solid #fed7aa', opacity: activeAlertTab === 'low-availability' ? 1 : 0.6 }}
            onClick={() => setActiveAlertTab('low-availability')}
          >
            <div className="stat-icon" style={{ background: '#f97316', color: 'white' }}><AlertTriangle size={24} /></div>
            <div className="stat-content">
              <span className="stat-title" style={{ color: '#1e293b' }}>Low Availability</span>
              <span className="stat-value" style={{ color: '#f97316' }}>3</span>
            </div>
          </div>
          <div 
            className="stat-card stat-card-purple stat-card-horizontal"
            style={{ cursor: 'pointer', border: activeAlertTab === 'high-demand' ? '2px solid #a855f7' : '1px solid #e9d5ff', opacity: activeAlertTab === 'high-demand' ? 1 : 0.6 }}
            onClick={() => setActiveAlertTab('high-demand')}
          >
            <div className="stat-icon" style={{ background: '#a855f7', color: 'white' }}><TrendingUp size={24} /></div>
            <div className="stat-content">
              <span className="stat-title" style={{ color: '#1e293b' }}>High Demand</span>
              <span className="stat-value" style={{ color: '#a855f7' }}>5</span>
            </div>
          </div>
          <div 
            className="stat-card stat-card-blue stat-card-horizontal"
            style={{ cursor: 'pointer', border: activeAlertTab === 'notifications' ? '2px solid #3b82f6' : '1px solid #bfdbfe', opacity: activeAlertTab === 'notifications' ? 1 : 0.6 }}
            onClick={() => setActiveAlertTab('notifications')}
          >
            <div className="stat-icon" style={{ background: '#3b82f6', color: 'white' }}><Bell size={24} /></div>
            <div className="stat-content">
              <span className="stat-title" style={{ color: '#1e293b' }}>Booking Notification</span>
              <span className="stat-value" style={{ color: '#3b82f6' }}>12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="alert-details-container">
        {activeAlertTab === 'low-availability' && (
          <>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={20} color="#f97316" /> Low Availability Alerts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="alert-item alert-item-orange">
                <Bed size={16} color="#f97316" /> 
                <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>Nile Explorer</strong><br/><span style={{ color: '#64748b', fontSize: '14px' }}>Only 5 cabins remaining</span></div>
              </div>
              <div className="alert-item alert-item-orange">
                <Bed size={16} color="#f97316" /> 
                <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>Red Sea Pearl</strong><br/><span style={{ color: '#64748b', fontSize: '14px' }}>Only 2 cabins left</span></div>
              </div>
              <div className="alert-item alert-item-orange">
                <Bed size={16} color="#f97316" /> 
                <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>Mediterranean Star</strong><br/><span style={{ color: '#64748b', fontSize: '14px' }}>Near full occupancy</span></div>
              </div>
            </div>
          </>
        )}
        {activeAlertTab === 'high-demand' && (
          <>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={20} color="#a855f7" /> High Demand Alerts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="alert-item alert-item-purple">
                <div className="bullet"></div> 
                <span style={{ color: '#1e293b', fontWeight: 500 }}>Nile Explorer bookings increased by 30%</span>
              </div>
              <div className="alert-item alert-item-purple">
                <div className="bullet"></div> 
                <span style={{ color: '#1e293b', fontWeight: 500 }}>August sailings trending rapidly</span>
              </div>
              <div className="alert-item alert-item-purple">
                <div className="bullet"></div> 
                <span style={{ color: '#1e293b', fontWeight: 500 }}>Luxury cabins in high demand</span>
              </div>
            </div>
          </>
        )}
        {activeAlertTab === 'notifications' && (
          <>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={20} color="#3b82f6" /> Booking Activity Notification
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="alert-item alert-item-green" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <CheckCircle size={24} color="#22c55e" />
                  <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>BK-000130</strong><br/><span style={{ color: '#22c55e', fontSize: '14px', fontWeight: 500 }}>New Booking Confirmed</span></div>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Wednesday at 5 PM</span>
              </div>
              <div className="alert-item alert-item-red" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <XCircle size={24} color="#ef4444" />
                  <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>BK-000131</strong><br/><span style={{ color: '#ef4444', fontSize: '14px', fontWeight: 500 }}>Booking Cancelled</span></div>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Wednesday at 1 PM</span>
              </div>
              <div className="alert-item alert-item-blue" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <DollarSign size={24} color="#3b82f6" />
                  <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>BK-000132</strong><br/><span style={{ color: '#3b82f6', fontSize: '14px', fontWeight: 500 }}>Payment Completed</span></div>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Tuesday at 11 AM</span>
              </div>
              <div className="alert-item alert-item-orange" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <RefreshCcw size={24} color="#f97316" />
                  <div style={{ lineHeight: '1.4' }}><strong style={{ color: '#1e293b' }}>BK-000133</strong><br/><span style={{ color: '#f97316', fontSize: '14px', fontWeight: 500 }}>Refund Initiated</span></div>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Monday at 9 AM</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
