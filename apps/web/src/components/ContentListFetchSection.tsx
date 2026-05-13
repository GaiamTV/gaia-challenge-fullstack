import { useLazyQuery } from '@apollo/client'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
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
import PageQueryStates from './PageQueryStates'

type QueryType = 'content' | 'challenge'

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

  const lastQueryType: QueryType | null = contentQueryState.called
    ? challengeQueryState.called
      ? contentQueryState.called > challengeQueryState.called
        ? 'content'
        : 'challenge'
      : 'content'
    : challengeQueryState.called
      ? 'challenge'
      : null

  const activeQueryState =
    lastQueryType === 'challenge' ? challengeQueryState : contentQueryState

  const { called, loading, error } = activeQueryState

  const episodes =
    lastQueryType === 'content' && contentQueryState.data
      ? contentQueryState.data.contentList?.content?.[0]?.contentEpisodes?.filter(Boolean) ?? []
      : []

  const challengeResult =
    lastQueryType === 'challenge' && challengeQueryState.data
      ? challengeQueryState.data.codingChallengeList
      : null

  const queryError = error ? new Error(error.message) : undefined
  const hasData = lastQueryType === 'content' ? episodes.length > 0 : challengeResult != null

  return (
    <ContentSectionAccordion
      onFetchContent={() => {
        void runContentQuery()
      }}
      onFetchCodingChallenge={() => {
        void runChallengeQuery()
      }}
    >
      {called ? (
        <PageQueryStates
          loading={loading}
          error={queryError}
          hasData={hasData}
          errorTitle="Error"
          notFoundTitle="Not found"
          notFoundDetail={
            lastQueryType === 'content'
              ? 'No matching series or episodes were returned.'
              : 'No result returned.'
          }
        >
          {lastQueryType === 'content' ? (
            <>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                Episodes ({episodes.length})
              </Typography>
              <List dense>
                {episodes.map((ep) => (
                  <ListItem
                    key={ep.id ?? `${ep.contentId ?? 'unknown'}-${ep.title ?? ''}`}
                    disablePadding
                    sx={{ py: 0.5 }}
                  >
                    <ListItemText
                      primary={ep.title ?? 'Untitled'}
                      secondary={[
                        ep.contentType,
                        ep.contentId != null ? `contentId ${ep.contentId}` : null,
                        ep.seasonNumber != null ? `S${ep.seasonNumber}` : null,
                        ep.episodeNumber != null ? `E${ep.episodeNumber}` : null,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          ) : lastQueryType === 'challenge' ? (
            <>
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                Coding Challenge Result
              </Typography>
              <Typography variant="body1" sx={{ p: 2, bgcolor: '#f9f9f9', borderRadius: 1 }}>
                {challengeResult}
              </Typography>
            </>
          ) : null}
        </PageQueryStates>
      ) : null}
    </ContentSectionAccordion>
  )
}
