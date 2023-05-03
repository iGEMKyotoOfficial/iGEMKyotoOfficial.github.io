import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
    return (
        <Contain>
            <Hero
                title="お問い合わせ"
                subtitle="依頼や質問をご希望の方はこちらからお問い合わせください"
            />
            <a href="https://forms.gle/Lv8jb4hf8ruA8Gfi6" className="btn btn-flat">
                <span>
                    お問い合わせフォーム
                </span>
            </a>
            <div><br /></div>
        </Contain>
    )
}