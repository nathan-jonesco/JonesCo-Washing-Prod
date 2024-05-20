import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const counties = [
  { name: 'Cocke County, TN', cities: ['Newport', 'Parrottsville', 'Cosby', 'Del Rio'] },
  { name: 'Jefferson County, TN', cities: ['Dandridge', 'Jefferson City', 'White Pine', 'New Market', 'Baneberry'] },
  { name: 'Hamblen County, TN', cities: ['Morristown', 'Russellville', 'Whitesburg', 'Talbott'] },
  { name: 'Greene County, TN', cities: ['Greeneville', 'Mosheim', 'Tusculum', 'Baileyton'] },
  { name: 'Sevier County, TN', cities: ['Sevierville', 'Pigeon Forge', 'Gatlinburg', 'Pittman Center'] },
  { name: 'Washington County, TN', cities: ['Johnson City', 'Jonesborough', 'Limestone', 'Telford'] },
  { name: 'Knox County, TN', cities: ['Knoxville', 'Farragut', 'Powell', 'Corryton'] },
  { name: 'Blount County, TN', cities: ['Maryville', 'Alcoa', 'Friendsville', 'Townsend', 'Louisville'] }
];

export default function ServiceAreas() {
  const [expandedCounty, setExpandedCounty] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCounty(expandedCounty === index ? null : index);
  };

  return (
    <div className="bg-JonesCo-Blue-900 py-12 sm:py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Orange-400">Eastern Tennessee Focused,</h2>
          <p className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Cleaning Excellence</p>
          <p className="mt-4 text-sm sm:text-lg leading-7 text-gray-300">
            At JonesCo Washing, we proudly offer our premium pressure and window washing services to numerous counties across Eastern Tennessee. Click on a county to see if we cover your city.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {counties.map((county, index) => (
            <div
              key={county.name}
              className="relative px-4 py-2 transition-opacity duration-300 bg-JonesCo-Blue-800 rounded-lg hover:bg-JonesCo-Blue-700 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <dt className="text-gray-100 font-bold flex items-center justify-between">
                <span>{county.name}</span>
                <ChevronDownIcon className={`h-5 w-5 text-JonesCo-Orange-300 transition-transform ${expandedCounty === index ? 'rotate-180' : ''}`} aria-hidden="true" />
              </dt>
              {expandedCounty === index && (
                <ul className="mt-2 text-gray-300">
                  {county.cities.map((city) => (
                    <p key={city} className="list-disc pl-5">- {city}</p>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
