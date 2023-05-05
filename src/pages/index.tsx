import Meta from 'components/meta'
import Contain from 'components/container'
import Hero from 'components/hero'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Contain large>
      <Meta />

      <svg viewBox="0 0 800 400" >
        <symbol id="s-text">
          <text text-anchor="middle"
            x="50%"
            y="40%"
            className="text--line"
          >
            iGEM
          </text>
          <text text-anchor="middle"
            x="50%"
            y="80%"
            className="text--line"
          >
            Kyoto
          </text>
        </symbol>
     
        <g className="g-ants">
          <use xlinkHref="#s-text"
            className="text-copy"></use>
          <use xlinkHref="#s-text"
            className="text-copy"></use>
          <use xlinkHref="#s-text"
            className="text-copy"></use>
          <use xlinkHref="#s-text"
            className="text-copy"></use>
          <use xlinkHref="#s-text"
            className="text-copy"></use>
        </g>
      </svg>

      <Link className="twitter-timeline" 
      data-width="700" 
      data-height="700" 
      data-theme="light" 
      href="https://twitter.com/iGEMkyoto?ref_src=twsrc%5Etfw"
      >
        Tweets by iGEMkyoto
      </Link>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8">
      </script>
      <div><br /></div>
    </Contain>
  )
}