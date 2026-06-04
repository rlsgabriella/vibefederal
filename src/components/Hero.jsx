import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="container hero__inner">
        <div className="hero__content fade-up">
          <div className="badge" style={{ marginBottom: 20 }}>
            🌿 Estude com leveza e estratégia
          </div>

          <h1 className="hero__title">
            Estude para{' '}
            <span className="hero__title-highlight">Institutos e<br />Universidades</span>{' '}
            Federais com resultado.
          </h1>

          <p className="hero__subtitle">
            Mapas mentais no padrão Vibe Federal para você dominar o edital com foco,
            organização e tranquilidade na preparação.
          </p>

          <div className="hero__actions">
            <Link to="/materiais" className="btn btn-green hero__btn-primary">
              Ver Materiais Disponíveis →
            </Link>
            <a
              href="https://wa.me/5585992223053"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline hero__btn-outline"
            >
              💬 Fale conosco
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>5+</strong>
              <span>Materiais prontos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>12+</strong>
              <span>Concursos cobertos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>🌿</strong>
              <span>Método Vibe Federal</span>
            </div>
          </div>
        </div>

        <div className="hero__visual fade-up" style={{ animationDelay: '150ms' }}>
          <div className="hero__card-mock">
            <div className="hero__mock-header" style={{ background: 'var(--green)' }}>
              <span className="hero__mock-label">TRILHA LEGAL</span>
              <span className="hero__mock-sigla">IFCE</span>
            </div>
            <div className="hero__mock-body">
              <div className="hero__mock-line hero__mock-line--wide" />
              <div className="hero__mock-line" />
              <div className="hero__mock-line hero__mock-line--medium" />
              <div className="hero__mock-node">
                <div className="hero__mock-dot" style={{ background: '#1A8CCC' }} />
                <div className="hero__mock-branch">
                  <div className="hero__mock-line hero__mock-line--sm" />
                  <div className="hero__mock-line hero__mock-line--sm" />
                </div>
              </div>
              <div className="hero__mock-node">
                <div className="hero__mock-dot" style={{ background: '#C4007A' }} />
                <div className="hero__mock-branch">
                  <div className="hero__mock-line hero__mock-line--sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <div className="hero__tag hero__tag--1">⚖️ Direito Constitucional</div>
          <div className="hero__tag hero__tag--2">🏛️ Adm. Pública</div>
          <div className="hero__tag hero__tag--3">📋 Lei 8.112/90</div>
        </div>
      </div>
    </section>
  );
}
