import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state =  {
    foods: ['Chicken', 'cheese', 'juice', 'vegetables', 'money']
    }
  }

  render() {
    let foodList = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{foodList}</div>;
  }
}


export default App;
