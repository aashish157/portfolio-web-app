import Image from 'next/image'
import { Inter } from 'next/font/google'

import profilePic from '../../public/images/me2.jpg'
import FooterSection from '../sections/FooterSection'
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.bodySection}>
          <div className={styles.helloText}>
            Hello, I&apos;m
          </div>

          <div className={styles.descriptionText}>
            <p className={styles.nameText}>Aashish Raj Gupta</p>
            <p>Front End Engineer with 3 yrs of work experience. I create responsive & scalable web apps 😃</p>
            <p>Technologies - Javascript, React.js, Next.js, Node, Html, Css, Bootstrap, Shopify, BigCommerce</p>
          </div>

          <div className={styles.profileImage}>
            <Image src={profilePic} width={250} alt='Profile picture of Aashish Raj Gupta'/>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}

export default Home
