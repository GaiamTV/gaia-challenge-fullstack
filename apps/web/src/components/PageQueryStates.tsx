import { Alert, Box, CircularProgress, Container } from '@mui/material'
import type { ReactNode } from 'react'

export interface PageQueryStatesProps {
  loading: boolean
  error: Error | undefined
  hasData: boolean
  errorTitle: string
  notFoundTitle: string
  notFoundDetail: string
  children: ReactNode
}

/**
 * Loading, error, and empty states for data-driven pages (pattern from admin ContentDetailQueryStates).
 */
function PageQueryStates({
  loading,
  error,
  hasData,
  errorTitle,
  notFoundTitle,
  notFoundDetail,
  children,
}: PageQueryStatesProps) {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
        <CircularProgress aria-label="Loading" />
      </Box>
    )
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 3 }}>
          <div>
            <strong>{errorTitle}</strong>
          </div>
          <div>{error.message}</div>
        </Alert>
      </Container>
    )
  }

  if (!hasData) {
    return (
      <Container>
        <Alert severity="warning" sx={{ mt: 3 }}>
          <div>
            <strong>{notFoundTitle}</strong>
          </div>
          <div>{notFoundDetail}</div>
        </Alert>
      </Container>
    )
  }

  return <>{children}</>
}

export default PageQueryStates
