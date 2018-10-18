import React from "react";
import PropTypes from "prop-types";

const Button = ({ red, green, clickon, children }) => {
  let className;

  if (green) {
    className = "green";
  } else if (red) {
    className = "red";
  }

  return (
    <button className={className} onClick={clickon}>
      {children}
    </button>
  );
};

Button.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  clickon: PropTypes.func
};

export default Button;
