import Link from 'next/link'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <nav className={styles.footerSection}>
      <Link href={`/`}>
        Home
      </Link>
      <Link href={`/projects`}>
        Projects
      </Link>
      <Link href={`/resume`}>
        Résumé
      </Link>
      <Link href={`/contact`}>
        Contact
      </Link>
      </nav>
  )
}

export default Footer