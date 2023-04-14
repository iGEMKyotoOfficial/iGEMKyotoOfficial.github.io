import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2014"
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
      <p className="/2014">
        <b>清水寿朗</b> : 農学部2回生
        <br /> 山中ももこ : 農学部3回生
        <br /> 杉山成明 : 医学部2回生
        <br /> シャテラン ステファン : 農学部2回生
        <br /> 岡崎史恵 : 農学部2回生
        <br /> 井上紘一 : 農学部2回生
        <br /> 本多慎之介 : 農学部2回生
        <br /> 上林幸平 : 農学部2回生
        <br /> 加藤貴裕 : 農学部2回生
        <br /> 嶋崎大地 : 薬学部2回生
        <br /> 村田隆 : 理学部2回生
        <br /> 村上晃 : 理学部2回生
        <br /> 辰井勇介 : 理学部2回生
        <br /> 芦田英郎 : 理学部2回生
        <br /> 安田裕助 : 理学部2回生
        <br /> 松本宙 : 農学部1回生
        <br /> 山内悠至 : 農学部1回生
        <br /> 中村元春 : 農学部1回生
        <br /> 北悠人 : 農学部1回生
        <br /> 李豪 : 農学部1回生
        <br /> 河井遥範 : 農学部1回生
        <br /> 伊藤愛 : 農学部1回生
        <br /> 助川桃枝 : 教育学部1回生
        <br /> 山浦瑞樹 : 医学部1回生
        <br /> 辻井秀明 : 医学部1回生
        <br /> 池口茉莉恵 : 医学部1回生
      </p>
      <br />
    </Contain>
  )
}
