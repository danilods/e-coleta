<h1 align="center">
    <img src="ecoleta-capa.svg" title="GobarberAdmin"></h1>

</h1>

<h4 align="center"> 
	 :recycle:E-Coleta - Next Level Week 🚀 ! 
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danilods/gobarber-admin?color=%FF9000">

  <a href="https://www.linkedin.com/in/danilo-de-sousa-97594b187/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Danilo%20de%20Sousa-orange">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danilods/gobarber-admin?color=%235636D3">
  
  <a href="https://github.com/danilods/gobarber-admin/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danilods/gobarber-admin?color=%235636D3">
  </a>
  
  <a href="https://github.com/danilods/gobarber-admin/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/danilods/gobarber-admin?color=%235636D3">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/danilods/gobarber-admin?color=%235636D3">
</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=NLW%201.0%20-%20Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDanielObara%2FNLW-1.0%2Fmaster%2Fbackend%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


## 💻 Project

Ecoleta é uma proposta de marketplace voltada para a facilitação e integração de pontos de coleta de materiais para reciclagem. 
O usuário cadastra um ponto de coleta, insere os itens que a aquele ponto é responsável por coletar e publica para que o usuário possa consultar no mapa e saber onde depositar o material.



## :rocket: Tecnologias

As seguintes tecnologias foram utilizadas neste projeto:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]


## :information_source: Iniciando

Para iniciar o projeto, você precisa do [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] instalado em seu computador.

### Iniciando a API

```bash
# Clone this repository
$ git clone https://github.com/danilods/e-coleta

# Go into the repository
$ cd nlw/backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

### Iniciando o Front-end

```bash
# Clone this repository
$ git clone https://github.com/danilods/e-coleta

# Go into the repository
$ cd nlw/frontent

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Iniciando o Mobile

```bash
# Clone this repository
$ git clone https://github.com/danilods/e-coleta

# Go into the repository
$ cd nlw/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## 🤔 Como contribuir?

**Faça um fork para este repositório**

```bash
# Usando o github CLI:
$ gh repo fork danilods/gobarber-admin

# Se você não tem GitHub CLI, use o website para isto.
```

**Siga os passos abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url && cd nlw

# Criar branch com sua feature
$ git checkout -b my-feature

# Faça um commit com suas alterações
$ git commit -m 'feat: My new feature'

# Envie seu código para o repo remoto
$ git push origin my-feature
```

Depois que seu pull request for mesclado (merged), você poderá excluir sua branch.

## 📝 Licença

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Desenvolvido por 💜 Danilo de Sousa 👋 [Veja meu linkedin](https://www.linkedin.com/in/danilo-de-sousa-97594b187/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/

