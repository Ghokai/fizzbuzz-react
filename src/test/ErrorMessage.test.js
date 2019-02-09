import React from "react";
import ErrorMessage from "../components/ErrorMessage";

import { mount } from "enzyme";

it("should render with value", () => {
  const errorText = "test error message";
  const basicComponent = mount(<ErrorMessage errorText={errorText} />);

  const output = <p>{errorText}</p>;

  expect(basicComponent.contains(output)).toEqual(true);
});
