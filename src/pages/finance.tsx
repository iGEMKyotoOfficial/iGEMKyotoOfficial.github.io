import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Finance() {
    return(
        <Contain>
            <Hero 
                title="支援のお願い"
                subtitle="私たちを応援してくださる企業・個人の方を募集しております"
            />
            <a href="https://forms.gle/EYVjfnL8je1Ajthy9" className="btn btn-flat">
                <span>
                    ご支援フォーム
                </span>
            </a>
            <div><br /></div>
        </Contain>
    )
}