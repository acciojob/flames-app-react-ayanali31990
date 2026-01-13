import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  state = {
    name1: "",
    name2: "",
    result: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let str1 = name1.split("");
    let str2 = name2.split("");

    for (let i = 0; i < str1.length; i++) {
      const index = str2.indexOf(str1[i]);
      if (index !== -1) {
        str1.splice(i, 1);
        str2.splice(index, 1);
        i--;
      }
    }

    const count = str1.length + str2.length;
    const mod = count % 6;

    const map = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    this.setState({ result: map[mod] });
  };

  clearAll = () => {
    this.setState({ name1: "", name2: "", result: "" });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}

        <input
          type="text"
          name="name1"
          data-testid="input1"
          value={this.state.name1}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="name2"
          data-testid="input2"
          value={this.state.name2}
          onChange={this.handleChange}
        />

        <button
          name="calculate_relationship"
          data-testid="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship
        </button>

        <button name="clear" data-testid="clear" onClick={this.clearAll}>
          Clear
        </button>

        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
