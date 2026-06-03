import React, { useState } from 'react';
import { disciplinas } from '../data/index.js';
import './Disciplinas.css';
import './Materiais.css';

export default function Disciplinas() {
  const [ativa, setAtiva] = useState(null);

  return (
    <main>
      <div className="page-hero page-hero--blue">
        <div className="container">
          <div className="badge" style={{ marginBottom: 16 }}>📚 Por disciplina</div>
          <h1>Materiais por Disciplina</h1>
          <p>
            Prefere estudar por tema? Aqui você encontra mapas mentais organizados
            por disciplina, para complementar sua preparação.
          </p>
        </div>
      </div>

      <div className="container page-content">
        {/* Filtros rápidos */}
        <div className="filtros" style={{ marginBottom: 40 }}>
          <button
            className={`filtro-btn ${ativa === null ? 'filtro-btn--active' : ''}`}
            onClick={() => setAtiva(null)}
          >
            Todas
          </button>
          {disciplinas.map(d => (
            <button
              key={d.id}
              className={`filtro-btn ${ativa === d.id ? 'filtro-btn--active' : ''}`}
              style={ativa === d.id ? { background: d.cor, borderColor: d.cor } : {}}
              onClick={() => setAtiva(ativa === d.id ? null : d.id)}
            >
              {d.icone} {d.nome}
            </button>
          ))}
        </div>

        <div className="disciplinas-grid">
          {disciplinas
            .filter(d => ativa === null || d.id === ativa)
            .map((disc, i) => (
            <div
              key={disc.id}
              className="disciplina-card fade-up"
              style={{ '--disc-cor': disc.cor, animationDelay: `${i * 60}ms` }}
            >
              {/* Header */}
              <div className="disciplina-card__header">
                <span className="disciplina-card__icone">{disc.icone}</span>
                <div>
                  <h3 className="disciplina-card__nome">{disc.nome}</h3>
                  <p className="disciplina-card__desc">{disc.descricao}</p>
                </div>
              </div>

              {/* Materiais */}
              <div className="disciplina-card__materiais">
                {disc.materiais.map((m, j) => (
                  <div key={j} className="material-item">
                    <div className="material-item__info">
                      <span className="material-item__tipo">{m.tipo}</span>
                      {m.novo && <span className="material-item__novo">Novo</span>}
                      <h4 className="material-item__nome">{m.nome}</h4>
                    </div>
                    <div className="material-item__comprar">
                      <span className="material-item__preco">{m.preco}</span>
                      <a
                        href="https://wa.me/5585992223053"
                        target="_blank"
                        rel="noreferrer"
                        className="btn material-item__btn"
                        style={{ background: disc.cor, color: disc.cor === '#F5C800' ? '#333' : '#fff' }}
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
