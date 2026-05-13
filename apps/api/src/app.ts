import cors from 'cors'
import express, { type Express } from 'express'
import { applyGraphqlMiddleware } from './graphql-server'

export async function createApp(): Promise<Express> {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.get('/health', (_req, res) => {
    res.json({ ok: true })
  })

  await applyGraphqlMiddleware(app)

  return app
}
