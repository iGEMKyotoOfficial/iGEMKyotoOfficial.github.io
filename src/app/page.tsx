import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FirstView from "@/components/FirstView";

const basePath = "/homepage";

export default function HomePage() {
  return (
    <div className="home-page min-h-screen overflow-hidden">
      {/* First View */}
      <FirstView />

      {/* Divider under First View */}
      <hr className="mx-auto w-full border-t border-gray-300/70 dark:border-gray-700" />

      {/* iGEM Kyoto? Section */}
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
              Kyotoは毎年11月にパリで開催される、<strong>「合成生物学」を用いて世界をよりよくするアイデアを競う国際大会&ldquo;iGEM&rdquo;</strong>に向けて日々活動しています。
              毎年<strong>学部1,2年生を中心にチーム</strong>を編成しており、活動は会議室内にとどまらず、様々な研究室にお世話になったり、各地の関係者の方々への取材や出前授業に行ったりと広範囲に及びます。
              <strong>京都大学生</strong>の知能を集結させ、白熱した議論を交わしながらプロジェクトをより良いものへと導けるよう努めています。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              団体について
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Center - Image with Color Fade */}
          <div className="flex justify-center">
            <div 
              className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
              style={{ 
                position: 'relative',
                borderRadius: '200px',
                overflow: 'hidden',
              }}
            >
              {/* Blurred background layer */}
              <img
                src={`${basePath}/images/Home1.jpg`}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'blur(50px)',
                  opacity: 0.7,
                  transform: 'scale(1.3)',
                }}
              />
              {/* Clear image layer */}
              <img
                src={`${basePath}/images/Home1.jpg`}
                alt=""
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 10,
                }}
              />
            </div>
          </div>

          {/* Right - Large Heading */}
          <div className="space-y-4 text-right">
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400">
              &mdash;&mdash; International Genetically Engineered Machine
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-wide text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              iGEM Kyoto?
            </h2>
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
            Kyotoは、iGEM大会への参加を通して<strong>合成生物学による社会への貢献、延いてはこの世界のより良い形への変革</strong>を目指しています。そのためのステップとして、当団体はプロジェクトでの研究を経て学術的な知見を深め、また外部との交流によって外向的な人間性を養える場で在れるよう日々努力を重ねています。京都大学の学部生によって構成された当団体は、<strong>国際水準の能力を持つ次世代のリーダーとなる人材の育成をMission</strong>としています。
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              団体概要
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 実績 Section */}
      <section className="relative px-8 py-24 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="whitespace-nowrap text-[12vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
            Achievement
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            実績
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base leading-loose text-gray-700 dark:text-gray-300">
            大会に向けたテーマ決めから資金獲得、実験、Web制作を含めた発表まで学生自身で行う私たちは、これまでに<strong>15回のiGEM大会出場</strong>、<strong>累計9回の金賞獲得</strong>を達成しており、また、<strong>卒業生</strong>として様々な<strong>起業家</strong>や<strong>研究者</strong>を輩出しています。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/project"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              PROJECT
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/member"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              MEMBER
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ご支援のお願い & メンバー募集 Section */}
      <section className="relative px-8 py-32 md:px-16 lg:px-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="whitespace-nowrap text-[10vw] font-bold tracking-wider text-gray-900/[0.08] dark:text-white/[0.08]">
            SUPPORT US & JOIN US
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-24">
          {/* ご支援のお願い */}
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              ご支援のお願い
            </h2>
            <p className="mb-10 text-base leading-loose text-gray-700 dark:text-gray-300">
              現在iGEM
              Kyotoではサークルの運営資金を募っております。
              私たちはiGEM大会への参加を目指していますが、大会の参加には<strong>資金面での問題</strong>が多く存在します。
              特に、<strong>大会登録費（約100万円）や大会参加費（約50万円）、実験費用（30-40万円）、交通費（ひとり約30万円）</strong>は学生団体である私たちにはあまりにも大きな額であり、一学生団体とその周囲のご協力だけでの<strong>大会参加は困難な</strong>状況にあります。
            </p>
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              寄付・協賛
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* メンバー募集 */}
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              メンバー募集
            </h2>
            <p className="mb-10 text-base leading-loose text-gray-700 dark:text-gray-300">
              我々はiGEM大会への参加を軸に多様なメンバーから構成されています。
              生物学のみならず、数学・プログラミング・起業等様々な分野に興味のあるメンバーによって成り立っており、研究活動以外にも資金集めや教育活動・サークル運営など多種多様な仕事が重要となってきます。
              <strong>研究活動に興味のある方や、合成生物学の世界大会に参加するというロマンに惹かれる方を幅広く募集</strong>しており、我々は<strong>新たなメンバーとの発想の創発を楽しみ</strong>にしています。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
