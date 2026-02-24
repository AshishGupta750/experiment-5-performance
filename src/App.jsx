import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard')); // Updated
const ProductList = lazy(() => import('./pages/ProductList'));

function App() {
  return (
    <Router>
      {/* Simple Navigation Bar */}
      <nav style={{ 
        padding: '15px 20px', 
        background: '#333', 
        color: 'white',
        display: 'flex',
        gap: '20px'
      }}>
        <div style={{ fontWeight: 'bold', marginRight: 'auto' }}>Experiment 5</div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products (Virtualized)</Link>
      </nav>

      {/* Main Content Area */}
      <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;