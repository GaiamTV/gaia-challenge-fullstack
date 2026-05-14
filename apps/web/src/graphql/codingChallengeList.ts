import { gql } from '@apollo/client'

export const CODING_CHALLENGE_LIST_QUERY = gql`
  query CodingChallengeList {
    codingChallengeList
  }
`

export type CodingChallengeListData = {
  codingChallengeList: string
}
