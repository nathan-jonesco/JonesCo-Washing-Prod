'use client';
import {
  WrenchScrewdriverIcon, 
  HomeModernIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  PencilSquareIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const services = [
  {
    name: 'Seamless Gutter Installation',
    description: 'Our expert team installs custom-fit seamless gutters, eliminating leaks and clogs for optimal performance and enhanced aesthetics.',
    link: '/seamless-gutter-installation',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Gutter Replacement',
    description: 'Upgrade your old gutters to modern, efficient seamless systems. We handle expert removal and installation for a hassle-free transition.',
    link: '/gutter-replacement',
    icon: HomeModernIcon,
  },
  {
    name: 'Gutter Cleaning',
    description: 'Keep your gutters clean and functional with our thorough cleaning and inspection services. We remove debris and blockages to prevent water damage and ensure optimal performance.',
    link: '/gutter-cleaning',
    icon: SparklesIcon,
  },
  {
    name: 'Gutter Guards Installation',
    description: 'Protect your gutters from leaves and debris with our high-quality gutter guards. Prevent clogs, reduce maintenance, and ensure proper water flow.',
    link: '/gutter-guards',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Gutter Solutions',
    description: 'Our skilled team designs and installs custom gutter solutions for unique architectural styles, ensuring a perfect fit and optimal functionality.',
    link: '/custom-gutters',
    icon: PencilSquareIcon,
  },
  {
    name: 'Downspout Installation & Repair',
    description: 'We offer professional downspout installation and repair services to effectively direct water away from your foundation and protect your property from potential damage.',
    link: '/downspouts',
    icon: ArrowDownTrayIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="py-24 bg-JonesCo-Blue-900 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-400">Comprehensive Gutter Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Protect Your Home</p>
          <p className="mt-6 text-lg leading-8 text-JonesCo-Blue-50">
            Ensure the longevity and beauty of your home with our premium gutter services. We offer expert installation, maintenance, and repair for all your gutter needs.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-8 mx-auto mt-16 max-w-2xl text-base leading-7 text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {services.map((service) => (
            <div key={service.name} className="relative pl-9">
              <Link href={service.link} legacyBehavior>
                <a>
                  <dt className="inline font-black text-white">
                    <service.icon className="absolute top-1 left-1 w-5 h-5 text-JonesCo-Green-400" aria-hidden="true" />
                    {service.name}
                  </dt>{' '}
                  <dd className="inline text-white">{service.description}</dd>
                </a>
              </Link>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
