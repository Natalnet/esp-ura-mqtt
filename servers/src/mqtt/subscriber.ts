import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://192.168.1.9')

export let distance = ''

client.on('connect', () => {
  client.subscribe('URA/robo1/distance')
})

client.on('message', function (topic, message) {
  const context = message.toString()
  distance = context
})
