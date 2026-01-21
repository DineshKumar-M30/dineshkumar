import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <DashboardPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
