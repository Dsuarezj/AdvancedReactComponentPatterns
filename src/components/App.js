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
                <Toggle onToggle={on => console.log(on)}>
                    <Toggle.On>The button is on</Toggle.On>
                    <Toggle.Off>The button is off</Toggle.Off>
                    <div><Toggle.Button /></div>
                </Toggle>
            </div>
        );
    }
}

export default App;
