import { gql } from '@apollo/client'

/**
 * Loads a series via `contentList` and a page of its episodes via `contentEpisodes`.
 * Series match is hardcoded for now (Beyond Belief); later this can move to variables or a different operation.
 */
export const CONTENT_LIST_SERIES_EPISODES_QUERY = gql`
  query ContentListSeriesEpisodes($language: String!) {
    contentList(
      where: {
        contentType: { eq: "series" }
        title: { ilike: "%Beyond Belief%" }
      }
      limit: 1
      language: [$language, "_primary"]
      publishedState: PUBLISHED_NOW
    ) {
      content {
        id
        title
        contentId
        contentType
        contentEpisodes(
          content: [{ publishedState: PUBLISHED_NOW }]
          language: [$language, "_primary"]
          limit: 5
        ) {
          id
          contentId
          contentType
          title
          episodeNumber
          seasonNumber
        }
      }
    }
  }
`

export type ContentListSeriesEpisodesVariables = {
  language: string
}

export type ContentListEpisodeRow = {
  id?: string | null
  contentId?: number | null
  contentType?: string | null
  title?: string | null
  episodeNumber?: number | null
  seasonNumber?: number | null
}

export type ContentListSeriesEpisodesData = {
  contentList?: {
    content?: Array<{
      id?: string | null
      title?: string | null
      contentId?: number | null
      contentType?: string | null
      contentEpisodes?: ContentListEpisodeRow[] | null
    } | null> | null
  } | null
}
