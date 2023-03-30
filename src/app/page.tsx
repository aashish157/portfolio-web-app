import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.helloText}>
          Hello, I&apos;m
        </p>
        <p className={styles.descriptionText}>Aashish Raj Gupta, a Front-End Developer</p>
      </div>

      <div className={styles.grid}>
        <Link href={`/projects`}>
          <div className={styles.card}>
            <p>Projects</p>
          </div>
        </Link>
        <Link href={`/resume`}>
          <div className={styles.card}>
            <p>Resume</p>
          </div>
        </Link>
        <Link href={`/contact`}>
          <div className={styles.card}>
            <p>Contact</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
