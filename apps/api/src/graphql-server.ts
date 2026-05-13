import { readFileSync } from 'fs'
import path from 'path'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express4'
import type { Express } from 'express'
import { resolvers } from './graphql/resolver'

const typeDefs = readFileSync(
  path.join(__dirname, 'graphql', 'schema.gql'),
  'utf8',
)

export async function applyGraphqlMiddleware(app: Express) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await server.start()
  app.use('/graphql', expressMiddleware(server))
}
