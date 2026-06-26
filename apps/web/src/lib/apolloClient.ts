import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client'
import { ensureGraphqlPath } from './ensureGraphqlPath'

const shouldConnectToDevTools = process.env.NODE_ENV === 'development'

function gaiaGraphqlUri(): string {
  const uri = process.env.GAIA_GRAPHQL_URI
  if (typeof uri === 'string' && uri.length > 0) {
    return ensureGraphqlPath(uri)
  }
  return '/graphql'
}

function codingChallengeGraphqlUri(): string {
  const uri = process.env.CODING_CHALLENGE_GRAPHQL_URI
  if (typeof uri === 'string' && uri.length > 0) {
    return ensureGraphqlPath(uri)
  }
  return 'http://localhost:9001/graphql'
}

function authorizationHeader(): string | undefined {
  const raw = process.env.GRAPHQL_AUTH
  if (typeof raw !== 'string' || raw.length === 0) {
    return undefined
  }
  if (/^Bearer\s/i.test(raw)) {
    return raw
  }
  return `Bearer ${raw}`
}

const authLink = setContext((_, { headers }) => {
  const authorization = authorizationHeader()
  return {
    headers: {
      ...headers,
      ...(authorization ? { authorization } : {}),
    },
  }
})

export function createGaiaStageApolloClient() {
  const httpLink = new HttpLink({
    uri: gaiaGraphqlUri(),
  })

  const cache = new InMemoryCache({
    typePolicies: {
      ContentProvider: {
        keyFields: ['contentId'],
      },
    },
  })

  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache,
    devtools: {
      enabled: shouldConnectToDevTools,
    },
  })
}

export function createCodingChallengeApolloClient() {
  const httpLink = new HttpLink({
    uri: codingChallengeGraphqlUri(),
  })

  const cache = new InMemoryCache()

  return new ApolloClient({
    link: httpLink,
    cache,
    devtools: {
      enabled: shouldConnectToDevTools,
    },
  })
}
