import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Products from './Staff/products';
import Dashboard from './Staff/Dashboard';
import StaffNavbar from './Staff/StaffNavbar';


function App() {
  return (
    <div>
      <StaffNavbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
