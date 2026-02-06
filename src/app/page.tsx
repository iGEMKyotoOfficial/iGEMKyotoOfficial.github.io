import { ArrowRight } from "lucide-react";
import Link from "next/link";

const basePath = "/homepage";

export default function HomePage() {
  return (
    <div className="home-page min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center px-8 py-32 md:px-16 lg:px-24">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="whitespace-nowrap text-[10vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
            iGEM Kyoto
          </span>
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              私たちiGEM
              Kyotoは毎年11月にパリで開催される、合成生物学の世界大会&ldquo;iGEM&rdquo;に向けて日々活動を行っております。活動は会議室内にとどまらず、様々な研究室にお世話になったり、各地の関係者の方々への取材や出前授業に行ったりと広範囲に及びます。京都大学生の知能を集結させ、白熱した議論を交わしながらプロジェクトをより良いものへと導けるよう努めております。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              団体について
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Center - Oval Image */}
          <div className="flex justify-center">
            <div className="h-[400px] w-[300px] overflow-hidden rounded-[50%] shadow-2xl md:h-[500px] md:w-[380px]">
              <img
                src={`${basePath}/images/Home1.jpg`}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right - Large Heading */}
          <div className="space-y-4 text-right">
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
              &mdash;&mdash; International Genetically Engineered Machine
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-wide text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              合成生物学で
              <br />
              世界に挑む
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-8 py-24 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="whitespace-nowrap text-[12vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
            Mission
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Mission
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base leading-loose text-gray-700 dark:text-gray-300">
            iGEM
            Kyotoは、iGEM大会への参加を通して合成生物学による社会への貢献、延いてはこの世界のより良い形への変革を目指しています。そのためのステップとして、当団体はiGEM大会に向けた活動の中で、プロジェクトでの研究を経て学術的な知見を深め、また外部の方々との交流によって外向的な人間性を養える場で在れるよう日々努力を重ねています。京都大学の学部生によって構成された当団体は、国際水準の能力を持つ次世代のリーダーとなる人材の育成に資する組織であることをMissionとしています。
          </p>
        </div>
      </section>

      {/* iGEMの１年 Section */}
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            iGEMの１年
          </h2>
          <p className="mb-20 text-center text-sm tracking-widest text-gray-500 dark:text-gray-400">
            &mdash; Annual Activities &mdash;
          </p>

          <div className="space-y-32">
            {/* 1. テーマ決め - Image Right */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -left-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04]">
                01
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  テーマ決め
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  11月のパリでのiGEM本大会が終わると新体制へと移行します。１回生の中から新リーダーを選出し次年度のテーマ決めを始動させます。社会問題を調べ、その内で合成生物学を活用することで活路が見出せる題材を模索。様々な論文やニュースを見てブレーンストーミングによる案出しを行います。チーム内で何度か投票を重ね、多数の候補の中から一つに決定します。
                </p>
              </div>
              <div className="flex justify-center">
                <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[350px]">
                  <img
                    src={`${basePath}/images/Home1.jpg`}
                    alt="テーマ決め"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2. 内容詰め - Image Left */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -right-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04] lg:text-right">
                02
              </div>
              <div className="order-2 lg:order-1">
                <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[350px]">
                  <img
                    src={`${basePath}/images/Home3.png`}
                    alt="内容詰め"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 order-1 space-y-4 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  内容詰め
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  テーマの方向性が決まると次は詳細を詰めです。関連する論文をさらに詳しく調べ上げ、実験で使う遺伝子やたんぱく質、手法を決定していきます。また、この時期から他の活動と並行して関係者の方々への取材活動も積極的に行っていき現場の声を組み入れたプロジェクトになるように方向づけていきます。
                </p>
              </div>
            </div>

            {/* 3. 実験計画 - Image Right */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -left-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04]">
                03
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  実験計画
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  一年という限られた時間の中では、実際に実験に充てることのできる期間は2，3か月程と、ごく短期間です。そのため円滑に実験を進められるよう、綿密な実験計画を立てることが必要不可欠となります。いつ、だれが、どこで、何を使って、どのような実験を行い、どのような結果が期待できるのかを想定し予定を組んでいきます。
                </p>
              </div>
              <div className="flex justify-center">
                <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[350px]">
                  <img
                    src={`${basePath}/images/Home3.png`}
                    alt="実験計画"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 4. 実験 - Image Left */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -right-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04] lg:text-right">
                04
              </div>
              <div className="order-2 lg:order-1">
                <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[350px]">
                  <img
                    src={`${basePath}/images/home.4.png`}
                    alt="実験"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 order-1 space-y-4 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  実験
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  計画をたてると、いよいよ実験スタートです。夏休みをメインに研究室にこもります。実験に失敗はつきものであり、なかなか計画通りには進まないものですが、根気強く実験に励みます。逐次先生方と話し合い、時には実験をやり直したり軌道修正をしたりすることもあります。
                </p>
              </div>
            </div>

            {/* 5. 分析 - Image Right */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -left-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04]">
                05
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  分析
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  実験によって出てきた結果を解析装置やモデリングを用いて分析していきます。思い通りの結果が出なかった場合はあらゆる原因を考えます。さらに時間が許す限り再実験を行い貪欲に結果を求めます。
                </p>
              </div>
              <div className="flex justify-center">
                <div className="h-[300px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[350px]">
                  <img
                    src={`${basePath}/images/Home5.jpg`}
                    alt="分析"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 6. プロジェクトまとめ - Image Left */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -right-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04] lg:text-right">
                06
              </div>
              <div className="order-2 lg:order-1">
                <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gray-100 shadow-lg dark:bg-gray-800 lg:h-[350px]">
                  <span className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                    Wiki
                  </span>
                </div>
              </div>
              <div className="relative z-10 order-1 space-y-4 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  プロジェクトまとめ
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  行ったプロジェクトをwikiというiGEM専用の研究内容をまとめたサイトを作成します。どうやったら自分たちのプロジェクトが魅力的に見えるか、どうやったら読み手にわかりやすく伝えられるかをメンバーと議論を重ね仕上げていきます。
                </p>
              </div>
            </div>

            {/* 7. 発表・コンテスト - Image Right (2 images) */}
            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="pointer-events-none absolute -left-8 top-0 select-none text-[8rem] font-bold leading-none text-gray-900/[0.04] dark:text-white/[0.04]">
                07
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  発表・コンテスト
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  Jamboreeというパリの現地大会で研究成果の発表を行います。ポスターセッションで各国のチームメンバーと交流したり、ジャッジングセッションで審査員から質疑応答を受けたりします。ここでプロジェクトの最終的な評価が決まります。最終日のフィナーレですべての部門の受賞チームが発表されます。
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-[200px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[250px]">
                  <img
                    src={`${basePath}/images/Home7-1.jpg`}
                    alt="発表"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[200px] w-full overflow-hidden rounded-3xl shadow-lg lg:h-[250px]">
                  <img
                    src={`${basePath}/images/home.7-2.png`}
                    alt="コンテスト"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-8 py-32 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="whitespace-nowrap text-[10vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
            Join Us
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            資金・新メンバーについて
          </h2>
          <p className="mb-10 text-base leading-loose text-gray-700 dark:text-gray-300">
            現在iGEM
            Kyotoではサークルの運営資金（チーム登録費、大会出場費、実験費用）を募っております。
            また、一緒に活動してくれるメンバーも募集中です。興味のある方はぜひご連絡ください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              寄付・協賛
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
