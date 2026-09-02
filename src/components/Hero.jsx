import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__bg-video"
        src="/hero-video.mov"
        autoPlay loop muted playsInline preload="auto"
      />
      <div className="hero__overlay" />
      <div className="container hero__content">

        <div className="badge-urgencia">
          <span className="badge-urgencia__dot" />
          +6 MIL PESSOAS JÁ ESTUDAM COM A VIBE FEDERAL
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line1">
            Você não tem tempo de garimpar material.
          </span>
          <span className="hero__title-highlight">
            A gente já garimpou.
          </span>
        </h1>

        <p className="hero__subtitle">
          Legislação, língua portuguesa e conhecimentos pedagógicos em mapas
          visuais, organizados por concurso e recortados do edital. Feito pra
          quem dá aula o dia todo, tem casa, tem vida — e não pode perder fim
          de semana montando material.
        </p>

        <div className="hero__actions">
          <a href="#catalogo" className="hero__btn-primary">
            Ver materiais do meu concurso →
          </a>
          <a
            href="https://wa.me/5585992223053"
            target="_blank"
            rel="noreferrer"
            className="hero__btn-outline"
          >
            💬 Fale conosco
          </a>
        </div>

        <div className="hero__trust">
          <span>+6 mil alunos</span>
          <span className="hero__trust-dot">·</span>
          <span>Atualizado conforme o edital</span>
          <span className="hero__trust-dot">·</span>
          <span>Acesso imediato em PDF</span>
        </div>

      </div>
    </section>
  );
}
