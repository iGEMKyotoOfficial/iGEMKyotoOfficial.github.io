import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap'
import Frame from 'components/member.people'

import ishibashi from 'images/member.2023/2023_ishibashi.jpg'
import sekikawa from 'images/member.2023/2023_sekikawa.jpg'
import mitoma from 'images/member.2023/2023_mitoma.jpg'
import tsuchida from 'images/member.2023/2023_tsuchida.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2023"
      />

      <div className="member">
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
      </div>

      <br />
      <Frame subtitle="石橋 凌平 (Ryohei ISHIBASHI)" src={ishibashi}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role:  <br />
        Hobby:  <br />
        Everything happens for a reason.
      </Frame>
      <br />
      <Frame subtitle="関川 隆 (Ryu SEKIKAWA)" src={sekikawa}>
        Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto University <br />
        Role: Human Practice <br />
        Hobby: 鉄道旅行 <br />
        一般的な変人京大生です
      </Frame>
      <br />
      <Frame subtitle="土田 美咲 (Misaki TSUCHIDA)" src={tsuchida}>
        Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University <br />
        Role: Wiki, Accounting, Design <br />
        Hobby: Basketball <br />
        Everything happens for a reason.
      </Frame>
      <br />
      <Frame subtitle="三笘 隼人 (Hayato MITOMA)" src={mitoma}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: Wet Experiment <br />
        Hobby: 生物採集 <br />
        Everything happens for a reason.
      </Frame>
    </Contain>
  )
}