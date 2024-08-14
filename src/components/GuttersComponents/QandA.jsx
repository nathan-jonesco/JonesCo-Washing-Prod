import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const faqs = [
  {
    question: "What are seamless gutters?",
    answer: (
      <>
        Seamless gutters are a type of rain gutter that is manufactured from a single piece of material. They are custom-fit to your home, reducing the likelihood of leaks and providing a more streamlined appearance. Learn more on our <Link href="/seamless-gutter-installation" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Seamless Gutter Installation</Link> page.
      </>
    ),
  },
  {
    question: "Why should I choose JonesCo Seamless Gutter Systems?",
    answer: (
      <>
        JonesCo Seamless Gutter Systems offers high-quality installation, repair, and cleaning services for seamless gutters. Our experienced team uses the best materials and techniques to ensure your home is protected from water damage. Discover more about us on our <Link href="/about" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">About</Link> page.
      </>
    ),
  },
  {
    question: "How do I maintain my seamless gutters?",
    answer: (
      <>
        To maintain your seamless gutters, you should regularly clean them to remove debris, check for any signs of damage, and ensure that water flows freely. We offer professional gutter cleaning services to keep your gutters in top condition. Visit our <Link href="/gutter-cleaning" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Gutter Cleaning</Link> page for more details.
      </>
    ),
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        We offer seamless gutter installation, gutter replacement, gutter cleaning, gutter guards installation, custom gutter solutions, and downspout installation & repair. Learn more on our <Link href="/services" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Services</Link> page.
      </>
    ),
  },
  {
    question: "Which areas do you serve?",
    answer: (
      <>
        JonesCo Seamless Gutter Systems serves multiple locations in Eastern Tennessee, including Cocke County, Jefferson County, Hamblen County, Greene County, Sevier County, Washington County, Knox County, and Blount County. Find out more on our <Link href="/servicelocations" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Service Locations</Link> page.
      </>
    ),
  },
  {
    question: "What are the benefits of copper gutters?",
    answer: (
      <>
        Copper gutters offer exceptional durability, aesthetic appeal, and long-lasting performance. They develop a beautiful patina over time and require minimal maintenance. Learn more on our <Link href="/copper-gutters" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Copper Gutters</Link> page.
      </>
    ),
  },
  {
    question: "Why should I consider galvanized gutters?",
    answer: (
      <>
        Galvanized gutters are known for their strength and durability. They are resistant to rust and corrosion, making them a long-lasting option for your home. Discover more on our <Link href="/galvanized-gutters" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Galvanized Gutters</Link> page.
      </>
    ),
  },
  {
    question: "Are colored gutters available?",
    answer: (
      <>
        Yes, we offer colored gutters that can enhance the aesthetic appeal of your home while providing the same durability and functionality as traditional gutters. Explore your options on our <Link href="/colored-gutters" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Colored Gutters</Link> page.
      </>
    ),
  },
  {
    question: "How can gutter guards benefit my home?",
    answer: (
      <>
        Gutter guards help prevent debris from clogging your gutters, reducing the need for frequent cleaning and protecting your home from water damage. Learn more on our <Link href="/gutter-guards" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Gutter Guards</Link> page.
      </>
    ),
  },
  {
    question: "What should I do if my gutters are damaged?",
    answer: (
      <>
        If your gutters are damaged, it's important to repair or replace them promptly to prevent water damage to your home. We offer comprehensive gutter repair and replacement services. Visit our <Link href="/gutter-replacement" className="underline text-JonesCo-Blue-900 hover:text-JonesCo-Green-700">Gutter Replacement</Link> page for more information.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-JonesCo-Blue-600">
          <h2 className="text-2xl font-bold tracking-tight leading-10 text-black">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-JonesCo-Blue-500">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <Disclosure.Button className="flex justify-between items-start w-full text-left text-JonesCo-Blue-950 group">
                    <span className="font-semibold leading-7 text-semibold">{faq.question}</span>
                    <span className="flex items-center ml-6 h-7">
                      <PlusSmallIcon aria-hidden="true" className="w-6 h-6 group-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="hidden w-6 h-6 group-open:block" />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="pr-12 mt-2">
                  <p className="text-base leading-7 text-JonesCo-Blue-900">{faq.answer}</p>
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}