import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import Frame from 'components/member.people'

import Fukudaakiko1 from '/images/member.2017/2017_Fukudaakiko1.jpg'
import Isodayosuke3 from '/images/member.2017/2017_Isodayosuke3.jpg'
import Kokiyoshimoto4 from '/images/member.2017/2017_Kokiyoshimoto4.jpg'
import yamada from '/images/member.2017/2017_Kyoto-team-yamada.jpg'
import bio020 from '/images/member.2017/2017_T--Kyoto--bio020.jpg'
import Takimotoren3 from '/images/member.2017/2017_Takimotoren3.jpg'
import Tanigakiyusuke1 from '/images/member.2017/2017_Tanigakiyusuke1.jpg'
import you from 'images/member.2017/2017_Image_0c0cd5b.iGEMtong.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2017"
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
      <Frame subtitle="Koki YOSHIMOTO" src={Kokiyoshimoto4}>
        Sophomore of the Faculty of Pharmacy, Kyoto University  <br />
        <b>Team Leader</b> <br />
        溢れる京大愛。 almost same but slightly different
      </Frame>
      <br />
      <Frame subtitle="Ren TAKIZAWA" src={Takimotoren3}>
        Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
        第89代カルカタ伝承者
      </Frame>
      <br />
      <Frame subtitle="Daiya OHARA" src={bio020}>
        Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />
        YMW(やってみないとわからない)
      </Frame>
      <br />
      <Frame subtitle="Yousuke ISODA" src={Isodayosuke3}>
        Sophomore of the Faculty of Science, Kyoto University  <br />
        化学屋
      </Frame>
      <br />
      <Frame subtitle="Yusuke TANIGAKI" src={Tanigakiyusuke1}>
        Sophomore of the Faculty of Pharmacy, Kyoto University  <br />
        
      </Frame>
      <br />
      <Frame subtitle="Akiko FUKUDA" src={Fukudaakiko1}>
        Sophomore of the Faculty of Science, Kyoto University  <br />
        
      </Frame>
      <br />
      <Frame subtitle="Shuhei YAMADA" src={yamada}>
        Junior of the Faculty of Science, Kyoto University  <br />
        fake it till I make it.
      </Frame>
      <br />
      <Frame subtitle="You Tong" src={you}>
        Freshman of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University  <br />
        探究心
      </Frame>
    </Contain>
  )
}
