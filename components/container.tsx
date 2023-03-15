import styles from 'src/styles/container.module.css'

export default function Container({ children }:{children:any;}) {
    return (
        <div className={styles.default}>
            {children}
        </div>
    )
}