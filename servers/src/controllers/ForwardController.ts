import { Request, Response } from 'express'
import mqtt from 'mqtt'

const client = mqtt.connect('mqtt://192.168.1.5')

class ForwardController {
  async frente(request: Request, response: Response) {
    const { sentido } = request.body

    client.publish('URA/robo1/acao', sentido)

    if (sentido === 'teste') {
      return response.status(200).json({ message: 'connection successful' })
    }

    return response.status(201).json({ message: sentido })
  }
}

export default new ForwardController()
