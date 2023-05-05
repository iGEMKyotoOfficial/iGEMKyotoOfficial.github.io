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
                    <a className="prev page-numbers" href="/2015">prev</a>
                    <a className="page-numbers" href="/member">2023</a>
                    <a className="page-numbers" href="/2022">2022</a>
                    <a className="page-numbers" href="/2021">2021</a>
                    <a className="page-numbers" href="/2020">2020</a>
                    <a className="page-numbers" href="/2019">2019</a>
                    <a className="page-numbers" href="/2018">2018</a>
                    <a className="page-numbers" href="/2017">2017</a>
                    <a className="page-numbers" href="/2016">2016</a>
                    <a className="page-numbers" href="/2015">2015</a>
                    <span aria-current="page" className="page-numbers current">2014</span>
                    <a className="page-numbers" href="/2013">2013</a>
                    <a className="page-numbers" href="/2012">2012</a>
                    <a className="page-numbers" href="/2011">2011</a>
                    <a className="next page-numbers" href="/2013">next</a>
                </div>
            </div>
            <h4>Theme: Magnetosome Formation</h4>
            <a href="https://2014.igem.org/Team:Kyoto" className="btn btn-border">Wiki</a>
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
