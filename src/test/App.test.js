import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("shallow render without crashing", () => {
  const wrapper = shallow(<App />);
  const appTitle = <h1 className="header-title">React Fizz-Buzz App</h1>;
  expect(wrapper.contains(appTitle)).toEqual(true);
});

it("should change the state after change the limit value", () => {
  const newValue = 10;
  const wrapper = mount(<App />);
  const input = wrapper.find("#limit");

  input.simulate("change", { target: { id: "limit", value: newValue } });

  expect(wrapper.state().limit).toEqual(newValue);
});

it("should change the state after change the fizzDivider value", () => {
  const newValue = 2;
  const wrapper = mount(<App />);
  const input = wrapper.find("#fizzDivider");

  input.simulate("change", { target: { id: "fizzDivider", value: newValue } });

  expect(wrapper.state().fizzDivider).toEqual(newValue);
});

it("should change the state after change the buzzDivider value", () => {
  const newValue = 7;
  const wrapper = mount(<App />);
  const input = wrapper.find("#buzzDivider");

  input.simulate("change", { target: { id: "buzzDivider", value: newValue } });

  expect(wrapper.state().buzzDivider).toEqual(newValue);
});

it("should render fully fuzz-buzz list 20-3-5", () => {
  const limit = 20;
  const fizzDivider = 3;
  const buzzDivider = 5;

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#limit");
  input1.simulate("change", { target: { id: "limit", value: limit } });

  const input2 = wrapper.find("#fizzDivider");
  input2.simulate("change", {
    target: { id: "fizzDivider", value: fizzDivider }
  });

  const input3 = wrapper.find("#buzzDivider");
  input3.simulate("change", {
    target: { id: "buzzDivider", value: buzzDivider }
  });

  expect(wrapper.find(".fizz-buzz-element").length).toEqual(2);
  expect(wrapper.find(".fizz-element").length).toEqual(5);
  expect(wrapper.find(".buzz-element").length).toEqual(3);
  expect(wrapper.find(".basic-element").length).toEqual(11);
});

it("should render another fully fuzz-buzz list 30-2-9", () => {
  const limit = 30;
  const fizzDivider = 2;
  const buzzDivider = 9;

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#limit");
  input1.simulate("change", { target: { id: "limit", value: limit } });

  const input2 = wrapper.find("#fizzDivider");
  input2.simulate("change", {
    target: { id: "fizzDivider", value: fizzDivider }
  });

  const input3 = wrapper.find("#buzzDivider");
  input3.simulate("change", {
    target: { id: "buzzDivider", value: buzzDivider }
  });

  expect(wrapper.find(".fizz-buzz-element").length).toEqual(2);
  expect(wrapper.find(".fizz-element").length).toEqual(14);
  expect(wrapper.find(".buzz-element").length).toEqual(2);
  expect(wrapper.find(".basic-element").length).toEqual(13);
});

it("should render 'length should not be negative' error message", () => {
  const limit = -1;

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#limit");
  input1.simulate("change", { target: { id: "limit", value: limit } });

  const errorMessage = <p>Limit should not be negative!</p>;
  expect(wrapper.contains(errorMessage)).toEqual(true);
});

it("should render 'fizzDivider can not be zero' error message", () => {
  const fizzDivider = 0;

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#fizzDivider");
  input1.simulate("change", {
    target: { id: "fizzDivider", value: fizzDivider }
  });

  const errorMessage = <p>FizzDivider and BuzzDivider should not be zero!</p>;
  expect(wrapper.contains(errorMessage)).toEqual(true);
});

it("should render 'buzzDivider can not be zero' error message", () => {
  const buzzDivider = 0;

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#buzzDivider");
  input1.simulate("change", {
    target: { id: "buzzDivider", value: buzzDivider }
  });

  const errorMessage = <p>FizzDivider and BuzzDivider should not be zero!</p>;
  expect(wrapper.contains(errorMessage)).toEqual(true);
});

it("should state not contains non-integer limit value", () => {
  const limit = "testing";

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#limit");
  input1.simulate("change", { target: { id: "limit", value: limit } });

  expect(wrapper.state().limit).toEqual(0);
});

it("should state not contains non-integer fizzDivider value", () => {
  const fizzDivider = "testing";

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#fizzDivider");
  input1.simulate("change", {
    target: { id: "fizzDivider", value: fizzDivider }
  });

  expect(wrapper.state().fizzDivider).toEqual(1);
});

it("should state not contains non-integer buzzDivider value", () => {
  const buzzDivider = "testing";

  const wrapper = mount(<App />);

  const input1 = wrapper.find("#buzzDivider");
  input1.simulate("change", {
    target: { id: "buzzDivider", value: buzzDivider }
  });

  expect(wrapper.state().buzzDivider).toEqual(1);
});
