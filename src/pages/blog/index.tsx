import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import Image from 'next/image'
import fushimi from 'images/fushimi-inari-shrine-1886975.jpg'

export default function Home() {
  return (
    <Contain large>
      <Meta pageTitle="Home" pageDesc="" />
      <Hero
        title="iGEM Kyoto"
        subtitle="iGEM × Kyoto = ∞"
      />

      <figure>
        <Image
          src={fushimi}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
      </figure>

    </Contain>
  )
}