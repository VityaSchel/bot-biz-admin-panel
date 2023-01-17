import './globals.css'
import ThemeWrapper from '/src/ssr/mui/ThemeWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeWrapper>
      <html lang="ru">
        <head />
        <body>{children}</body>
      </html>
    </ThemeWrapper>
  )
}
