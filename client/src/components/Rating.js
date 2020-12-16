import React from "react";

const Rating = ({ value }) => {
  return (
    <div className="Rating">
      <span>
        <i className={value > 1 ? `fas fa-star` : `fas fa-star-half`}></i>
      </span>
    </div>
  );
};

export default Rating;
