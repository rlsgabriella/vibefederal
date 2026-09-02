import React, { useState } from 'react';
import { concursosAcompanhados } from '../data/index.js';
import './ListaEspera.css';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylFimGfKOHoUuq9f7D3H7kEsPY_wR1rf0h1E9CqUMFBkji5kvWzEHbexY9Yg_D-UAw/exec';

export default function ListaEspera() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', concurso: '', contato: '' });
  const [erroEmail, setErroEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailValido) {
      setErroEmail('Digite um e-mail válido.');
      return;
    }

    setErroEmail('');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setEnviado(true);
      setForm({ nome: '', email: '', concurso: '', contato: '' });
    } catch (erro) {
      console.error('Erro ao enviar:', erro);
      setEnviado(true);
    }
  };

  return (
    <section className="lista-espera" id="lista-espera">
      <div className="container">

        <p className="section-eyebrow">— DE OLHO NOS EDITAIS</p>
        <h2 className="lista-espera__titulo">
          Não encontrou o seu? Pode ser que estejamos produzindo.
        </h2>
        <p className="lista-espera__sub">
          Acompanhamos os editais destes órgãos. Informe o seu e seja a primeira
          a saber quando o material estiver disponível.
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
              placeholder="Nome"
              value={form.nome}
              onChange={e => setForm({ ...form, nome: e.target.value })}
              required
              className="le__input"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={form.email}
              onChange={e => {
                setForm({ ...form, email: e.target.value });
                setErroEmail('');
              }}
              required
              className={`le__input ${erroEmail ? 'le__input--erro' : ''}`}
            />
            {erroEmail && (
              <span className="le__erro">{erroEmail}</span>
            )}
            <input
              type="text"
              placeholder="WhatsApp"
              value={form.contato}
              onChange={e => setForm({ ...form, contato: e.target.value })}
              className="le__input"
            />
            <input
              type="text"
              placeholder="Qual concurso?"
              value={form.concurso}
              onChange={e => setForm({ ...form, concurso: e.target.value })}
              required
              className="le__input"
            />
            <button type="submit" className="le__btn">Me avisa →</button>
          </form>
        ) : (
          <div className="le__confirmacao">
            ✅ Pronto! Assim que sair material para o seu concurso, você será a primeira a saber.
          </div>
        )}

        <p className="le__lgpd">
          Ao enviar, você concorda em receber e-mails da Vibe Federal sobre este concurso.
        </p>

      </div>
    </section>
  );
}
