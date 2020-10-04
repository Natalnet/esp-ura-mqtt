import { Router } from 'express'
import ForwardController from '@controllers/ForwardController'
import DistanceController from '@controllers/DistanceController'

const router = Router()

router.get('/', (request, response) => {
  response.json({ SERVER: 'ON' })
})

router.post('/sentido', ForwardController.frente)
router.get('/distance', DistanceController.show)

export default router
