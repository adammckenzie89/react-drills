import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }
    this.handleTask = this.handleTask.bind(this);
  }
    handleChange(val) {
      this.setState({ input: val })
    }
    handleTask(){
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
      });
    }

  render() {
    let list = this.state.list.map((element, index) => {
       return <Todo key={index}  task={element} />
    });

    return (
      <div className="App">
      <h1>To-Do List!!!</h1>
      <input
        value={this.state.input}
        placeholder={'New Task Here'}
        onChange={ (e) => this.handleChange(e.target.value)}
      />
      <button onClick={this.handleTask}>Task</button>
      <br />
      {list}
      </div>
    );
  }
}

export default App;
