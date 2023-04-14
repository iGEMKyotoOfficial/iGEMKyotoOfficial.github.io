import Contain from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'src/styles/header.module.css'

export default function Header(){
    return (
    <header>
        <Contain large>
            <div className={styles.flexContain}>
                <Logo />
                <Nav />
            </div>
        </Contain>
    </header>
    )
}