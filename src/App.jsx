import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

import Catalog from './pages/Catalog'
import ProductDetails from './pages/ProductDetails'
import NewsPage from './pages/NewsPage'
import DealersPage from './pages/DealersPage'
import NewsDetails from './pages/NewsDetails'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/dealers" element={<NewsDetails />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
