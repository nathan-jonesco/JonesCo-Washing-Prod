import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

const features = [
  {
    id: 1,
    name: 'Gutter Inspection',
    description:
      'Our experts conduct thorough inspections and necessary tune-ups, ensuring your gutters are in optimal condition, ready to handle the heaviest downpours.',
    icon: CloudArrowUpIcon,
  },
  {
    id: 2,
    name: 'Seamless Installation',
    description:
      'Upgrade to seamless gutters for a flawless look and superior performance. We handle the installation, so your home is prepped and protected.',
    icon: LockClosedIcon,
  },
  {
    id: 3,
    name: 'Regular Maintenance',
    description:
      'We keep your gutters clean and debris-free with our regular maintenance services, preventing blockages and extending their lifespan.',
    icon: ServerIcon,
  },
  {
    id: 4,
    name: 'Custom Solutions',
    description:
      'Whether it’s enhancing curb appeal or installing guards to keep out leaves, we customize solutions to fit your specific needs.',
    icon: ServerIcon,
  },
];

export default function ServicesDetails() {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-600">
            Comprehensive Gutter Care
          </h2>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-gray-900 mt-2">
            Tailored Solutions
          </h1>
          <dl className="mt-10 space-y-10 text-base leading-7 text-gray-600 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0">
            {features.map((feature) => (
              <Fragment key={feature.id}>
                <div className="relative pl-9">
                  <dt className="font-semibold text-JonesCo-Green-900">
                    <span
                      className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Green-500"
                      aria-hidden="true"
                    >
                      ✔
                    </span>
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
