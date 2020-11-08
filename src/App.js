import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput1 from "./Assignments/Assignment1/UserOutput1";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dasd", name: "Max", age: 29 },
      { id: "sdad", name: "John", age: 26 },
      { id: "asda", name: "Xiao", age: 23 },
    ],
    assignment1: ["PlayerOne", "PlayerTwo"],
    showPersons: false,
  };

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    // alternative to above spread operator solution -> const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  assignmentOneHandler = (event) => {
    this.setState({
      assignment1: [event.target.value, "PlayerTwo"],
    });
  };

  deletePersonHandler = (personIndex) => {
    //Bad practice-> const persons = this.state.persons;
    //Good practice-> const persons = this.state.persons.sclice();
    const persons = [...this.state.persons]; //modern good practice with spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangerHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
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
