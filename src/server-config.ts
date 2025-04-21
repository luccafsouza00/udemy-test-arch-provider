import cors from 'cors'
import express, { json } from 'express'

const server = express()

// Middleware CORS
server.use(
  cors({
    origin: 'http://localhost:3000' // Libera somente a origem do frontend (React, por ex.)
  })
)

// Middleware para interpretar JSON
server.use(json())

// Rota padrão de teste
server.get('/', (_, res) => {
  res.status(200).json({ message: 'Server is running!' })
})

// Rota mockada para gerar um token fake
server.use('/auth/fake-token', (_, res) => {
  const token = `Bearer ${new Date().toISOString()}`
  return res.status(200).json({ token, status: 200 })
})

// Exporta o server para ser usado em testes ou outro arquivo
export { server }
