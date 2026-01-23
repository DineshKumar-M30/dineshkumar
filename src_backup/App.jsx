import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import ProductStock from './pages/ProductStock';
import Pricing from './pages/Pricing';
import Todo from './pages/Todo';
import OrderLists from './pages/OrderLists';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';
import UiElements from './pages/UiElements';
import Team from './pages/Team';
import TablePage from './pages/Table';
import PlaceholderPage from './components/PlaceholderPage';

const initialProductsData = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "120.00",
    image: "https://i.pinimg.com/736x/c7/2a/28/c72a287af1752c8073a4d084c9dd31f4.jpg",
    reviews: 131,
    isFavorite: false
  },
  {
    id: 2,
    name: "Air-Max-270",
    price: "60.00",
    image: "https://i.pinimg.com/1200x/79/64/06/7964062fa42154d7d2e5ff20739f96ac.jpg",
    reviews: 45,
    isFavorite: true
  },
  {
    id: 3,
    name: "Minimalist Chair",
    price: "85.00",
    image: "https://i.pinimg.com/1200x/d5/e5/aa/d5e5aacf58d69b6efb5b64f96d3ae314.jpg",
    reviews: 210,
    isFavorite: false
  },
  {
    id: 4,
    name: "Amazfit Vip",
    price: "70.25",
    image: "https://i.pinimg.com/736x/bf/e4/f6/bfe4f6efda6d48e5cab4619e8a58512b.jpg",
    reviews: 131,
    isFavorite: true
  },
  {
    id: 5,
    name: "Iphone 13 Pro",
    price: "91,999.00",
    image: "https://i.pinimg.com/1200x/05/8b/32/058b329b141fa4abddc974f01eb691a2.jpg",
    reviews: 64,
    isFavorite: false
  },
  {
    id: 6,
    name: "Camera Tripod",
    price: "50.00",
    image: "https://i.pinimg.com/736x/20/67/f0/2067f08538378db275b704aaabeb7d5d.jpg",
    reviews: 63,
    isFavorite: true
  },
  {
    id: 7,
    name: "Beats Headphone 2019",
    price: "89.00",
    image: "https://i.pinimg.com/736x/87/7f/24/877f249c2c2df0c19dc018a0e74c50bd.jpg",
    reviews: 120,
    isFavorite: false
  },
  {
    id: 8,
    name: "Macbook Pro",
    price: "999.00",
    image: "https://i.pinimg.com/1200x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg",
    reviews: 450,
    isFavorite: false
  },
  {
    id: 9,
    name: "Gaming Controller",
    price: "55.00",
    image: "https://i.pinimg.com/1200x/e1/0f/c3/e10fc3b40a282173d7504b0d3c6c990c.jpg",
    reviews: 80,
    isFavorite: true
  }
];

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');
  const [products, setProducts] = useState(initialProductsData);

  const toggleFavorite = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    ));
  };

  const favoriteProducts = products.filter(product => product.isFavorite);

  const renderContent = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Products':
        return <Products products={products} toggleFavorite={toggleFavorite} />;
      case 'Favorites':
        return <Favorites products={favoriteProducts} toggleFavorite={toggleFavorite} />;
      case 'Inbox':
        return <Inbox />;
      case 'Calender': // Matching Sidebar label 'Calender'
        return <Calendar />;
      case 'Product Stock':
        return <ProductStock />;
      case 'Order Lists':
        return <OrderLists />;
      case 'Pricing':
        return <Pricing />;
      case 'To-Do':
        return <Todo />;
      case 'Contact':
        return <Contact />;
      case 'Invoice':
        return <Invoice />;
      case 'UI Elements':
        return <UiElements />;
      case 'Team':
        return <Team />;
      case 'Table':
        return <TablePage />;
      default:
        return <PlaceholderPage title={currentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-outfit">
      {/* Sidebar */}
      <Sidebar activeItem={currentView} setActiveItem={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
