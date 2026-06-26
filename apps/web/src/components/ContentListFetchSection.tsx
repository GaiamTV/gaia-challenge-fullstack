import { useLazyQuery } from '@apollo/client'
import { Box, Typography } from '@mui/material'
import {
  CONTENT_LIST_SERIES_EPISODES_QUERY,
  type ContentListSeriesEpisodesData,
  type ContentListSeriesEpisodesVariables,
} from '../graphql/contentListSeriesEpisodes'
import {
  CODING_CHALLENGE_LIST_QUERY,
  type CodingChallengeListData,
} from '../graphql/codingChallengeList'
import { useCodingChallengeClient } from '../lib/codingChallengeContext'
import ContentSectionAccordion from './ContentSectionAccordion'
import EpisodeList from './EpisodeList'
import PageQueryStates from './PageQueryStates'

export default function ContentListFetchSection() {
  const codingChallengeClient = useCodingChallengeClient()

  const [runContentQuery, contentQueryState] = useLazyQuery<
    ContentListSeriesEpisodesData,
    ContentListSeriesEpisodesVariables
  >(CONTENT_LIST_SERIES_EPISODES_QUERY, {
    variables: { language: 'en' },
  })

  const [runChallengeQuery, challengeQueryState] = useLazyQuery<CodingChallengeListData>(
    CODING_CHALLENGE_LIST_QUERY,
    {
      client: codingChallengeClient,
    },
  )

  const series = contentQueryState.data?.contentList?.content?.[0]
  const episodes = series?.contentEpisodes?.filter(Boolean) ?? []
  const seriesTitle = series?.title ?? 'Unknown series'

  const challengeResult = challengeQueryState.data?.codingChallengeList

  return (
    <ContentSectionAccordion
      onFetchContent={() => {
        void runContentQuery()
      }}
      onFetchCodingChallenge={() => {
        void runChallengeQuery()
      }}
    >
      <Box className="contentList">
        {contentQueryState.called ? (
          <PageQueryStates
            loading={contentQueryState.loading}
            error={contentQueryState.error ? new Error(contentQueryState.error.message) : undefined}
            hasData={episodes.length > 0}
            errorTitle="Error"
            notFoundTitle="Not found"
            notFoundDetail="No matching series or episodes were returned."
          >
            <EpisodeList seriesTitle={seriesTitle} episodes={episodes} />
          </PageQueryStates>
        ) : null}
      </Box>

      <Box className="codingChallenge">
        {challengeQueryState.called ? (
          <PageQueryStates
            loading={challengeQueryState.loading}
            error={
              challengeQueryState.error ? new Error(challengeQueryState.error.message) : undefined
            }
            hasData={challengeResult != null}
            errorTitle="Error"
            notFoundTitle="Not found"
            notFoundDetail="No result returned."
          >
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
              Coding Challenge Result
            </Typography>
            <Typography variant="body1" sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 1 }}>
              {challengeResult}
            </Typography>
          </PageQueryStates>
        ) : null}
      </Box>
    </ContentSectionAccordion>
  )
}
