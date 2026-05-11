import { useLazyQuery } from '@apollo/client'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import {
  CONTENT_LIST_SERIES_EPISODES_QUERY,
  type ContentListSeriesEpisodesData,
  type ContentListSeriesEpisodesVariables,
} from '../graphql/contentListSeriesEpisodes'
import ContentSectionAccordion from './ContentSectionAccordion'
import PageQueryStates from './PageQueryStates'

export default function ContentListFetchSection() {
  const [runQuery, { called, loading, error, data }] = useLazyQuery<
    ContentListSeriesEpisodesData,
    ContentListSeriesEpisodesVariables
  >(CONTENT_LIST_SERIES_EPISODES_QUERY, {
    variables: { language: 'en' },
  })

  const episodes =
    data?.contentList?.content?.[0]?.contentEpisodes?.filter(Boolean) ?? []

  const queryError = error ? new Error(error.message) : undefined

  return (
    <ContentSectionAccordion
      onFetchContent={() => {
        void runQuery()
      }}
    >
      {called ? (
        <PageQueryStates
          loading={loading}
          error={queryError}
          hasData={episodes.length > 0}
          errorTitle="Error"
          notFoundTitle="Not found"
          notFoundDetail="No matching series or episodes were returned."
        >
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
        </PageQueryStates>
      ) : null}
    </ContentSectionAccordion>
  )
}
