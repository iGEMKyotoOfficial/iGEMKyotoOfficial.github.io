import {useState} from 'react'
import Link from 'next/link'
import styles from 'src/styles/nav.module.css'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
<<<<<<< HEAD
=======

>>>>>>> bd34332 (とりあえずこれをコミット)

export default function Nav(){
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !(prev))
    }

<<<<<<< HEAD
    const closeNav = (a: String) => {
        setNavIsOpen(false)
        console.log("hi")
    }

=======
>>>>>>> bd34332 (とりあえずこれをコミット)
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
<<<<<<< HEAD
                        <a onClick={() => closeNav("/about")} className="about">About</a>
=======
                        <a className="about">About</a>
>>>>>>> bd34332 (とりあえずこれをコミット)
                    </Link>
                </li>
                <li>
                    <Link href="/member" legacyBehavior>
<<<<<<< HEAD
                        <a onClick={() => closeNav("/member")} className="member">メンバー</a>
=======
                        <a className="member">メンバー</a>
>>>>>>> bd34332 (とりあえずこれをコミット)
                    </Link>
                </li>
                <li>
                    <Link href="/activities" legacyBehavior>
<<<<<<< HEAD
                        <a onClick={() => closeNav("/activities")} className="activities">活動紹介</a>
=======
                        <a className="activities">活動紹介</a>
>>>>>>> bd34332 (とりあえずこれをコミット)
                    </Link>
                </li>
                <li>
                    <Link href="/finance" legacyBehavior>
<<<<<<< HEAD
                        <a onClick={() => closeNav("/finance")} className="finance">協賛・寄付</a>
=======
                        <a className="finance">協賛・寄付</a>
>>>>>>> bd34332 (とりあえずこれをコミット)
                    </Link>
                </li>
                <li>
                    <Link href="/contact" legacyBehavior>
<<<<<<< HEAD
                        <a onClick={() => closeNav("/contact")} className="contact">お問い合わせ</a>
=======
                        <a className="contact">お問い合わせ</a>
>>>>>>> bd34332 (とりあえずこれをコミット)
                    </Link>
                </li>
            </ul>
        </nav>
    )
}