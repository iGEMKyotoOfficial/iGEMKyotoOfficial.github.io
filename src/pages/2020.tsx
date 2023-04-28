import Contain from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

import shiba from 'images/member.2020/team-2020-shiba.jpg'
import ryu from 'images/member.2020/team-2020-ryu.jpg'
import kobayashi from 'images/member.2020/team-2020-kobayashi2.jpg'
import yamauchi from 'images/member.2020/team-2020-yamauchi.jpg'
import ikeda from 'images/member.2020/team-2020-ikeda.jpg'
import kishida from 'images/member.2020/team-2020-kishida.jpg'
import sakono from 'images/member.2020/team-2020-sakono.jpg'
import tajima from 'images/member.2020/team-2020-tajima.jpg'
import nishizawa from 'images/member.2020/team-2020-nishizawa.jpg'
import nishimura from 'images/member.2020/team-2020-nishimura.jpg'
import hayashida from 'images/member.2020/team-2020-hayashida.jpg'
import ueda from 'images/member.2020/team-2020-ueda.jpg'
import kawakami from 'images/member.2020/team-2020-kawakami.jpg'
import goya from 'images/member.2020/team-2020-goya.jpg'
import koga from 'images/member.2020/team-2020-koga.jpg'
import hayashi from 'images/member.2020/team-2020-hayashi.jpg'
import hitota from 'images/member.2020/team-2020-hirota.jpg'
import fukushima from 'images/member.2020/team-2020-fukushima.jpg'

export default function About() {
    return (
      <Contain>
         <Hero
          title="Member"
          subtitle="2020"        
        />
          
          <div className="member">
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

        <p className="/2020">
        
        </p>
      </Contain>
  )
}
