import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Materiais from './pages/Materiais.jsx';
import Dicas from './pages/Dicas.jsx';
import Sobre from './pages/Sobre.jsx';
import TrilhaDetail from './pages/TrilhaDetail.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/materiais"    element={<Materiais />} />
        <Route path="/dicas"        element={<Dicas />} />
        <Route path="/sobre"        element={<Sobre />} />
        {/* Trilhas individuais */}
        <Route path="/:id"          element={<TrilhaDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
