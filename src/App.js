import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "John", age: 26 },
      { name: "Xiao", age: 231 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 29 },
        { name: "Johnathan", age: 26 },
        { name: "Xin-Xiao", age: 23 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies: Books
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
