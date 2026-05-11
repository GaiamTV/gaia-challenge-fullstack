import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client'

const shouldConnectToDevTools = process.env.NODE_ENV === 'development'

const cache = new InMemoryCache({
  typePolicies: {
    ContentProvider: {
      keyFields: ['contentId'],
    },
  },
})

function graphqlHttpUri(): string {
  const uri = process.env.GRAPHQL_HTTP_URI
  if (typeof uri === 'string' && uri.length > 0) {
    return uri
  }
  return '/graphql'
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

export function createApolloClient() {
  const httpLink = new HttpLink({
    uri: graphqlHttpUri(),
  })

  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache,
    devtools: {
      enabled: shouldConnectToDevTools,
    },
  })
}
