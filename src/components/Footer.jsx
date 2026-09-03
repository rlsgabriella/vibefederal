import React from "react";
import { Link } from "react-router-dom";
import logoVibeBranca from "../assets/logo-vibe-branca.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Vibe Federal">
            <img
              src={logoVibeBranca}
              alt="Vibe Federal"
              style={{ height: 44 }}
            />
          </Link>
          <p className="footer__tagline">
           Materiais visuais e organizados por concurso para fazer seu estudo render mais.
          </p>
          <div className="footer__social">
            <a
              href="https://instagram.com/vibefederal"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              📸 Instagram
            </a>
            <a
              href="https://wa.me/5585992223053"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link footer__social-link--wa"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* <div className="footer__col">
          <h4>Materiais</h4>
          <ul className="footer__col-list">
            <li>
              <a href="https://vibefederal.com.br/ifsc/" target="_blank" rel="noreferrer">
                Trilha Legal — IFSC
              </a>
            </li>
            <li>
              <a href="https://vibefederal.com.br/tp-ifsc/" target="_blank" rel="noreferrer">
                Trilha Pedagógica — IFSC
              </a>
            </li>
            <li>
              <a href="https://vibefederal.com.br/tlseducce/" target="_blank" rel="noreferrer">
                Trilha — SEDUC-CE
              </a>
            </li>
            <li>
              <a href="https://vibefederal.com.br/ifsuldeminas/" target="_blank" rel="noreferrer">
                Trilha Legal — IFSULDEMINAS
              </a>
            </li>
            <li>
              <a href="https://vibefederal.com.br/ifpi/" target="_blank" rel="noreferrer">
                Trilha Legal — IFPI
              </a>
            </li>
          </ul>
        </div> */}

        <div className="footer__col">
          <h4>Navegação</h4>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/materiais">Ver todos os materiais →</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li>
              <a
                href="https://wa.me/5585992223053"
                target="_blank"
                rel="noreferrer"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Vibe Federal. Todos os direitos reservados.</p>
          <p>🌿 A gente organiza o material. Você segue estudando.</p>
        </div>
      </div>
    </footer>
  );
}
