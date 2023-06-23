import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Meta from 'components/meta'
import PreLoader from 'components/loading'

export default function About() {
    PreLoader();
    return (
        <Contain>
            <Meta
                pageTitle="Member"
                pageDesc="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />
            <Hero
                title="Member"
                subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
            />

            <div className="pagination-wrapper">
                <div className="pagination">
                    <Link className="prev page-numbers" href="/2012">prev</Link>
                    <Link className="page-numbers" href="/member">2023</Link>
                    <Link className="page-numbers" href="/2022">2022</Link>
                    <Link className="page-numbers" href="/2021">2021</Link>
                    <Link className="page-numbers" href="/2020">2020</Link>
                    <Link className="page-numbers" href="/2019">2019</Link>
                    <Link className="page-numbers" href="/2018">2018</Link>
                    <Link className="page-numbers" href="/2017">2017</Link>
                    <Link className="page-numbers" href="/2016">2016</Link>
                    <Link className="page-numbers" href="/2015">2015</Link>
                    <Link className="page-numbers" href="/2014">2014</Link>
                    <Link className="page-numbers" href="/2013">2013</Link>
                    <Link className="page-numbers" href="/2012">2012</Link>
                    <span aria-current="page" className="page-numbers current">2011</span>
                    <Link className="next page-numbers" href="/member">next</Link>
                </div>
            </div>
            <h4>Theme: 食虫大腸菌</h4>
            <Link href="https://2011.igem.org/Team:Kyoto" className="btn btn-border">Wiki</Link>
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
