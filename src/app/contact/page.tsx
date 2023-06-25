import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../../../public/images/me.jpg';
import styles from './styles.module.css';

const ContactPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.profilePic} src={profilePic} alt='Picture of Aashish'></Image>
        <div className={styles.contactInfo}>
          Find me on 
          <div style={{paddingTop: '20px'}}>LinkedIn : 
            <Link href="https://www.linkedin.com/in/aashish157/" target='_blank' rel='noopener noreferrer'> linkedin.com/in/aashish157</Link>
          </div>
          <div>Instagram : 
            <Link href="https://www.instagram.com/_aashishraj/" target='_blank' rel='noopener noreferrer'> instagram.com/_aashishraj/</Link>
          </div>
          <div>GitHub : 
            <Link href="https://github.com/aashish157" target='_blank' rel='noopener noreferrer'> github.com/aashish157</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
