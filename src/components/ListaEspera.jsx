import React, { useState } from 'react';
import { concursosAcompanhados } from '../data/index.js';
import './ListaEspera.css';

export default function ListaEspera() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', concurso: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="lista-espera" id="lista-espera">
      <div className="container">

        <p className="section-eyebrow">— DE OLHO NOS EDITAIS</p>
        <h2 className="lista-espera__titulo">
          Não achou o seu? A gente pode estar produzindo.
        </h2>
        <p className="lista-espera__sub">
          Acompanhamos os editais destes órgãos. Diz qual é o seu e você
          é a primeira a saber quando o material sair.
        </p>

        <div className="lista-espera__logos">
          {concursosAcompanhados.map(sigla => (
            <div key={sigla} className="le__logo-pill">{sigla}</div>
          ))}
        </div>

        {!enviado ? (
          <form className="lista-espera__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu primeiro nome"
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
              required
              className="le__input"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              className="le__input"
            />
            <input
              type="text"
              placeholder="Qual concurso você faz?"
              value={form.concurso}
              onChange={e => setForm({ ...form, concurso: e.target.value })}
              required
              className="le__input"
            />
            <button type="submit" className="le__btn">Me avisa →</button>
          </form>
        ) : (
          <div className="le__confirmacao">
            ✅ Prontinho! Assim que sair material pro seu concurso, você é a primeira a saber.
          </div>
        )}

        <p className="le__lgpd">
          Ao enviar, você concorda em receber e-mails da Vibe Federal sobre este concurso.
        </p>

      </div>
    </section>
  );
}
