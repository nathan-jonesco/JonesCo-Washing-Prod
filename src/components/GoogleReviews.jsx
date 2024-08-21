'use client'; // This tells Next.js to treat this component as a client-side component

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GoogleReviewsGallery() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/getGoogleReviews', {
        params: {
          placeId: '0x84f674debd0e59a5:0xea4410c7aa10d886',
        },
      });

      if (response.data && response.data.result && response.data.result.reviews) {
        setReviews(response.data.result.reviews);
      } else {
        console.error('No reviews found in the response.');
      }
    } catch (error) {
      console.error('Error fetching Google Reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-gallery">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p>{review.text}</p>
            <p>— {review.author_name}</p>
            {review.profile_photo_url && (
              <img
                src={review.profile_photo_url}
                alt={`${review.author_name}'s profile photo`}
                className="author-photo"
              />
            )}
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
