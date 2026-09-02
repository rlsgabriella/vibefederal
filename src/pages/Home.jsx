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
            O problema nunca foi esforço. Foi material.
          </h2>
          <p className="metodo__sub">
            Quem não passa geralmente não estudou menos — estudou espalhado.
            A Vibe tira o caos do meio: chega pronto, organizado e completo.
            É só estudar.
          </p>
          <div className="metodo__grid">
            {[
              { emoji: '🗺️', titulo: 'Visual, não parede de texto', texto: 'Cada tema vira mapa. Você bate o olho e lembra, em vez de reler três páginas pra achar onde parou.' },
              { emoji: '🎯', titulo: 'Só o que o edital pede', texto: 'Recortado do edital publicado, bloco por bloco. Sem matéria solta, sem estudar o que não cai.' },
              { emoji: '💬', titulo: 'Português, não juridiquês', texto: 'Legislação explicada como gente fala. Se travava em "sem prejuízo do disposto no artigo anterior", destravou.' },
              { emoji: '📱', titulo: 'Pronto pra usar hoje', texto: 'PDF no celular, no tablet ou impresso. Comprou, baixou, estudou. Sem plataforma, sem senha, sem videoaula de duas horas.' },
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
            <p>Escolhe o concurso, baixa o material e começa hoje. O resto do caminho é seu.</p>
          </div>
          <div className="cta-final__acoes">
            <a href="#catalogo" className="cta-final__btn-primary">
              Ver materiais do meu concurso
            </a>
            <p className="cta-final__apoio">
              Não achou o seu?{' '}
              <a href="#lista-espera">Entra na lista de espera</a>
              {' '}ou fala com a gente no{' '}
              <a href="https://wa.me/5585992223053" target="_blank" rel="noreferrer">WhatsApp</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
