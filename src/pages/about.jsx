import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


import  CTAA  from '@/components/CTA-A'
import  CTAB  from '@/components/CTA-B'
import  CTAC  from '@/components/CTA-C'
import  CTAD  from '@/components/CTA-D'

import  About  from '@/components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || About Us</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <About />
        <CTAC />

      </main>
      <Footer />
    </>
  )
}
