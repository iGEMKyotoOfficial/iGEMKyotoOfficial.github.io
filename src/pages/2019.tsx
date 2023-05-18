import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'
import Frame from 'components/member.people'

import tamukai from 'images/member.2019/team-2019-tamukai.jpg'
import shimazoe from 'images/member.2019/team-2019-shimazoe.jpg'
import nakazato from 'images/member.2019/team-2019-nakazato.jpg'
import kobayashi from 'images/member.2019/team-2019-kobayashi.jpg'
import yamauchi from 'images/member.2019/team-2019-yamauchi.jpg'
import ryu from 'images/member.2019/team-2019-ryu.jpg'
import ikeda from 'images/member.2019/team-2019-ikeda.jpg'
import kishida from 'images/member.2019/team-2019-kishida.jpg'
import sakaguchi from 'images/member.2019/team-2019-sakaguchi2.jpg'
import sakono from 'images/member.2019/team-2019-sakono2.jpg'
import shiba from 'images/member.2019/team-2019-shiba2.jpg'
import nishimura from 'images/member.2019/team-2019-nishimura.jpg'

export default function About() {
    return (
        <Contain>
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <Link className="prev page-numbers" href="/2020">prev</Link>
                    <Link className="page-numbers" href="/member">2023</Link>
                    <Link className="page-numbers" href="/2022">2022</Link>
                    <Link className="page-numbers" href="/2021">2021</Link>
                    <Link className="page-numbers" href="/2020">2020</Link>
                    <span aria-current="page" className="page-numbers current">2019</span>
                    <Link className="page-numbers" href="/2018">2018</Link>
                    <Link className="page-numbers" href="/2017">2017</Link>
                    <Link className="page-numbers" href="/2016">2016</Link>
                    <Link className="page-numbers" href="/2015">2015</Link>
                    <Link className="page-numbers" href="/2014">2014</Link>
                    <Link className="page-numbers" href="/2013">2013</Link>
                    <Link className="page-numbers" href="/2012">2012</Link>
                    <Link className="page-numbers" href="/2011">2011</Link>
                    <Link className="next page-numbers" href="/2018">next</Link>
                </div>
            </div>

            <h1>Theme: My Clothes' Plastic</h1>
            <br />
            <Link href="https://2019.igem.org/Team:Kyoto" className="btn btn-border">Wiki</Link>

            <br />
            <br />
            <Frame subtitle="田向 健人 (Kento TAMUKAI)" src={tamukai}>
                Sophomore of the Faculty of Pharmacy, Kyoto University  <br />
                <b>Team Leader</b> <br />
                チャリに鍵かけたっけな
            </Frame>
            <br />
            <Frame subtitle="島添 將誠 (Masaki SHIMAZOE)" src={shimazoe}>
                Sophomore of the Faculty of Science, Kyoto University  <br />
                Chromosomes! Love you!
            </Frame>
            <br />
            <Frame subtitle="仲里 佳子 (Kako NAKAZATO)" src={nakazato}>
                Senior of the Faculty of Education, Kyoto University  <br />
                Vitality and Love for soybean
            </Frame>
            <br />
            <Frame subtitle="小林 勇毅 (Yuki KOBAYASHI)" src={kobayashi}>
                Sophomore of the Faculty of Science, Kyoto University  <br />
                普通じゃつまらん
            </Frame>
            <br />
            <Frame subtitle="山内 萌々乃 (Momono YAMAUCHI)" src={yamauchi}>
                Sophomore of the Department of Human Health Science, the Faculty of Medicine, Kyoto University  <br />
                赤血球とぺんぎんとおちゃの時間
            </Frame>
            <br />
            <Frame subtitle="劉 裕介 (Yusuke RYU)" src={ryu}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                “Look” more carefully. There's more to everything than meets the eye.
            </Frame>
            <br />
            <Frame subtitle="池田 雄太郎 (Yutaro IKEDA)" src={ikeda}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                Tout est Bien(Sein zum Tode)
            </Frame>
            <br />
            <Frame subtitle="岸田 尚大 (Naoto KISHIDA)" src={kishida}>
                Freshman of the Faculty of Pharmacy, Kyoto University  <br />
                わ
            </Frame>
            <br />
            <Frame subtitle="坂口 太規 (Taiki SAKAGUCHI)" src={sakaguchi}>
                Freshman of the Department of food science and biotechnology, Faculty of Agriculture, Kyoto University  <br />
                発酵
            </Frame>
            <br />
            <Frame subtitle="	迫野 眞大 (Masahiro SAKONO)" src={sakono}>
                Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University   <br />
                Work like a dog. Sleep like a log.
            </Frame>
            <br />
            <Frame subtitle="	芝 雄介 (Yusuke SHIBA)" src={shiba}>
                Freshman of the Department of Bioresource Science, Faculty of Agriculture, Kyoto University  <br />
                ニューロンの奴隷
            </Frame>
            <br />
            <Frame subtitle="	西村 怜緒 (Reo NISHIMURA)" src={nishimura}>
                Freshman of the Faculty of Pharmacy, Kyoto University  <br />
                体のサビと闘う！
            </Frame>
        </Contain>
    )
}
