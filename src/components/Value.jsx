// components/ValueProps.jsx

export default function ValueProps() {
  const valueProps = [
    {
      icon: '🧼', // Replace with a suitable icon from your Tailwind icon library (e.g., Heroicons)
      title: 'Spotless Cleaning',
      description: 'Exceptional pressure and window washing for spotless results.',
    },
    {
      icon: '📞',
      title: 'Free Estimates',
      description: 'No-obligation consultations to assess your cleaning needs.',
    },
    {
      icon: '🧰',
      title: 'Professional Equipment',
      description: 'We use top-of-the-line equipment for the best cleaning.',
    },
    {
      icon: '✅',
      title: 'Customer Satisfaction',
      description: 'Our priority is your happiness with our service.',
    },
  ];

  return (
    <div className="sm:bg-gradient-to-b bg-gradient-to-r from-JonesCo-Blue-100 to-JonesCo-Orange-200">
      <div className="container mx-auto py-12 px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-JonesCo-Blue-600">Why Choose JonesCo Washing?</h2>
          <p className="mt-2 mb-6 text-2xl font-black tracking-tight text-JonesCo-Blue-950 sm:text-4xl">Like New Clean. Every Time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-4xl mb-4 text-JonesCo-Orange-500">{prop.icon}</div>
              <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
              <p className="text-gray-600 text-center">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
