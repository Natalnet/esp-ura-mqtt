import mosca from 'mosca'

const mqttPort = 1883

const server = new mosca.Server({
  port: mqttPort
})

server.on('ready', function () {
  console.log(`Servidor rodando na porta ${mqttPort}`)
})
