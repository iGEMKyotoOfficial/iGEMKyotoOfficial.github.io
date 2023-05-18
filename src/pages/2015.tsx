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
                    <Link className="prev page-numbers" href="/2016">prev</Link>
                    <Link className="page-numbers" href="/member">2023</Link>
                    <Link className="page-numbers" href="/2022">2022</Link>
                    <Link className="page-numbers" href="/2021">2021</Link>
                    <Link className="page-numbers" href="/2020">2020</Link>
                    <Link className="page-numbers" href="/2019">2019</Link>
                    <Link className="page-numbers" href="/2018">2018</Link>
                    <Link className="page-numbers" href="/2017">2017</Link>
                    <Link className="page-numbers" href="/2016">2016</Link>
                    <span aria-current="page" className="page-numbers current">2015</span>
                    <Link className="page-numbers" href="/2014">2014</Link>
                    <Link className="page-numbers" href="/2013">2013</Link>
                    <Link className="page-numbers" href="/2012">2012</Link>
                    <Link className="page-numbers" href="/2011">2011</Link>
                    <Link className="next page-numbers" href="/2014">next</Link>
                </div>
            </div>
            
            <br />
            <p className="/2015">

                <b>助川桃枝</b>:教育学部2回生
                <br /> 松本宙:農学部2回生
                <br /> 李豪:農学部2回生
                <br /> 辻井秀明:医学部2回生
                <br /> 中村元春:農学部2回生
                <br /> 道盛裕太:工学部1回生
                <br /> 内野智樹:農学部1回生
                <br /> 金子英樹:農学部1回生
                <br /> 野津俊太:工学部1回生
                <br /> 井口聖大:農学部1回生
            </p>
            <br />
        </Contain>
    )
}
