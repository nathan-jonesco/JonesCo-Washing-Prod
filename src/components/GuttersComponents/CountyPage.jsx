import React from 'react';
import Link from 'next/link';
import QandA from '@/components/QandA';
import Value from '@/components/Value';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import ReviewSnippet from '@/components/ReviewSnippet'


// Dynamically import the Hero component
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

const CountyPage = ({ county, cities, description, keywords }) => {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <div className="px-4 py-8 w-full rounded-lg md:px-8 bg-JonesCo-Green-50">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-2xl font-extrabold md:text-3xl text-JonesCo-Green-950">JonesCo in {county} County 💪</h1>
          <p className="mb-8 text-base md:text-lg text-JonesCo-Green-900">
            {description}
          </p>
          <div className="my-8">
            <ReviewSnippet
              name={`JonesCo Gutters in ${county} County`}
              description={`Top-notch seamless gutters, gutter guards, gutter cleaning and more in ${county} County.`}
              ratingValue="5"
              ratingCount="10"
            />
          </div>
          <h2 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Why Choose JonesCo?</h2>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            Maintaining your home’s gutters is essential to protect it from water damage. {county} experiences unique weather patterns, making it crucial to have reliable and effective gutter systems. JonesCo Gutters offers top-notch services to ensure your home stays protected year-round. Our team is dedicated to providing high-quality workmanship and outstanding customer service, ensuring your complete satisfaction with every project we undertake. We understand that your home is one of your most significant investments, and we treat it with the respect it deserves.
          </p>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            Our seamless gutter systems are designed to withstand the harshest weather conditions, providing you with peace of mind and long-lasting protection. We use only the best materials and the latest techniques to ensure that your gutters are durable, efficient, and aesthetically pleasing. Whether you need a new gutter installation, replacement, cleaning, or custom solution, we have the expertise to handle all your gutter needs in {county} County.
          </p>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Cities We Serve in {county} County</h3>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            {cities.map(city => (
              <li key={city}>
                <Link href={`/cities/${city.toLowerCase().replace(/ /g, '')}`} legacyBehavior>
                  <a className="text-JonesCo-Green-900 hover:underline">{city}</a>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Our Comprehensive Services</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            At JonesCo Gutters, we offer a wide range of services to meet all your gutter needs. Our services include:
          </p>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            <li><Link href="/seamless-gutter-installation" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Seamless Gutter Installation</a></Link>: Our seamless gutters are custom-fit to your home, providing a sleek, modern look while minimizing leaks and maintenance.</li>
            <li><Link href="/gutter-replacement" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Replacement</a></Link>: We replace old, damaged gutters with new, high-quality systems designed to last, ensuring your home is protected from water damage.</li>
            <li><Link href="/gutter-cleaning" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Cleaning</a></Link>: Regular gutter cleaning prevents clogs and overflows, protecting your home’s foundation and landscaping.</li>
            <li><Link href="/gutter-guards" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Gutter Guards Installation</a></Link>: Gutter guards reduce maintenance by keeping debris out, ensuring your gutters work efficiently year-round.</li>
            <li><Link href="/custom-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Custom Gutter Solutions</a></Link>: Tailored solutions to fit your home’s specific needs, enhancing both functionality and aesthetics.</li>
            <li><Link href="/downspouts" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Downspout Installation & Repair</a></Link>: Properly functioning downspouts direct water away from your home, preventing erosion and water damage.</li>
          </ul>
          <h3 className="mb-4 text-xl font-bold text-JonesCo-Green-950">Our Gutter Styles</h3>
          <p className="mb-4 text-base md:text-lg text-JonesCo-Green-900">
            We offer a variety of gutter styles to suit your home's aesthetic and functional needs:
          </p>
          <ul className="mb-8 list-disc list-inside text-JonesCo-Green-900" style={{ paddingLeft: '1.5rem' }}>
            <li><Link href="/copper-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Copper Gutters</a></Link>: Durable and stylish, copper gutters add a touch of elegance to any home.</li>
            <li><Link href="/galvanized-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Galvanized Gutters</a></Link>: Known for their strength and resistance to rust, these gutters are a great choice for durability.</li>
            <li><Link href="/galvalume-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Galvalume Gutters</a></Link>: Offering superior corrosion resistance, galvalume gutters are ideal for harsh weather conditions.</li>
            <li><Link href="/colored-gutters" legacyBehavior><a className="text-JonesCo-Green-900 hover:underline">Colored Gutters</a></Link>: Match your home’s exterior with our wide range of colored gutters, providing both functionality and curb appeal.</li>
          </ul>
        </div>
      </div>
      <Value />
      <QandA />
      <div>
        <Hero />
      </div>
    </div>
  );
};

CountyPage.displayName = "CountyPage";
export default CountyPage;
