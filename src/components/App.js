import React, { Component } from 'react';
import logo from '../static/logo.svg';
import '../styles/App.css';
import Toggle from "./Toggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle onToggle={on => console.log(on)} />
      </div>
    );
  }
}

export default App;
