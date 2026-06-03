import React from 'react';
import { Link } from 'react-router-dom';
import './Materiais.css';
import './Sobre.css';

const valores = [
  { emoji: '🌿', titulo: 'Leveza',       texto: 'Conteúdo sem juridiquês, pensado para ser absorvido com tranquilidade e sem sobrecarga.' },
  { emoji: '🎯', titulo: 'Estratégia',   texto: 'Material organizado pelo que realmente cai nos editais. Nada de desperdício de tempo.' },
  { emoji: '🗺️', titulo: 'Visual',       texto: 'Mapas mentais coloridos e didáticos que tornam o conteúdo mais fácil de lembrar.' },
  { emoji: '📱', titulo: 'Acessibilidade', texto: 'Materiais digitais para você estudar em qualquer lugar, a qualquer hora, no seu ritmo.' },
];

const numeros = [
  { num: '5+',  label: 'Materiais publicados' },
  { num: '12+', label: 'Concursos cobertos'   },
  { num: '100%', label: 'Digital e acessível' },
  { num: '🌿',  label: 'Método Vibe Federal'  },
];

const perguntas = [
  { q: 'Como recebo o material após a compra?', r: 'O envio é feito diretamente via WhatsApp em formato PDF, logo após a confirmação do pagamento. É rápido e prático!' },
  { q: 'Os materiais são atualizados?', r: 'Sim! Quando publicamos uma atualização em algum material que você já comprou, enviamos a versão nova gratuitamente pelo WhatsApp.' },
  { q: 'Para quais cargos os materiais servem?', r: 'Cada pacote especifica os cargos. Em geral cobrimos Docente e/ou TAE (Técnico-Administrativo em Educação). Confira a descrição de cada produto.' },
  { q: 'Posso pedir materiais para outros concursos?', r: 'Pode! Estamos sempre expandindo nosso catálogo. Entre em contato pelo WhatsApp e nos conte sobre seu concurso.' },
];

export default function Sobre() {
  const [aberta, setAberta] = React.useState(null);

  return (
    <main>
      <div className="page-hero page-hero--green">
        <div className="container">
          <div className="badge" style={{ marginBottom: 14 }}>🌿 Nossa história</div>
          <h1>Sobre a Vibe Federal</h1>
          <p>Nascemos pra tornar o estudo para concursos federais mais leve, estratégico e humano.</p>
        </div>
      </div>

      {/* Quem somos */}
      <section className="sobre-section">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-texto fade-up">
              <h2>Quem somos?</h2>
              <p>
                A <strong>Vibe Federal</strong> nasceu pra simplificar o estudo de quem sonha com uma vaga
                nas Universidades e Institutos Federais. Sabemos que a preparação para concursos pode
                ser exaustiva e solitária — e criamos um jeito diferente de aprender.
              </p>
              <p>
                Criamos materiais visuais, diretos e didáticos — feitos pra te ajudar a aprender com
                clareza, estratégia e constância, sem sobrecarga e sem enrolação.
              </p>
              <p>
                Porque estudar é importante, mas <strong>estudar com leveza e propósito faz toda a diferença.</strong>
              </p>
            </div>

            <div className="sobre-numeros fade-up" style={{ animationDelay: '100ms' }}>
              {numeros.map((n, i) => (
                <div key={i} className="sobre-num-card">
                  <strong>{n.num}</strong>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Nossos valores</h2>
            <p className="section-subtitle">Os pilares que guiam cada material que criamos.</p>
          </div>
          <div className="valores-grid">
            {valores.map((v, i) => (
              <div key={i} className="valor-card fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <span className="valor-emoji">{v.emoji}</span>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Perguntas frequentes</h2>
            <p className="section-subtitle">Tudo que você precisa saber antes de comprar.</p>
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
            <p>A forma mais rápida de tirar dúvidas, comprar materiais e receber suporte.</p>
            <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer" className="btn btn-green">
              Chamar no WhatsApp
            </a>
          </div>
          <div className="contato-card fade-up" style={{ animationDelay: '80ms' }}>
            <span className="contato-icon">📸</span>
            <h3>Instagram</h3>
            <p>Dicas de estudo, novidades de materiais e bastidores da Vibe Federal.</p>
            <a href="https://instagram.com/vibefederal" target="_blank" rel="noreferrer" className="btn" style={{ background: '#E1306C', color: '#fff' }}>
              Seguir no Instagram
            </a>
          </div>
          <div className="contato-card fade-up" style={{ animationDelay: '160ms' }}>
            <span className="contato-icon">📦</span>
            <h3>Materiais</h3>
            <p>Veja todos os pacotes e mapas disponíveis para sua preparação agora mesmo.</p>
            <Link to="/materiais" className="btn btn-green">
              Ver materiais →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
