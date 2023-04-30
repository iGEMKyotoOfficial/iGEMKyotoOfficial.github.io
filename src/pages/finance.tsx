import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Finance() {
    return(
        <Contain>
            <Hero 
                title="支援のお願い"
                subtitle="私たちを支援してくださる企業および個人を募集しております"
            />
        </Contain>
    )
}