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
    name: 'Pressure Washing',
    description: 'Restore the beauty of your property with our high-pressure washing services. Perfect for driveways, decks, and more.',
    link: '/pressure-washing',  // Replace with actual page path
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Window Washing',
    description: 'Get crystal clear windows with our professional window washing services, ensuring a streak-free finish every time.',
    link: '/window-washing',  // Replace with actual page path
    icon: HomeModernIcon,
  },
  {
    name: 'Gutter Cleaning',
    description: 'Keep your gutters clean and functional with our thorough cleaning and inspection services. We remove debris and blockages to prevent water damage and ensure optimal performance.',
    link: '/gutter-cleaning',  // Replace with actual page path
    icon: SparklesIcon,
  },
  {
    name: 'House Washing',
    description: 'Maintain the exterior of your home with our comprehensive house washing services. We remove dirt, grime, and mold for a fresh, clean look.',
    link: '/house-washing',  // Replace with actual page path
    icon: ShieldCheckIcon,
  },
  {
    name: 'Driveway and Sidewalk Cleaning',
    description: 'Revitalize your driveway and sidewalks with our expert cleaning services, removing stains, dirt, and buildup.',
    link: '/driveway-sidewalk-cleaning',  // Replace with actual page path
    icon: PencilSquareIcon,
  },
  {
    name: 'Roof Cleaning',
    description: 'Protect and extend the life of your roof with our professional roof cleaning services, removing moss, algae, and debris.',
    link: '/roof-cleaning',  // Replace with actual page path
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
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Orange-400">Comprehensive Cleaning Services</h2>
          <p className="mt-2 text-lg font-bold tracking-tight text-white sm:text-3xl">Enhance Your Property's Appearance</p>
          <p className="mt-6 text-white text-lg leading-8 text-gray-300">
            Ensure the longevity and beauty of your property with our premium cleaning services. We offer expert pressure washing, window cleaning, and more.
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
                  <service.icon className="absolute left-1 top-1 h-5 w-5 text-JonesCo-Orange-400" aria-hidden="true" />
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
