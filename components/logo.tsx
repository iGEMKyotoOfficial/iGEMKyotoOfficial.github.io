import Link from 'next/link'

export default function Logo(){
    return(
        <Link href="/" legacyBehavior>
            <a className="logo">iGEM Kyoto</a>
        </Link>
    )
}