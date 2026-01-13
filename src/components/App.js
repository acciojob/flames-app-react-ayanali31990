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

    // Remove common characters (case-sensitive)
    for (let i = 0; i < str1.length; i++) {
      let index = str2.indexOf(str1[i]);
      if (index !== -1) {
        str1.splice(i, 1);
        str2.splice(index, 1);
        i--; // adjust index after removal
      }
    }

    const count = str1.length + str2.length;
    const mod = count % 6;

    let answer = "";
    switch (mod) {
      case 1:
        answer = "Friends";
        break;
      case 2:
        answer = "Love";
        break;
      case 3:
        answer = "Affection";
        break;
      case 4:
        answer = "Marriage";
        break;
      case 5:
        answer = "Enemy";
        break;
      case 0:
        answer = "Siblings";
        break;
      default:
        answer = "";
    }

    this.setState({ result: answer });
  };

  clearAll = () => {
    this.setState({ name1: "", name2: "", result: "" });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}

        <input
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleChange}
          placeholder="Enter first name"
        />

        <input
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleChange}
          placeholder="Enter second name"
        />

        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship
        </button>

        <button data-testid="clear" name="clear" onClick={this.clearAll}>
          Clear
        </button>

        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
