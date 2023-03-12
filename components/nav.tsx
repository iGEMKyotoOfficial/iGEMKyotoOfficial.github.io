import Link from 'next/link'

export default function Nav(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/blog" legacyBehavior>
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
                        <a className="member">Member</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}