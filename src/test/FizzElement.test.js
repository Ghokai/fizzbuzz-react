import React from "react";
import FizzElement from "../components/listElements/FizzElement";

import { mount } from "enzyme";

it("should render Fizz", () => {
  const FizzComponent = mount(
    <table>
      <tbody>
        <tr>
          <FizzElement />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>Fizz</span>;

  expect(FizzComponent.contains(output)).toEqual(true);
});
