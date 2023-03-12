import Link from 'next/link'

export default function Logo(){
    return(
        <Link href="/blog" legacyBehavior>
            <a className="logo">iGEM Kyoto</a>
        </Link>
    )
}