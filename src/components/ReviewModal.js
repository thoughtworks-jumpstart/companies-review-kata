import React, { useState } from "react";
import Modal from "./Modal";
import "./ReviewModal.css";

const MAX_RATING = 5;
const MIN_RATING = 0;

const ReviewModal = ({ closeModal, addReview }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <Modal
      onClose={closeModal}
      onOkay={() => {
        addReview({ title, rating, review });
        closeModal();
      }}
    >
      <div className="review-modal">
        <h3>Feedback Form</h3>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label>Ratings</label>
          <input
            type="number"
            value={rating}
            min={MIN_RATING}
            max={MAX_RATING}
            onChange={event => {
              const value = Number(event.target.value);
              if (isNaN(value) || value < MIN_RATING) {
                setRating(0);
              } else if (value > MAX_RATING) {
                setRating(MAX_RATING);
              } else {
                setRating(value);
              }
            }}
          />
        </div>

        <div>
          <label>Review</label>
          <textarea
            value={review}
            onChange={event => setReview(event.target.value)}
            rows="5"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
