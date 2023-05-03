import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Contain large>
      <Meta />
        <Hero imageOn
          title="iGEM Kyoto"
          subtitle="私たちiGEM Kyotoは合成生物学の世界大会iGEMに向けて活動している京大チームです"
        />
        <a className="twitter-timeline" data-width="700" data-height="500" data-theme="dark" href="https://twitter.com/iGEMkyoto?ref_src=twsrc%5Etfw">
          Tweets by iGEMkyoto
        </a> 
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8">
        </script>
        <div><br /></div>
    </Contain>
  )
}