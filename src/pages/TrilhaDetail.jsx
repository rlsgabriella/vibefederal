import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { trilhas } from '../data/index.js';
import './TrilhaDetail.css';
import './Materiais.css';

export default function TrilhaDetail() {
  const { id } = useParams();
  const trilha = trilhas.find(t => t.id === id);

  if (!trilha) {
    return (
      <main style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <h2>Material não encontrado</h2>
        <Link to="/materiais" className="btn btn-green" style={{ marginTop: 24 }}>
          Ver todos os materiais
        </Link>
      </main>
    );
  }

  const { sigla, nome, subtitulo, cargo, cor, corBtn, descricaoCurta, descricaoLonga, tag } = trilha;

  const topicos = [
    'Princípios Constitucionais Aplicados à Administração Pública',
    'Lei 8.112/90 – Estatuto dos Servidores Públicos Federais',
    'Lei 9.784/99 – Processo Administrativo Federal',
    'Decreto 1.171/94 – Código de Ética Profissional',
    'Lei de Responsabilidade Fiscal (LC 101/2000)',
    'Organização da Administração Pública Federal',
    'Controle da Administração Pública',
  ];

  return (
    <main>
      {/* Hero colorido */}
      <div className="detail-hero" style={{ background: cor }}>
        <div className="container">
          <div className="detail-hero__inner">
            <div>
              <p className="detail-hero__label">TRILHA LEGAL</p>
              <h1 className="detail-hero__sigla">{sigla}</h1>
              {cargo && <span className="detail-hero__cargo">{cargo}</span>}
            </div>
            <div className="detail-hero__logo">🌿</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detail-grid">
          {/* Conteúdo principal */}
          <div className="detail-main fade-up">
            <h2 className="detail-nome">{nome}</h2>
            <p className="detail-subtitulo">{subtitulo}</p>
            <p className="detail-desc-curta">{descricaoCurta}</p>
            <p className="detail-desc-longa">{descricaoLonga}</p>
            <p className="detail-tag">{tag}</p>

            <div className="detail-topicos">
              <h3>📋 O que está incluído</h3>
              <ul>
                {topicos.map((t, i) => (
                  <li key={i}>
                    <span className="detail-topico-dot" style={{ background: cor }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-formato">
              <h3>📱 Formato do material</h3>
              <div className="detail-formato-grid">
                <div className="formato-item">
                  <span>🗺️</span>
                  <strong>Mapas Mentais</strong>
                  <p>Visuais, coloridos e organizados</p>
                </div>
                <div className="formato-item">
                  <span>📄</span>
                  <strong>PDF Digital</strong>
                  <p>Para estudar em qualquer dispositivo</p>
                </div>
                <div className="formato-item">
                  <span>🔄</span>
                  <strong>Atualizações</strong>
                  <p>Incluídas sem custo adicional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar fade-up" style={{ animationDelay: '120ms' }}>
            <div className="detail-cta-card">
              <div className="detail-cta-header" style={{ background: cor }}>
                <p>TRILHA LEGAL</p>
                <h3>{sigla}</h3>
              </div>
              <div className="detail-cta-body">
                <p className="detail-cta-desc">{descricaoCurta}</p>
                <a
                  href="https://wa.me/5585992223053"
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${corBtn}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  💬 Comprar via WhatsApp
                </a>
                <a
                  href="https://wa.me/5585992223053"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline detail-cta-duvida"
                >
                  Tirar dúvidas antes de comprar
                </a>
                <div className="detail-garantias">
                  <span>✅ Entrega imediata após pagamento</span>
                  <span>✅ Acesso vitalício ao material</span>
                  <span>✅ Suporte pelo WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
