import Meta from "components/meta";
import Contain from "components/container";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import sakura from "images/others/sakura.jpg";
import Image from "next/image";
import iGEM from "images/others/iGEM.jpg";
import fushimi from "images/others/fushimi.jpg";
import ume from "images/others/ume.jpg";
import bamboo from "images/others/bamboo.jpeg";

export default function Home() {
  return (
    <Contain large>
      <Meta />
      <div className="anime_wrap">
        <Image
          className="kenburns-top-right"
          src={sakura}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
        <div className="top-display">
          <p className="top-title tracking-in-contract">iGEM Kyoto</p>
          <p className="top-description">
          京都大学の学生チーム <b>iGEM Kyoto</b> は、合成生物学の世界大会 <b>iGEM</b> への参加を通じて、学生が責任と自主性に基づいて自由に研究活動を行うことを目的としています。
          2008年の発足以来、京都大学の教員の皆様に研究の安全性を監督・指導いただく一方、在野の専門家や各産業分野で従事されている方にアドバイスを受けながら研究活動を行っています。取材活動や調査で発見した実社会の問題に対し、合成生物学の技術を用いた解決策を提示し、実験や数理モデリングを通してその実現性を検証した上、成果をiGEM大会や広報イベントなどで発表しています。
          </p>
        </div>
      </div>

      <div className="cp_card05">
        <Image
          className="dna"
          src={iGEM}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
        <div className="description">
          <div className="content">
            <h1>
              <Link href="/about">About</Link>
            </h1>
            <p className="text">
              iGEM Kyoto、iGEM、合成生物学についてご説明します
            </p>
            <Link href="/about" className="button">
              PUSH
            </Link>
          </div>
        </div>
      </div>

      <div className="cp_card05">
        <Image
          className="ume"
          src={ume}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
        <div className="description">
          <div className="content">
            <h1>
              <Link href="/member">Member</Link>
            </h1>
            <p className="text">
              歴代メンバーをご紹介します（iGEM
              Jamboreeに出場した年は、Wikiもご覧いただけます）
            </p>
            <Link href="/member" className="button">
              PUSH
            </Link>
          </div>
        </div>
      </div>

      <div className="cp_card05">
        <Image
          className="fushimi"
          src={fushimi}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
        <div className="description">
          <div className="content">
            <h1>
              <Link href="/finance">支援のお願い</Link>
            </h1>
            <p className="text">
              私たちを応援してくださる企業・個人の方を募集しております
            </p>
            <Link href="/finance" className="button">
              PUSH
            </Link>
          </div>
        </div>
      </div>

      <div className="cp_card05">
        <Image
          className="bamboo"
          src={bamboo}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
        <div className="description">
          <div className="content">
            <h1>
              <Link href="/contact">お問い合わせ</Link>
            </h1>
            <p className="text">
              依頼や質問をご希望の方はこちらからお問い合わせください
            </p>
            <Link href="/contact" className="button">
              PUSH
            </Link>
          </div>
        </div>
      </div>

      <br />
      <Link
        className="twitter-timeline"
        data-width="700"
        data-height="700"
        data-theme="light"
        href="https://twitter.com/iGEMkyoto?ref_src=twsrc%5Etfw"
      ></Link>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <div>
        <br />
      </div>
    </Contain>
  );
}
