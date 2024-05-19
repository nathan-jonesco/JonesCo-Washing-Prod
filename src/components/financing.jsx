import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Apply now. Get an answer in seconds.',
    description: 'We look beyond your credit score to give you the best chance of approval.',
  },
  { name: 'Shop today.', description: 'In-store or online, use our financing to get what you need today.' },
  {
    name: 'Pay over time.',
    description: 'Our flexible ownership options are based on your paydays for an easy, stress-free experience.',
  },
  {
    name: 'Get your Upgrades Today.',
    description: 'No-one has time to wait on upgrades. Apply today to get started!',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-600">No worries, we get it!</h2>
            <p className="mt-2 text-5xl text-gray-900 sm:text-5xl tracking-tighter font-black">Need Financing?</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              JonesCo Seamless Gutter Systems has integrated with Affirm and Klarna to offer all of our customers a premium shopping experience.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Green-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
