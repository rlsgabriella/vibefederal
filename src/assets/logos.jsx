// Logos SVG vetoriais dos Institutos Federais
// Todos seguem o padrão MEC: símbolo do livro aberto com tocha
// Cores e tipografia fiéis à identidade visual oficial de cada instituição

export const IFSymbol = ({ cor1 = '#003366', cor2 = '#009933', size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* Livro aberto estilizado */}
    <path d="M50 20 C35 20 20 28 20 40 L20 75 C20 75 35 68 50 70 C65 68 80 75 80 75 L80 40 C80 28 65 20 50 20Z" fill={cor1} opacity="0.15"/>
    {/* Página esquerda */}
    <path d="M50 22 C37 22 22 30 22 42 L22 73 C33 67 42 66 50 68 L50 22Z" fill={cor1}/>
    {/* Página direita */}
    <path d="M50 22 C63 22 78 30 78 42 L78 73 C67 67 58 66 50 68 L50 22Z" fill={cor2}/>
    {/* Lombada */}
    <rect x="48" y="22" width="4" height="46" fill="white" opacity="0.6"/>
    {/* Tocha */}
    <rect x="46" y="10" width="8" height="16" rx="2" fill={cor1}/>
    <path d="M46 10 C46 4 50 2 50 2 C50 2 54 4 54 10Z" fill={cor2}/>
    <circle cx="50" cy="10" r="3" fill="#FFD700"/>
  </svg>
);

// Logo IFCE – azul escuro + verde
export const LogoIFCE = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    {/* Símbolo */}
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#00437A"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#009940"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#00437A"/>
    <path d="M34 5 C34 0 38 -2 38 -2 C38 -2 42 0 42 5Z" fill="#FFB81C" transform="translate(0 2)"/>
    <circle cx="38" cy="6" r="3.5" fill="#FFB81C"/>
    {/* Texto IF */}
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#00437A">IF</text>
    {/* Texto CE */}
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#009940" letterSpacing="1">CE</text>
    {/* Linha */}
    <line x1="72" y1="42" x2="160" y2="42" stroke="#00437A" strokeWidth="1.5"/>
  </svg>
);

// Logo IFPI – verde + amarelo
export const LogoIFPI = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#006633"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#FFB81C"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#006633"/>
    <circle cx="38" cy="6" r="3.5" fill="#FFB81C"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#006633">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#FFB81C" letterSpacing="1">PI</text>
    <line x1="72" y1="42" x2="155" y2="42" stroke="#006633" strokeWidth="1.5"/>
  </svg>
);

// Logo IFC – azul marinho + verde
export const LogoIFC = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#003DA5"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#00A650"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#003DA5"/>
    <circle cx="38" cy="6" r="3.5" fill="#00A650"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#003DA5">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#00A650" letterSpacing="1">C</text>
    <line x1="72" y1="42" x2="145" y2="42" stroke="#003DA5" strokeWidth="1.5"/>
  </svg>
);

// Logo IFAL – verde + amarelo
export const LogoIFAL = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#005C2E"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#E8A000"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#005C2E"/>
    <circle cx="38" cy="6" r="3.5" fill="#E8A000"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#005C2E">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#E8A000" letterSpacing="1">AL</text>
    <line x1="72" y1="42" x2="162" y2="42" stroke="#005C2E" strokeWidth="1.5"/>
  </svg>
);

// Logo IFPB – azul escuro + verde
export const LogoIFPB = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#003366"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#009933"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#003366"/>
    <circle cx="38" cy="6" r="3.5" fill="#F7A800"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#003366">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#009933" letterSpacing="1">PB</text>
    <line x1="72" y1="42" x2="160" y2="42" stroke="#003366" strokeWidth="1.5"/>
  </svg>
);

// Logo IFRN – verde + amarelo/laranja
export const LogoIFRN = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#006843"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#E8550A"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#006843"/>
    <circle cx="38" cy="6" r="3.5" fill="#E8550A"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#006843">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#E8550A" letterSpacing="1">RN</text>
    <line x1="72" y1="42" x2="162" y2="42" stroke="#006843" strokeWidth="1.5"/>
  </svg>
);

// Logo IFMA – vermelho + verde
export const LogoIFMA = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#C80000"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#007A33"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#C80000"/>
    <circle cx="38" cy="6" r="3.5" fill="#FFD700"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#C80000">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#007A33" letterSpacing="1">MA</text>
    <line x1="72" y1="42" x2="168" y2="42" stroke="#C80000" strokeWidth="1.5"/>
  </svg>
);

// Logo IFBA – azul + verde
export const LogoIFBA = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 12 C26 12 14 20 14 32 L14 68 C22 63 30 62 38 63 L38 12Z" fill="#004990"/>
    <path d="M38 12 C50 12 62 20 62 32 L62 68 C54 63 46 62 38 63 L38 12Z" fill="#009B3A"/>
    <rect x="36.5" y="12" width="3" height="51" fill="white" opacity="0.5"/>
    <rect x="34" y="5" width="8" height="12" rx="2" fill="#004990"/>
    <circle cx="38" cy="6" r="3.5" fill="#F7A800"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="32" fontWeight="900" fill="#004990">IF</text>
    <text x="72" y="65" fontFamily="'Arial Black',sans-serif" fontSize="20" fontWeight="700" fill="#009B3A" letterSpacing="1">BA</text>
    <line x1="72" y1="42" x2="160" y2="42" stroke="#004990" strokeWidth="1.5"/>
  </svg>
);

// Logo UFC – azul + vermelho (Universidade Federal do Ceará)
export const LogoUFC = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    {/* Escudo estilizado UFC */}
    <path d="M38 8 L14 22 L14 58 C14 72 25 80 38 86 C51 80 62 72 62 58 L62 22 Z" fill="#003B8E"/>
    <path d="M38 8 L38 86 C51 80 62 72 62 58 L62 22 Z" fill="#A30000"/>
    <path d="M30 42 L30 34 L24 34 L24 56 L30 56 L30 48 L35 56 L42 56 L42 34 L36 34 L36 42 Z" fill="white" opacity="0.9"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="28" fontWeight="900" fill="#003B8E">UFC</text>
    <text x="72" y="62" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="600" fill="#555" letterSpacing="0.5">Universidade Federal</text>
    <text x="72" y="75" fontFamily="Arial,sans-serif" fontSize="10" fontWeight="600" fill="#555">do Ceará</text>
  </svg>
);

// Logo UFPI
export const LogoUFPI = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 8 L14 22 L14 58 C14 72 25 80 38 86 C51 80 62 72 62 58 L62 22 Z" fill="#005B2D"/>
    <path d="M38 8 L38 86 C51 80 62 72 62 58 L62 22 Z" fill="#FFB81C"/>
    <circle cx="38" cy="47" r="14" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
    <line x1="38" y1="33" x2="38" y2="61" stroke="white" strokeWidth="2" opacity="0.7"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="28" fontWeight="900" fill="#005B2D">UFPI</text>
    <text x="72" y="62" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="600" fill="#555">Universidade Federal</text>
    <text x="72" y="74" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="600" fill="#555">do Piauí</text>
  </svg>
);

// Logo UFAL
export const LogoUFAL = ({ size = 120 }) => (
  <svg width={size} height={size * 0.42} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 8 L14 22 L14 58 C14 72 25 80 38 86 C51 80 62 72 62 58 L62 22 Z" fill="#003366"/>
    <path d="M38 8 L38 86 C51 80 62 72 62 58 L62 22 Z" fill="#FFD700"/>
    <circle cx="38" cy="47" r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
    <text x="72" y="38" fontFamily="'Arial Black',sans-serif" fontSize="28" fontWeight="900" fill="#003366">UFAL</text>
    <text x="72" y="62" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="600" fill="#555">Universidade Federal</text>
    <text x="72" y="74" fontFamily="Arial,sans-serif" fontSize="9.5" fontWeight="600" fill="#555">de Alagoas</text>
  </svg>
);

export const IF_LOGOS = [
  { id: 'ifce', component: LogoIFCE, nome: 'Instituto Federal do Ceará',       sigla: 'IFCE' },
  { id: 'ifc',  component: LogoIFC,  nome: 'Instituto Federal Catarinense',    sigla: 'IFC'  },
  { id: 'ifpi', component: LogoIFPI, nome: 'Instituto Federal do Piauí',       sigla: 'IFPI' },
  { id: 'ifal', component: LogoIFAL, nome: 'Instituto Federal de Alagoas',     sigla: 'IFAL' },
  { id: 'ifpb', component: LogoIFPB, nome: 'Instituto Federal da Paraíba',     sigla: 'IFPB' },
  { id: 'ifrn', component: LogoIFRN, nome: 'Instituto Federal do RN',          sigla: 'IFRN' },
  { id: 'ifma', component: LogoIFMA, nome: 'Instituto Federal do Maranhão',    sigla: 'IFMA' },
  { id: 'ifba', component: LogoIFBA, nome: 'Instituto Federal da Bahia',       sigla: 'IFBA' },
  { id: 'ufc',  component: LogoUFC,  nome: 'Universidade Federal do Ceará',    sigla: 'UFC'  },
  { id: 'ufpi', component: LogoUFPI, nome: 'Universidade Federal do Piauí',    sigla: 'UFPI' },
  { id: 'ufal', component: LogoUFAL, nome: 'Universidade Federal de Alagoas',  sigla: 'UFAL' },
];
