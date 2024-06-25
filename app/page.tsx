import Header from './components/layout/Header/Header'
import TopSection from './components/layout/TopSection/TopSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TopSection />
    </main>
  )
}
