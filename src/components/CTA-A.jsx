import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Make Your Property Shine!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience the difference with our expert cleaning services.
        </p>

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-JonesCo-Orange-500 to-JonesCo-Orange-700 hover:from-JonesCo-Orange-600 hover:to-JonesCo-Orange-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Get Your Free Estimate Now!
        </a>
      </div>
    </div>
  );
}
