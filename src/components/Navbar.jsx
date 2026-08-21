import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoVibe from '../assets/logo-vibe.png';
import './Navbar.css';

const navLinks = [
  { label: 'Início',       href: '/' },
  { label: 'Materiais',    href: '/materiais' },
  { label: 'Sobre',        href: '/sobre' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={goTop} aria-label="Vibe Federal, voltar ao início">
          <img src={logoVibe} alt="Vibe Federal" style={{ height: 42 }} />
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {navLinks.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`navbar__link ${location.pathname === l.href ? 'navbar__link--active' : ''}`}
              onClick={() => { if (l.href === '/') goTop(); }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
