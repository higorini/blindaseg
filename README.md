# BlindaSeg — Site institucional

Este projeto foi desenvolvido a partir do antigo site (http://blindaseg.com/), mantendo o espírito da marca e elevando a apresentação. A base visual, textos e interações foram reprojetados para um resultado mais atual e responsivo, com foco em performance e clareza para o cliente final.

This site was rebuilt using the legacy page (http://blindaseg.com/) as the main reference. The goal was to keep the brand spirit while delivering a fresher, responsive experience with solid performance and clear storytelling for visitors.

## Tecnologias / Stack

- Next.js 15 (app router)
- React 18
- Tailwind CSS
- Framer Motion (para animações pontuais)
- React Icons

## Como rodar localmente / How to run locally

1. Clonar o repositório:
   ```bash
   git clone <repo-url>
   cd blindaseg
   ```
2. Instalar dependências:
   ```bash
   npm install
   ```
3. Rodar em desenvolvimento:

   ```bash
   npm run dev
   ```

   Acesse http://localhost:3000

4. Build de produção:
   ```bash
   npm run build
   npm run start
   ```

## Notas rápidas

- As imagens estão em `public/imagens` e `public/imagens/parceiros`.
- As âncoras seguem o menu (Início, Produtos, Diferenciais, Tabela, Serviços, Parceiros, Sobre).
- Otimização de imagens do Next está ativa; ajuste `next.config.js` se precisar desabilitar.
