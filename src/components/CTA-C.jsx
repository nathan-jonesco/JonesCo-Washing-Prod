import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Sparkling Clean, Every Time!
        </h2>
        <p className="text-md text-gray-600 mb-8">
          Trust our professionals for a spotless finish.
        </p>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Orange-700 hover:from-JonesCo-Blue-600 hover:to-JonesCo-Orange-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Get a Free Quote Today!
        </a>
      </div>
    </div>
  );
}
