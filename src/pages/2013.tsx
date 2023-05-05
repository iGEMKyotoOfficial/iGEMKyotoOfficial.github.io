import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'

export default function About() {
    return (
        <Contain>
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <a className="prev page-numbers" href="/2014">prev</a>
                    <a className="page-numbers" href="/member">2023</a>
                    <a className="page-numbers" href="/2022">2022</a>
                    <a className="page-numbers" href="/2021">2021</a>
                    <a className="page-numbers" href="/2020">2020</a>
                    <a className="page-numbers" href="/2019">2019</a>
                    <a className="page-numbers" href="/2018">2018</a>
                    <a className="page-numbers" href="/2017">2017</a>
                    <a className="page-numbers" href="/2016">2016</a>
                    <a className="page-numbers" href="/2015">2015</a>
                    <a className="page-numbers" href="/2014">2014</a>
                    <span aria-current="page" className="page-numbers current">2013</span>
                    <a className="page-numbers" href="/2012">2012</a>
                    <a className="page-numbers" href="/2011">2011</a>
                    <a className="next page-numbers" href="/2012">next</a>
                </div>
            </div>
            <h4>Theme: RNA Oscillator, Pattern Generation</h4>
            <a href="https://2013.igem.org/Team:Kyoto" className="btn btn-border">Wiki</a>
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
        </Contain>
    )
}
