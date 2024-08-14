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
  { name: 'Seamless Gutter Installation', href: '/seamless-gutter-installation' },
  { name: 'Gutter Replacement', href: '/gutter-replacement' },
  { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { name: 'Gutter Guards', href: '/gutter-guards' },
  { name: 'Custom Gutters', href: '/custom-gutters' },
  { name: 'Downspouts', href: '/downspouts' },
  { name: 'Snow Guards', href: '/snow-guards' },
  { name: 'Rain Chains', href: '/rain-chains' },
];

const stylesLinks = [
  { name: 'Copper Gutters', href: '/copper-gutters' },
  { name: 'Galvanized Gutters', href: '/galvanized-gutters' },
  { name: 'Galvalume Gutters', href: '/galvalume-gutters' },
  { name: 'Colored Gutters', href: '/colored-gutters' },
];

function FooterSection({ title, links }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2 text-left text-sm font-medium text-gray-900">
            <span>{title}</span>
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-sm text-gray-600 hover:text-gray-900">{link.name}</a>
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
    <footer className="bg-JonesCo-Blue-50 py-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="hidden md:flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-gray-600 hover:text-gray-900">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Services</h3>
              <ul className="mt-4 space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-gray-600 hover:text-gray-900">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Styles</h3>
              <ul className="mt-4 space-y-2">
                {stylesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-gray-600 hover:text-gray-900">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
              <ul className="mt-4 space-y-2">
                {socialMediaLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-gray-600 hover:text-gray-900">{link.name}</a>
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
          <p className="text-xs text-center text-gray-500">
            &copy; 2024 JonesCo Seamless Gutter Systems, LLC. All rights reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-4 text-xs text-gray-500">
            <Link href="/privacy" legacyBehavior>
              <a className="hover:text-gray-600">Privacy Policy</a>
            </Link>
            <span>|</span>
            <Link href="/termsandconditions" legacyBehavior>
              <a className="hover:text-gray-600">Terms & Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
