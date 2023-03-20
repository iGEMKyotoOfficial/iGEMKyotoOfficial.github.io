import styles from 'src/styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <ul className={styles.list}>
            <li>
               <a href="https://twitter.com/iGEMkyoto">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
               </a>
            </li>
            <li>
                <a href="https://www.instagram.com/igemkyoto/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/IgemKyoto/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
        </ul>
    )
}

