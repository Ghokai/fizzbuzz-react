import React from "react";
import FizzBuzzElement from "../components/listElements/FizzBuzzElement";

import { mount } from "enzyme";

it("should render FizzBuzz", () => {
  const FizzBuzzComponent = mount(
    <table>
      <tbody>
        <tr>
          <FizzBuzzElement />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>FizzBuzz</span>;

  expect(FizzBuzzComponent.contains(output)).toEqual(true);
});
