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

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={discussion}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Discussion</h1>
                    <p>毎週金曜日に、全体でのミーティングを実施しています。各自で論文を読んだり、アイディアをまとめてきたりして、それをもとに話し合います。各部門の進捗把握なども行います。夜遅くまで和気藹々と、白熱した議論を繰り広げています。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={wet}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Wet Experiment</h1>
                    <p>専門家の指導のもと、実際に生物を用いて研究活動を行います。ほとんどの学生にとって、一から実験計画を立て再現性のあるデータをとっていく工程は初めてのことですが、この活動を通して科学研究に必要なスキルを学ぶことになります。自分たちで一から設計した遺伝子のパーツを生きた生物で機能させるという、学部学生にとって貴重な経験ができます。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={dry}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Dry Experiment</h1>
                    <p></p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={wiki}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Wiki</h1>
                    <p>iGEMではプロジェクト全体を包括的に説明するWebページを各チーム作成します。実験方法、得られたデータなどは、すべてWikiに掲載します。ゼロの状態からWebサイトを立ち上げるので、Webデザインおよびコーディングに関する経験を得ることができます。実際このホームページも、Wiki担当者がWebを学びながらすべて制作しました。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={collaboration}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Collaboration</h1>
                    <p></p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={practice}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Human Practice</h1>
                    <p>合成生物学は新規の学問領域であり、様々な側面でその是非を問う議論が行われています。iGEMでは合成生物学の政治的、経済的、社会的、法的、そして哲学的な背景に関する議論にどれだけ貢献したかも評価対象に含まれます。そのため、ラボの外に出て、プロジェクトに関わる分野の専門家と話し合ったり、各ステークホルダーに対して取材を行ったりします。</p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={education}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Education</h1>
                    <p></p>
                </Col>
            </Row>

            <Row style={{ marginBottom: '30px'}}>
                <Col>
                    {imageOn && (
                        <figure style={{ position: 'relative', overflow: "hidden", width: "450px", height: "338px", borderRadius:"10px"}}>
                            <Image 
                                src={jamboree}
                                alt=""
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </figure>
                    )}
                </Col>
                <Col md='7'>
                    <h1  style={{ marginBottom: '30px', marginTop: '30px', textDecoration:"underline"}}>Jamboree</h1>
                    <p>フランスのパリで開催されるJamboreeに、メンバーの多くが参加します。海外チームと実際に会って交流することは非常に刺激的で、中には素晴らしい成果を出しているチームもあり、「世界トップレベル」を体感することができます。</p>
                </Col>
            </Row>

        </Contain>
    )
}