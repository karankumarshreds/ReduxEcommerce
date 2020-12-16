import React from "react";

const Rating = ({ value }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        className={
          value >= i
            ? `fas fa-star`
            : value >= i - 0.5
            ? `fas fa-star-half`
            : `far fa-star`
        }
      />
    );
  }
  return (
    <div className="Rating">
      <span>{stars}</span>
    </div>
  );
};

export default Rating;
