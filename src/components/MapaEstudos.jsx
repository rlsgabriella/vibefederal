import React, { useState, useEffect } from 'react';
import { editais } from '../data/editais.js';
import './MapaEstudos.css';

const STATUS_CICLO = { pendente: 'andamento', andamento: 'concluido', concluido: 'pendente' };
const STATUS_LABEL = { pendente: 'Pendente', andamento: 'Em andamento', concluido: 'Concluído' };
const PESOS        = ['Alta', 'Média', 'Baixa'];
const PESO_CLASS   = { Alta: 'alta', Média: 'media', Baixa: 'baixa' };

const saveStorage = (id, data) => {
  try { localStorage.setItem(`mapa_${id}`, JSON.stringify(data)); } catch {}
};

export default function MapaEstudos() {
  const [concursoId, setConcursoId] = useState('');
  const [disciplinas, setDisciplinas] = useState([]);
  const [filtro, setFiltro]   = useState('Todos');
  const [showForm, setShowForm] = useState(false);
  const [novaDisc, setNovaDisc] = useState({ nome: '', descricao: '', peso: 'Média' });

  useEffect(() => {
    if (!concursoId) { setDisciplinas([]); return; }
    try {
      const salvo = localStorage.getItem(`mapa_${concursoId}`);
      if (salvo) { setDisciplinas(JSON.parse(salvo)); return; }
    } catch {}
    if (concursoId === 'personalizado') { setDisciplinas([]); return; }
    const edital  = editais.find(e => e.id === concursoId);
    const inicial = edital ? edital.disciplinas.map(d => ({ ...d, status: 'pendente' })) : [];
    setDisciplinas(inicial);
    saveStorage(concursoId, inicial);
  }, [concursoId]);

  const ciclarStatus = (id) => {
    setDisciplinas(prev => {
      const next = prev.map(d => d.id === id ? { ...d, status: STATUS_CICLO[d.status] } : d);
      saveStorage(concursoId, next);
      return next;
    });
  };

  const adicionarDisc = () => {
    if (!novaDisc.nome.trim()) return;
    const nova = {
      id: `custom_${Date.now()}`,
      nome:     novaDisc.nome.trim(),
      descricao: novaDisc.descricao.trim() || 'Disciplina personalizada.',
      peso:     novaDisc.peso,
      status:   'pendente',
      custom:   true,
    };
    setDisciplinas(prev => {
      const next = [...prev, nova];
      saveStorage(concursoId, next);
      return next;
    });
    setNovaDisc({ nome: '', descricao: '', peso: 'Média' });
    setShowForm(false);
  };

  const removerDisc = (id) => {
    setDisciplinas(prev => {
      const next = prev.filter(d => d.id !== id);
      saveStorage(concursoId, next);
      return next;
    });
  };

  const exportarCSV = () => {
    const all     = disciplinas;
    const total   = all.length;
    const done    = all.filter(d => d.status === 'concluido').length;
    const partial = all.filter(d => d.status === 'andamento').length;
    const pct     = total ? Math.round(((done + partial * 0.5) / total) * 100) : 0;
    const data    = new Date().toLocaleDateString('pt-BR');
    const edital  = editais.find(e => e.id === concursoId);
    const concursoLabel = edital ? edital.nome.toUpperCase() : concursoId.toUpperCase();

    const stLabel = { concluido: 'Concluído', andamento: 'Em andamento', pendente: 'Pendente' };
    const stColor = { concluido: '#1A7A42', andamento: '#E8A000', pendente: '#CBD5E1' };
    const stPill  = {
      concluido: 'background:#E2F5EA;color:#1A7A42',
      andamento: 'background:#FFF3E0;color:#E8A000',
      pendente:  'background:#F1F5F9;color:#64748B',
    };
    const pesoCor = {
      Alta:  'background:#FCEBEB;color:#A32D2D',
      Média: 'background:#FFF3E0;color:#854F0B',
      Baixa: 'background:#F1F5F9;color:#64748B',
    };

    const grupoRows = ['Alta', 'Média', 'Baixa'].map(peso => {
      const discs = all.filter(d => d.peso === peso);
      if (!discs.length) return '';
      const titulo = { Alta: 'Peso Alto — prioridade máxima', Média: 'Peso Médio', Baixa: 'Peso Baixo' }[peso];
      const rows = discs.map(d => {
        const st = d.status;
        return `
        <tr>
          <td style="padding:10px 20px;border-bottom:1px solid #F1F5F9;vertical-align:middle">
            <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${stColor[st]};margin-right:10px;vertical-align:middle"></span>
            <strong style="font-size:13px;color:#1E2330">${d.nome}</strong>
            <div style="font-size:11px;color:#8A94A3;margin-left:19px;margin-top:2px">${d.descricao}</div>
          </td>
          <td style="padding:10px 16px;border-bottom:1px solid #F1F5F9;text-align:center">
            <span style="font-size:11px;padding:3px 9px;border-radius:20px;font-weight:500;${pesoCor[d.peso]}">${d.peso}</span>
          </td>
          <td style="padding:10px 20px;border-bottom:1px solid #F1F5F9;text-align:center">
            <span style="font-size:11px;padding:3px 9px;border-radius:20px;font-weight:500;${stPill[st]}">${stLabel[st]}</span>
          </td>
        </tr>`;
      }).join('');
      return `
      <tr>
        <td colspan="3" style="padding:14px 20px 6px;background:#F8FAFC">
          <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:#8A94A3">${titulo}</span>
        </td>
      </tr>
      ${rows}`;
    }).join('');

    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mapa de Estudos — ${concursoLabel} — Vibe Federal</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F4F6F9;padding:32px 16px;color:#1E2330}
  .paper{background:white;max-width:720px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
  @media print{body{background:white;padding:0}.paper{box-shadow:none;border-radius:0}}
</style>
</head>
<body>
<div class="paper">
  <div style="background:#1A7A42;padding:22px 28px;display:flex;justify-content:space-between;align-items:center">
    <div>
      <div style="font-size:16px;font-weight:600;color:white">Vibe Federal — Mapa de Estudos</div>
      <div style="font-size:12px;color:rgba(255,255,255,.7);margin-top:3px">${concursoLabel}</div>
    </div>
    <div style="text-align:right;font-size:11px;color:rgba(255,255,255,.65)">Gerado em<br>${data}</div>
  </div>
  <div style="padding:18px 28px;border-bottom:1px solid #F1F5F9">
    <div style="font-size:15px;font-weight:600;color:#1E2330;margin-bottom:2px">Plano de estudos personalizado</div>
    <div style="font-size:12px;color:#8A94A3">Organize, acompanhe e revise suas disciplinas com foco no edital</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #F1F5F9">
    <div style="padding:14px;text-align:center;border-right:1px solid #F1F5F9">
      <div style="font-size:22px;font-weight:600;color:#1E2330">${total}</div>
      <div style="font-size:11px;color:#8A94A3">Total</div>
    </div>
    <div style="padding:14px;text-align:center;border-right:1px solid #F1F5F9">
      <div style="font-size:22px;font-weight:600;color:#1A7A42">${done}</div>
      <div style="font-size:11px;color:#8A94A3">Concluídas</div>
    </div>
    <div style="padding:14px;text-align:center;border-right:1px solid #F1F5F9">
      <div style="font-size:22px;font-weight:600;color:#E8A000">${partial}</div>
      <div style="font-size:11px;color:#8A94A3">Andamento</div>
    </div>
    <div style="padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:600;color:#1E2330">${pct}%</div>
      <div style="font-size:11px;color:#8A94A3">Progresso</div>
    </div>
  </div>
  <div style="padding:14px 28px;border-bottom:1px solid #F1F5F9">
    <div style="display:flex;justify-content:space-between;font-size:11px;color:#8A94A3;margin-bottom:6px">
      <span>Progresso geral</span><span>${pct}%</span>
    </div>
    <div style="height:7px;background:#E8EBF0;border-radius:4px;overflow:hidden">
      <div style="height:100%;width:${pct}%;background:#1A7A42;border-radius:4px"></div>
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <thead>
      <tr style="background:#F8FAFC">
        <th style="text-align:left;padding:10px 20px;font-size:11px;font-weight:600;color:#8A94A3;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #F1F5F9">Disciplina</th>
        <th style="padding:10px 16px;font-size:11px;font-weight:600;color:#8A94A3;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #F1F5F9;text-align:center">Peso</th>
        <th style="padding:10px 20px;font-size:11px;font-weight:600;color:#8A94A3;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #F1F5F9;text-align:center">Status</th>
      </tr>
    </thead>
    <tbody>${grupoRows}</tbody>
  </table>
  <div style="padding:14px 28px;text-align:center;font-size:11px;color:#8A94A3;border-top:1px solid #F1F5F9">
    Gerado por Vibe Federal · vibefederal.com.br · Estude com leveza e estratégia 🌿
  </div>
</div>
<div style="text-align:center;margin-top:16px;font-size:12px;color:#8A94A3">
  Dica: use Ctrl+P (ou Cmd+P no Mac) para salvar como PDF
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `mapa-estudos-${concursoId}-${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const total       = disciplinas.length;
  const concluidas  = disciplinas.filter(d => d.status === 'concluido').length;
  const emAndamento = disciplinas.filter(d => d.status === 'andamento').length;
  const progresso   = total > 0 ? Math.round((concluidas / total) * 100) : 0;
  const filtradas   = filtro === 'Todos' ? disciplinas : disciplinas.filter(d => d.peso === filtro);

  return (
    <div className="mapa-wrapper">

      {/* Seletor de concurso */}
      <div className="mapa-select-row">
        <label className="mapa-label" htmlFor="mapa-concurso">Concurso:</label>
        <select
          id="mapa-concurso"
          className="mapa-select"
          value={concursoId}
          onChange={e => { setConcursoId(e.target.value); setFiltro('Todos'); setShowForm(false); }}
        >
          <option value="">Selecione um concurso...</option>
          {editais.map(e => (
            <option key={e.id} value={e.id}>{e.nome}</option>
          ))}
          <option value="personalizado">✏️ Personalizado</option>
        </select>
      </div>

      {concursoId && (
        <>
          {/* Barra de progresso */}
          <div className="mapa-progress-wrap">
            <div className="mapa-progress-header">
              <span className="mapa-progress-title">Progresso geral</span>
              <strong className="mapa-progress-pct">{progresso}%</strong>
            </div>
            <div className="mapa-progress-bar">
              <div className="mapa-progress-fill" style={{ width: `${progresso}%` }} />
            </div>
          </div>

          {/* Cards de estatísticas */}
          <div className="mapa-stats">
            <div className="mapa-stat">
              <strong>{total}</strong>
              <span>Total</span>
            </div>
            <div className="mapa-stat mapa-stat--green">
              <strong>{concluidas}</strong>
              <span>Concluídas</span>
            </div>
            <div className="mapa-stat mapa-stat--yellow">
              <strong>{emAndamento}</strong>
              <span>Em andamento</span>
            </div>
            <div className="mapa-stat mapa-stat--blue">
              <strong>{progresso}%</strong>
              <span>Progresso</span>
            </div>
          </div>

          {/* Filtros + botões de ação */}
          <div className="mapa-toolbar">
            <div className="mapa-filtros">
              {['Todos', ...PESOS].map(p => (
                <button
                  key={p}
                  className={`mapa-filtro-btn ${filtro === p ? 'mapa-filtro-btn--ativo' : ''}`}
                  onClick={() => setFiltro(p)}
                >
                  {p === 'Todos' ? 'Todos os pesos' : `Peso ${p}`}
                </button>
              ))}
            </div>
            <div className="mapa-acoes">
              <button className="mapa-btn-add" onClick={() => setShowForm(s => !s)}>
                + Disciplina
              </button>
              {disciplinas.length > 0 && (
                <button className="mapa-btn-export" onClick={exportarCSV}>
                  ↓ HTML
                </button>
              )}
            </div>
          </div>

          {/* Formulário inline de nova disciplina */}
          {showForm && (
            <div className="mapa-form">
              <div className="mapa-form-fields">
                <input
                  className="mapa-input"
                  placeholder="Nome da disciplina *"
                  value={novaDisc.nome}
                  onChange={e => setNovaDisc(p => ({ ...p, nome: e.target.value }))}
                  onKeyDown={e => e.key === 'Enter' && adicionarDisc()}
                />
                <input
                  className="mapa-input"
                  placeholder="Descrição (opcional)"
                  value={novaDisc.descricao}
                  onChange={e => setNovaDisc(p => ({ ...p, descricao: e.target.value }))}
                />
                <select
                  className="mapa-select mapa-select--sm"
                  value={novaDisc.peso}
                  onChange={e => setNovaDisc(p => ({ ...p, peso: e.target.value }))}
                >
                  {PESOS.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="mapa-form-btns">
                <button className="mapa-btn-add" onClick={adicionarDisc}>Adicionar</button>
                <button
                  className="mapa-btn-cancel"
                  onClick={() => { setShowForm(false); setNovaDisc({ nome: '', descricao: '', peso: 'Média' }); }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* Lista de disciplinas */}
          <div className="mapa-lista">
            {filtradas.length === 0 ? (
              <div className="mapa-empty">
                {concursoId === 'personalizado'
                  ? 'Use o botão "+ Disciplina" para adicionar as matérias do seu edital.'
                  : 'Nenhuma disciplina encontrada com esse filtro de peso.'}
              </div>
            ) : filtradas.map(d => (
              <div key={d.id} className={`mapa-card mapa-card--${d.status}`}>
                <button
                  className={`mapa-status-btn mapa-status-btn--${d.status}`}
                  onClick={() => ciclarStatus(d.id)}
                  title="Clique para mudar o status"
                  aria-label={`Status atual: ${STATUS_LABEL[d.status]}. Clique para avançar.`}
                >
                  <span className="mapa-status-dot" />
                  <span className="mapa-status-txt">{STATUS_LABEL[d.status]}</span>
                </button>

                <div className="mapa-card-info">
                  <div className="mapa-card-top">
                    <span className="mapa-card-nome">{d.nome}</span>
                    <span className={`mapa-peso mapa-peso--${PESO_CLASS[d.peso]}`}>{d.peso}</span>
                  </div>
                  <p className="mapa-card-desc">{d.descricao}</p>
                </div>

                {d.custom && (
                  <button
                    className="mapa-remove-btn"
                    onClick={() => removerDisc(d.id)}
                    aria-label="Remover disciplina"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {!concursoId && (
        <div className="mapa-placeholder">
          <span>🗺️</span>
          <p>Selecione um concurso acima para carregar as disciplinas do edital automaticamente.</p>
        </div>
      )}
    </div>
  );
}
