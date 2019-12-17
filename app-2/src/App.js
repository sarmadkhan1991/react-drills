import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      greetings: ['hello', 'salam', 'bon jour', 'hola', 'aloha', 'namaste']
    }
  }

  render() {
    const {greetings} = this.state;
    const mappedGreetings = greetings.map(greeting => {
    return <h3 key={greeting.index} >{greeting}</h3>
    })
    return (
      <div className="App">
        {mappedGreetings}
      </div>
    );
  }
}

export default App;
