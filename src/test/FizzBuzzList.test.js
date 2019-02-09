import React from "react";
import FizzBuzzList from "../components/FizzBuzzList";

import { mount } from "enzyme";

it("should render FizzBuzzList correctly", () => {
  const mockState = {
    limit: 17,
    fizzDivider: 2,
    buzzDivider: 3
  };

  const fizzBuzzListComponent = mount(<FizzBuzzList {...mockState} />);

  expect(fizzBuzzListComponent.find(".fizz-buzz-element").length).toEqual(3);
  expect(fizzBuzzListComponent.find(".fizz-element").length).toEqual(6);
  expect(fizzBuzzListComponent.find(".buzz-element").length).toEqual(3);
  expect(fizzBuzzListComponent.find(".basic-element").length).toEqual(6);
});

it("should render another FizzBuzzList correctly", () => {
  const mockState = {
    limit: 35,
    fizzDivider: 5,
    buzzDivider: 4
  };

  const fizzBuzzListComponent = mount(<FizzBuzzList {...mockState} />);

  expect(fizzBuzzListComponent.find(".fizz-buzz-element").length).toEqual(2);
  expect(fizzBuzzListComponent.find(".fizz-element").length).toEqual(6);
  expect(fizzBuzzListComponent.find(".buzz-element").length).toEqual(7);
  expect(fizzBuzzListComponent.find(".basic-element").length).toEqual(21);
});
