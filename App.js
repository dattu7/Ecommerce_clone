import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import AvailableProducts from './components/AvailableProducts';
import UpcomingProducts from './components/UpcomingProducts';
import { useState } from 'react';
import CartPage from './components/CartPage';

const App = () => {
  
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/available-products" element={<AvailableProducts />} />
          <Route path="/upcoming-products" element={<UpcomingProducts />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
