// Logo oficial Vibe Federal – recriada vetorialmente baseada na imagem enviada
// Vibe em azul escuro com script cursivo + FEDERAL em verde bold + traço laranja + brilhos laranja

import React from 'react';

export default function LogoVibeFederal({ height = 48, className = '' }) {
  const w = height * 1.15;
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 230 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vibe Federal"
      role="img"
    >
      {/* Brilhos / raios laranja no canto superior direito */}
      <g stroke="#E8450A" strokeWidth="5" strokeLinecap="round">
        <line x1="182" y1="28" x2="196" y2="14"/>
        <line x1="192" y1="38" x2="210" y2="34"/>
        <line x1="188" y1="50" x2="204" y2="54"/>
      </g>

      {/* "Vibe" em script cursivo azul escuro */}
      <text
        x="18"
        y="108"
        fontFamily="'Georgia','Times New Roman',serif"
        fontSize="88"
        fontWeight="700"
        fontStyle="italic"
        fill="#003DA5"
        letterSpacing="-2"
      >Vibe</text>

      {/* "FEDERAL" em verde bold */}
      <text
        x="14"
        y="172"
        fontFamily="'Arial Black','Impact',sans-serif"
        fontSize="62"
        fontWeight="900"
        fill="#1A8C3C"
        letterSpacing="2"
      >FEDERAL</text>

      {/* Traço ondulado laranja embaixo */}
      <path
        d="M12 185 Q60 175 115 185 Q160 195 218 183"
        fill="none"
        stroke="#E8450A"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
