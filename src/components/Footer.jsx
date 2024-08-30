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
  { name: 'Service Locations', href: '/counties' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/termsandconditions' },
  { name: 'Warranty', href: '/warranty' },
];

const servicesLinks = [
  { name: 'Window Washing', href: '/services/window-washing' },
  { name: 'Pressure Washing', href: '/services/pressure-washing' },
  { name: 'Soft Washing', href: '/services/soft-washing' },
  { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
  { name: 'House Washing', href: '/services/house-washing' },
  { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
  { name: 'Deck Cleaning', href: '/services/deck-cleaning' },
];



function FooterSection({ title, links }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2 text-left text-sm font-medium text-neutral-50">
            <span>{title}</span>
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-neutral-50" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-neutral-50" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-sm   text-neutral-50 hover:text-neutral-200">
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
    <footer className="bg-orange-950 py-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="hidden md:flex space-x-8">
            <div>
              <h3 className="text-lg font-black text-neutral-50">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm   text-neutral-50 hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h3 className="text-lg font-black  text-neutral-50">Services</h3>
              <ul className="mt-4 space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm   text-neutral-50 hover:text-neutral-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-black text-neutral-50">Social Media</h3>
              <ul className="mt-4 space-y-2">
                {socialMediaLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-sm text-neutral-50 hover:text-neutral-100 ">
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
            <FooterSection title="Social Media" links={socialMediaLinks} />
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-center text-neutral-50">
            &copy; 2024 JonesCo Window and Pressure Washing. <br></br> All rights reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-4 text-xs text-neutral-50">
            <Link href="/privacy" legacyBehavior>
              <a className="hover:text-neutral-200">Privacy Policy</a>
            </Link>
            <span>|</span>
            <Link href="/termsandconditions" legacyBehavior>
              <a className="hover:text-neutral-200">Terms & Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
