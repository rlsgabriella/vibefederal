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
          EDITAL PUBLICADO · PROVA EM BREVE
        </div>

        <h1 className="hero__title">
          Estude para{' '}
          <span className="hero__title-highlight">Institutos e<br />Universidades</span>{' '}
          Federais com resultado.
        </h1>

        <p className="hero__subtitle">
          Mapas mentais no padrão Vibe Federal para você dominar o
          edital com foco, organização e tranquilidade na preparação.
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
          <a
            href="https://wa.me/5585992223053"
            target="_blank"
            rel="noreferrer"
            className="btn hero__btn-outline"
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
    </section>
  );
}
