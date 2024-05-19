import Script from 'next/script'
import Head from 'next/head'
import PP from '@/components/PrivacyPolicy'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Privacy Policy</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />

      </Head>
      <Banner />
      <Header />

      <main className="-z-50">
        <PP />




      </main>
      <Footer />
    </>
  )
}
