import Link from 'next/link'
import Image from 'next/image'
import logo from 'images/図1.jpg'

export default function Logo(){
    return(
        <Link href="/blog" legacyBehavior>
            <figure style={{ width: '8vw', margin: 'left' }}><Image
              src={logo}
              alt=""
              layout="responsive"
              sizes="10vw"
            /></figure>
        </Link>
    )
}