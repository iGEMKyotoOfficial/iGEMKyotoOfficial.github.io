import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
    return(
        <Contain>
            <Hero 
                title="お問い合わせ"
                subtitle="依頼や質問をご希望の方はこちらからお問い合わせください"
            />
            <a href="" className="btn btn-flat">
                <span>
                    お問い合わせフォーム
                </span>
            </a>
        </Contain>
    )
}