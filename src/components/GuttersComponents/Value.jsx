import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const steps = [
  {
    title: 'Free Consultation',
    description: 'Schedule your free consultation with our experts to assess your gutter needs.',
    link: '/contact',
  },
  {
    title: 'Detailed Estimate',
    description: 'Receive a detailed, no-obligation estimate for your gutter project.',
    link: '/services',
  },
  {
    title: 'Professional Installation',
    description: 'Our skilled team will professionally install your new gutter system.',
    link: '/seamless-gutter-installation',
  },
  {
    title: 'Thorough Cleanup',
    description: 'We ensure your property is clean and tidy after the installation.',
    link: '/about',
  },
  {
    title: 'Follow-Up Support',
    description: 'We provide ongoing support and maintenance to keep your gutters in top condition.',
    link: '/services',
  },
  {
    title: 'Warranty Protection',
    description: 'Our services come with a warranty to ensure peace of mind and long-lasting results.',
    link: '/warranty',
  },
];

const StepsToExpect = () => {
  return (
    <div className="bg-JonesCo-Green-200 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Problems Gone in 6 Steps
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Here&apos;s what to expect when you choose JonesCo Gutters for your gutter solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Disclosure key={index} as="div" className="flex flex-col items-center p-6 bg-JonesCo-Green-50 rounded-lg shadow-lg">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-12 w-12 text-JonesCo-Green-500 mr-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    </div>
                    {open ? (
                      <ChevronUpIcon className="w-5 h-5 text-JonesCo-Green-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-JonesCo-Green-500" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-4 text-gray-600 text-center">
                    <p className="mb-4">{step.description}</p>
                    <Link href={step.link} legacyBehavior>
                      <a className="text-JonesCo-Blue-600 hover:text-JonesCo-Blue-800 font-semibold underline">
                        Learn More
                      </a>
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsToExpect;
