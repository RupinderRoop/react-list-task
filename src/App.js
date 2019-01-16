import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <ListItem>A</ListItem>
          <ListItem>B</ListItem>
          <ListItem>C</ListItem>
        </ul>
      </div>
    );
  }
}

export default App;
