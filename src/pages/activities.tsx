import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'reactstrap'
import Meta from 'components/meta'

import discussion from 'images/activities/Discussion.jpeg'
import wet from 'images/activities/Wet.jpg'
import dry from 'images/activities/Dry.jpg'
import wiki from 'images/activities/Wiki.jpeg'
import collaboration from 'images/activities/Collaboration.jpg'
import practice from 'images/activities/Human Practice.jpg'
import education from 'images/activities/Education.jpg'
import jamboree from 'images/activities/Jamboree.jpg'

export default function Frame({ imageOn = true, src }:
    { imageOn?: boolean; src: any }) {
    return (
        <Contain>
            <Meta
                pageTitle="活動紹介"
                pageDesc="実際の活動内容をご紹介します"
            />
            <Hero
                title="活動紹介"
                subtitle="実際の活動内容をご紹介します"
            />

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Discussion</h1>
                    <p>毎週金曜日にある全体ミーティングで、プロジェクトに関して議論をしています。各自で論文を読んだり、アイディアをまとめてきたりして、それをもとに話し合います。各部門の進捗報告なども行います。夜遅くまで和気藹々と、白熱した議論を繰り広げています。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Wet Experiment</h1>
                    <p>専門家の指導のもと、実際に生物を用いて研究活動を行います。ほとんどの学生にとって、一から実験計画を立て再現性のあるデータをとっていく工程は初めてのことですが、この活動を通して科学研究に必要なスキルを学ぶことになります。自分たちで一から設計した遺伝子のパーツを生きた生物で機能させるという、学部学生にとって貴重な経験ができます。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Dry Experiment</h1>
                    <p>生物学実験を行うにあたって、条件検討を行ったり、得られたデータをもとに結果を考察して次の検証に進んだりするためには、数理的なモデリング・解析が必要です。数理生物学の知識を先輩や専門の先生に教えていただきながら、技術を身に付けています。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Wiki</h1>
                    <p>iGEMではプロジェクト全体を包括的に説明するWebページを各チーム作成します。実験方法、得られたデータなどは、すべてWikiに掲載します。ゼロの状態からWebサイトを立ち上げるので、Webデザインおよびコーディングに関する経験を得ることができます。実際このホームページも、Wiki担当者がWebを学びながらすべて制作しました。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Collaboration</h1>
                    <p>国内や海外のiGEMチームとプロジェクトの各面について意見交換を行うこともプロジェクトのブラッシュアップに必要不可欠です。そのほか、プラスミドなどの実験材料の交換や、モデリングやWikiにおけるノウハウの交換なども行っており、活動に必要不可欠です。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Human Practice</h1>
                    <p>合成生物学は新規の学問領域であり、様々な側面でその是非を問う議論が行われています。自分たちのプロジェクトを実社会に適応可能なものにするために、様々な立場の方々に取材を行い、そこで得られた知見をプロジェクトに反映させています。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Education</h1>
                    <p>合成生物学をもっと中高生や一般の方に広く知っていただくために、私たちの活動理念などを親しみやすい形で普及する活動も行っています。大学外から様々な方が集まる京都大学の学祭ではiGEM Kyotoの展示や合成生物学をテーマにしたゲーム大会も開催しました。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px' }}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", borderRadius: "10px" }}>
                            <Image
                                src={discussion}
                                alt=""
                                layout='intrinsic'
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1 style={{ marginBottom: '30px', marginTop: '30px', textDecoration: "underline" }}>Jamboree</h1>
                    <p>フランスのパリで開催されるJamboreeに、メンバーの多くが参加します。海外チームと実際に会って交流することは非常に刺激的で、中には素晴らしい成果を出しているチームもあり、「世界トップレベル」を体感することができます。</p>
                </Col>
            </Row>

        </Contain>
    )
}