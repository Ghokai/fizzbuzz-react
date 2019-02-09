import React from "react";
import PropTypes from "prop-types";

export default function BasicElement({ value }) {
  return (
    <td className="basic-element">
      <span>{value}</span>
    </td>
  );
}

BasicElement.propTypes = {
  value: PropTypes.number
};
