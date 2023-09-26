import styles from './page.module.css'
import Container from '/src/ui/fragments/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Analytics from '../ui/fragments/Homepage/Analytics'

export default function Home() {
  return (
    <Container>
      <Analytics />
    </Container>
  )
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'pages_titles']))
    }
  }
}
