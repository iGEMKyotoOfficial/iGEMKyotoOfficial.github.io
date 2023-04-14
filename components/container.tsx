import styles from 'src/styles/container.module.css'
import { flattenDiagnosticMessageText } from 'typescript';

export default function Contain({ children, large = false }:{children:any; large?:boolean;}) {
    return (
        <div className={large ? styles.large : styles.default }>
            {children}
        </div>
    )
}