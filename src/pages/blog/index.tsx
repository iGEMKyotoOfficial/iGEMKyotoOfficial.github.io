import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container>
      <Meta pageTitle="Home" />
        <Hero
          title="iGEM Kyoto"
          subtitle="iGEM × Kyoto = ∞"
          imageOn
        />
    </Container>
  )
}