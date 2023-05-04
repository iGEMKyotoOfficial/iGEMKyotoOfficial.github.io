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
                    <a className="prev page-numbers" href="/2013">prev</a>
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
                    <span aria-current="page" className="page-numbers current">2012</span>
                    <a className="page-numbers" href="/2011">2011</a>
                    <a className="next page-numbers" href="/2011">next</a>
                </div>
            </div>
            <br />
            <p className="/2012">
                <b>延山知弘</b> : 理学部2回生
                <br /> 川田哲也 : 理学部4回生
                <br /> 木田龍祐 : 農学部3回生
                <br /> 橋谷文貴 : 理学部3回生
                <br /> 草場哲 : 理学部3回生
                <br />小松馨 : 医学部2回生
                <br /> 佐藤茜 : 薬学部2回生
                <br /> 泉早苗 : 薬学部2回生
                <br /> 竹内良輔 : 農学部2回生
                <br /> 太田義之 : 農学部2回生
                <br /> 奥村研志 : 農学部2回生
                <br /> 高本悠介 : 農学部2回生
                <br />チェヒョンチョル : 農学部2回生
                <br /> 加藤傑 : 理学部2回生
                <br /> 下坂天洋 : 工学部2回生
                <br /> 寺坂真子 : 医学部1回生
                <br /> 田尻健 : 農学部1回生
                <br /> 平野義貴 : 農学部1回生
                <br /> 楊木萌 : 農学部1回生
                <br /> 上野賢也 : 理学部1回生
                <br />加納初穂 : 理学部1回生
                <br /> 壇辻さやか : 理学部1回生
                <br /> 中川寛司 : 理学部1回生
                <br /> 新稲亮 : 理学部1回生
                <br /> 吉田光昭 : 理学部1回生
            </p>
            <br />
        </Contain>
    )
}
