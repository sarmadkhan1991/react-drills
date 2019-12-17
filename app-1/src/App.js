import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    }
  }

  changeHandler(value) {
    this.setState({input: value})
  }

  render() {
    console.log(this.state.input)
    return (
      <div className="App">
        <input type='text' name='input' onChange={e => this.changeHandler(e.target.value)}/>
        <div>
          {this.state.input}
        </div>
      </div>
    );
  }
}

export default App;
