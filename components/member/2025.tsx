import Frame from "components/member.people";
import nakamura from "images/member.2025/2025_nakamura.jpg";
import oka from "images/member.2025/2025_oka.jpg";
import okayama from "images/member.2025/2025_okayama.jpg";
import yagi from "images/member.2025/2025_yagi.jpg";
import hashimoto from "images/member.2025/2025_hashimoto.jpg";
import song from "images/member.2025/2025_song.jpg";
import minamiyama from "images/member.2025/2025_minamiyama.jpg";
import baba from "images/member.2025/2025_baba.jpg";
import yabuki from "images/member.2025/2025_yabuki.jpg";
import kataoka from "images/member.2025/2025_kataoka.jpg";
import ota from "images/member.2025/2025_ota.jpg";
import segawa from "images/member.2025/2025_segawa.jpg";



export default function Member() {
    return (
        <>
        <Frame subtitle="中村 陽斗(Haruto Nakamura)" src={nakamura}>
            農学部資源生物科学科<br/>
            Role:<b> Team Leader</b>, Hardware<br />
            Hobby: ロードバイク <br />
            勝つ 
        </Frame>
        <Frame subtitle="岡 央大(Yota Oka)" src={oka}>
            理学部理学科<br />
            Role: Wet, Dry<br/>
            Hobby: カラオケ、製菓<br />
            必死に、生きています。
        </Frame>
        <Frame subtitle="岡山 太陽(Taiyo Okayama)"src={okayama}>
            理学部理学科<br/>
            Role: Modeling<br/>
            Hobby: 読書、Minecraft、Youtube<br />
            「ジンジン」というあだ名が非常に覚えやすいです。
        </Frame>
        <Frame subtitle="八木 宥暁(Hiroaki Yagi)" src={yagi}>
            理学部理学科<br />
            Role: Software, Modeling<br/>
            Hobby: 二度寝、数学<br />
            若返りたい
        </Frame>
        <Frame subtitle="橋本 麻利(Mari Hashimoto)" src={hashimoto}>
            農学部森林科学科<br/>
            Role: Accounting<br/>
            Hobby: スピードスケート、あつ森<br />
            過密スケジュールに詰め込むお昼寝タイムが好き
            </Frame>
        <Frame subtitle="宋 嘉楽(Jiale Song)" src={song}>
            理学部理学科<br/>
            Role: Wet, Modeling<br/>
            Hobby: 昆虫採集、遠出<br/>
            瓜生山の幽霊
        </Frame>
        <Frame subtitle="南山 遥輝(Haruki Minamiyama)" src={minamiyama}>
            農学部森林科学科<br/>
            Role: Human practice, Wet<br/>
            Hobby: 写真撮影、料理<br/>
            生物にあんまり詳しくありません
        </Frame>
        <Frame subtitle="馬場 萌枝(Moe Baba)" src={baba}>
            農学部森林科学科<br/>
            Role: Wet<br/>
            Hobby: ヴァイオリン、苔採集<br/>
            睡眠時間8時間確保！
        </Frame>
        <Frame subtitle="矢吹 一真(Kazuma Yabuki)" src={yabuki}>
            理学部理学科<br/>
            Role: Modeling<br/>
            Hobby: 将棋、微生物採集<br/>
            ビリにならないように頑張ります
        </Frame>
        <Frame subtitle="片岡 茉優(Mayu Kataoka)" src={kataoka}>
            工学部理工化学科<br/>
            Role: Wiki<br/>
            Hobby: 珈琲、ピラティス、旅行<br/>
            経験にお金をかけて上品な女性になります
        </Frame>
        <Frame subtitle="太田 長杜(Taketo Ota)" src={ota}>
            理学部理学科<br/>
            Role: Human Practice<br/>
            Hobby: バードウォッチング、昆虫採集<br/>
            採集した昆虫から写真を提供してもらいました
        </Frame>
        <Frame subtitle="瀬川 はると(Haruto Segawa)" src={segawa}>
            農学部資源生物科学科<br/>
            Role: Wet, Human Practice<br/>
            Hobby: ルービックキューブ<br/>
            皆で仲良く頑張ります
        </Frame>
        <Frame subtitle="新田　紗也（Nitta Saya)" src={nitta}>
            農学部食品生物科学科<br/>
            Role: 未定<br/>
            Hobby: お散歩、美味しいものを食べること<br/>
            専門知識はないですが、体力だけはあるので精一杯頑張ります！
        </>



);
}

