import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Ready to Upgrade Your Gutters?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Don&apos;t miss out on our limited-time offer!
        </p>

        {/* Gradient Button with Pulse Animation */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-JonesCo-Blue-500 to-JonesCo-Blue-700 hover:from-JonesCo-Blue-600 hover:to-JonesCo-Blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Get 10% Off & a Free Estimate
        </a>
      </div>
    </div>
  );
}
