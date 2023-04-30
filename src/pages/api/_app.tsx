import 'src/styles/globals.css'
import Layout from 'components/layout'

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }:
    {Component:any, pageProps:any}){
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
