import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  updateNumber1(value) {
    this.setState({
      number1: parseInt(value),
    });
  }

  updateNumber2(value) {
    this.setState({
      number2: parseInt(value),
    });
  }

  additon(num1, num2) {
    this.setState({
      sum: num1 + num2,
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.updateNumber1(e.target.value)}
        />
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.updateNumber2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.additon(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
