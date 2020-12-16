import React from "react";

const Rating = ({ value }) => {
  return (
    <div className="Rating">
      <span>
        <i
          className={
            value >= 1
              ? `fas fa-star`
              : value >= 1 - 0.5
              ? `fas fa-star-half`
              : `far fa-star`
          }
        />
        <i
          className={
            value >= 2
              ? `fas fa-star`
              : value >= 2 - 0.5
              ? `fas fa-star-half`
              : `far fa-star`
          }
        />
        <i
          className={
            value >= 3
              ? `fas fa-star`
              : value >= 3 - 0.5
              ? `fas fa-star-half`
              : `far fa-star`
          }
        />
        <i
          className={
            value >= 4
              ? `fas fa-star`
              : value >= 4 - 0.5
              ? `fas fa-star-half`
              : `far fa-star`
          }
        />
        <i
          className={
            value >= 5
              ? `fas fa-star`
              : value >= 5 - 0.5
              ? `fas fa-star-half`
              : `far fa-star`
          }
        />
      </span>
    </div>
  );
};

export default Rating;
