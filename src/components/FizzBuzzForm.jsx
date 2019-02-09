import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FizzBuzzForm extends Component {
  onFormItemChange = e => {
    var newValue = parseInt(e.target.value);

    if (Number.isInteger(newValue)) {
      this.props.onPropsChange(e.target.id, newValue);
    }
  };

  render() {
    const { limit, fizzDivider, buzzDivider } = this.props;
    return (
      <div className="fizz-buzz-form">
        <div className="form-row">
          <div className="col">
            <input
              type="number"
              value={limit}
              className="form-control"
              placeholder="Limit"
              id="limit"
              onChange={e => this.onFormItemChange(e)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              value={fizzDivider}
              className="form-control"
              placeholder="FizzDivider"
              id="fizzDivider"
              onChange={e => this.onFormItemChange(e)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              value={buzzDivider}
              className="form-control"
              placeholder="BuzzDivider"
              id="buzzDivider"
              onChange={e => this.onFormItemChange(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

FizzBuzzForm.propTypes = {
  limit: PropTypes.number,
  fizzDivider: PropTypes.number,
  buzzDivider: PropTypes.number
};
