import React from 'react';
import { Link } from 'react-router-dom';
import LogoVibeFederal from '../assets/LogoVibeFederal.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Vibe Federal">
            <LogoVibeFederal height={44} />
          </Link>
          <p className="footer__tagline">
            Materiais visuais e estratégicos para quem estuda com leveza e foco.
            Transformando a preparação para concursos federais em algo mais leve e eficiente.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com/vibefederal" target="_blank" rel="noreferrer" className="footer__social-link">
              📸 Instagram
            </a>
            <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="footer__social-link footer__social-link--wa">
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Materiais</h4>
          <ul>
            <li><Link to="/ifc">Trilha Legal – IFC</Link></li>
            <li><Link to="/ifpi">Trilha Legal – IFPI</Link></li>
            <li><Link to="/ifce">Trilha Legal – IFCE</Link></li>
            <li><Link to="/ifal">Trilha Legal – IFAL</Link></li>
            <li><Link to="/panorama-tae">Panorama Legal – TAE</Link></li>
            <li><Link to="/materiais">Ver todos →</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/disciplinas">Disciplinas</Link></li>
            <li><Link to="/dicas">Dicas de Estudo</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
            <li><a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer">Contato</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2025 Vibe Federal – Todos os direitos reservados</p>
          <p>Feito com 🌿 para quem estuda com leveza</p>
        </div>
      </div>
    </footer>
  );
}
