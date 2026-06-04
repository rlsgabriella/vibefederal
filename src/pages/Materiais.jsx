import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrilhaCard from '../components/TrilhaCard.jsx';
import { trilhas, disciplinas } from '../data/index.js';
import './Materiais.css';
import './MateriaisPage.css';

const ABAS = [
  { id: 'pacotes',     label: '📦 Pacotes Completos' },
  { id: 'disciplinas', label: '📚 Por Disciplina' },
  { id: 'leis',        label: '⚖️ Por Lei' },
  { id: 'concursos',   label: '🏛️ Por Concurso' },
];

const leis = [
  { id: 'lei-8112',  titulo: 'Lei 8.112/90',       subtitulo: 'Estatuto dos Servidores Públicos Federais', emoji: '📋', preco: 'R$ 29,90', novo: false, concursos: ['IFC', 'IFPI', 'IFCE', 'IFAL', 'IFPB'] },
  { id: 'lei-9784',  titulo: 'Lei 9.784/99',        subtitulo: 'Processo Administrativo Federal',          emoji: '⚙️', preco: 'R$ 22,90', novo: true,  concursos: ['IFC', 'IFCE', 'IFPB'] },
  { id: 'cf-88',     titulo: 'CF/88, arts. 37 a 41', subtitulo: 'Administração Pública na Constituição',    emoji: '📜', preco: 'R$ 24,90', novo: false, concursos: ['IFC', 'IFPI', 'IFCE', 'IFAL'] },
  { id: 'dec-1171',  titulo: 'Decreto 1.171/94',    subtitulo: 'Código de Ética Profissional do Servidor', emoji: '🌟', preco: 'R$ 17,90', novo: false, concursos: ['IFCE', 'IFAL', 'IFPB', 'IFRN'] },
  { id: 'lrf',       titulo: 'LC 101/2000',          subtitulo: 'Lei de Responsabilidade Fiscal',           emoji: '💰', preco: 'R$ 22,90', novo: false, concursos: ['IFC', 'IFPI'] },
  { id: 'lei-8666',  titulo: 'Lei 8.666/93',         subtitulo: 'Licitações e Contratos',                   emoji: '📑', preco: 'R$ 24,90', novo: true,  concursos: ['IFC', 'IFCE', 'IFPB', 'IFRN'] },
  { id: 'lei-14133', titulo: 'Lei 14.133/21',        subtitulo: 'Nova Lei de Licitações',                   emoji: '🆕', preco: 'R$ 26,90', novo: true,  concursos: ['IFCE', 'IFAL', 'IFPB'] },
  { id: 'dec-5707',  titulo: 'Decreto 5.707/06',     subtitulo: 'Política de Capacitação',                  emoji: '🎓', preco: 'R$ 17,90', novo: false, concursos: ['IFC', 'IFPI', 'IFAL'] },
];

const porConcurso = [
  { sigla: 'IFCE', cor: '#00437A', cargo: 'Docente e TAE', qtd: 8, destaque: true },
  { sigla: 'IFPI', cor: '#006633', cargo: 'Docente',        qtd: 6, destaque: false },
  { sigla: 'IFC',  cor: '#003DA5', cargo: 'Docente e TAE', qtd: 7, destaque: false },
  { sigla: 'IFAL', cor: '#005C2E', cargo: 'Docente',        qtd: 5, destaque: false },
  { sigla: 'IFPB', cor: '#003366', cargo: 'Docente e TAE', qtd: 6, destaque: false },
  { sigla: 'IFRN', cor: '#006843', cargo: 'Docente',        qtd: 5, destaque: false },
];

export default function Materiais() {
  const [aba, setAba]       = useState('pacotes');
  const [discAtiva, setDisc]= useState(null);

  return (
    <main>
      {/* Hero da página */}
      <div className="page-hero page-hero--blue">
        <div className="container">
          <div className="badge" style={{ marginBottom: 14 }}>📦 Loja de materiais</div>
          <h1>Materiais para sua preparação</h1>
          <p>Pacotes por concurso, mapas por disciplina ou por lei. Encontre o material certo para o edital que você está enfrentando.</p>
        </div>
      </div>

      {/* Abas de navegação */}
      <div className="mat-abas-bar">
        <div className="container mat-abas-inner">
          {ABAS.map(a => (
            <button
              key={a.id}
              className={`mat-aba ${aba === a.id ? 'mat-aba--ativa' : ''}`}
              onClick={() => setAba(a.id)}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mat-content">

        {/* ── PACOTES COMPLETOS ── */}
        {aba === 'pacotes' && (
          <div className="mat-section fade-up">
            <div className="mat-section-header">
              <div>
                <h2>Pacotes Completos por Concurso</h2>
                <p>Cada pacote reúne toda a legislação cobrada em um concurso específico, organizado em mapas mentais visuais e didáticos.</p>
              </div>
            </div>
            <div className="trilhas-grid-page">
              {trilhas.map((t, i) => <TrilhaCard key={t.id} trilha={t} delay={i * 60} />)}
            </div>
            {trilhas.length === 0 && (
              <div className="empty-state"><span>🔍</span><p>Nenhum pacote encontrado.</p></div>
            )}
          </div>
        )}

        {/* ── POR DISCIPLINA ── */}
        {aba === 'disciplinas' && (
          <div className="mat-section fade-up">
            <div className="mat-section-header">
              <div>
                <h2>Materiais por Disciplina</h2>
                <p>Prefere estudar tema a tema? Cada mapa mental aborda uma disciplina de forma completa e independente.</p>
              </div>
              <div className="filtros">
                <button className={`filtro-btn ${!discAtiva ? 'filtro-btn--active' : ''}`} onClick={() => setDisc(null)}>Todas</button>
                {disciplinas.map(d => (
                  <button key={d.id} className={`filtro-btn ${discAtiva === d.id ? 'filtro-btn--active' : ''}`}
                    style={discAtiva === d.id ? { background: d.cor, borderColor: d.cor, color: '#fff' } : {}}
                    onClick={() => setDisc(discAtiva === d.id ? null : d.id)}>
                    {d.icone} {d.nome}
                  </button>
                ))}
              </div>
            </div>
            <div className="disc-grid-full">
              {disciplinas.filter(d => !discAtiva || d.id === discAtiva).map((disc, i) => (
                <div key={disc.id} className="disc-card-full fade-up" style={{ '--dc': disc.cor, animationDelay: `${i * 60}ms` }}>
                  <div className="disc-card-full__top">
                    <span className="disc-icon-lg">{disc.icone}</span>
                    <div>
                      <h3>{disc.nome}</h3>
                      <p>{disc.descricao}</p>
                    </div>
                  </div>
                  {disc.materiais.map((m, j) => (
                    <div key={j} className="mat-row">
                      <div className="mat-row__info">
                        {m.novo && <span className="mat-novo">Novo</span>}
                        <span className="mat-tipo">{m.tipo}</span>
                        <strong className="mat-nome">{m.nome}</strong>
                      </div>
                      <div className="mat-row__action">
                        <span className="mat-preco">{m.preco}</span>
                        <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer"
                          className="btn mat-btn" style={{ background: disc.cor, color: disc.cor === '#C8A200' ? '#1a1a1a' : '#fff' }}>
                          Comprar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── POR LEI ── */}
        {aba === 'leis' && (
          <div className="mat-section fade-up">
            <div className="mat-section-header">
              <div>
                <h2>Mapas por Lei Específica</h2>
                <p>Precisa focar em uma lei específica? Compre apenas o mapa que precisa e estude com precisão cirúrgica.</p>
              </div>
            </div>
            <div className="leis-grid">
              {leis.map((l, i) => (
                <div key={l.id} className="lei-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="lei-card__emoji">{l.emoji}</div>
                  <div className="lei-card__info">
                    <div className="lei-card__titulo-row">
                      {l.novo && <span className="mat-novo">Novo</span>}
                      <strong>{l.titulo}</strong>
                    </div>
                    <p className="lei-card__sub">{l.subtitulo}</p>
                    <div className="lei-card__concursos">
                      {l.concursos.map(c => (
                        <span key={c} className="lei-tag">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="lei-card__action">
                    <span className="mat-preco">{l.preco}</span>
                    <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="btn btn-green lei-btn">
                      Comprar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── POR CONCURSO ── */}
        {aba === 'concursos' && (
          <div className="mat-section fade-up">
            <div className="mat-section-header">
              <div>
                <h2>Materiais por Concurso</h2>
                <p>Selecione seu concurso e veja todos os materiais disponíveis, desde pacotes completos até mapas individuais.</p>
              </div>
            </div>
            <div className="concurso-grid">
              {porConcurso.map((c, i) => (
                <div key={c.sigla} className="concurso-card fade-up" style={{ '--cc': c.cor, animationDelay: `${i * 60}ms` }}>
                  {c.destaque && <div className="concurso-destaque">⭐ Mais vendido</div>}
                  <div className="concurso-card__header" style={{ background: c.cor }}>
                    <div className="concurso-card__hinner">
                      <span className="concurso-label">INSTITUTO FEDERAL</span>
                      <span className="concurso-sigla">{c.sigla}</span>
                      <span className="concurso-cargo">{c.cargo}</span>
                    </div>
                    <span className="concurso-emoji">🌿</span>
                  </div>
                  <div className="concurso-card__body">
                    <div className="concurso-stat">
                      <strong>{c.qtd}</strong>
                      <span>materiais disponíveis</span>
                    </div>
                    <div className="concurso-tipos">
                      <span>📦 Pacote completo</span>
                      <span>📚 Mapas individuais</span>
                      <span>⚖️ Por lei específica</span>
                    </div>
                    <Link to={`/${c.sigla.toLowerCase()}`} className="btn btn-green concurso-btn">
                      Ver todos os materiais →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* CTA de contato */}
      <div className="mat-cta">
        <div className="container mat-cta-inner">
          <div>
            <h3>Não encontrou o que procura?</h3>
            <p>Entre em contato e nos conte sobre seu concurso. Podemos ter o material ou criar um especialmente para você.</p>
          </div>
          <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="btn btn-green">
            💬 Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
