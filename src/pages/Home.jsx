import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import TrilhasCarousel from '../components/TrilhasCarousel.jsx';
import Carrossel from '../components/Carrossel.jsx';
import PostItBoard from '../components/PostItBoard.jsx';
import { trilhas, dicas } from '../data/index.js';
import './Home.css';

const diferenciais = [
  { icone: '✏️', titulo: 'Mapas que facilitam a revisão',     texto: 'Cada tema em formato visual, direto ao ponto e fácil de consultar antes da prova.' },
  { icone: '🧭', titulo: 'Foco no que o edital pede',         texto: 'Conteúdo organizado por concurso, sem matéria solta nem horas perdidas.' },
  { icone: '💬', titulo: 'Linguagem clara',                   texto: 'Direito explicado em português simples, para você entender e fixar de verdade.' },
  { icone: '📱', titulo: 'Estude onde estiver',               texto: 'Material em PDF para abrir no celular, no tablet ou no computador, no seu ritmo.' },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <Carrossel />

      <section className="produtos-section" id="produtos">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Escolha o material certo para sua preparação</h2>
            <p className="section-subtitle">
              Trilhas montadas para o seu concurso, com mapas visuais e roteiro de estudo pronto para seguir.
            </p>
          </div>

          <TrilhasCarousel trilhas={trilhas} />
        </div>
      </section>

      <section className="diferenciais-section" id="sobre">
        <div className="container">
          <div className="diferenciais-inner">
            <div className="diferenciais-text fade-up">
              <div className="badge" style={{ marginBottom: 16 }}>🌿 Nosso método</div>
              <h2 className="section-title">
                Aprender pode ser leve.<br />A Vibe está aqui para provar.
              </h2>
              <p className="section-subtitle" style={{ marginTop: 14, textAlign: 'left', marginLeft: 0 }}>
                Criamos mapas e trilhas para quem se prepara para Universidades e Institutos Federais.
                Menos peso na rotina, mais clareza na hora de estudar e confiança na reta final.
              </p>
              <Link to="/sobre" className="btn btn-green" style={{ marginTop: 28 }}>
                Conheça nossa história →
              </Link>
            </div>

            <div className="diferenciais-grid">
              {diferenciais.map((d, i) => (
                <div key={i} className="diferencial-card fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="diferencial-card__icone">{d.icone}</span>
                  <div>
                    <h4>{d.titulo}</h4>
                    <p>{d.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dicas-home">
        <div className="container">
          <p className="section-eyebrow">— DICAS DE ESTUDO</p>
          <h2 className="dicas-home__titulo">Estude com mais estratégia</h2>
          <p className="dicas-home__sub">
            Pequenos hábitos que fazem toda a diferença na sua preparação.
          </p>
          <PostItBoard dicas={dicas.slice(0, 3)} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>🌿 Pronto para estudar com mais leveza?</h2>
            <p>Escolha a trilha do seu concurso e comece hoje com material visual, direto e alinhado ao edital.</p>
            <div className="cta-actions">
              <Link to="/materiais" className="btn btn-green">Ver Materiais Disponíveis</Link>
              <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
