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
          +6 MIL MATERIAIS VENDIDOS
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
          Conteúdos do edital transformados em materiais visuais, organizados
          por concurso e pensados para facilitar seu estudo. Feito para quem
          trabalha, tem casa, tem vida e não pode perder o fim de semana
          montando material.
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


      </div>
    </section>
  );
}
