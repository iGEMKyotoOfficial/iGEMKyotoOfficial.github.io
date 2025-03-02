import Frame from "components/member.people";
import Link from "next/link";
import kiriyama from "images/member.2024/2024_kiriyama.jpg";
import okamoto from "images/member.2024/2024_okamoto.jpg";
import harada from "images/member.2024/2024_harada.jpg";
import nakai from "images/member.2024/2024_nakai.jpg";
import hashimoto from "images/member.2024/2024_hashimoto.jpg";
import yabuki from "images/member.2024/2024_yabuki.jpg";
import iwata from "images/member.2024/2024_iwata.jpg";
import minamiyama from "images/member.2025/2025_minamiyama.jpg";
import kataoka from "images/member.2024/2024_kataoka.jpg";
import baba from "images/member.2024/2024_baba.jpg";
import song from "images/member.2024/2024_song.jpg";
import nakamura from "images/member.2025/2025_nakamura.jpg";
import oka from "images/member.2025/2025_oka.jpg";
import okayama from "images/member.2025/2025_okayama.jpg";
import yagi from "images/member.2025/2025_yagi.jpg";
import ota from "images/member.2025/2025_ota.jpg";
import segawa from "images/member.2025/2025_segawa.jpg";

export default function Member() {
  return (
    <>
    <h1>Theme: ShowgNs</h1>
    <br />
    <Link href="https://2024.igem.wiki/kyoto/" className="btn btn-border">
      Wiki
    </Link>
    <br />
    <br />

    <br />
    <Frame subtitle="桐山 賢斗 (Kento Kiriyama)" src={kiriyama}>
  Sophomore of Faculty of Pharmacy, Kyoto University <br />
  Role: <b>Team Leader, Modeling Leader</b> <br />
  Hobby: History (especially Azuchi–Momoyama period) <br />
  大一大万大吉
</Frame>
<br />
<Frame subtitle="岡本 はる (Haru Okamoto)" src={okamoto}>
  Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University <br />
  Role: Wet Leader <br />
  Hobby: 惰眠、生物採集、買い物、模型ロケット <br />
  Plan, Delay, Cancel, Apologize
</Frame>
<br />
<Frame subtitle="原田 茉優 (Mayu Harada)" src={harada}>
  Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University <br />
  Role: Project Leader, Human Practice <br />
  Hobby: 古刹巡り、ゼンタングル <br />
  永久凍土に移住したい。
</Frame>
<br />
<Frame subtitle="中井 愛(Mana Nakai)" src={nakai}>
  Sophomore of the Department of Bioresource Science, the Faculty of Agriculture, Kyoto University <br />
  Role: Human Practice Leader <br />
  Hobby: お笑い鑑賞 <br />
  愛のある変人になりたい
</Frame>
<br />
<Frame subtitle="橋本 麻利 (Mari Hashimoto)" src={hashimoto}>
  Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University <br />
  Role:  Wiki <br />
  Hobby: カエル鑑賞、アラビア語 <br />
  カエルと暮らしたい‼
</Frame>
<br />
<Frame subtitle="矢吹 一真(Kazuma Yabuki)" src={yabuki}>
  Freshman of the Faculty of Science, Kyoto University <br />
  Role: Modeling <br />
  Hobby: 将棋、微生物採集、タイピング <br />
  ドベにならないように頑張ります
</Frame>
<br />
<Frame subtitle="岩田 心愛 (Haruchika Iwata)" src={iwata}>
  Freshman of the Department of the Electrical and Electronic Science, the Faculty of Engineering, Kyoto University <br />
  Role: Hardware <br />
  Hobby: アニメ鑑賞 <br />
  大学まで片道2時間です
</Frame>
<br />
<Frame subtitle="片岡 茉優 (Mayu Kataoka)" src={kataoka}>
  Freshman of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University <br />
  Role: Wiki <br />
  Hobby: ピラティス、珈琲<br />
  朝型
</Frame>
<br />
<Frame subtitle="馬場 萌枝 (Moe Baba)" src={baba}>
  Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University <br />
  Role: Wet Experiment, Wiki <br />
  Hobby:  ヴァイオリン、苔採集<br />
  睡眠時間8時間確保！
</Frame>
<br />
<Frame subtitle="宋 嘉楽 (Jiale Song)" src={song}>
  Freshman of the Faculty of Science, Kyoto University <br />
  Role: Wet Experiment, Modeling <br />
  Hobby:  昆虫採集、遠出<br />
  瓜生山の幽霊
</Frame>
<br />
<Frame subtitle="中村 陽斗(Haruto Nakamura)" src={nakamura}>
  Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University <br />
  Role: Hardware <br />
  Hobby: ロードバイク <br/>
  勝つ
</Frame>
<br />
<Frame subtitle="岡 央大(Yota Oka)" src={oka}>
  Freshman of the Faculty of Scinece, Kyoto University<br />
  Role: Human Practice <br />
  Hobby: カラオケ、製菓<br />
  必死に、生きています。
</Frame>
<br />
<Frame subtitle="岡山 太陽(Taiyo Okayama)" src={okayama}>
  Freshman of the Faculty of Science, Kyoto University<br />
  Role: Modeling<br />
  Hobby: 読書、Minecraft、Youtube <br />
</Frame>
<br />
<Frame subtitle="八木 宥暁(Hiroaki Yagi)" src={yagi}>
  Freshman of the Faculty of Science, Kyoto University<br />
  Role: Software<br />
  Hobby: 二度寝、数学<br />
</Frame>
<br />
<Frame subtitle="南山 遥輝(Haruki Minamiyama" src={minamiyama}>
  Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University<br />
  Role: Human Practice<br />
  Hobby: 写真撮影、料理<br />
</Frame>
<br />
<Frame subtitle="太田 長杜(Taketo Ota)" src={ota}>
  Freshman of the Faculty of Science, Kyoto University<br />
  Role: Human Practice<br />
  Hobby: バードウォッチング、昆虫採集<br />
  採集した昆虫から写真を提供してもらいました
</Frame>
<br />
<Frame subtitle="瀬川 はると(Haruto Segawa)" src={segawa}>
  Freshman of the Department of Bioresource Science, the Faculty of Agriculture, Kyoto University<br />
  Role: Software<br />
  Hobby: ルービックキューブ<br />
  皆で仲良く頑張ります
</Frame>

</>

  );
}