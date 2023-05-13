import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import sakura from 'images/sakura.jpg'
import Image from 'next/image'

export default function Home() {

  return (
    <Contain large>
      <Meta />
      <div className="anime_wrap kenburns-top-right">
        <figure style={{position:'relative', width:'100%', height:'1000px'}}>
          <Image className="sakura"
            src={sakura}
            alt=""
            layout="fill"
            sizes='100vw'
            objectFit="cover"
            priority
          />
        </figure>
        <p className='tracking-in-contract'>iGEM Kyoto</p>
      </div>

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