import React from "react";
import BasicElement from "../components/listElements/BasicElement";

import { mount } from "enzyme";

it("should render with value", () => {
  const value = 15;
  const basicComponent = mount(
    <table>
      <tbody>
        <tr>
          <BasicElement value={value} />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>{value}</span>;

  expect(basicComponent.contains(output)).toEqual(true);
});
