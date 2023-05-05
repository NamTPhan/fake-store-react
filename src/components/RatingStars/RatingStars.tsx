import React from "react";
import "./RatingStars.scss";

interface RatingStarsProps {
  rating: number;
}

export const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <>
      <div
        className='rating-stars'
        style={{ "--rating": rating } as React.CSSProperties}
        aria-label={`Rating of this product is ${rating} out of 5.`}
      />
      <span className='bg-blue-100 text-sm font-semibold px-2.5 py-0.5 rounded ml-3'>
        {rating}
      </span>
    </>
  );
};
