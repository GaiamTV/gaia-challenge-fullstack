import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material'
import type { ReactNode } from 'react'

const sectionCardSx = {
  bgcolor: '#f7f7f7',
  borderRadius: '12px',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  p: 3,
  mt: 2,
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-1px)',
  },
} as const

export interface ContentSectionAccordionProps {
  /** Called when the user clicks "Fetch Content" */
  onFetchContent?: () => void
  /** Called when the user clicks "codingChallengeList" */
  onFetchCodingChallenge?: () => void
  /** Optional extra content below the button inside expanded panel */
  children?: ReactNode
}

export default function ContentSectionAccordion({
  onFetchContent,
  onFetchCodingChallenge,
  children,
}: ContentSectionAccordionProps) {
  const handleFetch = () => {
    onFetchContent?.()
  }

  const handleFetchCodingChallenge = () => {
    onFetchCodingChallenge?.()
  }

  return (
    <Box sx={sectionCardSx}>
      <Accordion
        defaultExpanded={false}
        disableGutters
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          sx={{
            px: 0,
            minHeight: 0,
            '& .MuiAccordionSummary-content': { my: 0 },
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            mb: 0,
            '&:hover': {
              borderBottomColor: 'rgba(0, 0, 0, 0.15)',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              color: 'primary.main',
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: '#666',
              lineHeight: 1.3,
            }}
          >
            Content
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 2, pb: 0 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleFetch}>
              Fetch Content
            </Button>
            <Button variant="contained" color="primary" onClick={handleFetchCodingChallenge}>
              codingChallengeList
            </Button>
          </Box>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
