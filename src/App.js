import React, { Component } from "react";

import FizzBuzzList from "./components/FizzBuzzList";
import FizzBuzzForm from "./components/FizzBuzzForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 0,
      fizzDivider: 1,
      buzzDivider: 1
    };
  }

  handleStateChange = (fieldName, value) => {
    this.setState({ [fieldName]: value });
  };

  render() {
    const { limit, fizzDivider, buzzDivider } = this.state;
    return (
      <div className="app container">
        <h1 className="header-title">React Fizz-Buzz App</h1>
        <FizzBuzzForm {...this.state} onPropsChange={this.handleStateChange} />
        <FizzBuzzList {...this.state} />
      </div>
    );
  }
}

export default App;
