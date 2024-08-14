import { useState, Fragment } from 'react';
import {
  Dialog,
  Popover,
  Transition,
  Disclosure,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import Image from "next/legacy/image";
import Link from 'next/link';

const solutions = [
  { name: 'Gutter Cleaning', description: 'Professional gutter cleaning services', href: '/gutter-cleaning' },
  { name: 'Gutter Guards', description: 'High-quality gutter guard installation', href: '/gutter-guards' },
  { name: 'Gutter Replacement', description: 'Seamless gutter replacement services', href: '/gutter-replacement' },
  { name: 'Seamless Gutter Installation', description: 'Expert seamless gutter installation', href: '/seamless-gutter-installation' },
  { name: 'Downspouts', description: 'Professional downspout installation and replacement', href: '/downspouts' },
  { name: 'Custom Gutter Solutions', description: 'Tailored gutter solutions for your home', href: '/custom-gutters' },
  { name: 'Roof Snow Guards', description: 'Prevent snow buildup on your roof', href: '/snow-guards' },
  { name: 'Rain Chains', description: 'Decorative and functional rain chains', href: '/rain-chains' },
];

const styles = [
  { 
    name: 'Copper Gutters', 
    description: 'Durable and elegant, copper gutters develop a patina over time, adding a distinctive look to your home.', 
    href: '/copper-gutters'
  },
  { 
    name: 'Galvanized Gutters', 
    description: 'Galvanized gutters are coated with a layer of zinc for increased durability and rust resistance.', 
    href: '/galvanized-gutters'
  },
  { 
    name: 'Galvalume Gutters', 
    description: 'Galvalume gutters offer superior corrosion resistance due to a coating of aluminum and zinc.', 
    href: '/galvalume-gutters'
  },
  { 
    name: 'Colored Gutters', 
    description: 'Available in a variety of colors to match your home’s exterior, colored gutters add both function and aesthetic appeal.', 
    href: '/colored-gutters'
  },
];

const locations = [
  { name: 'Cocke County', href: '/cocke' },
  { name: 'Jefferson County', href: '/jefferson' },
  { name: 'Hamblen County', href: '/hamblen' },
  { name: 'Greene County', href: '/greene' },
  { name: 'Sevier County', href: '/sevier' },
  { name: 'Washington County', href: '/washington' },
  { name: 'Knox County', href: '/knox' },
  { name: 'Blount County', href: '/blount' },
];

const callsToAction = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/JonesCo-Seamless-Gutter-Systems/61558126626290/', icon: PlayCircleIcon },
  { name: 'Email', href: 'mailto:hey@jonescogutters.com', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm z-50">
      <nav className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between" aria-label="Global">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-12">
            <Image className="h-8 w-auto" src="/JC/JonesCo.webp" alt="JonesCo Gutters" width={120} height={32} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-JonesCo-Blue-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 z-50">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-JonesCo-Blue-900">
              Solutions
              <ChevronDownIcon className="h-5 w-5 flex-none text-JonesCo-Blue-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-JonesCo-Blue-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-JonesCo-Blue-900">{item.name}</p>
                        <p className="mt-1 text-sm text-JonesCo-Blue-900">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 divide-x divide-JonesCo-Blue-900/5 bg-JonesCo-Blue-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-JonesCo-Blue-900">
              Locations
              <ChevronDownIcon className="h-5 w-5 flex-none text-JonesCo-Blue-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  {locations.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-JonesCo-Blue-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-JonesCo-Blue-900">{item.name}</p>
                        <p className="mt-1 text-sm text-JonesCo-Blue-900">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 divide-x divide-JonesCo-Blue-900/5 bg-JonesCo-Blue-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-JonesCo-Blue-900">
              Styles
              <ChevronDownIcon className="h-5 w-5 flex-none text-JonesCo-Blue-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  {styles.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-JonesCo-Blue-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-JonesCo-Blue-900">{item.name}</p>
                        <p className="mt-1 text-sm text-JonesCo-Blue-900">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 divide-x divide-JonesCo-Blue-900/5 bg-JonesCo-Blue-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/about" className="text-sm font-semibold leading-6 text-JonesCo-Blue-900">
            About Us
          </Link>
          <Link href="/subcontracting" className="text-sm font-semibold leading-6 text-JonesCo-Blue-900">
            Subcontract
          </Link>
          <Link href="/careers" className="text-sm font-semibold leading-6 text-JonesCo-Blue-900">
            Careers
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-JonesCo-Blue-900">
            Contact
          </Link>
        </Popover.Group>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://clienthub.getjobber.com/client_hubs/1b0129bf-9730-46bf-9d7c-a34501f74690/login/new?source=share_login"
            className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
          >
            Log in
          </Link>
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image className="h-8 w-auto" src="/JC/JonesCo.webp" alt="JonesCo Gutters" width={100} height={32} />
              </Link>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-JonesCo-Blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-2">
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100">
                      Solutions
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {solutions.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100">
                      Locations
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {locations.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100">
                      Styles
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {styles.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Link
                href="/about"
                className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
              >
                About Us
              </Link>
              <Link
                href="/subcontracting"
                className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
              >
                Subcontracting
              </Link>
              <Link
                href="/careers"
                className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
              >
                Contact
              </Link>
            </div>
            
            <div className="py-6">
              <Link
                href="https://clienthub.getjobber.com/client_hubs/1b0129bf-9730-46bf-9d7c-a34501f74690/login/new?source=share_login"
                className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-100"
              >
                Log in
              </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}
