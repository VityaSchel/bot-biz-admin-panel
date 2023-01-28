import styles from './page.module.css'
import Navigation from '/src/ui/fragments/Navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <HomepageCharts />
    </main>
  )
}

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'pages_titles']))
    }
  }
}
