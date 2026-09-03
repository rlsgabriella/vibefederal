import React from 'react';
import { trilhas } from '../data/index.js';
import './Catalogo.css';

export default function Catalogo() {
  return (
    <section className="catalogo" id="catalogo">
      <div className="container">

        <p className="section-eyebrow">— ENCONTRE SEU CONCURSO</p>
        <h2 className="catalogo__titulo">Ache o seu e comece hoje.</h2>
        <p className="catalogo__sub">
          Cada trilha cobre uma matéria do seu edital: Legal para legislação,
          Pedagógica para conhecimentos pedagógicos. Escolha pelo seu
          concurso e leve o material pronto.
        </p>

        <div className="catalogo__grid">
          {trilhas.map(t => (
            <div
              key={t.id}
              className={`cat__card ${t.emBreve ? 'cat__card--breve' : ''} ${t.destaque ? 'cat__card--destaque' : ''}`}
              style={{ '--c': t.cor }}
            >
              {t.destaque && (
                <div className="cat__badge">⭐ Mais vendido</div>
              )}
              {t.seloExtra && (
                <div className="cat__badge cat__badge--extra">{t.seloExtra}</div>
              )}
              {t.emBreve && (
                <div className="cat__badge cat__badge--breve">Em breve</div>
              )}

              <div className="cat__header" style={{ background: t.emBreve ? '#E8EBF0' : t.cor }}>
                <div>
                  <p className="cat__label" style={{ color: t.emBreve ? '#8A94A3' : 'rgba(255,255,255,0.75)' }}>
                    {t.tag.toUpperCase()}
                  </p>
                  <h3 className="cat__sigla" style={{ color: t.emBreve ? '#6B7A8D' : 'white' }}>
                    {t.sigla}
                  </h3>
                  {t.cargo && (
                    <span className="cat__cargo" style={{
                      background: t.emBreve ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.15)',
                      color: t.emBreve ? '#6B7A8D' : 'rgba(255,255,255,0.9)',
                    }}>
                      {t.cargo}
                    </span>
                  )}
                </div>
                <span className="cat__leaf" style={{ opacity: t.emBreve ? 0.2 : 0.4 }}>🌿</span>
              </div>

              <div className="cat__body">
                <p className="cat__sub">{t.subtitulo.toUpperCase()}</p>
                <p className="cat__desc">{t.descricaoCurta}</p>
                <a
                  href={t.href}
                  className="cat__btn"
                  style={{
                    background: t.emBreve ? '#E8EBF0' : t.cor,
                    color: t.emBreve ? '#6B7A8D' : t.corTextoBtn,
                  }}
                  {...(t.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {t.emBreve ? 'Entre na lista de espera' : '→ Ver material'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
