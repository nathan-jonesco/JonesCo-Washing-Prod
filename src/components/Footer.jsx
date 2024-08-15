import { useState } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const socialMediaLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61558126626290' },
  { name: 'Instagram', href: 'https://www.instagram.com/jonesco.gutters/' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UChpWecDqRs1v6l8QeQLG0Yw' },
  { name: 'Twitter', href: 'https://twitter.com/JonesCoGutters' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@jonesco.gutters' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/jonescogutters/' },
];

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
  { name: 'Subcontracting', href: '/subcontracting' },
  { name: 'Service Locations', href: '/servicelocations' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/termsandconditions' },
  { name: 'Warranty', href: '/warranty' },
];

const servicesLinks = [
  { name: 'Window Washing', href: '/window-washing' },
  { name: 'Pressure Washing', href: '/pressure-washing' },
  { name: 'Soft Washing', href: '/soft-washing' },
  { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { name: 'Custom Washing Solutions', href: '/custom-washing-solutions' },
  { name: 'Downspouts', href: '/downspouts' },
  { name: 'Snow Guards', href: '/snow-guards' },
  { name: 'Rain Chains', href: '/rain-chains' },
];

const stylesLinks = [
  { name: 'Residential Services', href: '/residential-services' },
  { name: 'Commercial Services', href: '/commercial-services' },
  { name: 'Industrial Services', href: '/industrial-services' },
];

function FooterSection({ title, links }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2 text-left text-sm font-medium text-neutral-900 dark:text-neutral-200">
            <span>{title}</span>
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-50 dark:bg-neutral-800 py-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="hidden md:flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">Services</h3>
              <ul className="mt-4 space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">Styles</h3>
              <ul className="mt-4 space-y-2">
                {stylesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">Social Media</h3>
              <ul className="mt-4 space-y-2">
                {socialMediaLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <FooterSection title="Quick Links" links={pageLinks} />
            <FooterSection title="Services" links={servicesLinks} />
            <FooterSection title="Styles" links={stylesLinks} />
            <FooterSection title="Social Media" links={socialMediaLinks} />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
            &copy; 2024 JonesCo Window and Pressure Washing. <br></br> All rights reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-4 text-xs text-neutral-500 dark:text-neutral-400">
            <Link href="/privacy" legacyBehavior>
              <a className="hover:text-neutral-600 dark:hover:text-neutral-200">Privacy Policy</a>
            </Link>
            <span>|</span>
            <Link href="/termsandconditions" legacyBehavior>
              <a className="hover:text-neutral-600 dark:hover:text-neutral-200">Terms & Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
