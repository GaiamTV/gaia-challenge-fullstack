import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import {
  createGaiaStageApolloClient,
  createCodingChallengeApolloClient,
} from './lib/apolloClient'
import { CodingChallengeClientContext } from './lib/codingChallengeContext'

const el = document.getElementById('root')
if (!el) {
  throw new Error('root element not found')
}

const gaiaStageClient = createGaiaStageApolloClient()
const codingChallengeClient = createCodingChallengeApolloClient()

createRoot(el).render(
  <StrictMode>
    <ApolloProvider client={gaiaStageClient}>
      <CodingChallengeClientContext.Provider value={codingChallengeClient}>
        <App />
      </CodingChallengeClientContext.Provider>
    </ApolloProvider>
  </StrictMode>,
)
