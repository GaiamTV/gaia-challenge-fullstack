import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import ContentListFetchSection from './components/ContentListFetchSection'

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
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" component="h1">
          Gaia Coding Challenge
        </Typography>
        <ContentListFetchSection />
      </Container>
    </ThemeProvider>
  )
}
