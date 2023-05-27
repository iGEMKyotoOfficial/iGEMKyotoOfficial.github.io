import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'
import Frame from 'components/member.people'

import Isodayosuke3 from '/images/member.2016/Kyoto-team-Isodayosuke3.jpg'
import Koide3 from '/images/member.2016/Kyoto-team-Koide3.jpg'
import Kokiyoshimoto3 from '/images/member.2016/Kyoto-team-Kokiyoshimoto3.jpg'
import Li from '/images/member.2016/Kyoto-team-Li.jpg'
import Miyazakiurara3 from '/images/member.2016/Kyoto-team-Miyazakiurara3.jpg'
import Oharadaiya2 from '/images/member.2016/Kyoto-team-Oharadaiya2.jpg'
import Sassahironari from '/images/member.2016/Kyoto-team-Sassahironari.jpg'
import Takimotoren3 from '/images/member.2016/Kyoto-team-Takimotoren3.jpg'
import kosaka from '/images/member.2016/Kyoto-team-Yuishinkosaka3.jpg'
import egashira from '/images/member.2016/Kyoto-team-egashira.jpg'
import iguchi from '/images/member.2016/Kyoto-team-iguchi.jpg'
import kaneko from '/images/member.2016/Kyoto-team-kaneko.jpg'
import kim from '/images/member.2016/Kyoto-team-kim.jpg'
import matsumoto from '/images/member.2016/Kyoto-team-matsumoto.jpg'
import michimori from '/images/member.2016/Kyoto-team-michimori.jpg'
import nakamura from '/images/member.2016/Kyoto-team-nakamura.jpg'
import notsu from '/images/member.2016/Kyoto-team-notsu.jpg'
import uchino from '/images/member.2016/Kyoto-team-uchino.jpg'
import wan from '/images/member.2016/Kyoto-team-wan.jpg'
import yamada from '/images/member.2016/Kyoto-team-yamada.jpg'
import yamamoto from '/images/member.2016/Kyoto-team-yamamoto.jpg'
import sukegawa from 'images/others/white.png'

export default function About() {
    return (
        <Contain>
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <Link className="prev page-numbers" href="/2017">prev</Link>
                    <Link className="page-numbers" href="/member">2023</Link>
                    <Link className="page-numbers" href="/2022">2022</Link>
                    <Link className="page-numbers" href="/2021">2021</Link>
                    <Link className="page-numbers" href="/2020">2020</Link>
                    <Link className="page-numbers" href="/2019">2019</Link>
                    <Link className="page-numbers" href="/2018">2018</Link>
                    <Link className="page-numbers" href="/2017">2017</Link>
                    <span aria-current="page" className="page-numbers current">2016</span>
                    <Link className="page-numbers" href="/2015">2015</Link>
                    <Link className="page-numbers" href="/2014">2014</Link>
                    <Link className="page-numbers" href="/2013">2013</Link>
                    <Link className="page-numbers" href="/2012">2012</Link>
                    <Link className="page-numbers" href="/2011">2011</Link>
                    <Link className="next page-numbers" href="/2015">next</Link>
                </div>
            </div>
            <h1>Theme: NORO CATCHER</h1>
            <br />
            <Link href="https://2016.igem.org/Team:Kyoto" className="btn btn-border">Wiki</Link>
            <br />
            <br />
            <Frame subtitle="道盛 裕太 (Yuta MICHIMORI)" src={michimori}>
                Sophomore of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University  <br />
                <b>Team Leader</b> <br />
                Ask,seek and knock.
            </Frame>
            <br />
            <Frame subtitle="内野 智樹 (Tomoki UCHINO)" src={uchino}>
                Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />
                春眠不覚暁
            </Frame>
            <br />
            <Frame subtitle="金子 英樹 (Hideki KANEKO)" src={kaneko}>
                Sophomore of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University  <br />
                好奇心を失わないように努めます
            </Frame>
            <br />
            <Frame subtitle="野津 俊太(Shunta NOTSU)" src={notsu}>
                Sophomore of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University  <br />
                剛毅果断
            </Frame>
            <br />
            <Frame subtitle="井口 聖大 (Takahiro IGUCHI)" src={iguchi}>
                Sophomore of the Department of Food Science and Biotechnology, Faculty of Agriculture, Kyoto University  <br />
                Stay hungry. Stay foolish.
            </Frame>
            <br />
            <Frame subtitle="江頭 海 (Kai EGASHIRA)" src={egashira}>
                Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />

            </Frame>
            <Frame subtitle="山本 衣里奈 (Erina YAMAMOTO)" src={yamamoto}>
                Sophomore of he Department of Medical Science, Faculty of Medicine, Kyoto University  <br />
                ひとつひとつ 一歩一歩
            </Frame>
            <br />
            <Frame subtitle="キム ジンソル (Jinsol KIM)" src={kim}>
                Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                Que sera sera
            </Frame>
            <br />
            <Frame subtitle="万 沢夫 (Zeff WAN)" src={wan}>
                Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                真実をずっと追求している
            </Frame>
            <br />
            <Frame subtitle="山田 修平 (Shuhei YAMADA)" src={yamada}>
                Sophomore of the Department of Physics and Engineering, Faculty of Engineering, Kyoto University  <br />
                fake it till I make it.
            </Frame>
            <br />
            <Frame subtitle="助川 桃枝 (Momoe SUKEGAWA)" src={sukegawa}>
                Junior of the Faculty of Education, Kyoto University  <br />

            </Frame>
            <br />
            <Frame subtitle="松本 宙 (Sora MATSUMOTO)" src={matsumoto}>
                Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                I have a dream.
            </Frame>
            <br />
            <Frame subtitle="李 豪 (Li HAO)" src={Li}>
                Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                Biological fixation will contribute to the revival of my hometown, Mars.
            </Frame>
            <br />
            <Frame subtitle="中村 元春 (Motoharu NAKAMURA)" src={nakamura}>
                Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                I want money.
            </Frame>
            <br />
            <Frame subtitle="佐々 裕成 (Hironari SASSA)" src={Sassahironari}>
                Freshman of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University  <br />
                ←This is a pair of glasses which consists of chemistry and synthetic biology, please handle it with care.
            </Frame>
            <br />
            <Frame subtitle="滝本 廉 (Ren TAKIMOTO)" src={Takimotoren3}>
                Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                第89代カルカタ伝承者
            </Frame>
            <br />
            <Frame subtitle="小坂 唯心 (Yuishin KOSAKA)" src={kosaka}>
                Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                Samurai
            </Frame>
            <br />
            <Frame subtitle="小出 英里 (Eri KOIDE)" src={Koide3}>
                Freshman of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University  <br />
                I wonder if I can make antibody with this rabbit...
            </Frame>
            <br />
            <Frame subtitle="小原 乃也 (Daiya OHARA)" src={Oharadaiya2}>
                Freshman of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />
                YMW(やってみないとわからない)
            </Frame>
            <br />
            <Frame subtitle="宮崎 うらら (Urara MIYAZAKI)" src={Miyazakiurara3}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                分子生物学はお好きですか？
            </Frame>
            <br />
            <Frame subtitle="磯田 洋介(Yousuke ISODA)" src={Isodayosuke3}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                化学グランプリ金賞受賞者
            </Frame>
            <br />
            <Frame subtitle="吉本 昂希 (Koki YOSHIMOTO)" src={Kokiyoshimoto3}>
                Freshman of the Faculty of Pharmacy, Kyoto University  <br />
                溢れる京大愛。 almost same but slightly different
            </Frame>
        </Contain>
    )
}
