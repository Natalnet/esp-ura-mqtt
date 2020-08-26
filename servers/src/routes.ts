import { Router } from 'express'
import ForwardController from '@controllers/ForwardController'

const router = Router()

router.get('/', (request, response) => {
  response.json({ SERVER: 'ON' })
})

router.post('/sentido', ForwardController.frente)

export default router
