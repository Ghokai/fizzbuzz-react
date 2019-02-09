import React from "react";
import FizzBuzzForm from "../components/FizzBuzzForm";

import { mount } from "enzyme";

it("should props values setted properly to form inputs", () => {
  const mockState = {
    limit: 10,
    fizzDivider: 3,
    buzzDivider: 5,
    onPropsChange: (field, value) => {
      console.log(`Mocking ${field}:${value}`);
    }
  };

  const fizzBuzzForm = mount(<FizzBuzzForm {...mockState} />);

  const limitInput = fizzBuzzForm.find("#limit");
  const fizzDividerInput = fizzBuzzForm.find("#fizzDivider");
  const buzzDividerInput = fizzBuzzForm.find("#buzzDivider");

  expect(limitInput.props().value).toEqual(10);
  expect(fizzDividerInput.props().value).toEqual(3);
  expect(buzzDividerInput.props().value).toEqual(5);
});
