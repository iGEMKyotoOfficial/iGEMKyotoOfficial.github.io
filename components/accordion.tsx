import { useState, useRef } from 'react';
import styles from 'src/styles/accordion.module.css'

export default function Accordion({ heading, children }: { heading: any; children: any; }) {
    const [textIsOpen, setTextIsOpen] = useState(false)

    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }

    const refText = useRef(null)

    return (
        <div className={textIsOpen ? styles.open : styles.close}>
            <h3 className={styles.heading}>
                <button onClick={toggleText}>
                    {heading}
                </button>
            </h3>
            <div
                className={styles.text}
                ref={refText}
                >
                <div className={styles.textInner}>{children}</div>
            </div>
        </div>
    )
}