import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://ip-da-sua-máquina')

client.on('connect', () => {
  console.log('publisher on')
})
