import React from "react";
// import PropTypes from "prop-types";

const Rating = ({ value }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        style={{ color: "#fce24e" }}
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

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
// };

export default Rating;
