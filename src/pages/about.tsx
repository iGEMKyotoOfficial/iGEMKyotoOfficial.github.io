import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/dna.jpg'

export default function About() {
  return (

    <Contain >
      <Meta 
        pageTitle="About"
        pageDesc="iGEM Kyoto、iGEM、合成生物学についてご説明します"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width.toString()}
        pageImgH={eyecatch.height.toString()}
       />
      
      <Hero
        title="About"
        subtitle="iGEM Kyoto, iGEM, 合成生物学についてご説明します"
      />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="100vw"
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>iGEM Kyoto について</h2>
            <p>
              iGEM Kyoto は、iGEM への出場を通して、学生が責任と自主性に基づき自由に研究活動を行うことを目的とする、京都大学の学生チームです。
              2008年に発足して以来、iGEM への参加を続けてきました。
              現在は、農学部、理学部、医学部、工学部などの様々な学部から学生が集まり、活動しています。
              しかし私たちのチームは学生メンバーだけでは成り立ちません。
              研究の安全性に対する監督・指導には、学内の先生方にお世話になっています。
              また、専門家の方、実際にその分野の現場で働いていらっしゃる方、OB・OGの先輩方にアドバイスをいただきながら活動を進めています。
            </p>

            <h2>iGEM について</h2>
            <p>
              iGEM (the international Genetically Engineered Machine competition) は、合成生物学の発展への寄与を目的に世界規模で開催される学生コンテストです。
              大会では、45カ国346の学生チームが一堂に会し、研究成果を競い合います。
              実社会で問題となっているテーマの中から、それぞれの社会問題に対して合成生物学的な手法を用いた解決策を提示します。
              具体的には、環境保全や疾病診断、基礎研究など様々なプロジェクト部門に対して、多様なテーマ、切り口のもとで独創的なプロジェクトが集まります。
              各学生チームは、課題設定とプロジェクト立案、実験による検証、取材などによる実態調査を、iGEM の大会コンセプトのもと、自分たちで行います。
              コンテストにおいては、実際のデータを結果としてまとめ、それを発表する力量も求められます。
              そのため、Wikiというウェブサイト、ポスターあるいはビデオ、口頭プレゼンテーションなど複数のかたちで自分たちのプロジェクトの成果をまとめ上げ、コンテストにおける審査を受けます。
            </p>

            <h2>合成生物学とは</h2>
            <p>
              合成生物学（Synthetic Biology）は、生物学の分野の一つで、生命現象を理解し、新しい生命システムを設計、構築することを目的としています。

              合成生物学は、生物学、化学、物理学、工学、情報科学など、多様な学問分野が集まって構成されています。
              合成生物学の研究には、遺伝子工学や生体分子工学など、分子レベルでの操作技術が必要です。
              また、人工細胞や人工遺伝子回路などのデバイス開発や、生命現象のモデル化におけるシステム生物学の知見も必要となります。

              合成生物学は、従来の生命科学研究において研究されてきた生命現象の解明から、それを元に新しい生命システムを設計、構築するというアプローチをとります。
              例えば、生物の代謝や細胞分裂などの生命現象を理解し、それを改変することで、医療や環境問題の解決に向けた新しい技術や製品の開発が期待されています。

              合成生物学の応用分野は広く、医療、環境、食品、エネルギーなど、多岐にわたります。
              また、合成生物学は、自然界に存在しない新しい生命体の設計、構築にも取り組んでおり、その可能性は未知数とされています。
            </p>

            <h2>iGEM の大会コンセプト</h2>
            <p>
              iGEMは、大会においてプロジェクトで用いられた新しい機能的DNA配列を「Bio Brick」として、データベースに集積することにより、合成生物学におけるパーツの充実に寄与しています。
              また、大会では、審査基準が求める活動を通して、教育プログラムとして充実した経験の機会が与えられます。
              例えば、取材による実態調査は、研究活動において、研究室の中での空想に留まることなく現実世界における異なる立場の人々と議論することの重要性を示してくれます。
              私たちは、このような環境の中で、大学の講義だけでは知ることのできないような倫理観や思考を学んでいます。
              さらには、現地開催での大会においては、ポスターセッションにおけるディスカッションなどを通して海外の学生チームと交流する機会が与えられます。
              サイエンスを学ぶ同世代の優秀な学生の発表に生身で触れることができ、私たちにとって刺激を受ける場になっているだけでなく、コラボレーションなどを通して将来の研究者のオープンコミュニティ形成に繋がる場にもなっています。
            </p>
            <br />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>

    </Contain>
  )
}