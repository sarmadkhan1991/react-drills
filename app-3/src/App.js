import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: '',
      greetings: ['hello', 'salam', 'bon jour', 'hola', 'aloha', 'namaste']
    }
  }

  changeHandler(filter) {
    this.setState({filterString: filter});
  };

  render() {
    const {greetings} = this.state;
    const mappedGreetings = greetings.filter(greeting => {
      return greeting.includes(this.state.filterString)
    }).map(greeting => {
    return <h3 key={greeting.index} >{greeting}</h3>
    })
    return (
      <div className="App">
        <input onChange={e => this.changeHandler(e.target.value)} type='text'  />
        <div>
          {mappedGreetings}
        </div>
      </div>
    );
  }
}

export default App;
