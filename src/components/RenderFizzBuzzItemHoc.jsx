import React, { Component } from "react";

import FizzElement from "./listElements/FizzElement";
import BuzzElement from "./listElements/BuzzElement";
import FizzBuzzElement from "./listElements/FizzBuzzElement";
import BasicElement from "./listElements/BasicElement";

const RenderFizzBuzzItemHoc = WrappedComponent => {
  class FizzBuzzItemWrapper extends Component {
    renderFizzBuzzProps(value) {
      //decides which component will be rendered according to value and fizz-buzz dividers

      const { fizzDivider, buzzDivider } = this.props;

      const fizzRemainder = value % fizzDivider;
      const buzzRemainder = value % buzzDivider;

      if (fizzRemainder === 0 && buzzRemainder === 0)
        return <FizzBuzzElement />;
      else if (fizzRemainder === 0) return <FizzElement />;
      else if (buzzRemainder === 0) return <BuzzElement />;
      else return <BasicElement value={value} />;
    }

    render() {
      //hoc renders wrapped componenet with render props function as a children
      return (
        <WrappedComponent {...this.props}>
          {value => this.renderFizzBuzzProps(value)}
        </WrappedComponent>
      );
    }
  }

  return FizzBuzzItemWrapper;
};

export default RenderFizzBuzzItemHoc;
