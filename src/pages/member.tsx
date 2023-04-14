import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

import sekikawa from 'images/2023_sekikawa.jpg'
import mitoma from 'images/2023_mitoma.jpg'

export default function About() {
  return (
    <Contain>
      <Hero
        title="Member"
        subtitle="2023"
      />

      <p className="member">
        <Link href="/2023" legacyBehavior>
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
      </p>

      <br />

      <table className="team-table">
        <tr>
          <th className="team-table-photo">
            <figure>
              <Image
                src={sekikawa}
                alt=""
                width="250"
                height="250"
                sizes="(min-width: 1152px) 576px, 50vw"
              />
            </figure>
          </th>
          <th className="team-table-profile">
            <p>
              関川 隆 <br />
              Ryu SEKIKAWA <br />
              Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto University <br />
              Role: Human Practice <br />
              Hobby: 鉄道旅行 <br />
              一般的な変人京大生です
            </p>
          </th>
        </tr>
      </table>

      <br />

      <table className="team-table">
        <tr>
          <th className="team-table-photo">
            <figure>
              <Image
                src={mitoma}
                alt=""
                width="250"
                height="250"
                sizes="(min-width: 1152px) 576px, 50vw"
              />
            </figure>
          </th>
          <th className="team-table-profile">
            <p>
              三笘 隼人 <br />
              Hayato MITOMA <br />
              Sophomore of the Faculty of Science, Kyoto University <br />
              Role: Wet Experiment <br />
              Hobby:  <br />
              Everything happens for a reason.
            </p>
          </th>
        </tr>
      </table>
      <Container>
        <Row>
          <Col sm>
            <span>One of three columns</span>
          </Col>
          <Col sm>
            <span>One of three columns</span>
          </Col>
          <Col sm>
            <span>One of three columns</span>
          </Col>
        </Row>
      </Container>
    </Contain>


  )
}



