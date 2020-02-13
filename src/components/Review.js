import React from "react";
import "./Review.css";

const Review = ({ username, rating, title, review }) => {
  return (
    <div className="review" data-testid="user-review">
      <h3>
        {title} {rating}/5
      </h3>
      <div>{review}</div>
      <div className="user">By: {username}</div>
    </div>
  );
};

export default Review;
