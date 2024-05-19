import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Cocke County, TN',
    description:
      'Home to Parrottsville where the local community thrives amidst the natural beauty of Eastern Tennessee.',
  },
  {
    name: 'Jefferson County, TN',
    description:
      'Adjacent to Cocke, Jefferson County offers scenic landscapes and historic towns like Dandridge.',
  },
  {
    name: 'Hamblen County, TN',
    description:
      'Known for its vibrant city of Morristown, Hamblen County combines urban conveniences with rural charm.',
  },
  {
    name: 'Greene County, TN',
    description:
      'Features the historic town of Greeneville and provides a rich tapestry of cultural and outdoor activities.',
  },
  {
    name: 'Sevier County, TN',
    description:
      'Tourist hotspot with attractions such as Dollywood and the gateway to the Great Smoky Mountains.',
  },
  {
    name: 'Washington County, TN',
    description:
      "Houses Tennessee's oldest town, Jonesborough, and is rich in history and tradition.",
  },
  {
    name: 'Knox County, TN',
    description:
      'Includes Knoxville and offers a mix of urban life, educational institutions, and extensive shopping areas.',
  },
  {
    name: 'Blount County, TN',
    description:
      'Known for the quiet beauty of the Foothills of the Great Smoky Mountains and the peaceful town of Maryville.',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-JonesCo-Green-600">
              Eastern Tennessee Focused,
            </h2>
            <p className="text-JonesCo-Green-900 mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              Service Driven
            </p>
            <p className="text-gray-600 mt-6 text-base leading-7">
              At JonesCo Seamless Gutter Systems, we&apos;re proud to extend our
              bespoke gutter services to a broadening range of counties in
              Eastern Tennessee. Each area we serve benefits from our commitment
              to excellence, attention to detail, and the personalized touch
              that only JonesCo can provide. Discover our dedicated service in
              your county.
            </p>
          </div>
          <dl className="text-gray-600 col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="text-gray-900 font-semibold">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Green-500"
                    aria-hidden="true"
                  />
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
