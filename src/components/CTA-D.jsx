import React from 'react';

export default function CallToActionCrazy() {
  return (
    <div className="bg-JonesCo-Red-500 py-16 px-4 text-center"> 
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          Gutters Leaking? 
          <span className="text-JonesCo-Yellow-300 animate-bounce"> Don&apos;t Be a Drip!</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-10">
          Stop the drip, ditch the worry. Call Jonesco for a free, no-obligation quote and let us handle it the right way!
        </p>

        {/* Bold Red Button with Pulse Animation */}
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 text-JonesCo-Red-500 font-black py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110 animate-pulse"
        >
          Stop the Drip NOW!
        </a>
      </div>
    </div>
  );
}
