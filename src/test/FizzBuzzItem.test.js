import React from "react";
import FizzBuzzItem from "../components/FizzBuzzItem";

import { mount } from "enzyme";

it("should render prop values with render props as children", () => {
  const mockState = {
    value: 12
  };

  const childrenFN = value => (
    <td>
      <span>{value}</span>
    </td>
  );

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItem {...mockState}>{value => childrenFN(value)}</FizzBuzzItem>
      </tbody>
    </table>
  );

  const output = (
    <td>
      <span>{mockState.value}</span>
    </td>
  );

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});
