import {useState} from 'react'
import Link from 'next/link'
import styles from 'src/styles/nav.module.css'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Nav(){
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !(prev))
    }

    return(
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                  @media (max-width: 767px) {
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                  }
                `}</style>
            )}

            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" legacyBehavior passHref>
                            <a onClick={() => closeNav("/")} className="home">Home</a>
                            <a className="home">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                    </Link>
                </li>
                <li>
                    <Link href="/activities" legacyBehavior>
                        <a onClick={() => closeNav("/activities")} className="activities">活動紹介</a>
                        <a className="activities">活動紹介</a>
                    </Link>
                </li>
                <li>
                    <Link href="/finance" legacyBehavior>
                        <a onClick={() => closeNav("/finance")} className="finance">協賛・寄付</a>
                        <a className="finance">協賛・寄付</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" legacyBehavior>
                        <a onClick={() => closeNav("/contact")} className="contact">お問い合わせ</a>
                        <a className="contact">お問い合わせ</a>

                    </Link>
                </li>
            </ul>
        </nav>
    )
}