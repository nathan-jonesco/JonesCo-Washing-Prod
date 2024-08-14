import React from 'react';

export default function DeveloperPartnership() {
  return (
    <div className="bg-JonesCo-Blue-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Subcontractor Needed?
          </h2>
          <p className="mt-4 text-lg leading-8 text-JonesCo-Green-300">
            Partner with JonesCo Gutters for seamless gutter solutions in Eastern Tennessee.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Expertise & Experience</h3>
            <p className="text-black">
              Our track record speaks for itself. We've successfully completed numerous seamless gutter installation and gutter replacement projects throughout Eastern Tennessee, consistently exceeding expectations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Quality & Durability</h3>
            <p className="text-black">
              We use only the highest quality seamless aluminum gutters and materials, ensuring long-lasting performance and protection for your homes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Efficient & Reliable</h3>
            <p className="text-black">
              We work seamlessly with your team, providing timely and efficient gutter installations that meet your project timelines and budgets.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Comprehensive Services</h3>
            <p className="text-black">
              We offer a complete range of gutter services, from design and installation to maintenance and repair. Our services include <a href="/gutter-cleaning" className="text-JonesCo-Green-600 underline">gutter cleaning</a>, <a href="/gutter-guards" className="text-JonesCo-Green-600 underline">gutter guard installation</a>, and <a href="/services" className="text-JonesCo-Green-600 underline">rain gutter repair</a>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Customer Satisfaction</h3>
            <p className="text-black">
              We're dedicated to exceeding your expectations and ensuring your homeowners are happy with their gutter systems. Our 98% customer satisfaction rate speaks for itself.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-JonesCo-Blue-900 mb-2">Community Focus</h3>
            <p className="text-black">
              As a local Eastern Tennessee business, we're invested in the community and committed to building lasting relationships with our partners. We provide reliable gutter services, including <a href="/services" className="text-JonesCo-Green-600 underline">custom gutters</a> and <a href="/services" className="text-JonesCo-Green-600 underline">gutter protection systems</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:hey@jonescogutters.com"
            className="inline-flex items-center justify-center w-full sm:w-auto rounded-md border border-transparent bg-JonesCo-Green-500 px-8 py-3 text-base font-medium text-JonesCo-Green-900 hover:bg-JonesCo-Green-400 focus:outline-none focus:ring-2 focus:ring-JonesCo-Green-500 focus:ring-offset-2"
          >
            Email Us Today 📬
          </a>
        </div>
      </div>
    </div>
  );
}
