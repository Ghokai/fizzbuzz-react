import React from "react";
import BuzzElement from "../components/listElements/BuzzElement";

import { mount } from "enzyme";

it("should render Buzz", () => {
  const BuzzComponent = mount(
    <table>
      <tbody>
        <tr>
          <BuzzElement />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>Buzz</span>;

  expect(BuzzComponent.contains(output)).toEqual(true);
});
