import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import Frame from 'components/member.people'

import you from 'images/member.2018/2018_Douosumou.jpg'
import fukuda from 'images/member.2018/2018_AkikoFukudasan.jpg'
import nakazato from 'images/member.2018/2018_Yoshiko.jpg'
import yoshimoto from 'images/member.2018/2018_Yoshiko.jpg'
import tsuzuki from 'images/member.2018/2018_Ikumin.jpg'
import nambu from 'images/member.2018/2018_Nambu.jpg'
import sato from 'images/member.2018/2018_Satokun.jpg'
import shimazoe from 'images/member.2018/2018_Zoekun.jpg'
import taguchi from 'images/member.2018/2018_Marichan.jpg'
import tamukai from 'images/member.2018/2018_Tamuken.jpg'
import morikawa from 'images/member.2018/2018_Moririn.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2018"
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
      <Frame subtitle="You Tong" src={you}>
        Sophomore of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University  <br />
        <b>Team Leader</b> <br />
        目を閉じたらセンチュウがいる
      </Frame>
      
    </Contain>
  )
}
