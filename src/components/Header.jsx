

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [

  { name: 'Get Started', href: '/contact' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/servicelocations' },
  { name: 'Why', href: '/why' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Log In', href: 'https://clienthub.getjobber.com/client_hubs/1b0129bf-9730-46bf-9d7c-a34501f74690/login/new?source=share_login' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <header className="bg-JonesCo-Blue-100 fixed top-0 left-0 right-0 z-50"> 
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/">
          <Image
            className="h-8 w-auto sm:h-10"  // Adjusted image size for better mobile responsiveness
            src="/JC/JonesCo.webp"
            alt="JonesCo Seamless Gutter Systems"
            width={180}
            height={40} // Use specific dimensions for the logo
            priority 
          />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-base font-bold tracking-wider uppercase text-JonesCo-Blue-900 hover:text-JonesCo-Blue-700">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-JonesCo-Blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-JonesCo-Blue-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <Image
                className="h-10 w-auto"
                width={500}
                height={500}
                quality={50}
                src="/JC/JonesCo.webp"
                alt=""
              />

            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-JonesCo-Green-900">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
