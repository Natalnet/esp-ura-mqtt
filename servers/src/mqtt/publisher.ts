import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://192.168.1.5')

client.on('connect', () => {
  console.log('publisher on')
})
