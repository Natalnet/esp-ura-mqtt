import express from 'express'
import router from './routes'
import cors from 'cors'
import api from './services/api'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const port = 4444

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})

setInterval(() => {
  api.post('/sentido', {
    sentido: 't'
  })
}, 400)
