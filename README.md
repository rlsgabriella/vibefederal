# 🌿 Vibe Federal – Site React

Reconstrução do site Vibe Federal com React + Vite. Paleta de cores original mantida, estrutura organizada em componentes e páginas, novas seções adicionadas.

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev

# 3. Build para produção
npm run build
```

O site estará disponível em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
vibefederal/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # Entrada
    ├── App.jsx           # Rotas
    ├── index.css         # Design System (variáveis globais)
    ├── data/
    │   └── index.js      # Todos os dados: trilhas, disciplinas, concursos, dicas
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── Hero.jsx / .css
    │   ├── TrilhaCard.jsx / .css
    │   ├── Carrossel.jsx / .css   # Carrossel automático de concursos
    │   └── PostItBoard.jsx / .css # Post-its com flip animado
    └── pages/
        ├── Home.jsx / .css
        ├── Materiais.jsx / .css   # Todos os materiais com filtro
        ├── Disciplinas.jsx / .css # Materiais por disciplina (novos)
        ├── Dicas.jsx              # Página de dicas de estudo
        ├── Sobre.jsx / .css
        └── TrilhaDetail.jsx / .css # Página individual de cada trilha
```

---

## 🎨 Design System

Todas as cores e tokens estão em `src/index.css` como variáveis CSS:

| Variável            | Cor          | Uso                |
|---------------------|--------------|--------------------|
| `--blue`            | #1A8CCC      | IFC                |
| `--magenta`         | #C4007A      | IFPI               |
| `--yellow`          | #F5C800      | IFCE               |
| `--orange`          | #E86B00      | IFAL               |
| `--green`           | #2EAA5E      | Marca / Vibe       |

---

## 📄 Páginas

| Rota            | Página                          |
|-----------------|---------------------------------|
| `/`             | Home – Hero, carrossel, trilhas, dicas preview, CTA |
| `/materiais`    | Todos os pacotes (com filtro por cargo) |
| `/disciplinas`  | Materiais separados por disciplina |
| `/dicas`        | Dicas de estudo com post-its    |
| `/sobre`        | Sobre a Vibe Federal            |
| `/:id`          | Detalhe de cada trilha (ex: `/ifce`, `/ifpi`) |

---

## ✏️ Como adicionar um novo material

1. Abra `src/data/index.js`
2. Adicione um item ao array `trilhas` (para pacotes) ou `disciplinas` (para itens por disciplina)
3. O card aparecerá automaticamente na página correta

---

## 🔧 Personalização

- **Cores**: edite as variáveis em `src/index.css`
- **Conteúdo**: edite `src/data/index.js`
- **Fontes**: substituir no `index.html` (Google Fonts) e `index.css`

---

Feito com 🌿 para quem estuda com leveza.
