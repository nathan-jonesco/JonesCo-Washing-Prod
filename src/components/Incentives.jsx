import Image from 'next/image';
import { CheckCircleIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'; // Importing Heroicons
import Picture from '@/images/Team/Maggie_Cleaning.webp';

const incentives = [
  {
    name: 'Reliable Service',
    icon: CheckCircleIcon,
    description:
      'We show up on time, every time. Your satisfaction is our top priority, and we ensure each job is done right the first time.',
  },
  {
    name: 'Eco-Friendly Solutions',
    icon: SparklesIcon,
    description:
      'We use environmentally friendly products and methods that are safe for your home and the environment.',
  },
  {
    name: '100% Satisfaction Guarantee',
    icon: ShieldCheckIcon,
    description:
      'If you’re not completely satisfied with our work, we’ll make it right. Your peace of mind is important to us.',
  },
];

export default function IncentivesSection() {
  return (
    <div className="bg-blue-50 dark:bg-orange-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Done Right <b className='block text-orange-900 dark:text-blue-100'> The First Time.</b>
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-100">
                At JonesCo Window and Pressure Washing, we are committed to providing top-tier service that exceeds your expectations. Our mission is to deliver quality results with the highest level of professionalism and care.
              </p>
            </div>
            <div className="relative w-full h-72 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <Image
                alt="Professional cleaning service in action"
                src={Picture}
                className="object-cover object-center"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex items-start lg:block">
                <incentive.icon className="ml-4 mb-4 md:h-16 md:w-16 h-14 w-14 text-orange-600 dark:text-white" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-100">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
