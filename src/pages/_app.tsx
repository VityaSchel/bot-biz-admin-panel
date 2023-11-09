import '@/shared/styles/tailwind.css'
import '@/shared/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter as FontSans } from 'next/font/google'
import cx from 'classnames'
import { ThemeProvider } from '@/app/theme-provider'

export const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} className={cx('min-h-screen', fontSans.variable)} />
    </ThemeProvider>
  )
}
