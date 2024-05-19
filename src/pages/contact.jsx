import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import  CTAA  from '@/components/CTA-B'
import FreeEstimateForm from '@/components/FreeEstimateForm'; // Adjust the path if necessary


export default function Home() {
  return (
    <>
      <Head>
        <title>JonesCo Seamless Gutter Systems || Contact Us</title>
        <meta name="theme-color" content="#C5F5CA" />
        <meta
          name="description"
          content="Expert Installations for Lasting Home Protection."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
      <FreeEstimateForm />
      </main>
      <Footer />
    </>
  )
}
