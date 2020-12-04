import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleChange(value) {
    this.setState({
      userInput: value,
    });
  }

  assignValues(userInput) {
    let array = userInput.split(",");
    let even = [];
    let odd = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        even.push(array[i]);
      } else {
        odd.push(array[i]);
      }
    }
    this.setState({
      evenArray: even,
      oddArray: odd,
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignValues(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
