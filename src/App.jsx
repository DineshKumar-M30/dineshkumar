import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
import Preferences from './pages/Dashboard/Preferences'

import Home from './pages/Home'
import About from './pages/About'
import Catalog from './pages/Catalog'
import ProductDetails from './pages/ProductDetails'
import NewsPage from './pages/NewsPage'
import NewsDetails from './pages/NewsDetails'
import ContactPage from './pages/ContactPage'
import TicTacToe from './pages/TicTacToe'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Website Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<TicTacToe />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/dealers" element={<NewsDetails />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard-link" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<div className="p-10 text-center text-gray-500">Analytics Module Coming Soon</div>} />
          <Route path="customers" element={<div className="p-10 text-center text-gray-500">Customers Module Coming Soon</div>} />
          <Route path="settings" element={<Preferences />} />
        </Route>
      </Routes>
    </Router>
  )
}
