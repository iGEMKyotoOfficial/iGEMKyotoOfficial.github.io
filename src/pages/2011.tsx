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
                    <a className="prev page-numbers" href="/2012">prev</a>
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
                    <a className="page-numbers" href="/2013">2013</a>
                    <a className="page-numbers" href="/2012">2012</a>
                    <span aria-current="page" className="page-numbers current">2011</span>
                    <a className="next page-numbers" href="/member">next</a>
                </div>
            </div>
            <br />
            <br />
            <p className="/2011">
                <b>橋谷文貴</b> : 理学部2回生
                <br /> 志甫谷渉 : 理学部4回生
                <br /> 山本拓弥 : 理学部4回生
                <br /> 前田勇樹 : 理学部4回生
                <br /> 村山知 : 薬学部4回生
                <br />梶田憲 : 工学部工業化学科3回生
                <br /> 川田哲也 : 理学部3回生
                <br /> 胡迪超 : 工学部情報科3回生
                <br /> 原大貴 : 工学部工業化学科3回生
                <br /> 杉浦佑 : 理学部2回生
                <br /> 森仁志 : 農学部2回生
                <br /> 岡田卓也 : 医学部2回生
                <br /> 木田龍祐 : 農学部2回生
                <br /> 草場哲 : 理学部2回生
                <br /> 寺田将也 : 薬学部2回生
                <br /> 廣瀬達也 : 理学部2回生
                <br /> 下坂天洋 : 工学部工業化学科1回生
                <br /> 延山知弘 : 理学部1回生
                <br /> 加藤傑 : 理学部1回生
                <br /> 泉早苗 : 薬学部1回生
                <br /> 小松馨 : 医学部1回生
                <br /> 佐藤茜 : 薬学部1回生
                <br /> 奥村研志 : 農学部1回生
            </p>
            <br />
        </Contain>
    )
}
