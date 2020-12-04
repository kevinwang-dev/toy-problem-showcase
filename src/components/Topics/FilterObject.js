import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { name: "Kobe Bryant", title: "Basketball player", age: 40 },
        { name: "Mike Tyson", age: 56, hairColor: "black" },
        { name: "Brad Garlinghouse", title: "CEO" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  changeHandler(value) {
    this.setState = {
      userInput: value,
    };
  }

  filterProp(prop) {
    let unfilteredPeople = this.state.unFilteredArray;
    let filteredPeople = [];

    for (let i = 0; i < unfilteredPeople.length; i++) {
      if (unfilteredPeople[i].hasOwnProperty(prop)) {
        filteredPeople.push(unfilteredPeople[i]);
      }
    }

    this.setState({
      filteredArray: filteredPeople,
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={(e) => this.changeHandler(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredArray(this.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
