import React from 'react';
import { Link } from 'react-router-dom';
import './Materiais.css';

export default function Materiais() {
  return (
    <main className="materiais-breve">

      {/* Background com logo */}
      <div className="materiais-breve__bg">
        <svg
          className="materiais-breve__logo-bg"
          viewBox="0 0 230 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#E8450A" strokeWidth="5.5" strokeLinecap="round">
            <line x1="182" y1="28" x2="196" y2="14"/>
            <line x1="192" y1="38" x2="210" y2="34"/>
            <line x1="188" y1="50" x2="204" y2="54"/>
          </g>
          <text x="16" y="108" fontFamily="Georgia,serif" fontSize="90"
            fontWeight="700" fontStyle="italic" fill="#3A7BD5" letterSpacing="-2">
            Vibe
          </text>
          <text x="12" y="172" fontFamily="'Arial Black',sans-serif" fontSize="62"
            fontWeight="900" fill="#1A7A42" letterSpacing="2">
            FEDERAL
          </text>
          <path d="M12 185 Q60 175 115 185 Q160 195 218 183"
            fill="none" stroke="#E8450A" strokeWidth="6" strokeLinecap="round"/>
        </svg>
        <div className="materiais-breve__overlay" />
      </div>

      {/* Conteúdo */}
      <div className="container materiais-breve__content">
        <span className="materiais-breve__tag">🌿 Em breve</span>
        <h1 className="materiais-breve__titulo">
          Novos materiais<br />chegando em breve.
        </h1>
        <p className="materiais-breve__texto">
          Estamos preparando conteúdos específicos para os principais
          concursos federais. Fique de olho nas novidades!
        </p>
        <div className="materiais-breve__acoes">
          <a
            href="https://wa.me/5585992223053?text=Quero saber quando os materiais estiverem disponíveis!"
            target="_blank"
            rel="noreferrer"
            className="materiais-breve__btn-primary"
          >
            💬 Avise-me quando estiver disponível
          </a>
          <Link to="/" className="materiais-breve__btn-outline">
            ← Voltar ao início
          </Link>
        </div>
      </div>

    </main>
  );
}
