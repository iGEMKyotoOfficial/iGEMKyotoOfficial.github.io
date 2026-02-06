import { ArrowRight } from "lucide-react";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/homepage" : "";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
          iGEM Kyoto
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          合成生物学の国際大会 iGEM に挑戦する京都大学のチームです
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            団体について
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl prose dark:prose-invert prose-gray">
          <h2>Mission</h2>
          <p>
            iGEM Kyotoは、iGEM大会への参加を通して合成生物学による社会への貢献、延いてはこの世界のより良い形への変革を目指しています。そのためのステップとして、当団体はiGEM大会に向けた活動の中で、プロジェクトでの研究を経て学術的な知見を深め、また外部の方々との交流によって外向的な人間性を養える場で在れるよう日々努力を重ねています。京都大学の学部生によって構成された当団体は、国際水準の能力を持つ次世代のリーダーとなる人材の育成に資する組織であることをMissionとしています。
          </p>

          <h2>iGEMについて</h2>
          <p>
            私たちiGEM Kyotoは毎年11月にパリで開催される、合成生物学の世界大会&ldquo;iGEM&rdquo;に向けて日々活動を行っております。活動は会議室内にとどまらず、様々な研究室にお世話になったり、各地の関係者の方々への取材や出前授業に行ったりと広範囲に及びます。京都大学生の知能を集結させ、白熱した議論を交わしながらプロジェクトをより良いものへと導けるよう努めております。
          </p>

          <h3>活動内容</h3>

          <h4>1. テーマ決め</h4>
          <p>
            11月のパリでのiGEM本大会が終わると新体制へと移行します。１回生の中から新リーダーを選出し次年度のテーマ決めを始動させます。社会問題を調べ、その内で合成生物学を活用することで活路が見出せる題材を模索。様々な論文やニュースを見てブレーンストーミングによる案出しを行います。チーム内で何度か投票を重ね、多数の候補の中から一つに決定します。
          </p>
          <img src={`${basePath}/images/Home1.jpg`} alt="テーマ決め" className="rounded-lg" />

          <h4>2. 内容詰め</h4>
          <p>
            テーマの方向性が決まると次は詳細を詰めです。関連する論文をさらに詳しく調べ上げ、実験で使う遺伝子やたんぱく質、手法を決定していきます。また、この時期から他の活動と並行して関係者の方々への取材活動も積極的に行っていき現場の声を組み入れたプロジェクトになるように方向づけていきます。
          </p>

          <h4>3. 実験計画</h4>
          <p>
            一年という限られた時間の中では、実際に実験に充てることのできる期間は2，3か月程と、ごく短期間です。そのため円滑に実験を進められるよう、綿密な実験計画を立てることが必要不可欠となります。いつ、だれが、どこで、何を使って、どのような実験を行い、どのような結果が期待できるのかを想定し予定を組んでいきます。
          </p>
          <img src={`${basePath}/images/Home3.png`} alt="実験計画" className="rounded-lg" />

          <h4>4. 実験</h4>
          <p>
            計画をたてると、いよいよ実験スタートです。夏休みをメインに研究室にこもります。実験に失敗はつきものであり、なかなか計画通りには進まないものですが、根気強く実験に励みます。逐次先生方と話し合い、時には実験をやり直したり軌道修正をしたりすることもあります。
          </p>
          <img src={`${basePath}/images/home.4.png`} alt="実験" className="rounded-lg" />

          <h4>5. 分析</h4>
          <p>
            実験によって出てきた結果を解析装置やモデリングを用いて分析していきます。思い通りの結果が出なかった場合はあらゆる原因を考えます。さらに時間が許す限り再実験を行い貪欲に結果を求めます。
          </p>
          <img src={`${basePath}/images/Home5.jpg`} alt="分析" className="rounded-lg" />

          <h4>6. プロジェクトまとめ</h4>
          <p>
            行ったプロジェクトをwikiというiGEM専用の研究内容をまとめたサイトを作成します。どうやったら自分たちのプロジェクトが魅力的に見えるか、どうやったら読み手にわかりやすく伝えられるかをメンバーと議論を重ね仕上げていきます。
          </p>

          <h4>7. 発表・コンテスト</h4>
          <p>
            Jamboreeというパリの現地大会で研究成果の発表を行います。ポスターセッションで各国のチームメンバーと交流したり、ジャッジングセッションで審査員から質疑応答を受けたりします。ここでプロジェクトの最終的な評価が決まります。最終日のフィナーレですべての部門の受賞チームが発表されます。
          </p>
          <img src={`${basePath}/images/Home7-1.jpg`} alt="発表" className="rounded-lg" />
          <img src={`${basePath}/images/home.7-2.png`} alt="コンテスト" className="rounded-lg" />

          <h2>資金・新メンバーについて</h2>
          <p>
            現在iGEM Kyotoではサークルの運営資金（チーム登録費、大会出場費、実験費用）を募っております。
            また、一緒に活動してくれるメンバーも募集中です。興味のある方はぜひご連絡ください。
          </p>
        </div>
      </section>
    </div>
  );
}
