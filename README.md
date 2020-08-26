<h1 align="center">
    <img alt="esp-ura-mqtt" title="esp-ura-mqtt" src="https://i.imgur.com/3zFLNla.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/natalnet/esp-ura-mqtt?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/natalnet/esp-ura-mqtt">

  <a href="https://www.twitter.com/natalnet/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fnatalnet%2Fnlw1">
  </a>
	
  
  <a href="https://github.com/natalnet/esp-ura-mqtt/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/natalnet/esp-ura-mqtt">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/natalnet/esp-ura-mqtt/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/natalnet/esp-ura-mqtt?style=social">
  </a>
</p>

## 💻 Sobre o projeto

Este projeto consistem é um criar 2 servidores e uma aplicativo mobile para fazer a comunicação com um ESP 8266 via MQTT

O Aplicativo enviará uma requisição para API e ela mandará o servidor MQTT fazer um publisher para uma rota onde você irá determinar com a mensagem presenta na requisição.

O ESP 8266 ficará ouvindo as mensagens da rota que você determinou e fazer o que você determinar dependendo da mensagem que ele está escutando.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [Expo][expo]
- [Mosca][mosca]
- [MQTT][mqtt]
- [Python][python]

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Yarn][yarn] e a CLI do [Expo][expo].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando a API e o servidor MQTT

```bash
# Clone este repositório
$ git clone https://github.com/natalnet/esp-ura-mqtt.git

# Acesse a pasta do projeto no terminal/cmd
$ cd esp-ura-mqtt

# Acesse a pasta do servidor MQTT e da API
$ cd servers

# Instale as dependências
$ yarn

# Coloque o Ip da sua máquina na linha 3 dos arquivos src/publisher.ts e subscriber.ts

# Abra o primeiro terminal aonde a API executará
$ yarn dev:server
# Um log como esse ira aparecer: Servidor iniciado na porta 4444

# Abra o segundo terminal aonde o servidor MQTT executará
$ yarn dev:broker
#  O servidor executará no ip da sua máquina porta 1883
# Um log como esse ira aparecer: Servidor rodando na porta 1883

# Abra o terceiro terminal aonde o subscriber executará
$ yarn dev:subscriber
# Ele ficará ouvindo a rota 'URA/robo1/acao' e enviar um log da mensagem dessa rota, para alterar a rota é só mudar as informações em src/mqtt/subscriber

# Uma rota do tipo post para 'http://localhost:4444/sentido' com a propriedade 'sentido' em json já está criada, você pode conferir nos arquivos src/controllers/ForwardController e routes.ts, altere os arquivos se sentir necessidade.
```

### 📱Rodando a aplicação mobile

```bash
# Clone este repositório
$ git clone https://github.com/natalnet/esp-ura-mqtt.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd esp-ura-mqtt

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# Escanei o QR CODE com o aplicativo Expo instalado no seu Smarthphone
```

### 📱Parar gerar APK do aplicativo

```bash
# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ yarn

# Execute o comando para gerar a build
$ expo build:android -t apk

# Selecione para o expo criar a keystore
# Entre com sua credenciais do expo ou crie uma
# Um link será gerado aonde você irá aguardar o expo gerar o APK do aplicativo
# Após o término você pode encontrar o link para baixar o APK na sua conta do expo
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Pedro henrique 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedro-henrique-b9541a199/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://docs.expo.io/get-started/installation/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[yarn]: https://yarnpkg.com/getting-started/install
[mosca]: https://github.com/moscajs/mosca
[mqtt]: http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html
[python]: https://docs.python.org/3/
