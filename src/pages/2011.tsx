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
        <p className="/2011">
          <b>橋谷文貴</b>:理学部2回生 
          <br /> 志甫谷渉:理学部4回生
          <br /> 山本拓弥:理学部4回生 
          <br /> 前田勇樹:理学部4回生
          <br /> 村山知:薬学部4回生
          <br />梶田憲:工学部工業化学科3回生
          <br /> 川田哲也:理学部3回生
          <br /> 胡迪超:工学部情報科3回生
          <br /> 原大貴:工学部工業化学科3回生 
          <br /> 杉浦佑:理学部2回生 
          <br /> 森仁志:農学部2回生 
          <br /> 岡田卓也:医学部2回生 
          <br /> 木田龍祐:農学部2回生 
          <br /> 草場哲:理学部2回生 
          <br /> 寺田将也:薬学部2回生 
          <br /> 廣瀬達也:理学部2回生
          <br /> 下坂天洋:工学部工業化学科1回生 
          <br /> 延山知弘:理学部1回生 
          <br /> 加藤傑:理学部1回生 
          <br /> 泉早苗:薬学部1回生 
          <br /> 小松馨:医学部1回生 
          <br /> 佐藤茜:薬学部1回生 
          <br /> 奥村研志:農学部1回生 
        </p>
      </Container>
  )
}
