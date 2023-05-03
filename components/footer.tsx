import Contain from 'components/container'
import styles from 'src/styles/footer.module.css'
import Social from 'components/social'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Contain>
                <div className={styles.flexContain}>
                    <Link href="/" legacyBehavior>
                        <a className="home">iGEM Kyoto</a>
                    </Link>
                    <ul className="socialEffect__box">
                        <li>
                            <a className="socialEffect__link icon-instagram" href="#"
                            ><i className="fab fa-instagram"></i
                            ></a>
                        </li>
                        <li>
                            <a className="socialEffect__link icon-facebook" href="#"
                            ><i className="fab fa-facebook-f"></i
                            ></a>
                        </li>
                        <li>
                            <a className="socialEffect__link icon-twitter" href="#"
                            ><i className="fab fa-twitter"></i
                            ></a>
                        </li>
                    </ul>
                    <Social />
                    © 2023 iGEM Kyoto
                </div>
            </Contain>
        </footer>
    )
}