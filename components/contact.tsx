import styles from 'src/styles/contact.module.css'
import Social from 'components/social'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}>私たちの日常はこちらから</h3>
            <Social iconSize = "30px" />
        </div>
    )
}