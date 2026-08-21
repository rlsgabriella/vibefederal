import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">

      {/* Vídeo como background */}
      <video
        className="hero__bg-video"
        src="/hero-video.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay escuro por cima do vídeo */}
      <div className="hero__overlay" />

      {/* Conteúdo centralizado */}
      <div className="container hero__content">

        <div className="badge-urgencia">
          <span className="badge-urgencia__dot" />
          +6 MIL PESSOAS JÁ ESTUDAM COM A VIBE FEDERAL
        </div>

        <h1 className="hero__title">
          Material estratégico para{' '}
          <span className="hero__title-highlight">Docente e TAE</span>{' '}
          nos concursos federais.
        </h1>

        <p className="hero__subtitle">
          A legislação mais cobrada nos editais, organizada em mapas mentais
          visuais e didáticos pensados pra otimizar seu tempo e te levar
          mais longe na preparação.
        </p>

        <div className="hero__actions">
          <a
            href="https://wa.me/5585992223053"
            target="_blank"
            rel="noreferrer"
            className="btn hero__btn-primary"
          >
            Ver Materiais Disponíveis →
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
    </section>
  );
}
