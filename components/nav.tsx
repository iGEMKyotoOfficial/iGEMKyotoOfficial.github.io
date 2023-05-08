import {useState} from 'react'
import Link from 'next/link'
import styles from 'src/styles/nav.module.css'

export default function Nav(){
    const [navIsOpen, setnavUsOpen] = useState(false)

    return(
        <nav className={navIsOpen ? styles.open : styles.close}>
            <button className={styles.button}>MENU</button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" legacyBehavior>
                            <a className="home">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a className="about">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/member" legacyBehavior>
                        <a className="member">メンバー</a>
                    </Link>
                </li>
                <li>
                    <Link href="/finance" legacyBehavior>
                        <a className="finance">協賛・寄付</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" legacyBehavior>
                        <a className="contact">お問い合わせ</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}