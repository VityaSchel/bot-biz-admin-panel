import './globals.css'
import type { AppProps } from 'next/app'
import ThemeWrapper from '/src/ssr/mui/ThemeWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  )
}
