import React from 'react';
import Hero from '../components/Hero.jsx';
import Catalogo from '../components/Catalogo.jsx';
import ListaEspera from '../components/ListaEspera.jsx';
import './Home.css';

export default function Home() {
  return (
    <main>
      <Hero />

      <Catalogo />

      <ListaEspera />

      <section className="metodo">
        <div className="container">
          <p className="section-eyebrow">— POR QUE FUNCIONA</p>
          <h2 className="metodo__titulo">
            Seu estudo não precisa começar pela organização do material.
          </h2>
          <p className="metodo__sub">
            A Vibe organiza o conteúdo para você chegar direto ao estudo.
            Menos tempo procurando, separando e montando material.
            Mais tempo para estudar o que importa.
          </p>
          <div className="metodo__grid">
            {[
              { emoji: '🗺️', titulo: 'Visual, não parede de texto', texto: 'Mapas, quadros, tabelas e esquemas ajudam você a enxergar as informações, fazer conexões e retomar o conteúdo com mais facilidade.' },
              { emoji: '🎯', titulo: 'O edital dá a direção', texto: 'Organizamos cada material a partir do conteúdo exigido no concurso, para deixar claro o que entra na sua preparação.' },
              { emoji: '💬', titulo: 'Direto ao ponto', texto: 'Explicações claras, organização visual e destaque para conceitos, prazos, exceções e pontos que merecem atenção.' },
              { emoji: '📚', titulo: 'Feito para o estudo render', texto: 'Um material que você pode usar para estudar, revisar, resolver questões e fazer suas próprias anotações.' },
            ].map((p, i) => (
              <div key={i} className="metodo__card">
                <span className="metodo__emoji">{p.emoji}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final" id="cta-final">
        <div className="container cta-final__inner">
          <div>
            <h2>Seu edital não vai esperar você se organizar.</h2>
            <p>Encontre o material do seu concurso e comece a estudar. A organização a gente já fez por você.</p>
          </div>
          <div className="cta-final__acoes">
            <a href="#catalogo" className="cta-final__btn-primary">
              Ver materiais do meu concurso →
            </a>
            <p className="cta-final__apoio">
              Não encontrou o seu? <a href="#lista-espera">Entre na lista de espera</a> ou fale com a gente no{' '}
              <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer">WhatsApp</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
