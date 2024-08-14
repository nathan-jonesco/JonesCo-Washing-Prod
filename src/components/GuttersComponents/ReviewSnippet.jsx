import React from 'react';
import Head from 'next/head';

const ReviewSnippet = ({ name, description, ratingValue, ratingCount }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": ratingCount
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="review-snippet p-4 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-2">
          <strong>Rating:</strong> {ratingValue} / 5 ({ratingCount} reviews)
        </div>
      </div>
    </>
  );
};

export default ReviewSnippet;