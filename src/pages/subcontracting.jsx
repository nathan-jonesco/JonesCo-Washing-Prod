import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import  CTAA  from '@/components/CTA-B'
import Subcontracting from '@/components/subcontracting'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Sub-Contracting</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <Subcontracting />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
