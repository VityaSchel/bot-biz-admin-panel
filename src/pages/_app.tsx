import './globals.css'
import type { AppProps } from 'next/app'
import ThemeWrapper from '/src/ssr/mui/ThemeWrapper'
import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ru } from 'date-fns/locale'
import ApolloClient from '/src/api/ApolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <MUILocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <ApolloClient>
          <Component {...pageProps} />
        </ApolloClient>
      </MUILocalizationProvider>
    </ThemeWrapper>
  )
}
