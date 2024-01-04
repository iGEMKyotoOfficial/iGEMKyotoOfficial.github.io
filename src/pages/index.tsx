import Meta from "components/meta";
import Contain from "components/container";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import sakura from "public/images/sakura.jpg";
import Image from "next/image";
import iGEM from "images/others/iGEM.jpg";
import fushimi from "images/others/fushimi.jpg";
import ume from "images/others/ume.jpg";
import bamboo from "images/others/bamboo.jpeg";
import discussion from "images/activities/Discussion.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material";

export default function Home() {
  // CSS property. maxWidth=345, minWidth=275
  const cardStyle = { maxWidth: 325, minWidth: 275, margin: "10px 1vw" };
  return (
    <Contain large>
      <Meta />
      <div className="anime_wrap">
        <div className="top-display sakura-bg">
          <p className="top-title tracking-in-contract">iGEM Kyoto</p>
          <p className="top-description">
            <b>iGEM Kyoto</b> は、合成生物学の世界大会{" "}
            <b>iGEM</b>{" "}
            への参加を通じて、学生が責任と自主性に基づいて自由に研究活動を行う京都大学の学生チームです。
            <br />
            2008年の発足以来、京都大学の教員の皆様に研究の安全性を監督・指導いただきながら、在野の専門家や各産業分野で従事されている方にアドバイスを受けつつ研究活動を行っています。取材活動や調査で発見した実社会の問題に対し、合成生物学の技術を用いた解決策を提示し、実験や数理モデリングを通してその実現性を検証して、成果をiGEM大会や広報イベントなどで発表しています。
          </p>
        </div>
      </div>

      {/* flex container to hold the cards */}
      <div className="top-card-container">
        <Card sx={cardStyle}>
          <CardActionArea LinkComponent={Link} href="/about">
            <CardMedia>
              <Image src={iGEM} alt="Picture of the iGEM Awards" height={200} />
            </CardMedia>
            <CardContent>
              <h2>About</h2>
              <p>まずはiGEM KyotoやiGEM、合成生物学についてご説明します</p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={cardStyle}>
          <CardActionArea LinkComponent={Link} href="/activities">
            <CardMedia>
              <Image
                src={discussion}
                alt="Picture of the iGEM Awards"
                height={200}
              />
            </CardMedia>
            <CardContent>
              <h2>Activities</h2>
              <p>iGEM Kyoto の具体的な活動をご紹介します</p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={cardStyle}>
          <CardActionArea LinkComponent={Link} href="/member">
            <CardMedia>
              <Image src={ume} alt="Picture of the iGEM Awards" height={200} />
            </CardMedia>
            <CardContent>
              <h2>Member</h2>
              <p>歴代メンバーをご紹介します</p>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={cardStyle}>
          <CardActionArea LinkComponent={Link} href="/finance">
            <CardMedia>
              <Image
                src={fushimi}
                alt="Picture of the iGEM Awards"
                height={200}
              />
            </CardMedia>
            <CardContent>
              <h2>Support</h2>
              <p>私たちを応援してくださる企業・個人の方を募集しております</p>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* お問い合わせ */}
        <Card sx={cardStyle}>
          <CardActionArea LinkComponent={Link} href="/contact">
            <CardMedia>
              <Image
                src={bamboo}
                alt="Picture of the iGEM Awards"
                height={200}
              />
            </CardMedia>
            <CardContent>
              <h2>Contact</h2>
              <p>依頼や質問をご希望の方はこちらからお問い合わせください</p>
            </CardContent>
          </CardActionArea>
        </Card>
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
