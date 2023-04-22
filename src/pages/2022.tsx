import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import Frame from 'components/member.people'

import abe from 'images/member.2022/2022_abe.jpg'
import fukuoka from 'images/member.2022/2022_fukuoka.jpeg'
import fukushima from 'images/member.2022/2022_fukushima.jpg'
import goto from 'images/member.2022/2022_goto.jpg'
import hayamatsu from 'images/member.2022/2022_hayamatsu.jpg'
import hayashi from 'images/member.2022/2022_hayashi.jpg'
import ishibashi from 'images/member.2022/2022_ishibashi.jpg'
import jana from 'images/member.2022/2022_jana.jpg'
import kawakami from 'images/member.2022/2022_kawakami.jpg'
import maeta from 'images/member.2022/2022_maeta.jpg'
import mihara from 'images/member.2022/2022_mihara.jpg'
import mitoma from 'images/member.2022/2022_sekikawa.jpg'
import sekikawa from 'images/member.2022/2022_sekikawa.jpg'
import tsuchida from 'images/member.2022/2022_tsuchida.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2022"
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
      <Frame subtitle="石橋 凌平 (Ryohei ISHIBASHI)" src={ishibashi}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: <b>Team Leader</b> <br />
        Hobby: 旅行、映画 <br />

      </Frame>
    </Contain>
  )
}
