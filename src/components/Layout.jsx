'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Hero from '@/components/EstimateButton.jsx'
import Incentives from '@/components/Incentives'
import CTA from '@/components/CTA-Estimate';
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, allSections }) {
  let pathname = usePathname()

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-neutral-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-8" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className=" flex h-full flex-col">
          <CTA className="not-prose custom-full-width element w-full pt-14" />
          <main className="flex-auto bg-white px-8 pt-10 md:px-0 dark:bg-neutral-900">
            {children}
          </main>
          <Incentives className="not-prose custom-full-width element w-full pt-14" />
          <Hero className="not-prose custom-full-width element w-full pt-14" />
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
