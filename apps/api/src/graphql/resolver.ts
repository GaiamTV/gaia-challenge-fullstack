import { chatCompletion } from '../lib/openaiClient'

export const resolvers = Object.freeze({
  Query: {
    codingChallengeList: async () => {
      return chatCompletion([{ role: 'user', content: 'Hello, how are you' }])
    },
  },
})
