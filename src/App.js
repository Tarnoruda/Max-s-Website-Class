import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput1 from "./Assignments/Assignment1/UserOutput1";
import CharacterCount from "./Assignments/Assignment2/CharacterCounter";

class App extends Component {
  state = {
    persons: [
      { id: "dasd", name: "Max", age: 29 },
      { id: "sdad", name: "John", age: 26 },
      { id: "asda", name: "Xiao", age: 23 },
    ],
    assignment1: [
      { id: "eqwe", name: "PlayerOne" },
      { id: "weqw", name: "PlayerTwo" },
    ],
    showPersons: false,
    assignment2: { inputText: "", count: 0 },
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

  assignmentOneHandler = (event, id) => {
    const personIndex = this.state.assignment1.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.assignment1[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.assignment1];
    persons[personIndex] = person;

    this.setState({ assignment1: persons });
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

  countingHandler = (event) => {
    const inputText = event.target.value;
    const count = inputText.length;
    const output = { inputText, count };
    this.setState({ assignment2: output });
  };

  deleteCharactersHandler = (charIndex) => {
    //Bad practice-> const persons = this.state.persons;
    //Good practice-> const persons = this.state.persons.sclice();
    const characters = [...this.state.assignment1.inputText]; //modern good practice with spread operator
    characters.splice(charIndex, 1);
    this.setState({ inputText: characters });
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
          <p>Click on text in boxes to delete boxes</p>
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

    let assignmentOnePersons = (
      <div>
        {this.state.assignment1.map((person) => {
          return (
            <UserOutput1
              key={person.id}
              name={person.name}
              changed={(event) => this.assignmentOneHandler(event, person.id)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        <p>⬇️ Assignment One ⬇️</p>
        {assignmentOnePersons}
        <p>⬇️ Assignment Two ⬇️</p>
        <CharacterCount
          change={(event) => this.countingHandler(event)}
          value={this.state.assignment2.inputText}
          count={this.state.assignment2.count}
          click={() => this.deleteCharactersHandler}
        />
      </div>
    );
  }
}

export default App;
