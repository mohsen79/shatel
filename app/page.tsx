import Comments from './components/Comments/Comments'
import Header from './components/layout/Header/Header'
import TopSection from './components/layout/TopSection/TopSection'
import WhyFiber from './components/layout/WhyFiber/WhyFiber'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TopSection />
      <WhyFiber />
      <Comments />
    </main>
  )
}
