# Portfólio - Felipe Augusto

Este projeto é um portfólio desenvolvido utilizando tecnologias modernas para demonstrar meus projetos e habilidades.

## Tecnologias Utilizadas

-   **Next.js**: Framework React para aplicações fullstack.
-   **React**: Biblioteca para construção de interfaces de usuário.
-   **Tailwind CSS**: Utilitário CSS para design responsivo.
-   **lucide-react**: Biblioteca de ícones para React.

## Estrutura do Projeto

```
website-portfolio/
├── public/                 # Arquivos estáticos e imagens
├── src/
│   ├── app/                # Arquivos de configuração e páginas do Next.js
│   │   ├── robots.ts      # Configuração do robots.txt
│   │   ├── sitemap.ts     # Configuração do sitemap.xml
│   │   └── (public)/      # Páginas públicas
│   │       ├── layout.tsx # Layout global da aplicação (ex.: cabeçalho e rodapé)
│   │       └── page.tsx   # Página inicial
│   ├── components/         # Componentes reutilizáveis
│   │   ├── card.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── keywords.tsx
│   │   └── project.tsx
│   └── styles/             # Arquivos de estilo (ex.: Tailwind CSS)
│       └── globals.css
└── package.json            # Dependências e scripts do projeto
```

## Pré-requisitos

-   Node.js (versão 18 ou superior)
-   NPM ou Yarn

## Como Executar

1. Clone o repositório:

    ```bash
    git clone https://github.com/imfelipedev/website-portfolio-v2.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd website-portfolio
    ```

3. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

4. Inicie a aplicação em modo de desenvolvimento:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
