import React, { useState } from 'react';
import './Carrossel.css';

const INSTITUICOES = [
  { sigla: 'IFC',  nome: 'Instituto Federal do Ceará',                    url: 'https://www.ifc.edu.br/wp-content/uploads/2014/09/logo_ifc_png_-300x200.png' },
  { sigla: 'IFPI', nome: 'Instituto Federal do Piauí',                    url: 'https://www.ifpi.edu.br/acesso-a-informacao/institucional/logos/logo-ifpi-vertical-positivo-e-descritivo.png' },
  { sigla: 'IFCE', nome: 'Instituto Federal do Ceará',                    url: 'https://ifce.edu.br/espaco_estudante/logo_ifce.png' },
  { sigla: 'IFAL', nome: 'Instituto Federal de Alagoas',                  url: 'https://www2.ifal.edu.br/espaco_estudante/comunicacao/logos/logotipo-ifal-horizontal-2019.png/@@images/image' },
  { sigla: 'IFPB', nome: 'Instituto Federal da Paraíba',                  url: 'https://www.ifpb.edu.br/image/logo-ifpb.png' },
  { sigla: 'IFRN', nome: 'Instituto Federal do Rio Grande do Norte',      url: 'https://portal.ifrn.edu.br/ifrn/institucional/identidade-visual/logoifrn/logo-ifrn-positivo.png' },
  { sigla: 'IFMA', nome: 'Instituto Federal do Maranhão',                 url: 'https://portal.ifma.edu.br/wp-content/uploads/2023/04/logo-ifma-horizontal.png' },
  { sigla: 'IFBA', nome: 'Instituto Federal da Bahia',                    url: 'https://portal.ifba.edu.br/arquivos/comunicacao/identidade-visual/logo-ifba-horizontal.png' },
  { sigla: 'UFC',  nome: 'Universidade Federal do Ceará',                 url: 'https://www.ufc.br/images/logo_ufc_novo.png' },
  { sigla: 'UFPI', nome: 'Universidade Federal do Piauí',                 url: 'https://ufpi.br/images/ufpi.png' },
  { sigla: 'UFAL', nome: 'Universidade Federal de Alagoas',               url: 'https://ufal.br/resolveuid/5a5dc3e52c4748cfb3fd7c23cd27e8bc' },
];

const items = [...INSTITUICOES, ...INSTITUICOES, ...INSTITUICOES];

function handleImgError(e) {
  e.target.style.display = 'none';
  e.target.nextSibling.style.display = 'block';
}

export default function Carrossel() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="carrossel-section">
      <div className="container carrossel-header">
        <div className="carrossel-badge">🏛️ Concursos com material disponível</div>
        <h2 className="section-title">Institutos e Universidades Federais</h2>
        <p className="section-subtitle">
          Material preparatório focado para os principais concursos federais do país.
        </p>
      </div>

      <div
        className="carrossel-track-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`carrossel-track ${paused ? 'carrossel-track--paused' : ''}`}>
          {items.map((inst, i) => (
            <div key={`${inst.sigla}-${i}`} className="carrossel-card">
              <div className="carrossel-card__logo">
                <img
                  src={inst.url}
                  alt={`Logo ${inst.sigla}`}
                  loading="lazy"
                  onError={handleImgError}
                />
                <span className="carrossel-card__fallback">{inst.sigla}</span>
              </div>
              <p className="carrossel-card__nome">{inst.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
