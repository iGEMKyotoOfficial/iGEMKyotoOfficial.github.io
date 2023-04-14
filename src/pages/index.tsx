import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Contain large>
      <Meta />
        <Hero
          title="iGEM Kyoto"
          subtitle="iGEM × Kyoto = ∞"
        />
    </Contain>
  )
}