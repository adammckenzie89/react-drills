import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      message: ''
    }
  }

  handleChange(value){
    this.setState({ message: value })
  };


  render() {
    return (
      <div className='app'>
      <input type='text'
             value={this.state.value}
             onChange={ (e) => this.handleChange(e.target.value) }/>
             <h4>{this.state.message}</h4>
             </div>
    );
  }
}

export default App;
