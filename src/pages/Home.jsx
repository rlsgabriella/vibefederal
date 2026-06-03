import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import TrilhasCarousel from '../components/TrilhasCarousel.jsx';
import Carrossel from '../components/Carrossel.jsx';
import PostItBoard from '../components/PostItBoard.jsx';
import { trilhas, dicas } from '../data/index.js';
import './Home.css';

const diferenciais = [
  { icone: '✏️', titulo: 'Conteúdo visual e direto',          texto: 'Mapas mentais prontos, claros e didáticos para facilitar o estudo.' },
  { icone: '🧭', titulo: 'Organização estratégica',           texto: 'Estrutura pensada para você estudar com método e sem perder tempo.' },
  { icone: '💬', titulo: 'Linguagem leve, sem juridiquês',    texto: 'Conteúdo jurídico explicado de forma simples e acessível.' },
  { icone: '📱', titulo: 'Digital, prático e acessível',      texto: 'Estude em qualquer dispositivo, a qualquer hora, no seu ritmo.' },
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
              Pacotes completos organizados por concurso. Cada trilha é pensada para o edital específico,
              com mapas visuais e estrutura clara.
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
                Aprender pode ser leve —<br />a Vibe tá aqui pra provar.
              </h2>
              <p className="section-subtitle" style={{ marginTop: 14, textAlign: 'left', marginLeft: 0 }}>
                A Vibe Federal nasceu pra simplificar o estudo de quem sonha com uma vaga nas
                Universidades e Institutos Federais. Sem sobrecarga. Sem enrolação.
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

      <section className="dicas-preview-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Dicas de estudo 📌</h2>
            <p className="section-subtitle">
              Pequenos hábitos que fazem uma grande diferença. Clique em cada post-it para ver a dica bônus!
            </p>
          </div>
          <PostItBoard dicas={dicas.slice(0, 3)} />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/dicas" className="btn btn-outline" style={{ color: 'var(--green)', borderColor: 'var(--green)' }}>
              Ver todas as dicas →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>🌿 Estudar pode ser mais leve — e a Vibe tá aqui pra provar.</h2>
            <p>Comece agora com o material certo e descubra como aprender com tranquilidade, estratégia e resultado.</p>
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
