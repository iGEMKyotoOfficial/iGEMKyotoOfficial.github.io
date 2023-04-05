import Container from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

export default function About() {
    return (
      <Container>
         <Hero
          title="Member"
          subtitle={undefined}        
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
        <p className="/2013">
          <b>中川寛司</b> :  理学部2回生 
          <br /> 延山知弘 :  理学部3回生 
          <br /> 太田喜之 :  農学部3回生 
          <br /> 加藤傑 :  理学部3回生 
          <br /> 寺坂真子 :  医学部2回生 
          <br /> 田尻健 :  農学部2回生
          <br />黄瀬啓太 :  農学部2回生 
          <br /> 山中ももこ :  農学部2回生 
          <br /> 箕浦広大 :  農学部2回生 
          <br /> 平野義貴 :  農学部2回生 
          <br /> 松尾咲恵子 :  農学部2回生 
          <br /> 新稲亮 :  理学部2回生 
          <br />吉田光昭 :  理学部2回生 
          <br /> 壇辻さやか :  理学部2回生 
          <br /> 板谷崇央 :  医学部1回生 
          <br /> 杉山成明 :  医学部1回生 
          <br /> 中元一星 :  農学部1回生 
          <br /> 氏家里奈子 :  農学部1回生 
          <br />シャテラン ステファン :  農学部1回生 
          <br /> 清水寿朗 :  農学部1回生 
          <br /> 岡崎史恵 :  農学部1回生 
          <br /> 井上紘一 :  農学部1回生 
          <br /> 本多慎之介 :  農学部1回生 
          <br /> 張玖寧 :  農学部1回生
          <br />松本紘弥 :  農学部1回生 
          <br /> 児島彬歩 :  農学部1回生 
          <br /> 上林幸平 :  農学部1回生 
          <br /> 加藤貴裕 :  農学部1回生 
          <br /> 嶋崎大地 :  薬学部1回生 
          <br /> 望月直人 :  理学部1回生 
          <br /> 村田隆 :  理学部1回生
          <br /> 村上晃 :  理学部1回生 
          <br /> 武藤祥史 :  理学部1回生 
          <br /> 辰井勇介 :  理学部1回生 
          <br /> 金岡泰哲 :  理学部1回生 
          <br /> 芦田英郎 :  理学部1回生 
          <br />安田裕助 :  理学部1回生
        </p>
        <br />
      </Container>
  )
}
