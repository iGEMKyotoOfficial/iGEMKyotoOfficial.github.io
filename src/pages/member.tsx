import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Frame from 'components/member.people'
import Meta from 'components/meta'

import ishibashi from 'images/member.2023/2023_ishibashi.jpg'
import abe from 'images/member.2023/2023_abe.jpg'
import uchiyama from 'images/member.2023/2023_uchiyama.jpg'
import sekikawa from 'images/member.2023/2023_sekikawa.jpg'
import tsuchida from 'images/member.2023/2023_tsuchida.jpg'
import fukuoka from 'images/member.2023/2023_fukuoka.jpg'
import mitoma from 'images/member.2023/2023_mitoma.jpg'
import mihara from 'images/member.2023/2023_mihara.jpg'
import jana from 'images/member.2023/2023_jana.jpg'
import hayashi from 'images/member.2023/2023_hayashi.jpg'
import kiriyama from 'images/member.2023/2023_kiriyama.jpg'
import yasui from 'images/member.2023/2023_yasui.jpg'
import okamoto from 'images/member.2023/2023_okamoto.jpg'

export default function About() {
  return (
    <Contain>
      <Meta
        pageTitle="Member"
        pageDesc="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
      />
      <Hero
        title="Member"
        subtitle="歴代メンバーをご紹介します（iGEM Jamboreeに出場した年は、Wikiもご覧いただけます）"
      />

      <div className="pagination-wrapper">
        <div className="pagination">
          <Link className="prev page-numbers" href="/2011">prev</Link>
          <span aria-current="page" className="page-numbers current">2023</span>
          <Link className="page-numbers" href="/2022">2022</Link>
          <Link className="page-numbers" href="/2021">2021</Link>
          <Link className="page-numbers" href="/2020">2020</Link>
          <Link className="page-numbers" href="/2019">2019</Link>
          <Link className="page-numbers" href="/2018">2018</Link>
          <Link className="page-numbers" href="/2017">2017</Link>
          <Link className="page-numbers" href="/2016">2016</Link>
          <Link className="page-numbers" href="/2015">2015</Link>
          <Link className="page-numbers" href="/2014">2014</Link>
          <Link className="page-numbers" href="/2013">2013</Link>
          <Link className="page-numbers" href="/2012">2012</Link>
          <Link className="page-numbers" href="/2011">2011</Link>
          <Link className="next page-numbers" href="/2022">next</Link>
        </div>
      </div>

      <br />
      <Frame subtitle="石橋 凌平 (Ryohei ISHIBASHI)" src={ishibashi}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: <b>Team Leader</b> <br />
        Hobby: 旅行、映画 <br />
        An error occurred. If this issue persists please contact at nemunemunyanko[dot]com
      </Frame>
      <br />
      <Frame subtitle="阿部 惇之介 (Junnosuke ABE)" src={abe}>
        Sophomore of the Department of Civil, Environmental and Resources Engineering, the Faculty of Engineering, Kyoto University <br />
        Role: 実験派の平社員 <br />
        Hobby: 読書風妄想 <br />
        見てても動かないが気づいたら進んでいる、そんな亀みたいな人間です。
      </Frame>
      <br />
      <Frame subtitle="内山 新平 (Shimpei UCHIYAMA)" src={uchiyama}>
        Senior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University <br />
        Role: Paper search <br />
        Hobby: Soccer <br />
        一番多忙な人間が一番多くの時間を持つ
      </Frame>
      <br />
      <Frame subtitle="岡本 陽（Haru OKAMOTO)" src={okamoto}>
        Freshman of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University <br />
        Role: Wet <br />
        Hobby: 魚とり、買い物 <br />
        英語が読めません。
      </Frame>
      <br />
      <Frame subtitle="桐山 賢斗 (Kento Kiriyama)" src={kiriyama}>
        Freshman of the Department of Pharmaceutical Sciences, Faculty of Pharmaceutical Science, Kyoto University <br />
        Role: dry,wet,all <br />
        Hobby: tennis <br />
        桐-Kiri-iGEM編episode of side K
      </Frame>
      <br />
      <Frame subtitle="関川 隆 (Ryu SEKIKAWA)" src={sekikawa}>
        Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto University <br />
        Role: Wet Experiment and Human Practice <br />
        Hobby: 鉄道旅行 <br />
        一般的な変人京大生です
      </Frame>
      <br />
      <Frame subtitle="土田 美咲 (Misaki TSUCHIDA)" src={tsuchida}>
        Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University <br />
        Role: Wiki, Accounting and Design <br />
        Hobby: Basketball <br />
        Daily coffee and tea
      </Frame>
      <br />
      <Frame subtitle="林 泰瑶 (Taiyo HAYASHI)" src={hayashi}>
        Senior of the Faculty of Science, Kyoto University <br />
        Role: Wiki, Dry <br />
        Hobby: 競プロ, ゲーム <br />
        いつも心に太陽を
      </Frame>
      <br />
      <Frame subtitle="	福岡 大空 (Taku FUKUOKA)" src={fukuoka}>
        Sophomore of the Department of Forest and Biomaterials Science, the Faculty of Agriculture, Kyoto University <br />
        Role: Collaboration and Education <br />
        Hobby: 生け花 <br />
        目指せ脱力
      </Frame>
      <br />
      <Frame subtitle="三笘 隼人 (Hayato MITOMA)" src={mitoma}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: Wet Experiment <br />
        Hobby: 生物採集 <br />
        Everything happens for Link reason.
      </Frame>
      <br />
      <Frame subtitle="三原 一星 (Issei MIHARA)" src={mihara}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: Project Leader <br />
        Hobby: Piano <br />
        Where there's Link will, there's Link way.
      </Frame>
      <br />
      <Frame subtitle="モンタネズ マリヤナ (Marjana MONTANEZ)" src={jana}>
        Junior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University  <br />
        Role: Paper Search and Wet Experiment <br />
        Hobby: 執筆 <br />
        パラジウム触媒万能
      </Frame>
      <br />
      <Frame subtitle="安井 雄大 (Yudai YASUI)" src={yasui}>
        Freshman of the Faculty of Science, Kyoto University <br />
        Role: Dry <br />
        Hobby: Traveling <br />
        腹が減っては戦はできぬ
      </Frame>
    </Contain>
  )
}