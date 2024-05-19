import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'; // Replace with your icon library

const stats = [
  { id: 1, name: 'Gutter Lifespan:', value: '-50% without maintenance' },
  { id: 2, name: 'Clogged Gutters:', value: '80% pest risk increase' },
  { id: 3, name: 'Water Damage:', value: '90% mold growth' },
  { id: 4, name: 'Home Value:', value: '-10% with bad gutters' },
  { id: 5, name: 'Gutter Debris:', value: 'Fire hazard risk' },
  { id: 6, name: 'Replace Gutters:', value: '$20-$30 per foot' }, 
];


export default function GutterStatsCTA() {
  return (
    <div className="bg-JonesCo-Red-900 py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-white mx-auto mb-10 animate-ping" />
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Protect Your Home from Preventable Damage!</h2>
            <p className="mt-4 text-lg leading-8 text-white">
              Don&apos;t risk costly repairs. These statistics show why gutter maintenance is essential:
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-JonesCo-Red-800/70 p-8">
                
                <dd className="text-md font-semibold leading-6 text-JonesCo-Red-300">{stat.name}</dd>
                <dt className="order-first text-xl font-semibold tracking-tight text-white">{stat.value}</dt>

              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
