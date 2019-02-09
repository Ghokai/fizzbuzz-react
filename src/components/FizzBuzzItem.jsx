import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FizzBuzzItem extends Component {
  render() {
    //render props pattern
    return (
      <tr className="fizz-buzz-item">
        {this.props.children(this.props.value)}
      </tr>
    );
  }
}

FizzBuzzItem.propTypes = {
  value: PropTypes.number
};
