
# ⚛️ React + JavaScript + Vite + ESLint 🚀

Bem-vindo ao projeto **React + JavaScript + Vite**! Este projeto foi desenvolvido para consumir a API do GitHub e exibir dados dos usuários de forma dinâmica e rápida.

## 🛠️ Tecnologias Utilizadas

- **Vite** - Build tool ultrarrápida ⚡
- **React** - Biblioteca para construção de interfaces de usuário 🖼️
- **JavaScript** - JavaScript para tornar funcional. 📝
- **ESLint** - Ferramenta para identificar e corrigir problemas no código 🔍

## 📦 Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/mat-henriqu/lista_de_tarefas.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd lista_de_tarefas
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## ⚙️ Configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomendamos expandir a configuração do ESLint para habilitar regras de linting com reconhecimento de tipos.

1. Configure a propriedade `parserOptions` no nível superior assim:
   ```js
   export default {
     // outras regras...
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json'],
       tsconfigRootDir: __dirname,
     },
   }
   ```

2. Substitua `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`.
3. Opcionalmente, adicione `plugin:@typescript-eslint/stylistic-type-checked`.
4. Instale o [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e adicione `plugin:react/recommended` & `plugin:react/jsx-runtime` à lista de `extends`.

## 🚀 Funcionalidades

- 🔍 **Criação de Tarefa**: Pode criar uma tarefa e dar a ela um tipo (Pessoal, Estudo ou Trabalho).
- 📊 **Exibição de dados**: Exibe informações das tarefas!
- 🌐 **Filtros**: Você pode filtrar por status, ordem alfabética e por nome.

## 🖥️ Demonstração

Você pode conferir a aplicação rodando em [link-da-aplicacao](https://mat-henriqu.github.io/lista_de_tarefas/).

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

1. Faça um _fork_ do projeto
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`)
3. Faça suas alterações e _commit_ (`git commit -m 'Adiciona nova feature'`)
4. Envie para a branch (`git push origin feature/nome-da-feature`)
5. Abra um _pull request_

---

Feito com 💙 por [Matheus Henrique](https://github.com/mat-henriqu/) 🚀
