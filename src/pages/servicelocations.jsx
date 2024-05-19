import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CTAA from '@/components/CTA-B'
import ServiceLocations from '@/components/ServiceLocationsCity'
import OurServices from '@/components/OurServices'
import ServicesExtended from '@/components/OurServicesExt'

export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Service Locations</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <ServiceLocations />
        <CTAA />
      </main>
      <Footer />
    </>
  )
}
