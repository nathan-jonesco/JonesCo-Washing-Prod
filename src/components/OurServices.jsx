'use client';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon, 
  HomeModernIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  PencilSquareIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/solid';
import Link from 'next/link'; // Import the Link component

const services = [
  {
    name: 'Seamless Gutter Installation',
    description: 'Our expert team installs custom-fit seamless gutters, eliminating leaks and clogs for optimal performance and enhanced aesthetics.',
    link: '/seamless-gutter-installation',  // Replace with actual page path
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Gutter Replacement',
    description: 'Upgrade your old gutters to modern, efficient seamless systems. We handle expert removal and installation for a hassle-free transition.',
    link: '/gutter-replacement',  // Replace with actual page path
    icon: HomeModernIcon,
  },
  {
    name: 'Gutter Cleaning',
    description: 'Keep your gutters clean and functional with our thorough cleaning and inspection services. We remove debris and blockages to prevent water damage and ensure optimal performance.',
    link: '/gutter-cleaning',  // Replace with actual page path
    icon: SparklesIcon,
  },
  {
    name: 'Gutter Guards Installation',
    description: 'Protect your gutters from leaves and debris with our high-quality gutter guards. Prevent clogs, reduce maintenance, and ensure proper water flow.',
    link: '/gutter-guards',  // Replace with actual page path
    icon: ShieldCheckIcon,
  },
  {
    name: 'Custom Gutter Solutions',
    description: 'Our skilled team designs and installs custom gutter solutions for unique architectural styles, ensuring a perfect fit and optimal functionality.',
    link: '/custom-gutters',  // Replace with actual page path
    icon: PencilSquareIcon,
  },
  {
    name: 'Downspout Installation & Repair',
    description: 'We offer professional downspout installation and repair services to effectively direct water away from your foundation and protect your property from potential damage.',
    link: '/downspouts',  // Replace with actual page path
    icon: ArrowDownTrayIcon,
  },
];

export default function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} // Adjust duration as needed
      viewport={{ once: true }} 
      className="bg-JonesCo-Blue-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-400">Comprehensive Gutter Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Protect Your Home</p>
          <p className="mt-6 text-white text-lg leading-8 text-gray-300">
            Ensure the longevity and beauty of your home with our premium gutter services. We offer expert installation, maintenance, and repair for all your gutter needs. 
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-200 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {services.map((service) => (
            <motion.div 
              key={service.name} 
              className="relative pl-9"
              whileHover={{ scale: 1.05 }} // Hover effect
              transition={{ duration: 0.2 }}
            >
              <Link href={service.link}> 
              <dt className="inline font-black text-white">
                <service.icon className="absolute left-1 top-1 h-5 w-5 text-JonesCo-Green-400" aria-hidden="true" />
                {service.name}
              </dt>{' '}
              <dd className="inline text-white">{service.description}</dd>
              </Link>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}
