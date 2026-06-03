import React from 'react';
import { Link } from 'react-router-dom';
import './TrilhaCard.css';

export default function TrilhaCard({ trilha, delay = 0 }) {
  const { sigla, nome, subtitulo, cargo, cor, corBtn, descricaoCurta, descricaoLonga, tag, href, destaque } = trilha;

  return (
    <article
      className={`trilha-card ${destaque ? 'trilha-card--destaque' : ''}`}
      style={{ '--card-accent': cor, animationDelay: `${delay}ms` }}
    >
      {destaque && <div className="trilha-card__badge-destaque">⭐ Mais vendido</div>}

      <div className="trilha-card__header" style={{ background: cor }}>
        <div className="trilha-card__header-content">
          <p className="trilha-card__header-label">TRILHA LEGAL</p>
          <h2 className="trilha-card__sigla">{sigla}</h2>
          {cargo && <span className="trilha-card__cargo">{cargo}</span>}
        </div>
        <div className="trilha-card__header-logo">🌿</div>
      </div>

      <div className="trilha-card__body">
        <h3 className="card-nome">{nome}</h3>
        <p className="card-subtitulo">{subtitulo}</p>
        <p className="card-desc-curta">{descricaoCurta}</p>
        <p className="card-desc-longa">{descricaoLonga}</p>
        <p className="card-tag">{tag}</p>
      </div>

      <div className="trilha-card__footer">
        <Link to={href} className={`btn ${corBtn} trilha-card__btn`}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
