import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor () {
    super ()
    this.state = {
      task: '',
      taskList: []
    }
    this.updateTaskList = this.updateTaskList.bind(this);
  }

  updateTask (task) {
    this.setState ( { task: task } )
  }

  updateTaskList () {
    let task = this.state.task
    let tasklist = this.state.taskList
    tasklist.push(task);
    this.setState( { task: '', taskList: tasklist } );
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input onChange={ e => this.updateTask( e.target.value ) } placeholder='Enter a task'/>
        <button onClick={this.updateTaskList}>Add</button>
        
      </div>
    );
  }
}

export default App;
