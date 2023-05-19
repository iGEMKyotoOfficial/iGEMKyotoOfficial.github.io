import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'
import Frame from 'components/member.people'

import shiba from 'images/member.2020/team-2020-shiba.jpg'
import ryu from 'images/member.2020/team-2020-ryu.jpg'
import kobayashi from 'images/member.2020/team-2020-kobayashi2.jpg'
import yamauchi from 'images/member.2020/team-2020-yamauchi2.jpg'
import ikeda from 'images/member.2020/team-2020-ikeda.jpg'
import kishida from 'images/member.2020/team-2020-kishida.jpg'
import sakono from 'images/member.2020/team-2020-sakono.jpg'
import tajima from 'images/member.2020/team-2020-tajima.jpg'
import nishizawa from 'images/member.2020/team-2020-nishizawa2.jpg'
import nishimura from 'images/member.2020/team-2020-nishimura.jpg'
import hayashida from 'images/member.2020/team-2020-hayashida.jpg'
import ueda from 'images/member.2020/team-2020-ueda.jpg'
import kawakami from 'images/member.2020/team-2020-kawakami.jpg'
import goya from 'images/member.2020/team-2020-goya.jpg'
import koga from 'images/member.2020/team-2020-koga.jpg'
import hayashi from 'images/member.2020/team-2020-hayashi.jpg'
import hirota from 'images/member.2020/team-2020-hirota.jpg'
import fukushima from 'images/member.2020/team-2020-fukushima.jpg'

export default function About() {
    return (
        <Contain>
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <Link className="prev page-numbers" href="/2021">prev</Link>
                    <Link className="page-numbers" href="/member">2023</Link>
                    <Link className="page-numbers" href="/2022">2022</Link>
                    <Link className="page-numbers" href="/2021">2021</Link>
                    <span aria-current="page" className="page-numbers current">2020</span>
                    <Link className="page-numbers" href="/2019">2019</Link>
                    <Link className="page-numbers" href="/2018">2018</Link>
                    <Link className="page-numbers" href="/2017">2017</Link>
                    <Link className="page-numbers" href="/2016">2016</Link>
                    <Link className="page-numbers" href="/2015">2015</Link>
                    <Link className="page-numbers" href="/2014">2014</Link>
                    <Link className="page-numbers" href="/2013">2013</Link>
                    <Link className="page-numbers" href="/2012">2012</Link>
                    <Link className="page-numbers" href="/2011">2011</Link>
                    <Link className="next page-numbers" href="/2019">next</Link>
                </div>
            </div>

            <br />
            <Frame subtitle="	芝 雄介 (Yusuke SHIBA)" src={shiba}>
                Sophomore of the Department of Bioresource Science, Faculty of Agriculture, Kyoto University  <br />
                <b>Team Leader</b> <br />
                寝不足は寝るしかない
            </Frame>
            <br />
            <Frame subtitle="	アレクサンダー Y. リュウ (Alexander Y. LIU)" src={ryu}>
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
                I appreciate being blessed with wonderful colleagues. May this difficult year become worthwhile!
            </Frame>
            <br />
            <Frame subtitle="	西村 怜緒 (Reo NISHIMURA)" src={nishimura}>
                Sophomore of the Faculty of Pharmacy, Kyoto University  <br />
                Proceed like a locomotive!
            </Frame>
            <br />
            <Frame subtitle="	林田 ももこ (Momoko HAYASHIDA)" src={hayashida}>
                Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University   <br />
                お寺と亀が好きです
            </Frame>
            <br />
            <Frame subtitle="	植田 悠斗 (Yuto UEDA)" src={ueda}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                未知の遊星からの物体E.T.との遭遇
            </Frame>
            <br />
            <Frame subtitle="	川上 咲季 (Saki KAWAKAMI)" src={kawakami}>
                Freshman of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University   <br />
                趣味は悪ふざけ
            </Frame>
            <br />
            <Frame subtitle="	合屋 智尋 (Chihiro GOYA)" src={goya}>
                Freshman of the Department of Medicine, Faculty of Medicine, Kyoto University   <br />
                おなかすいた
            </Frame>
            <br />
            <Frame subtitle="	古賀 大翔 (Hiroto KOGA) " src={koga}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                両生類になりたい
            </Frame>
            <br />
            <Frame subtitle="	林 泰瑶 (Taiyo HAYASHI)" src={hayashi}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                今日から本気出す
            </Frame>
            <br />
            <Frame subtitle="	廣田 亮太郎 (Ryotaro HIROTA)" src={hirota}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                Sis Puella Magica!
            </Frame>
            <br />
            <Frame subtitle="福嶋 陸斗 (Rikuto FUKUSHIMA)" src={fukushima}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                睡眠こそ至高
            </Frame>
        </Contain>
    )
}
