import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Frame from 'components/member.people'
import styles from 'src/styles/member.module.css'

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

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="歴代メンバーをご紹介します"
      />

      <div className={styles.member}>
        <Link href="/member" legacyBehavior>
          <a className="2023">2023&ensp;</a>
        </Link>
        <Link href="/2022" legacyBehavior>
          <a className="2022">2022&ensp;</a>
        </Link>
        <Link href="/2021" legacyBehavior>
          <a className="2021">2021&ensp;</a>
        </Link>
        <Link href="/2020" legacyBehavior>
          <a className="2020">2020&ensp;</a>
        </Link>
        <Link href="/2019" legacyBehavior>
          <a className="2019">2019&ensp;</a>
        </Link>
        <Link href="/2018" legacyBehavior>
          <a className="2018">2018&ensp;</a>
        </Link>
        <Link href="/2017" legacyBehavior>
          <a className="2017">2017&ensp;</a>
        </Link>
        <Link href="/2016" legacyBehavior>
          <a className="2016">2016&ensp;</a>
        </Link>
        <Link href="/2015" legacyBehavior>
          <a className="2015">2015&ensp;</a>
        </Link>
        <Link href="/2014" legacyBehavior>
          <a className="2014">2014&ensp;</a>
        </Link>
        <Link href="/2013" legacyBehavior>
          <a className="2013">2013&ensp;</a>
        </Link>
        <Link href="/2012" legacyBehavior>
          <a className="2012">2012&ensp;</a>
        </Link>
        <Link href="/2011" legacyBehavior>
          <a className="2011">2011&ensp;</a>
        </Link>
      </div>

      <div className="pagination-wrapper">
        <div className="pagination">
          <Link href="member" legacyBehavior className="prev page-numbers">prev</Link>
          <span aria-current="page" className="page-numbers current">2023</span>
          <a className="page-numbers" href="/2022">2022</a>
          <a className="page-numbers" href="javascript:;">2021</a>
          <a className="page-numbers" href="javascript:;">2020</a>
          <a className="page-numbers" href="javascript:;">2019</a>
          <a className="page-numbers" href="javascript:;">2018</a>
          <a className="page-numbers" href="javascript:;">2017</a>
          <a className="page-numbers" href="javascript:;">2016</a>
          <a className="page-numbers" href="javascript:;">2015</a>
          <a className="page-numbers" href="javascript:;">2014</a>
          <a className="page-numbers" href="javascript:;">2013</a>
          <a className="page-numbers" href="javascript:;">2012</a>
          <a className="page-numbers" href="javascript:;">2011</a>
          <a className="next page-numbers" href="javascript:;">next</a>
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
      <Frame subtitle="内山 新平 (Sinpei UCHIYAMA)" src={uchiyama}>
        Senior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University <br />
        Role: Paper search <br />
        Hobby: Soccer <br />
        一番多忙な人間が一番多くの時間を持つ
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
        Everything happens for a reason.
      </Frame>
      <br />
      <Frame subtitle="三原 一星 (Issei MIHARA)" src={mihara}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        Role: Project Leader <br />
        Hobby: Piano <br />
        Where there's a will, there's a way.
      </Frame>
      <br />
      <Frame subtitle="モンタネズ マリヤナ (Marjana MONTANEZ)" src={jana}>
        Junior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University  <br />
        Role: Paper Search and Wet Experiment <br />
        Hobby: 執筆 <br />
        パラジウム触媒万能
      </Frame>
    </Contain>
  )
}