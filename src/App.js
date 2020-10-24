import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am an React App</h1>
        <p>This is really working</p>
        <Person name="Max" age="29" />
        <Person name="John" age="26">
          Hobbies: Books
        </Person>
        <Person name="Xiao" age="23" />
      </div>
    );
  }
}

export default App;
