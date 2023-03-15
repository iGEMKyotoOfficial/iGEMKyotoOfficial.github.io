import Container from 'components/container'
import Hero from 'components/hero'

export default function About() {
  return (
    <Container>
        <Hero
          title="About"
          subtitle="私たちiGEM Kyotoは合成生物学の世界大会iGEM(the international Genetically Engineered Machine competition)に向けて活動している京大生チームです。"
          imageOn
        />
    </Container>
  )
}