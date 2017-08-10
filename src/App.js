import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm.js';

class App extends Component {

  submit = (e) => {
    e.preventDefault();
    console.log('submit my ass');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React PWA</h2>
        </div>
        <UserForm submit={this.submit}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
