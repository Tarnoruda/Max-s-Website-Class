import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "John", age: 26 },
      { name: "Xiao", age: 23 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Johnathan", age: 26 },
        { name: "Xin-Xiao", age: 231 },
      ],
    });
  };

  nameChangerHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 29 },
        { name: event.target.value, age: 26 },
        { name: "Xin-Xiao", age: 231 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Maximilian!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangerHandler}
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
