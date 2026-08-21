import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { trilhas } from '../data/index.js';
import './TrilhasCarousel.css';

export default function TrilhasCarousel() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.tc__card');
    const cardW = card ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: dir * cardW, behavior: 'smooth' });
  };

  return (
    <div className="trilhas-carousel">

      {/* Botão anterior */}
      <button
        className="tc__nav tc__nav--prev"
        onClick={() => scroll(-1)}
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Track deslizante */}
      <div className="tc__track" ref={trackRef}>
        {trilhas.map((t) => (
          <div
            key={t.id}
            className="tc__card"
            style={{ '--card-cor': t.cor }}
          >
            {t.destaque && (
              <div className="tc__destaque">⭐ Mais vendido</div>
            )}

            {/* Header colorido */}
            <div className="tc__header" style={{ background: t.cor }}>
              <div>
                <p className="tc__label">TRILHA LEGAL</p>
                <h3 className="tc__sigla">{t.sigla}</h3>
                {t.cargo && (
                  <span className="tc__cargo">{t.cargo}</span>
                )}
              </div>
              <span className="tc__leaf">🌿</span>
            </div>

            {/* Body */}
            <div className="tc__body">
              <h4 className="tc__nome">{t.nome}</h4>
              <p className="tc__sub">{t.subtitulo?.toUpperCase()}</p>
              <p className="tc__desc">{t.descricaoCurta}</p>
              <p className="tc__desc2">{t.descricaoLonga}</p>
              <p className="tc__tag">{t.tag}</p>
              <Link
                to={t.href}
                className="tc__btn"
                style={{
                  background: t.cor,
                  color: t.cor === '#C8A200' ? '#1a1a1a' : '#fff'
                }}
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Botão próximo */}
      <button
        className="tc__nav tc__nav--next"
        onClick={() => scroll(1)}
        aria-label="Próximo"
      >
        →
      </button>

      <p className="tc__hint">Arraste para o lado ou use as setas</p>
    </div>
  );
}
