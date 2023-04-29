import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import Frame from 'components/member.people'

import shiba from 'images/member.2020/team-2020-shiba.jpg'
import ryu from 'images/member.2020/team-2020-ryu.jpg'
import kobayashi from 'images/member.2020/team-2020-kobayashi2.jpg'
import yamauchi from 'images/member.2020/team-2020-yamauchi.jpg'
import ikeda from 'images/member.2020/team-2020-ikeda.jpg'
import kishida from 'images/member.2020/team-2020-kishida.jpg'
import sakono from 'images/member.2020/team-2020-sakono.jpg'
import tajima from 'images/member.2020/team-2020-tajima.jpg'
import nishizawa from 'images/member.2020/team-2020-nishizawa.jpg'
import nishimura from 'images/member.2020/team-2020-nishimura.jpg'
import hayashida from 'images/member.2020/team-2020-hayashida.jpg'
import ueda from 'images/member.2020/team-2020-ueda.jpg'
import kawakami from 'images/member.2020/team-2020-kawakami.jpg'
import goya from 'images/member.2020/team-2020-goya.jpg'
import koga from 'images/member.2020/team-2020-koga.jpg'
import hayashi from 'images/member.2020/team-2020-hayashi.jpg'
import hitota from 'images/member.2020/team-2020-hirota.jpg'
import fukushima from 'images/member.2020/team-2020-fukushima.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2020"
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
      <Frame subtitle="	芝 雄介 (Yusuke SHIBA)" src={shiba}>
        Sophomore of the Department of Bioresource Science, Faculty of Agriculture, Kyoto University  <br />
        寝不足は寝るしかない
      </Frame>
      <br />
      <Frame subtitle="	劉 裕介 (Yusuke RYU)" src={ryu}>
        Sophomore of the Faculty of Science, Kyoto University  <br />
        Cause I love how it feels when I break the chains
      </Frame>
      <br />
      <Frame subtitle="	小林 勇毅 (Yuki KOBAYASHI)" src={kobayashi}>
        Junior of the Faculty of Science, Kyoto University  <br />
        Let's go on a long, long journey.
      </Frame>
      <br />
      <Frame subtitle="	山内 萌々乃 (Momono YAMAUCHI)" src={yamauchi}>
        Junior of the Department of Human Health Science, the Faculty of Medicine, Kyoto University  <br />
        赤血球とぺんぎんとごはんの時間
      </Frame>
      <br />
      <Frame subtitle="	池田 雄太郎 (Yutaro IKEDA)" src={ikeda}>
        Sophomore of the Faculty of Science, Kyoto University  <br />
        A piece of cake!
      </Frame>
      <br />
      <Frame subtitle="	岸田 尚大 (Naoto KISHIDA)" src={kishida}>
        Sophomore of the Faculty of Pharmacy, Kyoto University  <br />
        できる後輩です。by Yuki KOBAYASHI
      </Frame>
      <br />
      <Frame subtitle="	迫野 眞大 (Masahiro SAKONO)" src={sakono}>
        Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University   <br />
        Work like a dog. Sleep like a log.
      </Frame>
      <br />
      <Frame subtitle="	田島 奈桜 (Nao TAJIMA)" src={tajima}>
        Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University   <br />
        ネコとみかん
      </Frame>
      <br />
      <Frame subtitle="	西澤 知里 (Chisato NISHIZAWA)" src={nishizawa}>
        Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University   <br />
        Be powerful like a flower.
      </Frame>

    </Contain>
  )
}
