import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const counties = [
  {
    name: 'Cocke County, TN',
    description: 'Home to Parrottsville where the local community thrives amidst the natural beauty of Eastern Tennessee.',
    cities: ['Newport', 'Parrottsville', 'Cosby', 'Del Rio']
  },
  {
    name: 'Jefferson County, TN',
    description: 'Adjacent to Cocke, Jefferson County offers scenic landscapes and historic towns like Dandridge.',
    cities: ['Dandridge', 'Jefferson City', 'White Pine', 'New Market', 'Baneberry']
  },
  {
    name: 'Hamblen County, TN',
    description: 'Known for its vibrant city of Morristown, Hamblen County combines urban conveniences with rural charm.',
    cities: ['Morristown', 'Russellville', 'Whitesburg', 'Talbott']
  },
  {
    name: 'Greene County, TN',
    description: 'Features the historic town of Greeneville and provides a rich tapestry of cultural and outdoor activities.',
    cities: ['Greeneville', 'Mosheim', 'Tusculum', 'Baileyton']
  },
  {
    name: 'Sevier County, TN',
    description: 'Tourist hotspot with attractions such as Dollywood and the gateway to the Great Smoky Mountains.',
    cities: ['Sevierville', 'Pigeon Forge', 'Gatlinburg', 'Pittman Center']
  },
  {
    name: 'Washington County, TN',
    description: "Houses Tennessee's oldest town, Jonesborough, and is rich in history and tradition.",
    cities: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford']
  },
  {
    name: 'Knox County, TN',
    description: 'Includes Knoxville and offers a mix of urban life, educational institutions, and extensive shopping areas.',
    cities: ['Knoxville', 'Farragut', 'Powell', 'Corryton']
  },
  {
    name: 'Blount County, TN',
    description: 'Known for the quiet beauty of the Foothills of the Great Smoky Mountains and the peaceful town of Maryville.',
    cities: ['Maryville', 'Alcoa', 'Friendsville', 'Townsend', 'Louisville']
  }
];

export default function ServiceAreas() {
  const [visibleCounties, setVisibleCounties] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (visibleCounties.length < counties.length) {
      intervalRef.current = setInterval(() => {
        setVisibleCounties(prevCounties => [...prevCounties, prevCounties.length]);
      }, 500); // 2 seconds per county
    }
    return () => clearInterval(intervalRef.current);
  }, [visibleCounties]);

  return (
    <div className="bg-JonesCo-Green-700 py-12 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-JonesCo-Blue-200">Eastern Tennessee Focused,</h2>
            <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Service Driven</p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              At JonesCo Seamless Gutter Systems, we&apos;re proud to extend our bespoke gutter services to a broadening range of counties in Eastern Tennessee. Each area we serve benefits from our commitment to excellence, attention to detail, and the personalized touch that only JonesCo can provide. Discover our dedicated service in your city.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:gap-y-16">
            {counties.map((county, index) => (
              <div
                key={county.name}
                className={`relative pl-9 transition-opacity duration-1000 ${
                  visibleCounties.includes(index) ? 'opacity-100' : 'opacity-30'  // Changed to opacity-30 for non-hovered state
                }`}
              >
                <dt className="text-gray-100 font-black">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-JonesCo-Blue-300" aria-hidden="true" />
                  {county.name}
                </dt>
                <dd className="mt-2 text-gray-300">{county.description}</dd>
                <ul className="list-disc pl-5 mt-2 text-gray-300 transition-opacity duration-300 group-hover:opacity-100"> {/* Removed initial opacity-0 */}
                  {county.cities.map((city) => (
                    <li key={city}>{city}</li> 
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}