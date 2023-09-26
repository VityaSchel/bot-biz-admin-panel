import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '/src/ssr/mui/createEmotionCache'
import theme from '/src/ssr/mui/theme'

const cache = createEmotionCache()

export default function ThemeWrapper(props: { children: React.ReactNode }) {

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </CacheProvider>
  )
}