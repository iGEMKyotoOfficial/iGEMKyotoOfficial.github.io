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
        
    </Contain>
  )
}