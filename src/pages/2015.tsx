import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import styles from 'src/styles/member.module.css'

export default function About() {
    return (
        <Contain>
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <a className="prev page-numbers" href="/2016">prev</a>
                    <a className="page-numbers" href="/member">2023</a>
                    <a className="page-numbers" href="/2022">2022</a>
                    <a className="page-numbers" href="/2021">2021</a>
                    <a className="page-numbers" href="/2020">2020</a>
                    <a className="page-numbers" href="/2019">2019</a>
                    <a className="page-numbers" href="/2018">2018</a>
                    <a className="page-numbers" href="/2017">2017</a>
                    <a className="page-numbers" href="/2016">2016</a>
                    <span aria-current="page" className="page-numbers current">2015</span>
                    <a className="page-numbers" href="/2014">2014</a>
                    <a className="page-numbers" href="/2013">2013</a>
                    <a className="page-numbers" href="/2012">2012</a>
                    <a className="page-numbers" href="/2011">2011</a>
                    <a className="next page-numbers" href="/2014">next</a>
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
