import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import type { ContentListEpisodeRow } from '../graphql/contentListSeriesEpisodes'

type EpisodeListProps = {
  seriesTitle: string
  episodes: ContentListEpisodeRow[]
}

function episodeSortKey(episode: ContentListEpisodeRow): [number, number] {
  return [episode.seasonNumber ?? 0, episode.episodeNumber ?? 0]
}

function compareEpisodes(a: ContentListEpisodeRow, b: ContentListEpisodeRow): number {
  const [seasonA, episodeA] = episodeSortKey(a)
  const [seasonB, episodeB] = episodeSortKey(b)
  if (seasonA !== seasonB) {
    return seasonA - seasonB
  }
  return episodeA - episodeB
}

function formatEpisodeLabel(episode: ContentListEpisodeRow): string {
  const parts: string[] = []
  if (episode.seasonNumber != null) {
    parts.push(`S${episode.seasonNumber}`)
  }
  if (episode.episodeNumber != null) {
    parts.push(`E${episode.episodeNumber}`)
  }
  return parts.length > 0 ? parts.join(' · ') : '—'
}

export default function EpisodeList({ seriesTitle, episodes }: EpisodeListProps) {
  const sortedEpisodes = [...episodes].sort(compareEpisodes)

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.85, letterSpacing: 1.2 }}>
          Series
        </Typography>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
          {seriesTitle}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.9 }}>
          {sortedEpisodes.length} episode{sortedEpisodes.length === 1 ? '' : 's'}
        </Typography>
      </Box>

      <List disablePadding>
        {sortedEpisodes.map((episode, index) => (
          <Box key={episode.id ?? `${episode.contentId ?? 'unknown'}-${episode.title ?? ''}`}>
            {index > 0 ? <Divider component="li" /> : null}
            <ListItem
              alignItems="flex-start"
              sx={{
                px: 2.5,
                py: 2,
                gap: 2,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                  borderRadius: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'grey.100',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 800, lineHeight: 1.2, fontSize: '0.7rem' }}>
                  {formatEpisodeLabel(episode)}
                </Typography>
              </Box>

              <Stack spacing={0.75} sx={{ minWidth: 0, flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.35 }}>
                  {episode.title ?? 'Untitled'}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {episode.contentType ? (
                    <Chip
                      label={episode.contentType}
                      size="small"
                      variant="outlined"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ) : null}
                  {episode.contentId != null ? (
                    <Chip
                      label={`ID ${episode.contentId}`}
                      size="small"
                      variant="outlined"
                      sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
                    />
                  ) : null}
                </Stack>
              </Stack>
            </ListItem>
          </Box>
        ))}
      </List>
    </Paper>
  )
}
