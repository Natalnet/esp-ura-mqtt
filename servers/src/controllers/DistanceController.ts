import { Request, Response } from 'express'
import mqtt from 'mqtt'
import { distance } from '../mqtt/subscriber'

class DistanceController {
  async show(request: Request, response: Response) {
    if (Number(distance) <= 0) {
      return response.json(0)
    } else {
      return response.json(parseFloat(distance).toPrecision(5))
    }
  }
}

export default new DistanceController()
