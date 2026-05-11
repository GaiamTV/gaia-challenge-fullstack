import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import ContentSectionAccordion from './components/ContentSectionAccordion'
import PageQueryStates from './components/PageQueryStates'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2471a3',
    },
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageQueryStates
        loading={false}
        error={undefined}
        hasData
        errorTitle="Error"
        notFoundTitle="Not found"
        notFoundDetail=""
      >
        <Container sx={{ py: 4 }}>
          <Typography variant="h3" component="h1">
            Gaia Coding Challenge
          </Typography>
          <ContentSectionAccordion
            onFetchContent={() => {
              console.log('Fetch Content clicked')
            }}
          />
        </Container>
      </PageQueryStates>
    </ThemeProvider>
  )
}
