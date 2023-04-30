import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import Frame from 'components/member.people'

import Isodayosuke3 from '/images/member.2016/Kyoto-team-Isodayosuke3.jpg'
import Koide3 from '/images/member.2016/Kyoto-team-Koide3.jpg'
import Kokiyoshimoto3 from '/images/member.2016/Kyoto-team-Kokiyoshimoto3.jpg'
import Li from '/images/member.2016/Kyoto-team-Li.jpg'
import Miyazakiurara3 from '/images/member.2016/Kyoto-team-Miyazakiurara3.jpg'
import Oharadaiya2 from '/images/member.2016/Kyoto-team-Oharadaiya2.jpg'
import Sassahironari from '/images/member.2016/Kyoto-team-Sassahironari.jpg'
import Takimotoren3 from '/images/member.2016/Kyoto-team-Takimotoren3.jpg'
import kosaka from '/images/member.2016/Kyoto-team-Yuishinkosaka3.jpg'
import egashira from '/images/member.2016/Kyoto-team-egashira.jpg'
import iguchi from '/images/member.2016/Kyoto-team-iguchi.jpg'
import kaneko from '/images/member.2016/Kyoto-team-kaneko.jpg'
import kim from '/images/member.2016/Kyoto-team-kim.jpg'
import matsumoto from '/images/member.2016/Kyoto-team-matsumoto.jpg'
import michimori from '/images/member.2016/Kyoto-team-michimori.jpg'
import nakamura from '/images/member.2016/Kyoto-team-nakamura.jpg'
import notsu from '/images/member.2016/Kyoto-team-notsu.jpg'
import uchino from '/images/member.2016/Kyoto-team-uchino.jpg'
import wan from '/images/member.2016/Kyoto-team-wan.jpg'
import yamada from '/images/member.2016/Kyoto-team-yamada.jpg'
import yamamoto from '/images/member.2016/Kyoto-team-yamamoto.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2016"
      />

      <div className="member">
        <Link href="/member" legacyBehavior>
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
      </div>

      <br />
      <Frame subtitle="道盛 裕太 (Yuta MICHIMORI)" src={michimori}>
        Sophomore of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University  <br />
        <b>Team Leader</b> <br />
        Ask,seek and knock.
      </Frame>
      <br />
      <Frame subtitle="内野 智樹 (Tomoki UCHINO)" src={uchino}>
        Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />
        春眠不覚暁
      </Frame>
      
    </Contain>
  )
}
