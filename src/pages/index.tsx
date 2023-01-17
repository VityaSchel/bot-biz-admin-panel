import styles from './page.module.css'
import Navigation from '/src/ui/fragments/Navigation'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
    </main>
  )
}
