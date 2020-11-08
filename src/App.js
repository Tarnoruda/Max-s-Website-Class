import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput1 from "./Assignments/Assignment1/UserOutput1";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29 },
      { name: "John", age: 26 },
      { name: "Xiao", age: 23 },
    ],
    assignment1: ["PlayerOne", "PlayerTwo"],
    showPersons: false,
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

  assignmentOneHandler = (event) => {
    this.setState({
      assignment1: [event.target.value, "PlayerTwo"],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
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
        ) : null}
        <p>V Assignment One V</p>
        <UserOutput1
          username={this.state.assignment1[0]}
          changed={this.assignmentOneHandler}
        />
        <UserOutput1 username={this.state.assignment1[1]} />
      </div>
    );
  }
}

export default App;
