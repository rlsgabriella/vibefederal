import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Materiais.css';
import './Sobre.css';

const valores = [
  {
    emoji: '🌿',
    titulo: 'Clareza',
    texto: 'Transformamos conteúdos densos em materiais visuais, objetivos e fáceis de acompanhar.',
    cor: '#1A7A42',
  },
  {
    emoji: '🎯',
    titulo: 'Direção',
    texto: 'Partimos do edital para organizar o que realmente precisa entrar na preparação.',
    cor: '#1270A8',
  },
  {
    emoji: '🧩',
    titulo: 'Organização',
    texto: 'Mapas, tabelas, quadros, esquemas e outros recursos ajudam a conectar as informações e tornam o estudo mais fluido.',
    cor: '#C8611A',
  },
];

const perguntas = [
  {
    q: 'Como recebo o material após a compra?',
    r: 'Após a confirmação do pagamento, o acesso é liberado pela Hotmart. Você recebe as orientações de acesso no e-mail cadastrado na compra e também pode acessar seus materiais diretamente pela plataforma.',
  },
  {
    q: 'Os materiais são atualizados?',
    r: 'Sim. Quando há alterações relevantes no conteúdo durante o período de acesso, fazemos as atualizações necessárias e a nova versão fica disponível para quem já adquiriu o material, conforme as condições informadas em cada produto.',
  },
  {
    q: 'O material é em PDF?',
    r: 'Sim. Nossos materiais são digitais e disponibilizados em PDF, para que você possa estudar pelo celular, tablet ou computador e fazer suas anotações diretamente no material.',
  },
  {
    q: 'Preciso assistir a videoaulas para entender o material?',
    r: 'Não. Os materiais da Vibe são desenvolvidos para que você consiga estudar diretamente por eles. Você também pode utilizá-los junto com videoaulas, questões, livros ou outros métodos de estudo, se preferir.',
  },
  {
    q: 'Como sei quais conteúdos estão incluídos?',
    r: 'Na página de cada produto você encontra a descrição dos conteúdos contemplados. Em materiais desenvolvidos para um edital específico, indicamos a cobertura correspondente àquele concurso.',
  },
  {
    q: 'Os materiais servem para quais cargos?',
    r: 'Isso varia de acordo com o concurso e o produto. Temos materiais para TAE, Docente e outros cargos, sempre com a indicação de público e conteúdo na página de cada material.',
  },
  {
    q: 'Posso sugerir material para outro concurso?',
    r: 'Sim. Estamos sempre acompanhando novos editais e você pode enviar sua sugestão pelo WhatsApp. A produção dependerá da nossa programação e da viabilidade de cobertura do concurso.',
  },
];

export default function Sobre() {
  const [aberta, setAberta] = useState(null);

  return (
    <main>
      <div className="page-hero page-hero--green">
        <div className="container">
          <div className="badge" style={{ marginBottom: 14 }}>🌿 Nossa história</div>
          <h1>Sobre a Vibe Federal</h1>
          <p>Existimos para tornar a preparação para concursos federais mais leve, estratégica e humana.</p>
        </div>
      </div>

      {/* Quem somos */}
      <section className="sobre-section">
        <div className="container">
          <div className="sobre-grid">

            <div className="sobre-texto fade-up">
              <h2>Quem somos</h2>
              <p>
                A <strong>Vibe Federal</strong> nasceu para transformar conteúdos
                extensos e densos de concursos públicos em materiais que tornam o
                estudo mais visual, organizado e objetivo.
              </p>
              <p>
                Nossa história começou com uma forte atuação nos concursos de
                Institutos Federais e Universidades, que continuam sendo uma das
                nossas principais especialidades. Hoje, a Vibe também acompanha
                outros concursos e amplia seu catálogo sem abrir mão do que está
                na essência da marca.
              </p>
              <p>
                Produzimos materiais cuidadosamente organizados, com mapas mentais,
                tabelas, quadros, fluxogramas, esquemas e outros recursos visuais
                que ajudam a compreender, memorizar e revisar o conteúdo.
              </p>
              <p>
                Tudo é pensado para que o aluno gaste menos tempo tentando organizar
                o que precisa estudar e possa se dedicar ao que realmente importa:
              </p>
              <p className="sobre-destaque">
                abrir o material e estudar.
              </p>
            </div>

            <div className="sobre-numeros fade-up" style={{ animationDelay: '100ms' }}>
              <div className="sobre-num-card sobre-num-card--sm">
                <strong>6.000+</strong>
                <span>Materiais vendidos</span>
              </div>
              <div className="sobre-num-card sobre-num-card--lg">
                <strong>IFs + Universidades</strong>
                <span>Nossa principal especialidade nos concursos federais de Docente e TAE</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <div className="container">
          <div className="valores-intro">
            <p className="section-eyebrow">— NOSSOS VALORES</p>
            <h2 className="section-title">O que está por trás de cada material da Vibe.</h2>
          </div>
          <div className="valores-grid">
            {valores.map((v, i) => (
              <div key={i} className="valor-card fade-up" style={{ '--valor-cor': v.cor, animationDelay: `${i * 70}ms` }}>
                <span className="valor-emoji">{v.emoji}</span>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section faq-section--dark">
        <div className="container">
          <div className="faq-intro">
            <p className="section-eyebrow">— PERGUNTAS FREQUENTES</p>
            <h2 className="faq-titulo">Tudo o que você precisa saber sobre os materiais da Vibe.</h2>
          </div>
          <div className="faq-lista">
            {perguntas.map((p, i) => (
              <div key={i} className={`faq-item ${aberta === i ? 'faq-item--aberta' : ''}`}>
                <button className="faq-pergunta" onClick={() => setAberta(aberta === i ? null : i)}>
                  <span>{p.q}</span>
                  <span className="faq-chevron">{aberta === i ? '▲' : '▼'}</span>
                </button>
                {aberta === i && <p className="faq-resposta">{p.r}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contato-section">
        <div className="container contato-grid">
          <div className="contato-card fade-up">
            <span className="contato-icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Tire dúvidas sobre os materiais, compras e acesso.</p>
            <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="btn btn-green">
              Chamar no WhatsApp
            </a>
          </div>
          <div className="contato-card fade-up" style={{ animationDelay: '80ms' }}>
            <span className="contato-icon">📸</span>
            <h3>Instagram</h3>
            <p>Acompanhe novidades, lançamentos e conteúdos da Vibe Federal.</p>
            <a href="https://instagram.com/vibefederal" target="_blank" rel="noreferrer" className="btn" style={{ background: '#E1306C', color: '#fff' }}>
              Seguir no Instagram
            </a>
          </div>
          <div className="contato-card fade-up" style={{ animationDelay: '160ms' }}>
            <span className="contato-icon">📦</span>
            <h3>Materiais</h3>
            <p>Encontre o material da Vibe para o concurso que você está preparando.</p>
            <Link to="/materiais" className="btn btn-green">
              Ver materiais →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
