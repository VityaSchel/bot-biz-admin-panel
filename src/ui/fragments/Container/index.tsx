import styles from './styles.module.scss'
import Navigation from '../Navigation'
import NavMenu from '../Navigation/NavMenu'

export default function Container(props: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Navigation />
      <div
        className={styles.page}
      >
        <div className={styles.leftMenu}>
          <NavMenu />
        </div>
        {props.children}
      </div>
    </main>
  )
}