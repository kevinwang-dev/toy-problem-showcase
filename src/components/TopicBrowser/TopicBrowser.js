import React, { Component } from "react";
import { render } from "react-dom";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Sum from "../Topics/Sum";
import Palindrome from "../Topics/Palindrome";

class TopicBrowser extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

export default TopicBrowser;
