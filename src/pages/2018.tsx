import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'
import Frame from 'components/member.people'

import you from 'images/member.2018/2018_Douosumou.jpg'
import fukuda from 'images/member.2018/2018_AkikoFukudasan.jpg'
import nakazato from 'images/member.2018/2018_Yoshiko.jpg'
import yoshimoto from 'images/member.2018/2018_Kokiyoshimoto4.jpg'
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
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <a className="prev page-numbers" href="/2019">prev</a>
                    <a className="page-numbers" href="/member">2023</a>
                    <a className="page-numbers" href="/2022">2022</a>
                    <a className="page-numbers" href="/2021">2021</a>
                    <a className="page-numbers" href="/2020">2020</a>
                    <a className="page-numbers" href="/2019">2019</a>
                    <span aria-current="page" className="page-numbers current">2018</span>
                    <a className="page-numbers" href="/2017">2017</a>
                    <a className="page-numbers" href="/2016">2016</a>
                    <a className="page-numbers" href="/2015">2015</a>
                    <a className="page-numbers" href="/2014">2014</a>
                    <a className="page-numbers" href="/2013">2013</a>
                    <a className="page-numbers" href="/2012">2012</a>
                    <a className="page-numbers" href="/2011">2011</a>
                    <a className="next page-numbers" href="/2017">next</a>
                </div>
            </div>

            <h1>Theme: Swallowyces ceerevisiae</h1>
            <br />
            <a href="https://2018.igem.org/Team:Kyoto" className="btn btn-border">Wiki</a>
            <br />
            <br />
            <Frame subtitle="You Tong" src={you}>
                Sophomore of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University  <br />
                <b>Team Leader</b> <br />
                目を閉じたらセンチュウがいる
            </Frame>
            <br />
            <Frame subtitle="Akiko FUKUDA" src={fukuda}>
                Junior of the Faculty of Science, Kyoto University  <br />
                Could you give me a minute?
            </Frame>
            <br />
            <Frame subtitle="Kako NAKAZATO" src={nakazato}>
                Junior of the Faculty of Education, Kyoto University  <br />
                豆
            </Frame>
            <br />
            <Frame subtitle="Koki YOSHIMOTO" src={yoshimoto}>
                Junior of the Faculty of Pharmacy, Kyoto University  <br />
                溢れる京大愛。 almost same but slightly different
            </Frame>
            <br />
            <Frame subtitle="Ikumi TSUZUKI" src={tsuzuki}>
                Sophomore of the Department of Forestry Science, Faculty of Agriculture, Kyoto University  <br />
                What will be, will be
            </Frame>
            <br />
            <Frame subtitle="Masahiro NAMBU" src={nambu}>
                Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University  <br />
                I want to see natural scenary in various places, in various wether, in various seasons, and to know more about works of the earth.
            </Frame>
            <br />
            <Frame subtitle="Genki SATO" src={sato}>
                Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University  <br />
                藻と遺伝子と、抽象化
            </Frame>
            <br />
            <Frame subtitle="Masaki SHIMAZOE" src={shimazoe}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                My life is not determined by DNA sequence.
            </Frame>
            <br />
            <Frame subtitle="Mari TAGUCHI" src={taguchi}>
                Freshman of the Faculty of Science, Kyoto University  <br />
                I love prokaryote and virus because they are closely related to early forms of life and mysterious for me...
            </Frame>
            <br />
            <Frame subtitle="Kento TAMUKAI" src={tamukai}>
                Freshman of the Department of Human Health Science, Faculty of Medicine, Kyoto University  <br />
                努力と片付けは人が見ていないところでやる
            </Frame>
            <br />
            <Frame subtitle="Kazunari MORIKAWA" src={morikawa}>
                Freshman of the Faculty of Pharmacy, Kyoto University  <br />
                死なない
            </Frame>
        </Contain>
    )
}
