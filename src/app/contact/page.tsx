import styles from './page.module.css'
import Image from 'next/image'
import profileImage from '../../../public/images/me.jpg'

const ContactPage = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.profileImage}>
                <Image src={profileImage} alt='Picture of Aashish Raj Gupta' priority />
            </div>
            <div className={styles.contactDetails}>
                <p>Find me on</p>
                <ul className={styles.socialAccountsList}>
                    <li>
                        <span className={styles.linkedin}>LinkedIn @ </span>
                        <a href='https://www.linkedin.com/in/aashish157/'>linkedin.com/in/aashish157</a>
                    </li>
                    <li>
                        <span className={styles.instagram}>Instagram Blog @ </span>
                        <a href='https://www.instagram.com/marketscool/'>instagram.com/marketscool</a>
                    </li>
                    <li>
                        <span className={styles.github}>GitHub @ </span>
                        <a href='https://github.com/aashish157'>github.com/aashish157</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactPage;