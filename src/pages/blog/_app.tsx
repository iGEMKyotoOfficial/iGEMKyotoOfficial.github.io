import 'src/styles/globals.css'
import Layout from 'components/layout'
import React from 'react'

function MyApp({ Component, pageProps}:
  {Component:any, pageProps:any}){
    return(
      <Layout>
        <Component{...pageProps} />
      </Layout>
    )
  }

export default MyApp