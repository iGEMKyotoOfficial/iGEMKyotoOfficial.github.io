import Container from 'components/container'
import Hero from 'components/hero'
import Link from 'next/link'

export default function About() {
    return (
      <Container>
         <Hero
          title="Member"
          subtitle=""           
        />
        <p className="member">
          <Link href="/2023" legacyBehavior> 
            <a className="2023">2023</a> 
          </Link>
          <Link href="/2022" legacyBehavior> 
            <a className="2022">2022</a> 
          </Link>
          <Link href="/2021" legacyBehavior> 
            <a className="2021">2021</a> 
          </Link>
          <Link href="/2020" legacyBehavior> 
            <a className="2020">2020</a> 
          </Link>
          <Link href="/2019" legacyBehavior> 
            <a className="2019">2019</a> 
          </Link>
          <Link href="/2018" legacyBehavior> 
            <a className="2018">2018</a> 
          </Link>
          <Link href="/2017" legacyBehavior> 
            <a className="2017">2017</a> 
          </Link>
          <Link href="/2016" legacyBehavior> 
            <a className="2016">2016</a> 
          </Link>
          <Link href="/2015" legacyBehavior> 
            <a className="2015">2015</a> 
          </Link>
          <Link href="/2014" legacyBehavior> 
            <a className="2014">2014</a> 
          </Link>
          <Link href="/2013" legacyBehavior> 
            <a className="2013">2013</a> 
          </Link>
          <Link href="/2012" legacyBehavior> 
            <a className="2012">2012</a> 
          </Link>
          <Link href="/2011" legacyBehavior> 
            <a className="2011">2011</a> 
          </Link>
        </p>

        <p className="/2015">
        
        </p>
      </Container>
  )
}
