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

            <div className={styles.member}>

                <Link href="/member" legacyBehavior>
                    <a className="2023">2023&ensp;</a>
                </Link>
                <Link href="/2022" legacyBehavior>
                    <a className="2022">2022&ensp;</a>
                </Link>
                <Link href="/2021" legacyBehavior>
                    <a className="2021">2021&ensp;</a>
                </Link>
                <Link href="/2020" legacyBehavior>
                    <a className="2020">2020&ensp;</a>
                </Link>
                <Link href="/2019" legacyBehavior>
                    <a className="2019">2019&ensp;</a>
                </Link>
                <Link href="/2018" legacyBehavior>
                    <a className="2018">2018&ensp;</a>
                </Link>
                <Link href="/2017" legacyBehavior>
                    <a className="2017">2017&ensp;</a>
                </Link>
                <Link href="/2016" legacyBehavior>
                    <a className="2016">2016&ensp;</a>
                </Link>
                <Link href="/2015" legacyBehavior>
                    <a className="2015">2015&ensp;</a>
                </Link>
                <Link href="/2014" legacyBehavior>
                    <a className="2014">2014&ensp;</a>
                </Link>
                <Link href="/2013" legacyBehavior>
                    <a className="2013">2013&ensp;</a>
                </Link>
                <Link href="/2012" legacyBehavior>
                    <a className="2012">2012&ensp;</a>
                </Link>
                <Link href="/2011" legacyBehavior>
                    <a className="2011">2011&ensp;</a>
                </Link>
            </div>
            <br />
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
