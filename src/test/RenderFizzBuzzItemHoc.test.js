import React from "react";
import RenderFizzBuzzItemHoc from "../components/RenderFizzBuzzItemHoc";
import FizzBuzzItem from "../components/FizzBuzzItem";

import { mount } from "enzyme";

it("should render fizzbuzz", () => {
  const mockState = {
    value: 12,
    fizzDivider: 3,
    buzzDivider: 4
  };

  const FizzBuzzItemComponent = RenderFizzBuzzItemHoc(FizzBuzzItem);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  var output = <span>FizzBuzz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it("should render fizzbuzz", () => {
  const mockState = {
    value: 12,
    fizzDivider: 3,
    buzzDivider: 4
  };

  const FizzBuzzItemComponent = RenderFizzBuzzItemHoc(FizzBuzzItem);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>FizzBuzz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it("should render fizz", () => {
  const mockState = {
    value: 6,
    fizzDivider: 3,
    buzzDivider: 4
  };

  const FizzBuzzItemComponent = RenderFizzBuzzItemHoc(FizzBuzzItem);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>Fizz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it("should render buzz", () => {
  const mockState = {
    value: 8,
    fizzDivider: 3,
    buzzDivider: 4
  };

  const FizzBuzzItemComponent = RenderFizzBuzzItemHoc(FizzBuzzItem);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>Buzz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it("should render buzz", () => {
  const mockState = {
    value: 7,
    fizzDivider: 3,
    buzzDivider: 4
  };

  const FizzBuzzItemComponent = RenderFizzBuzzItemHoc(FizzBuzzItem);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>{mockState.value}</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});
