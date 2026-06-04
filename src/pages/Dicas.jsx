import React, { useState, useRef } from 'react';
import { dicas } from '../data/index.js';
import MapaEstudos from '../components/MapaEstudos.jsx';
import './Materiais.css';
import './DicasPage.css';

const dicasExtras = [
  { cor: 'var(--postit-blue)',   emoji: '🎧', titulo: 'Música para focar',    texto: 'Lofi hip-hop, sons da natureza ou música clássica ajudam na concentração. Evite músicas com letra durante a leitura.', rotacao: '1deg' },
  { cor: 'var(--postit-yellow)', emoji: '🏃', titulo: 'Exercício e memória',  texto: '30 min de caminhada por dia aumentam a capacidade de memória em até 20% e reduzem o estresse do estudo.', rotacao: '-1.5deg' },
  { cor: 'var(--postit-green)',  emoji: '📖', titulo: 'Leia o edital 3x',     texto: 'Na 1ª leitura, sublinhe temas. Na 2ª, estime o peso de cada assunto. Na 3ª, monte seu cronograma de estudos.', rotacao: '2deg' },
];

const técnicasAvancadas = [
  { emoji: '🧠', titulo: 'Método Feynman', passos: ['Escolha um tema do edital', 'Explique com suas palavras como se ensinasse a uma criança', 'Identifique onde sua explicação trava', 'Volte ao material e estude esse ponto', 'Repita até conseguir explicar com clareza'] },
  { emoji: '🗓️', titulo: 'Cronograma SRS', passos: ['Divida o edital por disciplina e peso', 'Estude cada disciplina por blocos de 1-2 semanas', 'Marque o que sabe bem, o que sabe mais ou menos, e o que não sabe', 'Revise com mais frequência o que não sabe', 'Agende revisões espaçadas (1 dia, 3 dias, 7 dias, 21 dias)'] },
  { emoji: '📝', titulo: 'Caderno de Erros', passos: ['Ao resolver questões, anote TODAS as que errou', 'Identifique o tema de cada erro', 'Estude o tema até entender o porquê do erro', 'Refaça as questões do caderno a cada semana', 'Celebre quando o erro virar acerto!'] },
];

export default function Dicas() {
  const [flipped, setFlipped]  = useState({});
  const [expanded, setExpand]  = useState(null);
  const dragRef  = useRef(null);
  const isDrag   = useRef(false);
  const startX   = useRef(0);
  const scrollL  = useRef(0);

  const toggle = (key) => setFlipped(p => ({ ...p, [key]: !p[key] }));

  // Drag to scroll
  const onMouseDown = e => {
    isDrag.current = true;
    startX.current = e.pageX - dragRef.current.offsetLeft;
    scrollL.current = dragRef.current.scrollLeft;
    dragRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = e => {
    if (!isDrag.current) return;
    e.preventDefault();
    const x = e.pageX - dragRef.current.offsetLeft;
    dragRef.current.scrollLeft = scrollL.current - (x - startX.current);
  };
  const onMouseUp = () => {
    isDrag.current = false;
    if (dragRef.current) dragRef.current.style.cursor = 'grab';
  };

  const allDicas = [...dicas, ...dicasExtras];

  return (
    <main>
      <div className="page-hero page-hero--yellow">
        <div className="container">
          <div className="badge" style={{ marginBottom: 14 }}>📌 Aprenda melhor</div>
          <h1>Dicas de Estudo</h1>
          <p>Técnicas testadas por quem passou em concursos federais. Clique nos post-its para virar e arraste para ver mais.</p>
        </div>
      </div>

      {/* ── PAINEL DE POST-ITS DESLIZANTE ── */}
      <section className="dicas-slider-section">
        <div className="container">
          <div className="dicas-slider-header">
            <h2 className="section-title">Técnicas de aprendizado</h2>
            <span className="dicas-drag-hint">← arraste para ver mais →</span>
          </div>
        </div>

        <div
          className="dicas-slider-track"
          ref={dragRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="dicas-slider-inner">
            {allDicas.map((d, i) => (
              <div
                key={i}
                className={`postit-flip ${flipped[i] ? 'postit-flip--flipped' : ''}`}
                style={{ '--rot': d.rotacao || '0deg' }}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && toggle(i)}
              >
                <div className="postit-flip__inner">
                  <div className="postit-flip__front" style={{ background: d.cor }}>
                    <span className="postit-emoji">{d.emoji}</span>
                    <h4 className="postit-titulo">{d.titulo}</h4>
                    <p  className="postit-texto">{d.texto}</p>
                    <span className="postit-hint">toque para virar ↩</span>
                  </div>
                  <div className="postit-flip__back">
                    <span className="postit-emoji">💡</span>
                    <p className="postit-texto">
                      <strong>Dica bônus:</strong> Aplique essa técnica por 7 dias consecutivos e você já vai notar diferença na sua retenção. Consistência supera intensidade!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉCNICAS AVANÇADAS ── */}
      <section className="tecnicas-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Técnicas avançadas passo a passo</h2>
            <p className="section-subtitle">Clique em cada técnica para expandir o guia completo.</p>
          </div>

          <div className="tecnicas-lista">
            {técnicasAvancadas.map((t, i) => (
              <div key={i} className={`tecnica-card ${expanded === i ? 'tecnica-card--aberta' : ''}`}>
                <button className="tecnica-card__header" onClick={() => setExpand(expanded === i ? null : i)}>
                  <div className="tecnica-card__left">
                    <span className="tecnica-emoji">{t.emoji}</span>
                    <span className="tecnica-titulo">{t.titulo}</span>
                  </div>
                  <span className="tecnica-chevron">{expanded === i ? '▲' : '▼'}</span>
                </button>
                {expanded === i && (
                  <div className="tecnica-card__body">
                    <ol className="tecnica-passos">
                      {t.passos.map((p, j) => (
                        <li key={j}>
                          <span className="passo-num">{j + 1}</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAPA DE ESTUDOS ── */}
      <section className="mapa-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Monte seu Mapa de Estudos</h2>
            <p className="section-subtitle">Organize as disciplinas do seu edital e acompanhe seu progresso.</p>
          </div>
          <MapaEstudos />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dicas-cta">
        <div className="container dicas-cta-inner">
          <div>
            <h3>Quer estudar com os melhores materiais?</h3>
            <p>Combine essas técnicas com nossos mapas mentais e sua preparação vai decolar.</p>
          </div>
          <a href="/materiais" className="btn btn-green">Ver materiais →</a>
        </div>
      </section>
    </main>
  );
}
