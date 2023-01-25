import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import GoogleAnalytics from 'components/Analytics'
import Layout from 'components/Layout'
import * as gtag from 'lib/gtag'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Deploy de Sexta</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/favicon.ico"
        />
        <meta name="theme-color" content="#06092B" />
        <meta 
          name="google-site-verification" 
          content="lxoq5t8GdXGJRsYQJorH5EGXlOHJ_V_jQDWwalia6es" 
        />
        <meta
          name="description"
          content=""
        />
      </Head>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <Layout>
        <NextNProgress
          color="#0059a0"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showSpinner={false}
        />
        <Component {...pageProps} />
        <Analytics />
        <GoogleAnalytics />
      </Layout>
    </>
  )
}

export default App
