import React from "react";
import PropTypes from "prop-types";

export default function ErrorMessage({ errorText }) {
  return (
    <div className="row alert alert-danger error-message">
      <p>{errorText}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  errorText: PropTypes.string
};
