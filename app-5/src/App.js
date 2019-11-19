import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  constructor () {
    super()
    this.state = {
      URL: 'https://www.touristisrael.com/wp-content/uploads/Petra-_-Wadi-Rum-2-Day-Tour-from-Eilat-3.jpg'
    }
  }


  render() {
    return (
      <div className="App">
        <Image link={this.state.URL}/>
      </div>
    );
  }
}

export default App;
