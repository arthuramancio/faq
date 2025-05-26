# FAQ FaceSchool - Documentação

Este é um FAQ moderno e responsivo para o FaceSchool, inspirado no design do suporte do YouTube Music. O projeto foi desenvolvido com React, TypeScript e Tailwind CSS para garantir uma experiência de usuário intuitiva e fácil manutenção.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação e Execução Local](#instalação-e-execução-local)
- [Publicação no GitHub Pages](#publicação-no-github-pages)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Manutenção do Conteúdo](#manutenção-do-conteúdo)
- [Personalização](#personalização)
- [Solução de Problemas](#solução-de-problemas)

## Visão Geral

O FAQ FaceSchool oferece:

- Interface limpa e moderna
- Navegação por categorias em formato de acordeão
- Busca em tempo real
- Design totalmente responsivo
- Suporte a formatação Markdown nas respostas
- Fácil manutenção do conteúdo

## Instalação e Execução Local

### Pré-requisitos para macOS

1. **Node.js e npm**: Instale via Homebrew ou baixe do site oficial
   ```bash
   # Usando Homebrew
   brew install node
   ```

2. **Git**: Provavelmente já está instalado no macOS, caso contrário:
   ```bash
   brew install git
   ```

3. **Editor de código**: Recomendamos Visual Studio Code
   ```bash
   brew install --cask visual-studio-code
   ```

### Clonando e Executando o Projeto

1. Abra o Terminal e clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/faq-faceschool.git
   cd faq-faceschool
   ```

2. Instale as dependências:
   ```bash
   npm install
   # OU, se preferir usar pnpm (recomendado)
   npm install -g pnpm
   pnpm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # OU
   pnpm run dev
   ```

4. Acesse o FAQ no navegador:
   ```
   http://localhost:5173
   ```

## Publicação no GitHub Pages

### Configuração Inicial (Apenas uma vez)

1. Crie um novo repositório no GitHub:
   - Acesse [GitHub](https://github.com) e faça login
   - Clique em "New" para criar um novo repositório
   - Nomeie o repositório (ex: "faq-faceschool")
   - Deixe o repositório público
   - Clique em "Create repository"

2. Configure o projeto para GitHub Pages:
   - Abra o arquivo `vite.config.ts` e adicione a base URL:
   ```typescript
   export default defineConfig({
     base: '/nome-do-repositorio/', // Substitua pelo nome do seu repositório
     // ... outras configurações
   });
   ```

3. Adicione um script de deploy no `package.json`:
   ```json
   "scripts": {
     // ... outros scripts
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Instale a dependência gh-pages:
   ```bash
   npm install --save-dev gh-pages
   # OU
   pnpm add -D gh-pages
   ```

### Processo de Deploy

1. Prepare os arquivos para publicação:
   ```bash
   npm run build
   # OU
   pnpm build
   ```

2. Publique no GitHub Pages:
   ```bash
   npm run deploy
   # OU
   pnpm deploy
   ```

3. Configure o GitHub Pages nas configurações do repositório:
   - Acesse as configurações do repositório no GitHub
   - Navegue até a seção "Pages"
   - Em "Source", selecione a branch `gh-pages`
   - Clique em "Save"

4. Acesse seu FAQ publicado:
   ```
   https://seu-usuario.github.io/nome-do-repositorio/
   ```

## Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── Header.tsx      # Cabeçalho do site
│   ├── SearchBar.tsx   # Barra de busca
│   ├── CategoryAccordion.tsx  # Acordeão de categorias
│   ├── QuestionAccordion.tsx  # Acordeão de perguntas
│   └── Footer.tsx      # Rodapé do site
├── data/
│   └── faqData.ts      # Dados do FAQ (perguntas e respostas)
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## Manutenção do Conteúdo

### Atualização de Perguntas e Respostas

Para atualizar o conteúdo do FAQ, edite o arquivo `src/data/faqData.ts`:

1. Abra o arquivo no seu editor de código
2. Modifique as perguntas e respostas existentes ou adicione novas
3. Mantenha a estrutura de dados:
   ```typescript
   {
     id: "categoria-id",
     title: "Título da Categoria",
     questions: [
       {
         id: "pergunta-id",
         question: "Texto da pergunta?",
         answer: "Resposta da pergunta, pode usar **Markdown**."
       }
     ]
   }
   ```
4. Salve o arquivo
5. Execute o build e deploy novamente

### Adição de Novas Categorias

Para adicionar uma nova categoria:

1. Abra o arquivo `src/data/faqData.ts`
2. Adicione um novo objeto de categoria ao array `faqData`:
   ```typescript
   {
     id: "nova-categoria",
     title: "Título da Nova Categoria",
     questions: [
       // Perguntas da nova categoria
     ]
   }
   ```
3. Salve, build e deploy

### Formatação das Respostas

As respostas suportam formatação Markdown:

- **Negrito**: `**texto em negrito**`
- *Itálico*: `*texto em itálico*`
- Links: `[texto do link](https://exemplo.com)`
- Listas:
  ```
  - Item 1
  - Item 2
  ```

## Personalização

### Cores e Tema

Para alterar as cores do tema:

1. Edite o arquivo `src/index.css`:
   ```css
   :root {
     --primary: #2D6CDF; /* Cor principal - altere para a cor desejada */
     --primary-foreground: white;
   }
   ```

2. Salve, build e deploy

### Logo e Imagens

Para adicionar ou alterar o logo:

1. Coloque o arquivo de imagem na pasta `public/`
2. Edite o componente `Header.tsx` para apontar para o novo arquivo

## Solução de Problemas

### Problemas Comuns

1. **Erro ao instalar dependências**:
   - Tente limpar o cache do npm: `npm cache clean --force`
   - Ou use pnpm: `pnpm install`

2. **Erro no build**:
   - Verifique se todas as importações estão corretas
   - Verifique se não há erros de TypeScript

3. **Página em branco após deploy**:
   - Verifique se a base URL no `vite.config.ts` está correta
   - Certifique-se de que o GitHub Pages está configurado para a branch `gh-pages`

### Suporte

Para problemas não cobertos nesta documentação, entre em contato com a equipe de desenvolvimento do FaceSchool.
