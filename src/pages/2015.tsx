import Container from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

export default function About() {
  return (
    <Container>
      <Hero
        title="Member"
        subtitle="2015"
      />

      <p className="member">
        <Link href="/2023" legacyBehavior>
          <a className="2023">2023&ensp;</a>
        </Link>
        <Link href="/2022" legacyBehavior>
          <a className="2022">2022&ensp;</a>
        </Link>
        <Link href="/2021" legacyBehavior>
          <a className="2021">2021&ensp;</a>
        </Link>
        <Link href="/2020" legacyBehavior>
          <a className="2020">2020&ensp;</a>
        </Link>
        <Link href="/2019" legacyBehavior>
          <a className="2019">2019&ensp;</a>
        </Link>
        <Link href="/2018" legacyBehavior>
          <a className="2018">2018&ensp;</a>
        </Link>
        <Link href="/2017" legacyBehavior>
          <a className="2017">2017&ensp;</a>
        </Link>
        <Link href="/2016" legacyBehavior>
          <a className="2016">2016&ensp;</a>
        </Link>
        <Link href="/2015" legacyBehavior>
          <a className="2015">2015&ensp;</a>
        </Link>
        <Link href="/2014" legacyBehavior>
          <a className="2014">2014&ensp;</a>
        </Link>
        <Link href="/2013" legacyBehavior>
          <a className="2013">2013&ensp;</a>
        </Link>
        <Link href="/2012" legacyBehavior>
          <a className="2012">2012&ensp;</a>
        </Link>
        <Link href="/2011" legacyBehavior>
          <a className="2011">2011&ensp;</a>
        </Link>
      </p>   
      <br />
      <br />
      <p className="/2015">

        <b>助川桃枝</b>:教育学部2回生
        <br /> 松本宙:農学部2回生
        <br /> 李豪:農学部2回生
        <br /> 辻井秀明:医学部2回生
        <br /> 中村元春:農学部2回生
        <br /> 道盛裕太:工学部1回生
        <br /> 内野智樹:農学部1回生
        <br /> 金子英樹:農学部1回生
        <br /> 野津俊太:工学部1回生
        <br /> 井口聖大:農学部1回生
      </p>
      <br />
    </Container>
  )
}
