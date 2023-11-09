import '@/shared/styles/tailwind.css'
import type { AppProps } from 'next/app'
import { Inter as FontSans } from 'next/font/google'
import cx from 'classnames'

export const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} className={cx('min-h-screen', fontSans.variable)} />
  )
}
