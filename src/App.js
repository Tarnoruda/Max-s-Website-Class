import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>I am an React App</h1>
    //   </div>
    // );
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Is this even working?")
    );
  }
}

export default App;
