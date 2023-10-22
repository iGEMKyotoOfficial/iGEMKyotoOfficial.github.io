import Contain from "components/container";
import Hero from "components/hero";
import Link from "next/link";
import Meta from "components/meta";
import Frame from "components/member.people";

import Fukudaakiko1 from "/images/member.2017/2017_Fukudaakiko1.jpg";
import Isodayosuke3 from "/images/member.2017/2017_Isodayosuke3.jpg";
import Kokiyoshimoto4 from "/images/member.2017/2017_Kokiyoshimoto4.jpg";
import yamada from "/images/member.2017/2017_Kyoto-team-yamada.jpg";
import bio020 from "/images/member.2017/2017_T--Kyoto--bio020.jpg";
import Takimotoren3 from "/images/member.2017/2017_Takimotoren3.jpg";
import Tanigakiyusuke1 from "/images/member.2017/2017_Tanigakiyusuke1.jpg";
import you from "images/member.2017/2017_Image_0c0cd5b.iGEMtong.jpg";

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
          <Link className="prev page-numbers" href="/2018">
            prev
          </Link>
          <Link className="page-numbers" href="/member">
            2023
          </Link>
          <Link className="page-numbers" href="/2022">
            2022
          </Link>
          <Link className="page-numbers" href="/2021">
            2021
          </Link>
          <Link className="page-numbers" href="/2020">
            2020
          </Link>
          <Link className="page-numbers" href="/2019">
            2019
          </Link>
          <Link className="page-numbers" href="/2018">
            2018
          </Link>
          <span aria-current="page" className="page-numbers current">
            2017
          </span>
          <Link className="page-numbers" href="/2016">
            2016
          </Link>
          <Link className="page-numbers" href="/2015">
            2015
          </Link>
          <Link className="page-numbers" href="/2014">
            2014
          </Link>
          <Link className="page-numbers" href="/2013">
            2013
          </Link>
          <Link className="page-numbers" href="/2012">
            2012
          </Link>
          <Link className="page-numbers" href="/2011">
            2011
          </Link>
          <Link className="next page-numbers" href="/2016">
            next
          </Link>
        </div>
      </div>
      <h1>Theme: B. xylophilus Busters</h1>
      <br />
      <Link href="https://2017.igem.org/Team:Kyoto" className="btn btn-border">
        Wiki
      </Link>
      <br />
      <br />
      <Frame subtitle="Koki YOSHIMOTO" src={Kokiyoshimoto4}>
        Sophomore of the Faculty of Pharmacy, Kyoto University <br />
        <b>Team Leader</b> <br />
        溢れる京大愛。 almost same but slightly different
      </Frame>
      <br />
      <Frame subtitle="Ren TAKIMOTO" src={Takimotoren3}>
        Sophomore of the Department of Applied Life Sciences, Faculty of
        Agriculture, Kyoto University <br />
        第89代カルカタ伝承者
      </Frame>
      <br />
      <Frame subtitle="Daiya OHARA" src={bio020}>
        Sophomore of the Department of Bioresource Sciences, Faculty of
        Agriculture, Kyoto University <br />
        YMW(やってみないとわからない)
      </Frame>
      <br />
      <Frame subtitle="Yousuke ISODA" src={Isodayosuke3}>
        Sophomore of the Faculty of Science, Kyoto University <br />
        化学屋
      </Frame>
      <br />
      <Frame subtitle="Yusuke TANIGAKI" src={Tanigakiyusuke1}>
        Sophomore of the Faculty of Pharmacy, Kyoto University <br />
      </Frame>
      <br />
      <Frame subtitle="Akiko FUKUDA" src={Fukudaakiko1}>
        Sophomore of the Faculty of Science, Kyoto University <br />
      </Frame>
      <br />
      <Frame subtitle="Shuhei YAMADA" src={yamada}>
        Junior of the Department of Physics and Engineering, Faculty of
        Engineering, Kyoto University <br />
        fake it till I make it.
      </Frame>
      <br />
      <Frame subtitle="You Tong" src={you}>
        Freshman of the Department of Agricultural and Environmental
        Engineering, Faculty of Agriculture, Kyoto University <br />
        探究心
      </Frame>
    </Contain>
  );
}
