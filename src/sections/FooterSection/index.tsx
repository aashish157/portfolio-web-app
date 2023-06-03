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
      <Link href='https://drive.google.com/file/d/1I4dqb4O2t5JNrs73zyZEANe6kRjg572a/view?usp=sharing' target='_parent' rel='noreferrer'>
        Résumé
      </Link>
      <Link href={`/contact`}>
        Contact
      </Link>
      </nav>
  )
}

export default Footer