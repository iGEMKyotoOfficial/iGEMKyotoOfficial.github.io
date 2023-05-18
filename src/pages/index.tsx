import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import sakura from 'images/sakura.jpg'
import Image from 'next/image'
import dna from 'images/dna.jpg'
import fushimi from 'images/fushimi.jpg'
import ume from 'images/ume.jpg'
import bamboo from 'images/bamboo.jpeg'

export default function Home() {

  return (
    <Contain large>
      <Meta />
      <div className="anime_wrap kenburns-top-right">
        <Image className="sakura"
          src={sakura}
          alt=""
          layout="responsive"
          sizes='100vw'
          priority
        />
        <p className='tracking-in-contract'>iGEM Kyoto</p>
      </div>

      <div className="cp_card05" >
        <Image className="dna"
          src={dna}
          alt=""
          layout="responsive"
          sizes='100vw'
          priority
        />
        <div className="description">
          <div className="content">
            <h1><Link href="/about">About</Link></h1>
            <p className="text">iGEM Kyoto、iGEM、合成生物学についてご説明します</p>
            <Link href="/about" className="button">PUSH</Link>
          </div>
        </div>
      </div>

      <div className="cp_card05" >
        <Image className="ume"
          src={ume}
          alt=""
          layout="responsive"
          sizes='100vw'
          priority
        />
        <div className="description">
          <div className="content">
            <h1><Link href="/member">Member</Link></h1>
            <p className="text">歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）</p>
            <Link href="/member" className="button">PUSH</Link>
          </div>
        </div>
      </div>

      <div className="cp_card05" >
        <Image className="fushimi"
          src={fushimi}
          alt=""
          layout="responsive"
          sizes='100vw'
          priority
        />
        <div className="description">
          <div className="content">
            <h1><Link href="/finance">支援のお願い</Link></h1>
            <p className="text">私たちを応援してくださる企業・個人の方を募集しております</p>
            <Link href="/finance" className="button">PUSH</Link>
          </div>
        </div>
      </div>

      <div className="cp_card05" >
        <Image className="bamboo"
          src={bamboo}
          alt=""
          layout="responsive"
          sizes='100vw'
          priority
        />
        <div className="description">
          <div className="content">
            <h1><Link href="/contact">お問い合わせ</Link></h1>
            <p className="text">依頼や質問をご希望の方はこちらからお問い合わせください</p>
            <Link href="/contact" className="button">PUSH</Link>
          </div>
        </div>
      </div>

      <br />
      <Link className="twitter-timeline"
        data-width="700"
        data-height="700"
        data-theme="light"
        href="https://twitter.com/iGEMkyoto?ref_src=twsrc%5Etfw"
      >
        Tweets by iGEMkyoto
      </Link>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8">
      </script>
      <div><br /></div>
    </Contain>
  )
}