import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://ip-da-sua-máquina')

client.on('connect', () => {
  client.subscribe('URA/robo1/acao')
})

client.on('message', function (topic, message) {
  const context = message.toString()
  console.log(context)
})
