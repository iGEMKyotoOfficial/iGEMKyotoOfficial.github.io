import { ChevronDown, FlaskConical } from "lucide-react";
import Image from "next/image";

const basePath = "/homepage";

const proseClasses =
  "prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-400";

export default function ProjectPage() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FlaskConical className="mx-auto mb-4 h-12 w-12 text-blue-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            PROJECT
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our Research Projects
          </p>
        </div>

        <div className={proseClasses}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            PROJECT
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            当団体では、iGEM大会にて世界に挑戦するため、<strong>Wet</strong>、<strong>Dry</strong>、<strong>Human Practice</strong>、<strong>Wiki制作</strong>、<strong>広報・資金調達</strong>といった幅広い活動を行っています。
            どの分野においても学生メンバーが主体的に活動し、プロジェクトを最高のものにするために頑張っています。
            それぞれの分野の概要とメンバーの活動に焦点を当てて説明します。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Schedule
          </h2>
          <Image
            src={`${basePath}/images/homepage_project0.png`}
            alt="project0"
            width={800}
            height={450}
            className="w-full"
          />

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Wet
          </h2>
          <Image
            src={`${basePath}/images/homepage_project1.webp`}
            alt="project1"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            Wetとは、バイオの研究において、実際に生物を用いて実験する部分のことを指します。
            名前から連想されるように、水や試薬を実際に使って研究することから、生命科学や生物の研究では、実験分野をWetと呼びます。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Wetでは、DNAやタンパク質、微生物を実際に用いて実験し、理論が正しいのか、考案した機構がうまくワークするのかを確かめます。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            当団体のWetでは、実験計画を立てるところから研究室での実験、データの収集まで、学生メンバーが主体となって研究を進めています。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            実験計画の立案
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            取り組むプロジェクトが決まってから、文献調査や専門家との対談を重ねて、実験計画を立てます。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            単に実験を行うのではなく、「何を証明したいのか」「それをどう示すのか」を最初に明確にします。
            例えば、「物質Aを合成する」という実験では、物質Aが実際に生成したことを示す必要があります。そのために、物質Aと反応すると発光する試薬を用いるなど、結果を可視化できる方法を選ぶことで、生成を確認できます。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            実験で行うことが決定したら、必要な生物やタンパク質を考え、DNAの配列を設計します。
          </p>
          <Image
            src={`${basePath}/images/homepage_project2.png`}
            alt="project2"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            設計したDNA配列は、プロモーターやタグ、目的遺伝子の配置などを含めてプラスミドとして構築します。
            この段階で、発現量の調整や精製のしやすさ、後の解析方法までを考慮し、実験全体が無理なくつながるように設計します。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            実験の遂行
          </h3>
          <Image
            src={`${basePath}/images/homepage_project3.png`}
            alt="project3"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            立案した実験計画に基づき、実際に研究室で実験を遂行します。
            ここがiGEM Kyotoの活動の山場です。
            主に夏休みを利用して、メンバーが毎日のように実験を行っています。
            先生やアドバイザーから助言をもらうこともありますが、基本的には1-2回生の学生が手を動かし実験を進めます。
          </p>
          <Image
            src={`${basePath}/images/homepage_project4.png`}
            alt="project4"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <Image
            src={`${basePath}/images/homepage_project5.png`}
            alt="project5"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">主な実験内容には、</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
            <li>大腸菌を用いた組換えタンパク質の発現・精製</li>
            <li>タンパク質の機能評価</li>
            <li>Dryとの連携による変異体設計・機能改変実験</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400">
            などの基盤となるものや、プロジェクトに合わせて応用的なものがあります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            時にはうまく結果が出ないときもありますが、実験結果の見直しやDryとの連携を行い、理論が正しいことを証明するために可能なことを尽くします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            学部1-2回生にとって、実験計画を立案するところから実験を遂行するまでは、かなりの壁となります。しかし、チームの仲間とともに挑戦し、良い結果が出たときには達成感で満ち溢れます。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Dry
          </h2>
          <Image
            src={`${basePath}/images/homepage_project6.png`}
            alt="project6"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            Dryとは、バイオ研究においてコンピュータ上で理論設計や解析を行う分野を指します。
            実験台の上で試薬を扱うWetに対して、Dryでは数式・アルゴリズム・シミュレーションを用いて、生命現象や分子のふるまいを理論的に解析・予測します。
            まさにWetとDryは、生命科学の研究において互いに補完し合う両輪です。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            具体的には、個体間感染シミュレーション、バイオセンサーの発現量予測、タンパク質構造の最適化など、プロジェクトに応じて多様なアプローチを行っています。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            当団体のDryでは、学生は主に自主的な学習によって、計画立案からモデルの構築、シミュレーションの解析までに必要なスキルを獲得し、試行錯誤を繰り返しながらプロジェクトを進めています。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            モデルの構築
          </h3>
          <Image
            src={`${basePath}/images/homepage_project7.png`}
            alt="project7"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            プロジェクトのテーマが決定すると、Dryではまずシミュレーションを行う対象を考えます。ここでの目的は、実験では直接観察しにくい挙動を可視化し、仮説検証を可能にすることです。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            例えば、遺伝子発現量がどのように変化するか、タンパク質の構造変化が機能にどう影響するか、分子がどのように相互作用するのか、というような問題を提起します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            次に、取り組む問題を決めたら、コンピューターで再現するためのモデルを構築します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            現実の挙動に整合するようなモデルを構築することを目標とし、論文等を参照にしながら、最適なパラメーターや閾値などを決定します。
            このモデル化の段階では、Wetからの実験結果をもとに設計したり、構築したモデルにおける結果を振り返って再構成したりして、試行錯誤を繰り返すことによって最善のモデルを構築します。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            シミュレーション
          </h3>
          <Image
            src={`${basePath}/images/homepage_project8.png`}
            alt="project8"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <Image
            src={`${basePath}/images/homepage_project9.png`}
            alt="project9"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            構築したモデルをもとに、コンピュータ上でシミュレーションやデータ解析を行います。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            シミュレーションの動作がうまくいかなかった場合は、モデルを構築し直し、試行錯誤を繰り返すことによって、モデルを最善のものにします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            シミュレーションの結果は、Dryとしての結果だけでなく、Wetでの実験にもフィードバックされます。
            Dryで設計・予測した内容をもとにWetが実験を行い、その結果を再びDryが解析・モデルの改良につなげる、というサイクルを繰り返します。
            この往復によって、より洗練された実験の設計や効率的な仮説検証が可能になります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            プログラミングや数理モデルに初めて触れる1-2回生にとって、Dryは決して簡単な分野ではありません。
            しかし、チームで議論を重ね、理論と実験が一致した瞬間には、大きな達成感を得ることができます。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Human Practice
          </h2>
          <Image
            src={`${basePath}/images/homepage_project10.jpg`}
            alt="project10"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            Human Practiceとは、研究や技術を社会との関係の中で捉え、より良い形で実装するための活動を指します。
            プロジェクトの取り組む社会問題における関係者や一般の人々、プロジェクトの分野における有識者へ話を伺い、社会問題における詳細な課題点やプロジェクト分野の専門的知識の理解を深めることを目標とします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            iGEMでは、合成生物学分野での研究だけでなく、地域社会と世界への貢献が重要視されています。そのため、倫理・安全性・社会的ニーズ・制度など、さまざまな社会的要素を考慮する必要があります。
            「研究が世界にどう影響し、世界が研究にどう影響するか」といった、社会との双方向の対話を行うことによって、プロジェクトの向上・効果的な発信を目指します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            iGEM KyotoのHuman Practiceでは、話を伺いたい利害関係者や専門家の候補を挙げることからアポイントメントの相談、先方への取材、最終的な結果の報告まで、すべて学生が主体となって行っています。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            インタビューの計画
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            当団体では、取り組むテーマを決める段階や、テーマが決まってからプロジェクトを発展させる段階など、様々な場面でHuman Practiceを行います。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            まずはチームで、何を取材したいのかを明確にし、取材先の候補をリストアップします。
            社会的なニーズや制度などを伺いたいときは企業や行政、私たちのプロジェクトに対する専門的なアドバイスを伺いたいときは大学教員や企業研究所にインタビューに行くなど、目的に応じて取材先は多岐にわたります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            取材したい相手方を決めたら、お話を伺えるように連絡を取り、そして事前準備を行います。
            iGEM Kyotoの活動や取材の意向を説明し、アポイントメントの調整を行います。
            そして、取材の前には、限られた時間の中で有意義な対話ができるよう、質問リストを練り上げ、入念に準備します。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            インタビューの実施とフィードバック
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            入念な準備を経て、実際に利害関係者や企業、専門家の話を伺います。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            実際のインタビューでは、プロジェクトに対する生の声や専門的なアドバイスを伺います。
            プロジェクトに関する率直な意見や専門的な知見から、想定していなかった壁や、現場ならではの切実なニーズに気づかされることが多々あります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            そして取材後には、得られた意見や知識を活かしてプロジェクトを修正します。
            専門家から得られた知見をもとにWetやDryを設計し直したり、人々の意見をもとにしてプロジェクトをさらに発展させたり、時にはプロジェクトの思い切った変更を行ったりし、プロジェクトをより良いものへ改善します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            このHuman Practiceの過程を通じて、研究者の視点だけでは見えにくいニーズや懸念点を明らかにしたり、専門的なアドバイスをいただいたりすることで、プロジェクトの改善と発展を繰り返します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            バックグラウンドの異なる様々な方と対話することは、時に自分たちの前提を覆される苦労もありますが、その分、プロジェクトが社会に真に貢献できる形へと研ぎ澄まされていく喜びがあります。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Wiki制作
          </h2>
          <Image
            src={`${basePath}/images/homepage_project11.png`}
            alt="project11"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            Wiki制作では、iGEMの大会において、プロジェクトの成果をまとめたウェブページ「Wiki」を作成し、、インターネットを通じて世界に発信します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            iGEMでは、社会問題の背景やプロジェクトの概要の説明、WetやDryの結果だけでなく、Human Practice、トライ&エラーの過程まで含めてWiki上で公開することが求められています。
            作成したWikiはiGEM大会の審査項目として用いられ、Wikiに書かれている内容はもちろんのこと、Wikiの視認性やデザインも審査の対象となります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            当団体のWiki制作では、メンバーのWiki担当者がページの設計・コーディングを行い、コンテンツをメンバー全員が分担して執筆します。メンバー全員の力を合わせて最高のWikiを作成することを目指します。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            コーディングとデザイン
          </h3>
          <Image
            src={`${basePath}/images/homepage_project12.png`}
            alt="project12"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            Wiki制作にあたり、まずはページ構成とデザインを決めます。
            伝えたいことが正確に伝わるように、サイトを訪れた方が見やすいように、ページのどこに何を配置するか、どのようなデザインにするのかを考えます。
            過去のiGEM大会でWikiの評価が高かったチームや、デザインについての本などを参考にしながら構想します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            ページの構成が決まった後は、Webコーディングの言語を用いてWikiのひな形を実装します。
            HTML・CSS・JavaScriptなどの言語を用いて、サイトの骨組み、デザイン、アニメーションをWikiに反映させます。
            コーディング経験が浅いメンバーも、自主的に勉強したり、互いに教え合いながら開発を進めています。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            コンテンツの執筆
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            ページの構造に合わせて、プロジェクトの概要や実験結果等のコンテンツを執筆します。
            書く内容は、Home、プロジェクトの概要、試行錯誤の過程、Wetの結果、Dryの結果、Human Practice、チームメンバーの紹介など、多岐にわたります。
            また、文章だけでなく、イラストや写真を含めることによって、サイトを訪れた人が分かりやすいように工夫します。
            iGEM Kyotoでは、活動を行った人が中心となってメンバー全員で文章を執筆し、最終的に英語に翻訳します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            締め切りが近づくにつれて、夜遅くまで作業が続いたり、思うように進まず苦労することもあります。しかし、メンバー同士で支え合って完成させたWikiが公開された瞬間、チームとして大きな達成感を共有することができます。
          </p>
          <Image
            src={`${basePath}/images/homepage_project13.png`}
            alt="project13"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            広報・資金調達
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            当団体では、プロジェクトに関わることだけでなく、広報や資金調達など、研究を支えるための活動も行っています。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            広報
          </h3>
          <Image
            src={`${basePath}/images/homepage_project14.jpg`}
            alt="project14"
            width={400}
            height={300}
            className="float-left mr-4 w-1/2"
          />
          <p className="text-gray-600 dark:text-gray-400">
            広報活動では、iGEMやiGEM Kyotoの取り組みについて専門外の方にも分かりやすく伝え、合成生物学やiGEMについて興味を持ってもらうとともに、社会の方々と関わりを持つことを目的とします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">具体的には、</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
            <li>SNSやWebを通じた情報発信</li>
            <li>イベントを通じた発信</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400">などを行っています。</p>
          <p className="text-gray-600 dark:text-gray-400">
            SNSやニュースレターを通じて、定期的に当団体の活動をご報告しています。
            また、京都大学アカデミックデイや11月祭などのイベントに参加し、iGEMやチームの活動について紹介しています。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            広報活動を通じて、日本ではまだ十分に普及していないiGEMや合成生物学について理解を深めていただくことを目指しています。
            また、一般の方々との対話や交流を通じて得られる視点は、プロジェクトの新たなアイデアにつながることもあり、研究内容を見直すきっかけにもなります。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            資金調達
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            iGEMへの参加や研究活動には、試薬費や機材費、参加費など多くの費用が必要です。
            そのため当団体では、企業・団体・個人の方々からの支援を受けながら活動しています。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            生物学やプロジェクトに関係する企業や地元京都の団体などにコンタクトを取り、当団体の活動についてご紹介し、スポンサーとなっていただいています。
            また、OB・OGや広報活動で知り合った方々に寄付をお願いすることもあります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            協賛・寄付していただいた資金は、iGEM大会への登録費および参加費、実験に必要な試薬や機器の調達に使用します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            iGEM Kyotoの活動はこのように皆様のご支援から成り立っています。
            そのことを忘れず、皆様の期待に応えられるように当団体も努力してまいります。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            過去のプロジェクト紹介
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            iGEM Kyotoが過去に取り組んできたプロジェクトをご紹介します。
            さらに詳しく知りたい方は、Wikiやポスターをご確認ください。
          </p>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2025年 - Avisptosis
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              高病原性鳥インフルエンザ(HPAI)は世界中の養鶏業に壊滅的な被害をもたらしており、感染が発覚した養鶏場の鶏が一斉に殺処分されてしまうなど、食料の安定的な供給や養鶏場の経営に大きな損害を与えています。ワクチンや遺伝子組み換え鶏などによる対策が行われていますが、ウイルスの急速な変異によって効果が限定的になってしまいます。
              鳥インフルエンザへの新たな対策として、インフルエンザウイルスが鶏の細胞に侵入したら、ウイルスが増殖する前に細胞死を引き起こすというシステムを考案しました。細胞内でインフルエンザウイルスが増殖するときに形成される二本鎖RNAを認識する経路と、アポトーシスを引き起こす経路をつなげ、ウイルスが細胞に感染したら即座に細胞が死ぬように設計しました。ウイルスが変異したとしても二本鎖RNAは形成されると想定されるので、このシステムはウイルスの変異にも対応できると考えられます。
              iGEM Kyotoとして初めて用いた動物細胞に苦戦しましたが、ModelingやHuman Practiceが評価され、結果金賞を受賞しました。出場していない年を除いて5年連続の金賞となりました。
            </p>
            <p className="mt-2">
              <a
                href="https://2025.igem.wiki/kyoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
              <br />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:6545fa8f-c411-402d-a131-f5463179b681"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                ポスターはこちら
              </a>
            </p>
          </section>

          <details className="group mt-8 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-4 font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden">
              <span>2024年以前のプロジェクト</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 dark:text-gray-400" />
            </summary>
            <div className="border-t border-gray-200 px-5 pb-5 pt-4 dark:border-gray-700">
          <section className="mt-8 first:mt-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2024年 - ShowgNs
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              農業において、窒素肥料は作物の収穫量を増やすことに役立つ一方で、過剰な窒素の流出は富栄養化や地球温暖化などの環境問題を引き起こしてしまいます。現在、世界人口の増加に伴う食料の増産と環境負荷低減の両立が求められていますが、既存の窒素センサーは精度が低く操作が複雑で普及が進んでいません。
              そこで、私たちは生物学的認識システムを活用した窒素バイオセンサーの開発に取り組みました。実験では、土壌中のNO3-やNH4+などをターゲットとし、標的物質が存在すると転写が誘導され、転写されたRNAの量に応じて蛍光や発光などの形での出力が起こる仕組みのバイオセンサーの構築を目指しました。また、入力や出力に用いる分子を変更することによって、検知したい物質や出力形式を変更することができるプラットフォームの構築も目指しました。このセンサーはセルフリーシステムであり、遺伝子組み換え生物が環境へ流出する恐れがないため、社会に広く実装することができます。
              結果は、金賞に加え、Best Agriculture Project、Best Hardwareという2つの特別賞の最終候補にノミネートされました。
            </p>
            <p className="mt-2">
              <a
                href="https://2024.igem.wiki/kyoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
              <br />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:4332e588-11c9-4d01-a8bd-85d43d3df019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                ポスターはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2023年 - Avoideer
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2023年のテーマは、鹿と大腸菌です。
              世界的な食料安全保障を達成する上での最大の課題の一つは、野生動物による農作物被害です。日本では食害のうち7割をシカが占めていて京都でも重大な被害をもたらしています。
              その解決策として、シカの忌避物質を持続的に生産・放出する新しいソリューションを考案しました。これは実際使うことになる農家さんの負担にならないよう、自律的に大腸菌を長期間培養させる必要がありました。そこで、自身の個体数を抑制し、死滅した細胞から栄養をリサイクルするようプログラムすることにしました。さらに、攪拌震盪を自動化するために、水の気化潜熱のみを動力源とするDrinking Bird
              というおもちゃを元に安価でメンテナンスの容易な装置も設計しました。
              その結果金賞を受賞し、Best Agriculture Project、Best Wiki、Best Hardwareという三つの特別賞の最終候補にノミネートされました。これはiGEM Kyoto史上、過去最高の成績でした。
            </p>
            <p className="mt-2">
              <a
                href="https://2023.igem.wiki/kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
              <br />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:94cf3421-c50c-48fd-adcb-1dcce6bafea4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                ポスターはこちら
              </a>
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              また、iGEMのプロジェクトとは別で、iGEM Kyotoのメンバーによる研究論文が出版されました。
              高価な試薬を使わずにDNAクローニングを可能にする方法を開発することに成功した研究です。
              シームレスクローニングという方法に必要な大腸菌抽出液「SLiCE」の成分特定に挑み、2つの酵素が重要であることを特定しました。
              この成果は国際学術誌 &quot;Genes to Cell&quot;
              に掲載されました。
            </p>
            <p className="mt-2">
              <a
                href="https://www.kyoto-u.ac.jp/ja/research-news/2023-05-17-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                https://www.kyoto-u.ac.jp/ja/research-news/2023-05-17-0
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2022年
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2022年度は大会への出場を経済的理由で見送らざるを得ませんでした。
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2021年 - FLOWEREVER
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2021年度のテーマは&quot;FLOWEREVER&quot;です。
              実は私たちの身近にある花には、栽培時のウイルス感染、虫害、販売時や家庭での花の老化・細菌繁殖など様々な課題があります。
              これら複数の課題に対し、合成生物学を用いた解決法を考えました。ウイルス感染に対しては葉から抽出したRNAからRT-LAMP法という手法でウイルス由来のDNAを増幅し、CRISPR-Cas12aという配列検出システムを用いて蛍光の有無からウイルス感染の有無を検出する手法を開発しました。さらに機械学習を用いることで葉の写真から健康状態を判断するソフトウェアを開発しました。その他にもRNA干渉を用いた殺虫、ペプチドを利用した殺菌、生体分子の効率的生産のためのシステム開発など、取り組んだプロジェクトは多岐にわたっています。
              オンラインで開催された大会ではWikiとプレゼンテーションビデオを作成し、審査員とオンラインで質疑応答を行いました。結果金賞を受賞し、Best
              Software Toolという特別賞の最終候補にノミネートされました。
            </p>
            <p className="mt-2">
              <a
                href="https://2021.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
              <br />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:4301a0f6-9992-4d03-b337-1f73899387ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                ポスターはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2020年
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2020年度は新型コロナウイルスの影響により大会がオンラインになったため、大会には出場せず次年度への準備を進めました。
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2019年 - My Clothes&apos; Plastic
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2019年度のテーマは&quot;My Clothes&apos; Plastic&quot;です。
              近年問題視されている海洋マイクロプラスチック問題、その原因の一つが洗濯した時に服から落ちる合成繊維であることがわかりました。繊維はとても小さいがために下水処理のシステムをすり抜けていきます。
              そのため、私たちはこの繊維を凝集させ、より効率的に回収しやすくさせるデバイスの開発に取り組みました。私たちはプラスチック特異的結合タンパク質をエンキャプスリンと呼ばれるタンパク質の表面に提示させることで、繊維同士を凝集させるのりのようなものの開発に成功しました。
              大会ではプレゼン、ポスターセッション共に高い評価を受け金賞、その上EnvironmentとBest
              Parts Collectionという部門賞に最終候補にノミネートされました。
            </p>
            <p className="mt-2">
              <a
                href="https://2019.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
              <br />
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:4301a0f6-9992-4d03-b337-1f73899387ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                ポスターはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2018年 - Swallowmyces cerevisiae
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2018年度のテーマは&quot;Swallowmyces cerevisiae&quot;です。
              ナトリウム濃度は、浸透圧やタンパクの立体構造、その他チャネルの機能に大きな影響を及ぼします。この濃度を上げることは塩を加えることで解決されますが逆に下げることは難しいとされています。
              そこで私たちは、酵母の液胞表面にナトリウムイオンチャネルを過剰発現させることで、ナトリウムの取り込み効率を向上させることを目指しました。酵母がもともと持つトランスポーターの性能改善に加え、シロイヌナズナや醤油酵母が所有する塩耐性にまつわる遺伝子を新たに導入し、高塩環境下でも機能する酵母の開発に取り組みました。
              大会では、Gold Criteriaになっていた「Parts
              Improvement」に関する結果を審査員にきちんと伝えることができなかったのか、悔しくも銀メダルの受賞となりました。
            </p>
            <p className="mt-2">
              <a
                href="https://2018.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2017年 - B. xylophilus Busters
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2017年度のテーマは&quot;B. xylophilus Busters&quot;です。
              松を食い荒らし、松枯れ病という病気の原因であるマツノザイセンチュウ（B.
              xylophilus）という小さな虫を駆除するため、その虫に毒性のあるRNA分子を酵母に発現させ、酵母を食べさせることでマツノザイセンチュウを殺虫することを試みました。
              ザイセンチュウが出芽酵母を捕食する可能性は知られていた一方で実際のデータがなかったため、まず、酵母を緑色蛍光タンパクGFPでマーク付けし、ザイセンチュウが酵母を摂食することを確かめました。また、酵母で発現させたRNA分子をザイセンチュウが取り込みやすいようにするため、Rev-RREシステムを用いてRNA分子を酵母の核外に輸送させる機構を構築しました。
              大会までに期待した効果を示すことができず、Giant Jamboreeでは惜しくも銀メダルの獲得となりました。
            </p>
            <p className="mt-2">
              <a
                href="https://2017.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2016年 - NORO CATCHER
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2016年度のテーマは&quot;NORO CATCHER&quot;です。
              ノロウイルス治療薬開発に一石を投じるような、新たな治療システムを構築しました。
              Noro-catcherは、大腸菌の細胞表面に、ノロウイルスに結合するタンパク質とセルロースに結合するタンパク質を同時発現させた薬です。その薬をノロウイルス患者の腸まで届けることで、まず初めに大腸菌がノロウイルスに結合します。ノロウイルスをキャッチした大腸菌薬は、次に腸内のセルロース、すなわち食物繊維にくっつきます。人体では、食物繊維は消化されず体外に排出されるため、食物繊維に結合した大腸菌はノロウイルスを道連れにして体外に排出されます。
              Giant Jamboreeでは見事金メダルを獲得しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2016.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2014年 - Magnetosome Formation & DMS Synthesis
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2014年度のテーマは&quot;Magnetosome Formation&quot;と&quot;DMS
              Synthesis&quot;です。
              Magnetosome Formationでは、磁性を持つ大腸菌を実現しようとしました。大腸菌を磁力で動かせるようにすることで、大腸菌の回収や制御を簡単に行うことができるようになります。
              DMS
              Synthesisでは、小さな大腸菌から大きな雲をつくるというような、夢のような研究を行いました。雲の凝結核の元となる物質であるジメチルスルフィド（DMS）を大腸菌で生合成することを目指しました。
              Giant Jamboreeでは見事金メダルを獲得しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2014.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2013年 - RNA Oscillator & Pattern Generation
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2013年度のテーマは&quot;RNA Oscillator&quot;と&quot;Pattern
              Generation&quot;です。
              この2つのシステムを用いて、WetワークとDryワークの間の隔たりについて理解し、そのギャップを埋める方法について考察しました。
              RNA
              Oscillatorは、RNAを用いて点滅のような振動を表現しようと、Wet LabとDry
              Labの両方から研究を行いました。
              Pattern
              Generationでは、動物の体表などに現れる模様のパターンの再現を目指しました。
              アジア予選では、銀メダルを獲得しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2013.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2012年 - Flower Fairy E.coli
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2012年度のテーマは&quot;Flower Fairy E.coli&quot;です。
              御伽噺「花咲か爺さん」のように、自由自在に花を咲かせることのできる大腸菌の開発を目指しました。
              アジア予選では金メダルを獲得し、見事MITで行われたWorld
              Championshipに出場しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2012.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2011年 - Carnivorous E.coli
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2011年度のテーマは「食虫大腸菌」。1、2回生を中心とする新チームで、栄養不足になると光を発して虫をおびき寄せ、捕えて、消化する、そんな「もっと生き物っぽい」新種の大腸菌の開発を目指しました。
              初めて行われたアジア予選は惜しくも敗退してしまい、メダルは銀にとどまりました。
            </p>
            <p className="mt-2">
              <a
                href="https://2011.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2010年 - The Fantastic Lysisbox
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              2010年度のプロジェクトは&quot;The Fantastic
              Lysisbox&quot;です。
              バイオハザードの対策を考える中で細胞を溶かすことに注目しました。これはバイオハザードの防止だけでなく、製薬やさらに身近な例としてはバイオアロマなどにも応用できる優れたデバイスです。
              大会は11/5〜11/8にかけて行われ、金賞を受賞しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2010.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2009年 - Time Bomb & Cells in cells
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              「今年こそは」と意気込んだ2009年は、さらにユニークなプロジェクト&quot;Time
              Bomb&quot;と&quot;Cells in cells&quot;を立ち上げました。
              Time
              Bombでは、治療目的で体内に投与する細菌を所望の時期と細胞数で細菌を人体から除去するために、細菌が一定回数の細胞分裂を行うと、キラー遺伝子など目的の遺伝子を発現する仕組みを設計しました。
              Cells in
              cellsでは、ミトコンドリアや葉緑体のように、細胞内共生を人工的に実現することを目指しました。
              主に夏休みの期間を利用して遂行し、銀賞を受賞しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2009.igem.org/Team:Kyoto/GSDD/Abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              2008年 - Raise the Titanic!
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              iGEM Kyotoは2008年度に結成しました。メンバーは様々な専攻の学部学生を主体とし、加えて修士院生とアドバイザーから構成されています。
              テーマ&quot;Raise the
              Titanic!&quot;では、大腸菌を用いてタイタニック号を引き上げることを目指しました。
              独創性は群を抜いていましたが、残念ながら入賞を逃しました。
            </p>
            <p className="mt-2">
              <a
                href="https://2008.igem.org/Team:Kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                wikiはこちら
              </a>
            </p>
          </section>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
