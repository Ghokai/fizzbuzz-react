import React, { Component } from "react";
import PropTypes from "prop-types";

import RenderFizzBuzzItemHoc from "./RenderFizzBuzzItemHoc";
import FizzBuzzItem from "./FizzBuzzItem";
import ErrorMessage from "./ErrorMessage";

export default class FizzBuzzList extends Component {
  render() {
    const { limit, fizzDivider, buzzDivider } = this.props;

    if (limit < 0) {
      return <ErrorMessage errorText="Limit should not be negative!" />;
    }
    if (fizzDivider === 0 || buzzDivider === 0) {
      return (
        <ErrorMessage errorText="FizzDivider and BuzzDivider should not be zero!" />
      );
    }

    const ItemList = Array.apply(null, { length: limit + 1 }).map((_, i) => {
      var RenderFizzBuzzItem = RenderFizzBuzzItemHoc(FizzBuzzItem);
      return <RenderFizzBuzzItem key={i} value={i} {...this.props} />;
    });

    return (
      <div className="fizz-buzz-list">
        <table className="table table-dark table-striped">
          <tbody>{ItemList}</tbody>
        </table>
      </div>
    );
  }
}

FizzBuzzList.propTypes = {
  limit: PropTypes.number,
  fizzDivider: PropTypes.number,
  buzzDivider: PropTypes.number
};
