import Contain from "components/container";
import Hero from "components/hero";
import Link from "next/link";
import Image from "next/image";
import PostBody from "components/post-body";
import iGEM6 from "images/others/iGEM6.jpg";
import iGEMAbove2023 from "images/others/iGEMAbove2023.jpg";
import Meta from "components/meta";
import styles from "src/styles/finance.module.css";
import React, { useState } from 'react';

const LogoLink: React.FC<{ href:string; src:string;  alt:string; width:number; height: number }> = ({ href, src, alt, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

return (
  <Link href={href} legacyBehavior>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.logoContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "all 0.3s ease-in-out",
        borderRadius: "10px",
        boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
        backgroundColor: isHovered ? "rgba(200, 200, 200, 0.3)" : "transparent",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        padding: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        width: "220px",
        height: "120px"
      }}
    >
      <Image src={src} alt={alt} layout="responsive" width={width} height={height} />
    </a>
  </Link>
);
};


export default function Finance() {
  return (
    <Contain>
      <Meta
        pageTitle="支援のお願い"
        pageDesc="私たちを応援してくださる企業・個人の方を募集しております"
      />
      <Hero
        title="支援のお願い"
        subtitle="私たちを応援してくださる企業・個人の方を募集しております"
      />

      <PostBody>
        <p style={{ margin: "2em auto" }}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScZVOomL7uDvMqfHU8bfAcw6nT9sMJgHQBk-z3TXOd6Qoo45A/viewform?usp=dialog"
            className="btn btn-flat"
          >
            <span>ご支援フォーム</span>
          </Link>
          <br />
        </p>
        <Image
          className="iGEM5"
          src={iGEMAbove2023}
          alt=""
          layout="responsive"
          sizes="100vw"
          style={{ borderRadius: "10px" }}
          priority
        />
        <p>
          iGEMKyotoは、次世代を担う新たなテクノロジーである合成生物学にご興味があり、我々の活動を支援してくださる方を募集しております。
        </p>
        <p>
          iGEM Kyoto
          のメンバーは、毎年iGEMの大会で上位に入賞することを目標にし、好奇心の赴くままに合成生物学の研究が社会へ貢献するための新たな道を模索してきました。
          <br />
          2016年度大会では腸管内ノロウイルス除去システムの開発プロジェクトで金賞を受賞することができ、続く2017,
          2018年度大会では銀賞を受賞しました。2019年度大会では洗濯排水からマイクロプラスチックを回収する手法の開発プロジェクトで金賞を受賞した上、2019年度iGEM
          Kyoto史上初めて2つの部門賞の最終候補に選ばれました。2021年度大会では人々の生活と深く関わる切り花を中心としたプロジェクトを打ち出し、ウイルスの検出システム、大腸菌のプラスミド非対称分裂を利用した新しい物質生産システム、RNAiを用いた害虫駆除スキームなどが評価され金賞を受賞し、さらに画像診断システムの成果で
          Best Software Tools 部門賞にノミネートされました。
          <br />
          iGEM
          の大会で上位に入賞することはかなわなくとも、学部生の内から科学の言葉で議論を交わし、世界中の志を同じくする学生と交流を深める機会は唯一無二のものです。
          <br />
        </p>
        <p>
          しかし、iGEM の大会に参加するためには多額の費用が必要です。
          <br />
          概算して、チームとして登録に75万円、大会出場費に40万円(2023年5月現在)かかり、そのほかに研究活動のための試薬購入費やアウトリーチにかかる経費などもあります。またこの中には現地への渡航費などは含まれておらず、それも含めると実質資金はさらに必要になります。特に大会参加費はここ数年で大きく値上げされてきており、メンバーの個人的な支出では補いきれなくなっています。
          <br />
          そのため、2015年度や2022年度は主に金銭的な懸念から出場を断念せざるを得ませんでした。
        </p>

        <p>
          我々は幸いにもいくつかの個人や団体様からのご支援をいただき活動を続けることができております。
          <br />
          2016, 2018, 2019年度大会では{" "}
          <Link href="https://www.kikin.kyoto-u.ac.jp/spec/2018/02.html">
            京都大学の SPEC
          </Link>
          から支出された補助金を利用して、大会参加費を含めた活動資金をまかなうことができました。
          <br />
          また、2021年度大会以降、
          <Link href="https://www.toyobo.co.jp/">TOYOBO</Link>
          様には試薬一式と活動費のご援助を、
          <Link href="https://www.nagase.co.jp/">長瀬産業</Link>
          様には活動費のご援助を賜りました。ご支援いただいた皆様、本当にありがとうございました。
        </p>

        <p>
          iGEM Kyoto
          の活動と発展に賛同いただき、ご助力をいただける方々を広く募集しております。ご支援の声をお待ちしています。
        </p>

        <h2>寄付いただいた資金の使途について</h2>
        <Image
          className="iGEM6"
          src={iGEM6}
          alt=""
          layout="responsive"
          sizes="100vw"
          style={{ borderRadius: "10px" }}
          priority
        />
        <p>
          ・iGEM Jamboree(大会) への登録費および参加費
          <br />
          ・生物学実験に必要な試薬や機器の調達
          <br />
          ・大会へ提出する成果物にかかる費用
          <br />
          ・取材や教育などの社会活動
          <br />
        </p>

        <p>
          活動については定期的に発行するニュースレターでもお伝えします。
          <br />
          他の形でのご支援についてのご提案や不明な点がありましたら是非
          <Link href="./contact">お問い合わせフォーム</Link>
          の方から問い合わせください。
          <br />
          また、現在基金などを通した寄付の形も検討中です。
        </p>

        <h2>サポーターの皆様</h2>
        <p>
          2024年度、ご支援いただいた方々を紹介します。
        </p>
        <div className={styles.supporterLogos}>
        <div className={styles.upperRow} style={{display:'flex', justifyContent:'space-around', gap:'30px', marginTop:'20px'}}>
            <LogoLink href="https://miyakocapital.com/" src="https://miyakocapital.com/wp-content/themes/original/assets/img/logo.png" alt="Miyako Capital" width={200} height={100} />
              
            <LogoLink href="https://anri.vc/" src="https://tokyosuteam.metro.tokyo.lg.jp/cms/wp-content/uploads/2023/10/006-157.jpg" alt="anri" width={200} height={100} />
          </div>
          <div className={styles.lowerRow} style={{ display:'flex', justifyContent:'space-around', gap: '20px', marginTop: '20px'}}>
            <LogoLink href="https://www.epistra.jp/" src="https://image.pitchbook.com/KaJReh7l9gYHJaEo4QtUCX9lciB1691052034266_200x200" alt="epistra" width={160} height={80} />
            <LogoLink href="https://www.xforestx.com/jp" src="https://www.axcelead.com/wp-content/uploads/2021/10/MicrosoftTeams-image-15-1.png" alt="xforest" width={160} height={80} />
            <LogoLink href="https://www.cosmobio.co.jp/" src="https://www.cosmobio.com/images/en/mainlogo-en.png" alt="Cosmobio" width={160} height={40} />
          </div>
        </div>
        <p>
          <div className={styles.greatsupporter}>
          xFOREST Therapeutics 田尻健 様
          </div>
        </p>
        <p>
          その他にも多くの方々からご支援、ご助言を頂きました。皆様のおかげで活動ができたこと、大変嬉しく思います。ありがとうございました。
        </p>

        <p>
          2023年度に、学術系クラウドファンディングサイト「academist（アカデミスト）」でご支援いただいた方々をご紹介します。
          皆様、本当にありがとうございました。 詳細は
          <Link href="https://academist-cf.com/projects/306?lang=ja">
            こちら
          </Link>
          からご確認いただけます。
        </p>
        <div className={styles.greatsupporter}>
          xFOREST Therapeutics 様<br />
          林オートサービス 様<br />
          Shunichi KASHIDA 様<br />
        </div>
        <div className={styles.supporterwrapper}>
          <div>
            Ryo NIWA 様<br />
            S. J. Shimada 様<br />
            海野真司 様<br />
            Yuki Kobayashi 様<br />
            SMNomura 様<br />
            Ken Tajiri 様<br />
            小松リチャード馨 様<br />
            wataru 様<br />
            M Yagyu 様<br />
            「京大当局は吉田寮自治存続を保証すべき」会有志 様<br />
            M. Tokoro 様<br />
            M.O. 様<br />
            徳法寺 様<br />
            ICKW 様<br />
            増本 敬二（東17期） 様<br />
          </div>
          <div>
            唐津東11期卒 戸田芳郎 様<br />
            Masahi Tsuda 様<br />
            イカのダンスはすんだのかい 様<br />
            田中千絵 様<br />
            タニグチイチロウ 様<br />
            島添 將誠 様<br />
            Hidenori Nakaoka 様<br />
            Keizo Tomonaga 様<br />
            YS 様<br />
            合屋智尋 様<br />
            枝常 拓 様<br />
            ナカガワメイ 様<br />
            Alexander Liu 様<br />
            伊藤俊治 様<br />
          </div>
        </div>
      </PostBody>
    </Contain>
  );
}
