import Image from 'next/image';
import { Inter } from 'next/font/google';

import profilePic from '../../public/images/me2.jpg';
import FooterSection from '../sections/FooterSection';
import styles from './styles.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <div className={styles.bodySection}>
        <div className={styles.helloText}>
          Hello, I&apos;m
        </div>
        
        <div className={styles.nameText}>Aashish Raj Gupta</div>

        <div className={styles.profileImage}>
          <Image src={profilePic} alt='Profile picture of Aashish Raj Gupta' priority />
        </div>
        
        <div className={styles.description}>
          <div className={styles.descriptionText}>
            Software Engineer with 3 yrs of work experience. I create responsive & scalable web apps.<br></br><br></br>
          </div>
          <div className={styles.technologies}>
            <span className={styles.javascriptText}> JavaScript </span>
            <span className={styles.reactText}> React.js </span>
            <span className={styles.nextText}> Next.js </span>
            <span className={styles.nodeText}> Node.js </span>
            <span className={styles.htmlText}> Html </span>
            <span className={styles.cssText}> Css </span>
            <span className={styles.bootstrapText}> Bootstrap </span>
            <span className={styles.shopifyText}> Shopify </span>
            <span className={styles.bigCommerceText}> BigCommerce </span>
          </div>     
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Home;
