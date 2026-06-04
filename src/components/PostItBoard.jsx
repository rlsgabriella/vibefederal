import React, { useState } from 'react';
import './PostItBoard.css';

export default function PostItBoard({ dicas }) {
  const [flipped, setFlipped] = useState({});

  const toggle = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="postit-board">
      {dicas.map((d, i) => (
        <div
          key={i}
          className={`postit ${flipped[i] ? 'postit--flipped' : ''}`}
          style={{ '--postit-bg': d.cor, '--postit-rot': d.rotacao, animationDelay: `${i * 80}ms` }}
          onClick={() => toggle(i)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && toggle(i)}
          aria-label={d.titulo}
        >
          <div className="postit__inner">
            <div className="postit__front">
              <span className="postit__emoji">{d.emoji}</span>
              <h4 className="postit__titulo">{d.titulo}</h4>
              <p className="postit__texto">{d.texto}</p>
              <span className="postit__hint">Clique para virar ↩</span>
            </div>
            <div className="postit__back">
              <span className="postit__emoji">💡</span>
              <p className="postit__texto postit__texto--back">
                <strong>Dica extra:</strong> Use essa técnica por 7 dias seguidos e compare sua retenção. Constância vale mais que maratonas de estudo.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
