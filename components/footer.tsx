import Contain from 'components/container'
import styles from 'src/styles/footer.module.css'
import Social from 'components/social'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.wrapper}>
            <Contain>
                <div className={styles.flexContain}>
                    <Link href="/blog" legacyBehavior>
                        <a className="home">iGEM Kyoto</a>
                    </Link>
                    <Social />
                </div>
            </Contain>
        </footer>
    )
}