import { createContext, useContext } from 'react'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export const CodingChallengeClientContext = createContext<ApolloClient<NormalizedCacheObject> | null>(null)

export function useCodingChallengeClient() {
  const client = useContext(CodingChallengeClientContext)
  if (!client) {
    throw new Error('useCodingChallengeClient must be used within CodingChallengeClientContext.Provider')
  }
  return client
}
