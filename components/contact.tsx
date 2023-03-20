import styles from 'src/styles/contact.module.css'
import Social from 'components/social'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <Social />
            <address>メールアドレス</address>
        </div>
    )
}