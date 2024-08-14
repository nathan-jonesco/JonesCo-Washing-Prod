import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import ReviewSnippet from '@/components/ReviewSnippet'

// Dynamically import the QandA component
const QandA = dynamic(() => import('@/components/QandA'), { ssr: false })

// Dynamically import the Hero component
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })

const services = [
  {
    href: '/seamless-gutter-installation',
    title: 'Seamless Gutter Installation',
    description:
      'Seamless gutters provide a sleek, modern look while minimizing leaks and maintenance. Our experts custom-fit gutters to your home.',
  },
  {
    href: '/gutter-replacement',
    title: 'Gutter Replacement',
    description:
      'We replace old, damaged gutters with new, high-quality systems designed to last.',
  },
  {
    href: '/gutter-cleaning',
    title: 'Gutter Cleaning',
    description:
      'Regular gutter cleaning prevents clogs and overflows, protecting your home’s foundation and landscaping.',
  },
  {
    href: '/gutter-guards',
    title: 'Gutter Guards Installation',
    description:
      'Gutter guards reduce maintenance by keeping debris out, ensuring your gutters work efficiently year-round.',
  },
  {
    href: '/custom-gutters',
    title: 'Custom Gutter Solutions',
    description:
      'Tailored solutions to fit your home’s specific needs, enhancing both functionality and aesthetics.',
  },
  {
    href: '/downspouts',
    title: 'Downspout Installation & Repair',
    description:
      'Properly functioning downspouts direct water away from your home, preventing erosion and water damage.',
  },
  {
    href: '/snow-guards',
    title: 'Snow Guards Installation',
    description:
      'Protect your roof and gutters from snow damage with our durable snow guards.',
  },
  {
    href: '/rain-chains',
    title: 'Rain Chains Installation',
    description:
      'Enhance your home’s aesthetic and manage rainwater flow with our decorative rain chains.',
  },
]

const gutterStyles = [
  {
    href: '/copper-gutters',
    title: 'Copper Gutters',
    description:
      'Durable and stylish, copper gutters add a touch of elegance to any home.',
  },
  {
    href: '/galvanized-gutters',
    title: 'Galvanized Gutters',
    description:
      'Known for their strength and resistance to rust, these gutters are a great choice for durability.',
  },
  {
    href: '/galvalume-gutters',
    title: 'Galvalume Gutters',
    description:
      'Offering superior corrosion resistance, galvalume gutters are ideal for harsh weather conditions.',
  },
  {
    href: '/colored-gutters',
    title: 'Colored Gutters',
    description:
      'Match your home’s exterior with our wide range of colored gutters, providing both functionality and curb appeal.',
  },
]

const whyChooseUs = [
  'Expert Installation: Our skilled technicians ensure precise installation for optimal performance and longevity.',
  'High-Quality Materials: We use only the best materials to guarantee durability and reliability.',
  'Customized Solutions: Every home is unique, and we provide customized solutions to meet your specific needs.',
  'Exceptional Customer Service: From the initial consultation to project completion, we prioritize clear communication and customer satisfaction.',
  'Competitive Pricing: We offer fair and transparent pricing without compromising on quality.',
]

const CityPage = React.memo(({ city, county, description, keywords }) => {
  if (!city || !county) {
    return <div>Error: Missing city or county information.</div>
  }

  const pageTitle = `Best Gutter Services in ${city} | JonesCo Gutters`

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`Top-notch seamless gutters, gutter guards, gutter cleaning and more in ${city}.`}
        />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <div className="w-full rounded-lg bg-JonesCo-Blue-50 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-xl font-extrabold text-JonesCo-Blue-950 md:text-3xl">
            Gutter Services in {city}
          </h1>
          <div className="my-8">
            <ReviewSnippet
              name={`JonesCo Gutters in ${city}`}
              description={`Top-notch seamless gutters, gutter guards, gutter cleaning and more in ${city}.`}
              ratingValue="5"
              ratingCount="10"
            />
          </div>
          <p className="mb-8 text-base text-JonesCo-Blue-900 md:text-lg">
            {description}
          </p>
          <h2 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">
            Why Choose JonesCo?
          </h2>
          <p className="mb-4 text-base text-JonesCo-Blue-900 md:text-lg">
            Maintaining your home’s gutters is essential to protect it from
            water damage. {city} experiences unique weather patterns, making it
            crucial to have reliable and effective gutter systems. JonesCo
            Gutters offers top-notch services to ensure your home stays
            protected year-round. Our team is dedicated to providing
            high-quality workmanship and outstanding customer service, ensuring
            your complete satisfaction with every project we undertake.
          </p>
          <p className="mb-4 text-base text-JonesCo-Blue-900 md:text-lg">
            We understand the importance of a well-functioning gutter system,
            which is why we use only the best materials and the latest
            techniques to deliver superior results. Whether you need a new
            installation, replacement, cleaning, or custom solution, we have the
            expertise to handle all your gutter needs in {city}.
          </p>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">
            Our Gutter Services
          </h3>
          <ul className="mb-8 list-outside list-disc pl-6 text-JonesCo-Blue-900">
            {services.map((service) => (
              <li key={service.href} className="pl-4">
                <Link href={service.href} legacyBehavior>
                  <a className="text-JonesCo-Blue-900 hover:underline">
                    <strong>{service.title}:</strong>
                  </a>
                </Link>{' '}
                {service.description}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">
            Gutter Styles
          </h3>
          <ul className="mb-8 list-outside list-disc pl-6 text-JonesCo-Blue-900">
            {gutterStyles.map((style) => (
              <li key={style.href} className="pl-4">
                <Link href={style.href} legacyBehavior>
                  <a className="text-JonesCo-Blue-900 hover:underline">
                    <strong>{style.title}:</strong>
                  </a>
                </Link>{' '}
                {style.description}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">
            Why Choose Us
          </h3>
          <ul className="mb-8 list-outside list-disc pl-6 text-JonesCo-Blue-900">
            {whyChooseUs.map((reason, index) => (
              <li key={index} className="pl-4">
                {reason}
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Blue-950">
            Contact Us Today
          </h3>
          <p className="mb-4 text-base text-JonesCo-Blue-900 md:text-lg">
            Ready to upgrade your home’s gutter system? Contact JonesCo Gutters
            today for a free estimate. Our team in {city} is here to help you
            protect your home with top-notch gutter solutions. We are committed
            to providing exceptional service and high-quality products that meet
            your specific needs.
          </p>
          <p className="mb-4 text-base text-JonesCo-Blue-900 md:text-lg">
            Don't wait until it's too late. Ensure your home is protected from
            water damage by investing in a reliable and efficient gutter system.
            Our experts are ready to assist you with all your gutter needs, from
            installation to maintenance and repairs. Call us today or fill out
            our online form to schedule a consultation.
          </p>
        </div>
      </div>
      <div className="">
        <Hero />
      </div>
    </div>
  )
})

CityPage.displayName = 'CityPage'
export default CityPage
