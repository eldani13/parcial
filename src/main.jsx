import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup'; 
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Play from './pages/Play';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/play" element={<PrivateRoute><Play /></PrivateRoute>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
