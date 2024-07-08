// pages/under-construction.js

import React from 'react';
import Head from 'next/head';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Website Under Construction</title>
        <meta name="description" content="This website is currently under construction. Please check back later." />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Under Construction</h1>
        <p className="text-lg text-gray-600">We are working hard to bring you a new and improved experience. Please check back soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
