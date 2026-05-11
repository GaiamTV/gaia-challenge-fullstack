import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { createApolloClient } from './lib/apolloClient'

const el = document.getElementById('root')
if (!el) {
  throw new Error('root element not found')
}

const apolloClient = createApolloClient()

createRoot(el).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
