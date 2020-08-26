import mqtt from 'mqtt'

const client = mqtt.connect("mqtt://'192.168.1.5")

client.on('connect', () => {
  client.subscribe('URA/robo1/acao')
})

client.on('message', function (topic, message) {
  const context = message.toString()
  console.log(context)
})
